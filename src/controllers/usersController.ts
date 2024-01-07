import { response } from "express";
import { Request, Response } from 'express';
import { validate } from "class-validator"
import { User } from '../models/User'
import { Organization } from '../models/Organization'

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
    const org_name = req.body.org_name;

    let user = new User();
    user.email = email;
    let org = new Organization();
    org.name = org_name;
    user.organization = org;


    const persistUser  = await RequestContext.getEntityManager()?.create(User, user);

    await RequestContext.getEntityManager()?.persistAndFlush(persistUser!);

    res.status(200).json({success: true, msg: "Successfully created user"})


}

