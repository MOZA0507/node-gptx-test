import { Response, Router } from "express";
import { PostgresDatabase, UserModel } from "../../data";
import { UsersServices } from "../services/users.service";
import { UsersController } from "./controller";


export class UsersRoutes{
    static get routes(): Router{
        const router = Router();
        const db = PostgresDatabase.getInstance();
        const pool = db.getConnection();
        const usersModel = new UserModel(pool);
        const usersService = new UsersServices(usersModel);
        const controller = new UsersController(usersService);

        router.post('/', controller.addUser);
        router.put('/', controller.editUser);
        router.delete('/:userId', controller.deleteUser);
        
        return router;
    }
}