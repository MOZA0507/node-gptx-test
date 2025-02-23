export interface CreateUserBody {
    nombres: string;
    apellidopaterno: string;
    apellidomaterno: string;
    direccion: string;
    telefono: string; 
}

export interface EditUserBody {
    idusuario: number;
    nombres: string;
    apellidopaterno: string;
    apellidomaterno: string;
    direccion: string;
    telefono: string; 
}