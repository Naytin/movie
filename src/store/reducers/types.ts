import {MoviesType} from "../../api/types";

export type MoviesDataType = {
    page: number
    results: Array<MoviesType>
    total_pages: number
    total_results: number
    trailers?: Array<string> | null
}

