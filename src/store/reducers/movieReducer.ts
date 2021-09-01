import {MoviesDataType} from "./types";
import {AppThunkDispatch} from "../store";
import {movieAPI} from "../../api/movieAPI";

const SET_MOVIES_DATA = "movies/SET_MOVIES_DATA"

export const initialState:MoviesDataType = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const moviesReducer = (state: MoviesDataType = initialState, action: actionTypes): MoviesDataType => {
    switch (action.type) {
        case SET_MOVIES_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: {
            return state
        }

    }
}

export const setMoviesData = (data: MoviesDataType) => ({type: SET_MOVIES_DATA, data} as const)

export const getMovies = () =>
    async (dispatch:AppThunkDispatch) => {
    try {
        const res = await movieAPI.getMovies()
        const data = res.data
        dispatch(setMoviesData(data))
    }catch (err) {

    }
}


export type actionTypes = ReturnType<typeof  setMoviesData>
