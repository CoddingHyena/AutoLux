import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType, UserType } from "../../../types"
import { fetchAddCars, fetchCars, fetchCarsDel, fetchCarsUpdate, fetchDocTD, fetchDocTO, fetchLKDocTDUpdate, fetchLKDocTOUpdate, fetchLkUsers, fetchUpdatUser } from "./lkThunkActions";

export type SliceState = {
    user?: UserType;
    docsTD?: UserDocsTDType;
    docsTO?: UserDocsTDType;
    cars?: UserCarsType;
};

const initialState: SliceState = {
    user: {
    id: 0,
    name: '',
    email: '',
    phone: '',
    password: '',
    role_id: 0,
    propType: false,
    persDataArg: false
    },
    docsTD: [],
    docsTO: [],
    cars: [],

};

const lkSlice = createSlice({
    name: 'lkSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLkUsers.fulfilled, (state, {payload}) => {
            state.user = payload;
            
        })
        builder.addCase(fetchUpdatUser.fulfilled, (state, {payload}) => {
            state.user = payload;
           
        })
        builder.addCase(fetchDocTD.fulfilled, (state, {payload}) => {
            state.docsTD = payload;
           
        })
        builder.addCase(fetchLKDocTDUpdate.fulfilled, (state, {payload}) => {
            const index = state.docsTD?.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.docsTD[index] = payload;
            }
        });
        builder.addCase(fetchDocTO.fulfilled, (state, {payload}) => {
            state.docsTO = payload;
            
        })
        builder.addCase(fetchLKDocTOUpdate.fulfilled, (state, {payload}) => {
            const index = state.docsTO?.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.docsTO[index] = payload;
            }
        });
        builder.addCase(fetchCars.fulfilled, (state, {payload}) => {
            state.cars = payload;
            
        })
        builder.addCase(fetchCarsUpdate.fulfilled, (state, {payload}) => {
            const index = state.cars?.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.cars[index] = payload;
            }
        });
        builder.addCase(fetchCarsDel.fulfilled, (state, {payload}) => {
            state.cars = state.cars?.filter((el) => el.id !== payload);
        })
        builder.addCase(fetchAddCars.fulfilled, (state, {payload}) => {
            state.cars?.push(payload);
        })
    }
})

export default lkSlice.reducer;