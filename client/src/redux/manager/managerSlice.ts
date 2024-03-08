import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType, UserFBSType } from "../../../types";
import { fetchManagerCars, fetchManagerDocFB, fetchManagerDocTD, fetchManagerDocTO } from "./managerThunkActions";



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
        })
        builder.addCase(fetchManagerDocTD.fulfilled, (state, {paylod}) => {
            state.docsTD = paylod;
        })
        builder.addCase(fetchManagerDocTO.fulfilled, (state, {paylod}) => {
            state.docsTO = paylod;
        })
        builder.addCase(fetchManagerCars.fulfilled, (state, {paylod}) => {
            state.cars = paylod;
        })
    }
})

export default managerSlice.reducer;