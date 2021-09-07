import {MoviesDataType} from "./types";
import {AppThunkDispatch} from "../store";
import {movieAPI} from "../../api/movieAPI";
import { TrailerType } from "../../api/types";

const SET_MOVIES_DATA = "movies/SET_MOVIES_DATA"
const SET_TRAILERS = "movies/SET_TRAILERS"

export const initialState:MoviesDataType = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    trailers: []
}

export const moviesReducer = (state: MoviesDataType = initialState, action: actionTypes): MoviesDataType => {
    switch (action.type) {
        case SET_MOVIES_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_TRAILERS: {
            return {
                ...state,
                trailers: action.data ? action.data.filter(t => t.type === 'Trailer').map(l => `https://www.youtube.com/watch?v=${l.key}`) : action.data
            }
        }
        default: {
            return state
        }

    }
}

export const setMoviesData = (data: MoviesDataType) => ({type: SET_MOVIES_DATA, data} as const)
export const setTrailers = (data: TrailerType[] | null) => ({type: SET_TRAILERS, data} as const)

export const getMovies = () =>
    async (dispatch:AppThunkDispatch) => {
    try {
        const res = await movieAPI.getMovies()
        const data = res.data
        dispatch(setMoviesData(data))
    }catch (err) {

    }
}

export const getTrailer = (movieId: number) =>
    async (dispatch:AppThunkDispatch) => {
        try {
            const res = await movieAPI.getTrailer(movieId)
            dispatch(setTrailers(res.data.results))
        } catch (err) {

        }
    }


export type actionTypes =
    ReturnType<typeof  setMoviesData> |
    ReturnType<typeof  setTrailers>

