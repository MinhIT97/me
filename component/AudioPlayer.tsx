import React, { useRef, useState, useEffect } from 'react';
const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleBarClick = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bar-c" onClick={handleBarClick}>
            <audio ref={audioRef} src="../y2mate.mp3" />
            <div id="bar-1" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
            <div id="bar-2" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
            <div id="bar-3" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
        </div>
    );
};

export default AudioPlayer;

