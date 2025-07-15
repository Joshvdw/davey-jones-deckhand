"use client"

import styles from "./Background.module.css"
import Image from "next/image";
import {useIsSmallScreen} from "@/hooks/mobileHooks";

export const Background = () => {
    const isMobile: boolean = useIsSmallScreen();
    const gifPath: string = isMobile ? "/gifs/Website_Background-Gif-vertical-720p-128bit.gif" : "/gifs/Website_Background-Gif-1080p-no-logo---128bit.gif"

    return (
        <div className={styles.background}>
            <Image src={gifPath}
                   alt={"background gif"}
                   width={1920}
                   height={1080}
                   className={styles.gif}
            />
        </div>
    )
}