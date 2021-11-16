import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

export const getUsuarios = async(req: Request, res: Response) => {

    // const users = await getRepository(User).find();

    // return res.json({
    //     msg: 'getUsuarios',
        
    // })
    return res.json({
        msg:'hola'
    })

}