
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
    role: string
}

export type AuthType {
    authWord: string,
    inputs: InputsAuthType,
}

export type UserDocTDType = {
    id: number;
    dateNow: string;
    user_id: number;
    car_id: number;
    userScore: string;
    userComment: string;
}

export type UserDocsTDType = UserDocTDType[];