"use client";

import styles from "./Background.module.css";
import Image from "next/image";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {BlackCoverWrapper} from "@/components/Backgrounds/BlackCoverWrapper";
import {useState} from "react";

export const Background = () => {
    const isMobile = useIsSmallScreen();
    const [isBgLoaded, setIsBgLoaded] = useState(false);
    const gifPath = isMobile
        ? "/gifs/Website_Background-Gif-vertical-720p-128bit.gif"
        : "/gifs/Website_Background-Gif-1080p-no-logo---128bit.gif";

    return (
        <div className={styles.background}>
            <BlackCoverWrapper isLoaded={isBgLoaded}/>
            <Image
                src={gifPath}
                alt="background gif"
                width={1920}
                height={1080}
                className={styles.gif}
                onLoadingComplete={() => setTimeout(() => setIsBgLoaded(true), 250)}
                priority
                loading="eager"
            />
        </div>
    );
};