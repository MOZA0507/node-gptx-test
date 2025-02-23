import { Client } from "pg";
import { CreateUserBody, EditUserBody } from "../../interfaces/users.interface";

export class UserModel {
    constructor(private db: Client){}

    public async getUsers(){
        try {
            const query = 'SELECT * FROM usuarios';
            const res = await this.db.query(query);
            return res.rows;
        } catch (error){
            throw error;
        }
    }

    public async addUser(body: CreateUserBody){
        try {
            const query = 'INSERT INTO usuarios(nombres, apellidoPaterno, apellidoMaterno, direccion, telefono) VALUES($1, $2, $3, $4, $5) RETURNING *;'
            const values = [body.nombres, body.apellidopaterno, body.apellidomaterno, body.direccion, body.telefono];
            const res = await this.db.query(query, values);
            return res.rowCount;
        } catch(error){
            throw error;
        }
    }

    public async editUser(body: EditUserBody){
        try{
            const query = 'UPDATE usuarios SET nombres=$1, apellidoPaterno=$2, apellidoMaterno=$3, direccion=$4, telefono=$5 WHERE idUsuario=$6';

            const values = [body.nombres, body.apellidopaterno, body.apellidomaterno, body.direccion, body.telefono, body.idusuario];
            const res = await this.db.query(query, values);
            return res.rowCount;
        } catch(error){
            console.log(error);
            throw error
        }
    }

    public async deleteUser(userId: number){
        try {
            const query = 'DELETE FROM usuarios WHERE idUsuario=$1';
            const values = [userId];
            const res = await this.db.query(query, values);
            return res.rowCount;
        } catch(error){
            console.log(error);
        }
    }
}