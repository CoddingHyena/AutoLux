import { createSlice } from "@reduxjs/toolkit";
import { UserDocsTDType } from "../../../types"
import { fetchCars, fetchDocTD, fetchDocTO } from "./lkThunkActions";

export type SliceState = {
    docs: UserDocsTDType;
};

const initialState: SliceState = {
    docs: []
};

const lkSlice = createSlice({
    name: 'lkSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDocTD.fulfilled, (state, {payload}) => {
            state.docs = payload;
        })
        // builder.addCase(fetchDocTO.fulfilled, (state, {payload}) => {
        //     state.docs = payload;
        // })
        // builder.addCase(fetchCars.fulfilled, (state, {payload}) => {
        //     state.docs = payload;
        // })
    }
})

export default lkSlice.reducer;