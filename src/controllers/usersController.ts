import { response } from "express";
import { Request, Response } from 'express';
import { validate } from "class-validator"
import { User } from '../models/User'

import { initOrm} from './../database'
import { RequestContext } from "@mikro-orm/core";

/**
 * POST: users#create
 * List phone numbers for a user
 *
 * @param email - Area code to search by
 * @returns array of numbers
 */
export async function create(req: Request, res: Response) {
    const email = req.body.email;

    let user = await RequestContext.getEntityManager()?.findOne(User, 2);

    
    //const user = await orm.em.findOne(User, 1);

    console.log("create orm = ", user)

    res.send("create user")
}

