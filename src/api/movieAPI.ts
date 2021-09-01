import axios from 'axios'
import requests from "./requests";
import {ResponseType} from "./types";

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
}


export {}