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

    let user = new User();
    user.email = email;
    const createdEmail  = await RequestContext.getEntityManager()?.create(User, {email: email});

    await RequestContext.getEntityManager()?.persistAndFlush(createdEmail!);

    res.status(200).json({success: true, msg: "Successfully created user"})


}

