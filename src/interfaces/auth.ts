export interface ILogin {
    email: string;
    password: string;
    errors: {
        email: string;
        password: string;
    };
    processing: boolean;
}

export interface IRegister {
    email: string;
    password: string;
    errors: {
        email: string,
        password: string
    };
    processing: boolean;
}