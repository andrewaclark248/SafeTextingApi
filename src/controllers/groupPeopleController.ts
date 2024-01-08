import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { Group } from '../models/Group'
import { User } from '../models/User'
import { People } from '../models/People'
import { EntityManager } from '@mikro-orm/postgresql'; // or any other SQL driver package




// POST: /api/group_people
// Add person to group
export async function create(req: Request, res: Response) {
    
    const personId = req.body?.personId;
    const groupId = req.body?.groupId;

    let person = await RequestContext.getEntityManager()?.findOne(People, { id: personId })
    let group = await RequestContext.getEntityManager()?.findOne(Group, { id: groupId })

    if (person && group) {
        person.groups.add(group)
        await RequestContext.getEntityManager()?.persistAndFlush(person);

        res.status(200).json({success: true, msg: "Successfully added person to group"})

    } else {
        res.status(422).json({success: false, msg: "Could not find user"})

    }

    
}


// Get: /api/group_people/:id
// Get people in group
export async function index(req: Request, res: Response) {
    
    //find user
    const email = req.user?.email;
    const groupId = req.params.id;
    const notInGroup = req.query.not_in_group;

    const groups = await RequestContext.getEntityManager()?.find(Group, Number(groupId))
    const user = await RequestContext.getEntityManager()?.findOne(User, { email: email })

    if (Boolean(notInGroup)) {
        const em = await RequestContext.getEntityManager() as EntityManager;
        const result = await em.createQueryBuilder(People).select("*").from("group_people").where({group_id: groupId}).execute();
        const people_in_group_id = result.map((p: any) => {return p.People_inverse })
        const people = await RequestContext.getEntityManager()?.find(People, { organization: user!.organization,  id: { $nin: people_in_group_id }  })

        res.status(200).json({success: true, people: people, msg: "Successfully created group"})

    } else {
        const people = await RequestContext.getEntityManager()?.find(People, { groups: groups, organization: user!.organization })

        res.status(200).json({success: true, people: people, msg: "Successfully created group"})

    }



    
}




// DELETE: /api/group_people
// Add person to group
export async function destroy(req: Request, res: Response) {

    const personId = req.body?.personId;
    const groupId = req.body?.groupId;

    let person = await RequestContext.getEntityManager()?.findOne(People, { id: personId }, { populate: ['groups'] })
    let group = await RequestContext.getEntityManager()?.findOne(Group, { id: groupId }, { populate: ['people'] })



    if (person && group) {
        group.people.remove(person)

        await RequestContext.getEntityManager()?.persistAndFlush(group);

        res.status(200).json({success: true, msg: "Successfully removed person from group"})

    } else {
        res.status(422).json({success: false, msg: "Could not find user"})

    }

    
}
