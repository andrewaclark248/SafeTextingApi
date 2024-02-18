import { response } from "express";
import { Request, Response } from 'express';
import { RequestContext } from "@mikro-orm/core";
import { User } from '../models/User'
import { Phone } from '../models/Phone'

import twilio from "twilio";



/**
 * List phone numbers for a user
 *
 * @param userId - User who's phone numbers we want to return
 * @param areaCode - Area code to search by
 * @returns array of numbers
 */
export async function index(req: Request, res: Response) {
    let email = req.user?.email;
    let user = await RequestContext.getEntityManager()?.findOne(User, { email: email });

    let phones = await RequestContext.getEntityManager()?.find(Phone, { user: user });
    let numbers = phones?.map((phone) => { return phone.number })
    res.status(200).json({success: true, numbers: numbers})
}


/**
 * List phone numbers for a user
 *
 * @param userId - User who's phone numbers we want to return
 * @param areaCode - Area code to search by
 * @returns array of numbers
 */
 export async function search(req: Request, res: Response) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;

    const client = twilio(accountSid, authToken);
    const phoneNumber = req.body.phoneNumber;


    
    let result = await client.availablePhoneNumbers('US')
                                .local
                                .list({areaCode: phoneNumber, limit: 5})

    let numbers = result.map((number) => number.friendlyName )

    res.status(200).json({success: true, numbers: numbers})
}



//POST: Create phone number
export async function post(req: Request, res: Response) {
    const phoneNumbers = req.body.phoneNumbers;
    //console.log("phoneNumber = ", phoneNumbers)

    phoneNumbers.forEach((number: string) => {
        createPhoneNumber(number, req.user?.email).then(() => {
            console.log("buy phone number")
        })
    })

    res.json({success: true, msg: "Successfully bought numbers"})
   // let reuslt = await client.incomingPhoneNumbers
   //   .create({phoneNumber: '+15017122661'})
   //   .then(incoming_phone_number => console.log(incoming_phone_number.sid));
}

export async function createPhoneNumber(number: string, email: string) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    console.log("accountSid = ", accountSid == "AC7c7199e208b690e883c090088f0654cc")
    const client = twilio(accountSid, authToken);

    //'+15017122661'
    //format number
    let formatedNumber = number.replace(' ', '');
    formatedNumber = formatedNumber.replace('(', '');
    formatedNumber = formatedNumber.replace(')', '');
    formatedNumber = formatedNumber.replace('-', '');
    formatedNumber = "+1" + formatedNumber;

    await client.incomingPhoneNumbers.create({phoneNumber: formatedNumber})


    let user = await RequestContext.getEntityManager()?.findOne(User, { email: email })
        
    console.log("email = ", email)

    if (user) {
        console.log("user found")
        let phone = new Phone();
        phone.number = formatedNumber;
        phone.user = user;

        const persistPhone  = await RequestContext.getEntityManager()?.create(Phone, phone);
        await RequestContext.getEntityManager()?.persistAndFlush(persistPhone!);
    }


}



//GET: get phone numbers for a person


//DELETE: delte phone numbers for a person


//PUT: Update phone numbers for a person



