import { response } from "express";
import { Request, Response } from 'express';



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
    
    res.json({msg: "my message"})
}

