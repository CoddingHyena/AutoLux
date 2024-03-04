import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "./store";

type DispatchFun = () => ThunkDispatch<RootState, any, AnyAction>;

export const useAppDispath: DispatchFun = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;