import { Request, Response } from "express";
import { CustomError } from "../../domain/errors/custom.error";
import { UsersServices } from "../services/users.service";


export class UsersController{
    constructor(private usersService: UsersServices){}

    private handleError = (error: unknown, res: Response) =>{
        if(error instanceof CustomError){
          console.log(error.statusCode);
          return res.status(error.statusCode).json({error:error.message});
        }
        return res.status(500).json({error: 'Internal Server Error'});
    }

    addUser = (req: Request, res: Response) => {
        this.usersService.createUser(req.body)
            .then((data) => res.status(201).json({message: data}))
            .catch(err => this.handleError(err,res));
    }

    editUser = (req: Request, res: Response) => {
        this.usersService.editUser(req.body)
            .then((data) => res.status(200).json({message: data}))
            .catch(err => this.handleError(err,res));
    }

    deleteUser = (req: Request, res: Response) => {
        const userId: number = +req.params.userId;
        this.usersService.deleteUser(userId)
            .then((data) => res.status(200).json({message: data}))
            .catch(err => this.handleError(err,res));
    }
}