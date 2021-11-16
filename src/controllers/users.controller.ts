import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Account } from '../models/account.model';

export const getUsuarios = async(req: Request, res: Response) => {

    // const users = await getRepository(Account).find();

    return res.json({
        msg: 'getUsuarios',
    })
    // return res.json(users)

}

export const createUsuario = async(req: Request, res: Response) => {
    return res.json({
        body: req.body
    })
}