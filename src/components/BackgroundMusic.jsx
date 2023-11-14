import React, { useEffect, useState } from 'react'
import '../styles/backgroundMusic.css'

export default function BackgroundMusic({ src }) {
    const [audio] = useState(new Audio(src));
    const [isPlaying, setIsPlaying] = useState(false);
    audio.loop = true;

    const togglePlay = () => {
        if(isPlaying){
            audio.pause();
        } else {
            audio.play();
        }

        setIsPlaying(!isPlaying);
    }

    useEffect(() => {

        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, [audio]);

    return (
        <div className='music-container'>
            <button 
                onClick={togglePlay}
                className='music-button'    
            >
                <img 
                    src={isPlaying ? "/music-on.svg" : "/music-off.svg"}
                    alt="music note"
                />
            </button>
        </div>
    )
}
