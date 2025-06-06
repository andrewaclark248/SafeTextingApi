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

