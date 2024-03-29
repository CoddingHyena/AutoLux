
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
    role: string;
    phone: string;
}

export type AuthType {
    authWord: string,
    inputs: InputsAuthType,
}

export type UserDocTDType = {
    id: number;
    user_id?: number;
    car_id: number;
    dateNow: string;
    dateSelected?: string;
    manager?: string;
    status?: boolean;
    probegKm?: number;
    ourComment?: string;
    userScore: string;
    userComment: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserDocsTDType = UserDocTDType[];

export type UserCarType = {
    id: number;
    mark: string;
    model: string;
    color: string;
    prodYear: number;
    gosNum: string;
    gear: string;
    engine: string;
    vin: string;
    user_id?: number;
    probegTotal?: number;
    ours?: boolean;
    bu?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserCarsType = UserCarType[];

export type UserFBType = {
    id: number;
    userName: string;
    user_id: number;
    dateNow: Date;
    manager: number;
    status: boolean;
    phoneNumber: string;
    ourComment: string;
    userComment: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type UserFBSType = UserFBSType[];

export type UserType = {
    id: number;
    name: string;
    email: string;
    phone: string;
    password?: string;
    role_id: number;
    propType: boolean;
    persDataArg?: boolean;
}

export type UserSType = UserType[];

export  type inputsUserPutType = {
    name: string;
    phone: string;
}

export type UpdateUserType = {
    inputsName: string;
    inputsPhone: string;
}

export type ModalFBType = {
    id: number;
    userName: string;
    user_id: number;
    dateNow: Date;
    phoneNumber: string;
    manager: number;
    ourComment: string;
    userComment: string;
    status: boolean;

}

export type ModalCreateDocType = {
    user_id: number;
    car_id: number;
    manager: number;
    ourComment: string;
    status: boolean;

}

export type InputsFBType = {
    userName: string;
    phoneNumber: string;
    userComment: string;
    dateSelected?: string;
}

export type AutoOptionModelType = {
    id: number;
    modelName: string;
    price: string;
    photo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type AutoOptionModelSType = AutoOptionModelType[];


export type AutoOptionComplectType = {
    id: number;
    model_id: number;
    complectationName: string;
    price: string;
    photo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type AutoOptionComplectSType = AutoOptionComplectType[];

export type AutoOptionColorType = {
    id: number;
    model_id: number;
    colorName: string;
    price: string;
    photo: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type AutoOptionColorSType[];

export type emailType = {
    email: string;
}

export type passwordType = {
    token: string;
    newPassword: string;
}