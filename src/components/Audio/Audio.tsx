import {useEffect, useRef} from "react";
import {setAudioRefs, reduceVolume} from "@/utils/sound";

export const Audio = () => {
    const bgMusic = useRef<HTMLAudioElement | null>(null);
    const hoverSound1 = useRef<HTMLAudioElement | null>(null);
    const hoverSound2 = useRef<HTMLAudioElement | null>(null);
    const hoverSound3 = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        setAudioRefs([
            bgMusic,
            hoverSound1,
            hoverSound2,
            hoverSound3
        ]);
        reduceVolume("bgMusic", 0.3);
        reduceVolume("hoverSound1", 0.3);
        reduceVolume("hoverSound2", 0.3);
        reduceVolume("hoverSound3", 0.3);
    }, []);

    return (
        <>
            <audio
                src="/audio/Website_MusicAmbLoop.mp3"
                ref={bgMusic}
                id="bgMusic"
                loop
            />
            <audio src="/audio/UI_Card_Select_05.mp3" ref={hoverSound1} id="hoverSound1"/>
            <audio src="/audio/UI_Card_Select_06.mp3" ref={hoverSound2} id="hoverSound2"/>
            <audio src="/audio/UI_Card_Select_07.mp3" ref={hoverSound3} id="hoverSound3"/>
        </>
    )
}