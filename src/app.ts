import { envs } from "./config/envs";
import { PostgresDatabase } from "./data";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

console.log("Hello world");

(async()=>{
    await main();
})();

async function main() {
    const dbInstance = PostgresDatabase.getInstance();
    console.log(envs)
    await dbInstance.connect({
        user:envs.USER,
        database: envs.DB,
        host: envs.HOST,
        password: envs.PASS,
        port:5432
    });
    const dbClient = dbInstance.getConnection();

    const server = new Server({
        port: 3000,
        routes: AppRoutes.routes
    });
    
    server.start();
}