import React, {useEffect, useState} from 'react';
import {useActions} from "../../../hooks/useActions";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {getMoviesResult} from "../../../store/selectors";
import Slider from "react-slick";
import styles from './Header.module.scss'
import {Poster} from "./Poster";
import {PauseIcon} from "@heroicons/react/solid";
import {setTrailers} from "../../../store/reducers/movieReducer";
import {useDispatch} from "react-redux";
import Player from "./Player";

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                dots: false,
                fade: false,
            }
        },
    ]
};

const Header = () => {
    const [playing, setPlaying] = useState<boolean>(false);
    const [movieId, setMovieId] = useState<number | null>(null);
    const dispatch = useDispatch()

    const {getMovies,getTrailer} = useActions()
    const {results, trailers} = useAppSelector(getMoviesResult)

    useEffect(() => {
        if (!results.length) { // if no data, then request movies
            getMovies()
        }
    }, [])

    useEffect(() => {
        if(movieId) { //if movie id is not null request trailers
            getTrailer(movieId)
        }
    },[movieId])

    const slider = results.map(movie => <Poster key={movie.id}
                                                movie={movie}
                                                playing={playing}
                                                setPlaying={setPlaying}
                                                setMovieId={setMovieId}/>)

    const pauseHandler = () => {
        setPlaying(false)
        setMovieId(null)
        dispatch(setTrailers(null))
    }

    const trailersDefault = trailers ? trailers : []
    return (
        <header className={styles.wrapper}>
            <Slider {...settings}>
                {slider}
            </Slider>
            {playing &&
                <div className={styles.mask}>
                    <button className={`${styles.playing} ${styles.is}`}>
                        <PauseIcon className={styles.pause} onClick={pauseHandler}/>
                    </button>
                </div>
            }
            {playing && !trailers?.length ? <h1>Loading...</h1> : playing && <Player trailers={trailersDefault} playing={playing}/> }
        </header>
    );
};

export default Header;


