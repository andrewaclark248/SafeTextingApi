import { response } from "express";
import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { Group } from '../models/Group'
import { User } from '../models/User'
import { Message } from '../models/Message'
import { Collection } from "@mikro-orm/core";


/**
 * Create Message
 *
 * @param user - firebase user
 */
export async function create(req: Request, res: Response) {
    const email = req.user?.email;
    const selectedGroups = req.body.groups;
    const messageType = req.body.type;
    const message = req.body.message;
    const name = req.body.name;

    //find user
    const user = await RequestContext.getEntityManager()?.findOne(User, { email: email })

    //find groups
    const groups: Group[] | undefined = await RequestContext.getEntityManager()?.find(Group, { name: selectedGroups })
    
    //create message record
    if (groups != undefined && user != undefined) {
        let newMessage = new Message();
        newMessage.name = name;
        newMessage.groups.add(groups);
        newMessage.messageType = messageType;
        newMessage.message = message;
        newMessage.user = user;

        const persistMessage  = await RequestContext.getEntityManager()?.create(Message, newMessage);
    
        await RequestContext.getEntityManager()?.persistAndFlush(persistMessage!);
    
        res.status(200).json({success: true, msg: "Successfully created message"})
    } else {

    }



    


}