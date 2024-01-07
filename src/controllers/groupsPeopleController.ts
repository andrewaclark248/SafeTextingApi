import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { Group } from '../models/Group'
import { User } from '../models/User'



// POST: /api/groups_people
// Add person to group
export async function create(req: Request, res: Response) {
    
    //find user
    const email = req.user?.email;
    const group_id = req.body?.group_id;

    let user = await RequestContext.getEntityManager()?.findOne(User, { email: email })
    let group = await RequestContext.getEntityManager()?.findOne(Group, { id: group_id })

    console.log("user", user)
    console.log("group", group)

    if (user) {
        let group = new Group();
        //group.name = name;
        group.user = user;

        const createdGroup = await RequestContext.getEntityManager()?.create(Group, group);

        await RequestContext.getEntityManager()?.persistAndFlush(createdGroup!);
        res.status(200).json({success: true, msg: "Successfully created group"})

    } else {
        res.status(422).json({success: false, msg: "Could not find user"})

    }

    
}
