import type { ConfigureStoreOptions} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import userSlice, { SliceUserType} from './User/userSlice';
import { User } from "../types";

type StoreType = {
    userSlice: SliceUserType;
}

const storeOptions: ConfigureStoreOptions<StoreType> = {
    reducer: {
        userSlice,   
    },
};

export const store = configureStore(storeOptions);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;