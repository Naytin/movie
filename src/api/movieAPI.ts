import axios from 'axios'
import requests from "./requests";
import {ResponseType, TrailersType} from "./types";

const instance = axios.create({
    // withCredentials - Свойство withCredentials это Boolean который определяет, должны ли
    // создаваться кросс-доменные Access-Control запросы с использованием таких идентификационных данных как cookie
    // withCredentials: true,
    baseURL: 'https://api.themoviedb.org/3/',
})

export const movieAPI = {
    getMovies() {
       return instance.get<ResponseType>(`${requests.fetchTrending.url}`)
    },
    getTrailer(movieId: number) {
        return instance.get<TrailersType>(`movie/${movieId}/videos?api_key=275dab6d7573605e85ec2cb8b3fc7b22&append_to_response=videos`)
    }
}


export {}
