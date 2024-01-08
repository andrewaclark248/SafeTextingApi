import { User } from '../models/User'
import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { Group } from '../models/Group'
import { Organization } from '../models/Organization'
import { People } from '../models/People'


// POST: /api/peoples
/**
 * Create person
 *
 * @param first_name
 * @param last_name
 * @param phone_number
 * @param email
 * @returns array of groups
 */
 export async function create(req: Request, res: Response) {
    
    //find user
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const currentUserEmail = req.user?.email;

    let user = await RequestContext.getEntityManager()?.findOne(User, { email: currentUserEmail })

    if (user) {
        let people = new People();
        people.firstName = firstName;
        people.lastName = lastName;
        people.phoneNumber = phoneNumber;
        people.email = email;
        people.organization = user?.organization
    
    
        const persistPeople  = await RequestContext.getEntityManager()?.create(People, people);
    
        await RequestContext.getEntityManager()?.persistAndFlush(persistPeople!);

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
 export async function index(req: Request, res: Response) {
    
    //find user
    const email = req.user?.email;

    const user = await RequestContext.getEntityManager()?.findOne(User, { email: email })

    if (user) {
    
        const people  = await RequestContext.getEntityManager()?.find(People, {organization: user.organization});

        res.status(200).json({success: true, people: people, msg: "Successfully created person"})
    } else {
        res.status(422).json({success: true, msg: "Could not find user"})
    }

}


