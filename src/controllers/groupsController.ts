import { response } from "express";
import { Request, Response } from 'express';


import { RequestContext } from "@mikro-orm/core";


import { Group } from '../models/Group'


/**
 * List phone numbers for a user
 *
 * @param userId - User who's phone numbers we want to return
 * @param areaCode - Area code to search by
 * @returns array of numbers
 */
export async function index(req: Request, res: Response) {
    
    res.json({msg: "my message"})
}


export async function create(req: Request, res: Response) {
    
    const name = req.body.name;

    let group = new Group();
    group.name = name

    console.log("call create method")

    const createdGroup = await RequestContext.getEntityManager()?.create(Group, {name: name});

    console.log("createdGroup", createdGroup)
    await RequestContext.getEntityManager()?.persistAndFlush(createdGroup!);

    res.send("created group")
}

