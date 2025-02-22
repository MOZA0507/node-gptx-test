import { UsersServices } from "../services/users.service"


export const createResolvers = (usersService: UsersServices) =>({
    getUsers: async() => {
        return await usersService.getUsers();
    }
});