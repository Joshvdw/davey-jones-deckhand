import {useEffect, useRef} from "react";
import styles from "./MuteBtn.module.css";
import lottie, {AnimationItem} from "lottie-web";
import {isMuted as getIsMuted, muteSounds, playSound, unMuteSounds} from "@/utils/sound";

export const MuteBtn = ({hideModal}: { hideModal: boolean }
) => {
    const container = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    const enterFrame = 0;
    const holdFrame = 57;
    const endFrame = 88;

    useEffect(() => {
        if (!container.current) return;
        const animation = lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "/lotties/mute_lottie.json",
        });

        animation.setSpeed(1.5);
        animationRef.current = animation;

        return () => {
            if (animationRef.current) {
                animationRef.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        const soundIsMuted = getIsMuted();
        if (!soundIsMuted && animationRef.current && hideModal) {
            animationRef.current.goToAndStop(holdFrame, true);
        }
    }, [hideModal]);

    function playLottie(start: number, end: number, animation: AnimationItem | null) {
        if (!animation) return;
        return animation.playSegments([start, end], true);
    }

    const handleClick = () => {
        if (getIsMuted()) {
            unMuteSounds();
            playSound("bgMusic");
            playLottie(enterFrame, holdFrame, animationRef.current);
        } else {
            muteSounds();
            playLottie(holdFrame, endFrame, animationRef.current);
        }
    };

    return (
        <div
            ref={container}
            className={styles.muteBtn}
            onClick={handleClick}
        ></div>
    );
};