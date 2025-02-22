import {Client, Pool} from 'pg';

interface Options {
    user: string;
    host: string;
    database: string;
    password: string;
    port: number;
}

export class PostgresDatabase{
    private static instance: PostgresDatabase;
    private pool: Client|null = null;

    private constructor(){}

    public static getInstance(): PostgresDatabase{
        if(!PostgresDatabase.instance){
            PostgresDatabase.instance = new PostgresDatabase();
        }
        return PostgresDatabase.instance;
    }

    public async connect(options: Options){
        const {user, host, database, password, port} = options;
        const dbConfig = {
            user: user,
            host: host,
            database: database,
            password: password,
            port: port
        }

        try {
            if(!this.pool){
                this.pool = new Client(dbConfig);
                await this.pool.connect()
                console.log('Successful Connection')
            }
        } catch(error){
            console.log('Error trying to connect to db');
            throw error;
        }
    }

    public getConnection(): Client {
        if(!this.pool){
          throw new Error('Theres no connection to the db call connect() first');
        }
        return this.pool;
      }
}