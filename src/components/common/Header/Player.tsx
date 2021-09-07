import React, {MouseEvent, useCallback} from 'react';
import styles from "./Header.module.scss";
import ReactPlayer from "react-player";

type PropsType = {
    trailers: Array<string>
    playing: boolean
}

const Player = ({trailers, playing}: PropsType) => {

    const onPlayerReady = useCallback((event: MouseEvent<HTMLFrameElement | HTMLDivElement>) => {
        //@ts-ignore
        event.target.playVideo();
    }, [])
    return (
        <>
            <ReactPlayer
                url={trailers}
                className={styles.player}
                width='100%'
                height='100%'
                playing={playing}
                config={{
                    youtube: {
                        playerVars: {'autoplay': 0, 'controls': 0, 'showinfo': 0},
                        //@ts-ignore
                        events: {
                            'onReady': onPlayerReady
                        }
                    },
                }}
            />
        </>
    );
};

export default Player;
