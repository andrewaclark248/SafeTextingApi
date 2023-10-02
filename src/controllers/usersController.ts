import { response } from "express";
import { Request, Response } from 'express';
import { validate } from "class-validator"
import { User } from './../models/User'


/**
 * POST: users#create
 * List phone numbers for a user
 *
 * @param email - Area code to search by
 * @returns array of numbers
 */
export async function create(req: Request, res: Response) {
    const email = req.body.email;
    User.create({ email: email }).then(() => {
        res.json({success: true})
    }).catch(() => {
        res.status(422).json({success: false})
    })

}

