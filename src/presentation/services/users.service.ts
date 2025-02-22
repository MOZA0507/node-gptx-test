import { UserModel } from "../../data";
import { CustomError } from "../../domain/errors/custom.error";
import { CreateUserBody, EditUserBody } from "../../interfaces/users.interface";


export class UsersServices {
    constructor(private userModel: UserModel){}

    public async getUsers(){
        const results = await this.userModel.getUsers();
        return results;
    }

    public async createUser (body: CreateUserBody){
        const result =  await this.userModel.addUser(body);
        if(result && result >= 1){
            return 'El usuario se agrego correctamente';
        } else {
            throw CustomError.badRequest('No se registro correctamente el usuario');
        }
    }

    public async editUser (body: EditUserBody){
        const result =  await this.userModel.editUser(body);
        if(result && result >= 1){
            return 'El usuario se edito correctamente';
        } else {
            throw CustomError.notFound('No se encontro el usuario con ese id');
        }
    }

    public async deleteUser (userId: number){
        const result = await this.userModel.deleteUser(userId);
        if(result && result >= 1){
            return 'El usuario se elimino correctamente';
        } else {
            throw CustomError.notFound('No se encontro el usuario con ese id');
        }
    }
}