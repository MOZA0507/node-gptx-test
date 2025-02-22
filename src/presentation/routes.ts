import { Router } from "express";
import { UsersRoutes } from "./users/routes";
import { createHandler } from "graphql-http";
import { usersSchema } from "../data";
import { GraphQLRoutes } from "./graphql/routes";


export class AppRoutes {
    static get routes(): Router{
        const router = Router();

        router.use('/api/users', UsersRoutes.routes);
        router.use('/api', GraphQLRoutes.routes);
        return router;
    }
}