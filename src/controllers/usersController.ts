import { response } from "express";
import { Request, Response } from 'express';
import { User } from './../entity/User'



/**
 * POST: users#create
 * List phone numbers for a user
 *
 * @param email - Area code to search by
 * @returns array of numbers
 */
export async function create(req: Request, res: Response) {
    let x = req;
    console.log("breaker here")
    //const user = new User();
    //user.email = "andrewemail@gmail.com"
    //await user.save()
    
    res.json({msg: "my message"})
}

