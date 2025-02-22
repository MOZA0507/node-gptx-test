import { buildSchema } from "graphql";

export const usersSchema = buildSchema(`
    type User {
    idusuario: ID
    nombres: String
    apellidopaterno: String
    apellidomaterno: String
    direccion: String
    telefono: String
    }
    
    type Query {
        getUsers: [User]
    }`);