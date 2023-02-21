import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { State } from "../reducers/combineReducers";

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
