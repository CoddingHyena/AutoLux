import { createSlice } from "@reduxjs/toolkit";
import { UserCarsType, UserDocsTDType, UserFBSType, UserSType } from "../../../types"
import { fetchAdminCars, fetchAdminDocFB, fetchAdminDocTD, fetchAdminDocTO, fetchAdminUsers } from "./adminThunkActions";

export type SliceState = {
    users?: UserSType;
    docsTD?: UserDocsTDType;
    docsTO?: UserDocsTDType;
    docsFB?: UserFBSType;
    cars?: UserCarsType;
};

const initialState: SliceState = {
    users: [],
    docsTD: [],
    docsTO: [],
    docsFB: [],
    cars: []
};

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdminUsers.fulfilled, (state, {payload}) => {
            state.users = payload;
        })
        builder.addCase(fetchAdminDocTD.fulfilled, (state, {payload}) => {
            state.docsTD = payload;
        })
        builder.addCase(fetchAdminDocTO.fulfilled, (state, {payload}) => {
            state.docsTO = payload;
        })
        builder.addCase(fetchAdminDocFB.fulfilled, (state, {payload}) => {
            state.docsFB = payload;
        })
        builder.addCase(fetchAdminCars.fulfilled, (state, {payload}) => {
            state.cars = payload;
        })
    }
})

export default adminSlice.reducer;