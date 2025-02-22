import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    USER: get('POSTGRES_USER').required().asString(),
    PASS: get('POSTGRES_PASSWORD').required().asString(),
    DB: get('POSTGRES_DB').required().asString(),
    HOST: get('POSTGRES_HOST').required().asString()
}