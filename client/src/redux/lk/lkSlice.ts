import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType } from "../../../types"
import { fetchCars, fetchDocTD, fetchDocTO } from "./lkThunkActions";

export type SliceState = {
    docsTD?: UserDocsTDType;
    docsTO?: UserDocsTDType;
    cars?: UserCarsType;
};

const initialState: SliceState = {
    docsTD: [],
    docsTO: [],
    cars: []

};

const lkSlice = createSlice({
    name: 'lkSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDocTD.fulfilled, (state, {payload}) => {
            state.docsTD = payload;
        })
        builder.addCase(fetchDocTO.fulfilled, (state, {payload}) => {
            state.docsTO = payload;
        })
        builder.addCase(fetchCars.fulfilled, (state, {payload}) => {
            state.cars = payload;
        })
    }
})

export default lkSlice.reducer;