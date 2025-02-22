import { Router } from "express";
import { PostgresDatabase, UserModel, usersSchema } from "../../data";
import { UsersServices } from "../services/users.service";
import { createHandler } from "graphql-http/lib/use/express";
import { createResolvers } from "./resolvers";

export class GraphQLRoutes {
    static get routes(): Router{
        const router = Router();

        const db = PostgresDatabase.getInstance();
        const pool = db.getConnection();
        const usersModel = new UserModel(pool);
        const usersService = new UsersServices(usersModel);

        router.use('/graphql', createHandler({
            schema: usersSchema,
            rootValue: createResolvers(usersService),
        }));

        return router;
    }
}