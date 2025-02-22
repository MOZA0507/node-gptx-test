export interface CreateUserBody {
    names: string;
    paternalLastName: string;
    maternalLastName: string;
    address: string;
    phone: string; 
}

export interface EditUserBody {
    userId: number;
    names: string;
    paternalLastName: string;
    maternalLastName: string;
    address: string;
    phone: string; 
}