import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType, UserFBSType } from "../../../types";
import {fetchManagerDocFBUpdate, fetchManagerDocTDUpdate, fetchManagerDocTOUpdate, fetchManagerCars, fetchManagerDocFB, fetchManagerDocTD, fetchManagerDocTO, fetchManagerCreateDocTD, fetchManagerCreateDocTO } from "./managerThunkActions";



export type SliceState = {
    docsTD?: UserDocsTDType;
    docsTO?: UserDocsTDType;
    docsFB?: UserFBSType;
    cars?: UserCarsType;
};

const initialState: SliceState = {
    docsTD: [],
    docsTO: [],
    docsFB: [],
    cars: []
};

const managerSlice = createSlice({
    name: 'managerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchManagerDocFB.fulfilled, (state, {payload}) => {
            state.docsFB = payload;
        });
        builder.addCase(fetchManagerDocFBUpdate.fulfilled, (state, {payload}) => {
            const index = state.docsFB.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.docsFB[index] = payload;
            }
        });
        builder.addCase(fetchManagerDocTD.fulfilled, (state, {payload}) => {
            state.docsTD = payload;
        });

        builder.addCase(fetchManagerDocTDUpdate.fulfilled, (state, {payload}) => {
            const index = state.docsTD.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.docsTD[index] = payload;
            }
        });

        builder.addCase(fetchManagerCreateDocTD.fulfilled, (state, {payload}) => {
               
                state.docsTD.push(payload);
            
        });

        builder.addCase(fetchManagerDocTO.fulfilled, (state, {payload}) => {
            state.docsTO = payload;
        });


        builder.addCase(fetchManagerDocTOUpdate.fulfilled, (state, {payload}) => {
            const index = state.docsTO.findIndex((el) => el.id === payload.id);
            if(index !== -1){
                state.docsTO[index] = payload;
            }
        });

        builder.addCase(fetchManagerCreateDocTO.fulfilled, (state, {payload}) => {
               
            state.docsTO.push(payload);
        
    });


        builder.addCase(fetchManagerCars.fulfilled, (state, {payload}) => {
            state.cars = payload;
        });
    }
})

export default managerSlice.reducer;