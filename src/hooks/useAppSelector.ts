import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../store/store";

// create a hook, that works with a typed useSelector
// use TypedUseSelectorHook - Pass state types to useSelector
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
