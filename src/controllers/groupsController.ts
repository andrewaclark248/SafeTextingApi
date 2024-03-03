import { response } from "express";
import { Request, Response } from 'express';


import { RequestContext } from "@mikro-orm/core";


import { Group } from '../models/Group'
import { User } from '../models/User'


/**
 * List phone numbers for a user
 *
 * @param user - firebase user
 * @returns array of groups
 */
export async function index(req: Request, res: Response) {
    
    //find user
    const email = req.user?.email;

    let user = await RequestContext.getEntityManager()?.findOne(User, { email: email })

    let groups = await RequestContext.getEntityManager()?.find(Group, { user: user })

    console.log("api groups = ", groups)

    res.status(200).json({success: true, groups: groups})

}

// POST: /api/groups
export async function create(req: Request, res: Response) {
    
    //find user
    const email = req.user?.email;
    const name = req.body?.name;

    let user = await RequestContext.getEntityManager()?.findOne(User, { email: email })

    console.log("user", user)
    console.log("email", email)

    if (user) {
        let group = new Group();
        group.name = name;
        group.user = user;

        const createdGroup = await RequestContext.getEntityManager()?.create(Group, group);

        await RequestContext.getEntityManager()?.persistAndFlush(createdGroup!);
        res.status(200).json({success: true, msg: "Successfully created group"})

    } else {
        res.status(422).json({success: false, msg: "Could not find user"})

    }

    
}


// GET: /api/peoples
/**
 * Create person
 *
 * @returns array of people
 */
 export async function destroy(req: Request, res: Response) {
    
    //find person
    const groupId = Number(req.params.id);
    const group  = await RequestContext.getEntityManager()?.findOne(Group, {id: groupId});
    console.log("remove group", group)
    if (group) {
        await RequestContext.getEntityManager()?.remove(group).flush();
        res.status(200).json({success: true, msg: "Successfully created person"})
    } else {
        res.status(422).json({success: true, msg: "Could not find user"})
    }

}



// GET: /api/peoples
/**
 * Create person
 *
 * @returns array of people
 */
 export async function show(req: Request, res: Response) {
    
    //find person
    const groupId = Number(req.params.id);
    const group  = await RequestContext.getEntityManager()?.findOne(Group, {id: groupId});

    if (group) {
        res.status(200).json({success: true, group: group})
    } else {
        res.status(422).json({success: true, msg: "Could not find user"})
    }

}



// GET: /api/peoples
/**
 * Create person
 *
 * @returns array of people
 */
 export async function update(req: Request, res: Response) {
     
    const name = req.body.name;

    //find person
    const groupId = Number(req.params.id);
    const group  = await RequestContext.getEntityManager()?.findOne(Group, {id: groupId});


    if (group) {
        group.name = name;

        await RequestContext.getEntityManager()?.flush();

        res.status(200).json({success: true, msg: "Group was updated."})
    } else {
        res.status(422).json({success: true, msg: "Could not find user"})
    }

}





