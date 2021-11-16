import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Client } from '../models/User';

export const getUsuarios = async(req: Request, res: Response) => {

    const users = await getRepository(Client).find();

    // return res.json({
    //     msg: 'getUsuarios',

    // })
    return res.json(users)

}