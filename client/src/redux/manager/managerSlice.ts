import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType, UserFBSType } from "../../../types";
import {fetchManagerDocFBUpdate, fetchManagerCars, fetchManagerDocFB, fetchManagerDocTD, fetchManagerDocTO } from "./managerThunkActions";



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
        builder.addCase(fetchManagerDocTO.fulfilled, (state, {payload}) => {
            state.docsTO = payload;
        });
        builder.addCase(fetchManagerCars.fulfilled, (state, {payload}) => {
            state.cars = payload;
        });
    }
})

export default managerSlice.reducer;