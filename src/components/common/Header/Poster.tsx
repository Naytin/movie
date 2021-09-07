import {MoviesType} from "../../../api/types";
import styles from "./Header.module.scss";
import {PauseIcon, PlayIcon} from "@heroicons/react/solid";
import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/original/"

type PosterPropsType = {
    movie: MoviesType
    playing: boolean
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>
    setMovieId: React.Dispatch<React.SetStateAction<number | null>>
}
export const Poster = ({movie, playing,setPlaying,setMovieId}: PosterPropsType) => {
    const playHandler = () => {
        setPlaying(true)
        setMovieId(movie.id)
    }

    return (
        <div className={styles.poster__wrapper}>
            <img
                alt={movie.title}
                src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                `${BASE_URL}${movie.poster_path}`}
            />
            {!playing &&
            <button className={styles.playing} >
                 <PlayIcon onClick={playHandler}/>
            </button>}

            <div className={styles.title__wrapper}>
                <h3>{movie.original_name || movie.original_title}</h3>
            </div>
        </div>)
}