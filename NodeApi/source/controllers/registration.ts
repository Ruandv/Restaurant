import { NextFunction, Request, Response } from 'express';
import { createUserAccount, listUserAccounts } from '../repository/registration';

const createAccount = async (req: Request, res: Response, next: NextFunction) => {
    createUserAccount(req.body.name, req.body.password, (err: Error | undefined, rows: any[]) => {
        if (err) {
            return res.status(400).json({
                message: err.message
            });
        }
        return res.status(200).json({
            message: rows.length
        });
    });
};

const listAccounts = async (req: Request, res: Response, next: NextFunction) => {
    listUserAccounts((rows: any) => {
        return res.status(200).json({
            message: rows.length
        });
    });
};

export default { createAccount, listAccounts };
