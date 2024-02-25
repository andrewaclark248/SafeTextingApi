import { response } from "express";
import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { Group } from '../models/Group'
import { User } from '../models/User'
import { Message } from '../models/Message'
import twilio from "twilio";


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
    const groups: Group[] | undefined = await RequestContext.getEntityManager()?.find(Group, { name: selectedGroups }, { populate: ['people'] })
    
    //create message record
    if (groups != undefined && user != undefined) {
        //let newMessage = new Message();
        //newMessage.name = name;
        //newMessage.groups.add(groups);
        //newMessage.messageType = messageType;
        //newMessage.message = message;
        //newMessage.user = user;

        //const persistMessage  = await RequestContext.getEntityManager()?.create(Message, newMessage);
    
        //await RequestContext.getEntityManager()?.persistAndFlush(persistMessage!);

        sendMessage(groups);
    
        res.status(200).json({success: true, msg: "Successfully created message"})
    } else {

    }

}


const sendMessage = async (groups: Group[]) => {
    let people = groups[0].people;

    console.log("people = ", people)

    /***
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    const client = twilio(accountSid, authToken);

    await client.messages
        .create({
            body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
            from: '+15017122661',
            to: '+15558675310'
        })
         */

}