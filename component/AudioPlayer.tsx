import React, { useRef, useState, useEffect } from 'react';
import { useClickAway } from 'react-use';
const AudioPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hasClicked, setHasClicked] = React.useState(false);
    const [isPlayingReal, setIsPlayingReal] = useState(true);

    useClickAway(audioRef, () => {
        if (!hasClicked) {
            // Phát âm thanh khi lần đầu tiên click chuột
            audioRef.current.play();
            setHasClicked(true);
            setIsPlayingReal(true);
        }
    });
    const handleBarClick = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
            setIsPlayingReal(!isPlaying);
        }
    };

    useEffect(() => {
        const handleVisibilityChange = () => {
            const audio = audioRef.current;
            if (isPlayingReal) {
                if (document.visibilityState === 'hidden') {
                    audio.pause();
                    setIsPlaying(false);
                } else {
                    audio.play();
                    setIsPlaying(true);
                }
            }

        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [isPlayingReal]);

    return (
        <div className="bar-c" onClick={handleBarClick}>
            <audio ref={audioRef} src="../khatvongtuoitre.mp3" />
            <div id="bar-1" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
            <div id="bar-2" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
            <div id="bar-3" className={`bar ${!isPlaying ? 'noAnim' : ''}`}></div>
        </div>
    );
};

export default AudioPlayer;

