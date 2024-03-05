
export type InputsAuthType = {
    name?: string,
    email: string,
    password: string,
    persDataAgr?: boolean,
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export type AuthType {
    authWord: string,
    inputs: InputsAuthType,
}