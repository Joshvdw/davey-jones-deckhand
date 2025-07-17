import styles from "./Card.module.css"
import {CardType} from "@/types/types";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import {playSound} from "@/utils/sound";
import {useIsSmallScreen} from "@/hooks/mobileHooks";

export const Card = ({name, link, description}: CardType) => {
    const [hover, setHover] = useState(false)
    const [isFirstRender, setIsFirstRender] = useState(true)

    const wiggle = useRef<HTMLAnchorElement>(null);

    const isMobile: boolean = useIsSmallScreen();

    useEffect(() => {
        setIsFirstRender(false)
    }, []);

    useEffect(() => {
        if (hover && !isMobile) {
            playSound("hoverSound")
        }
    }, [hover])

    // CARD WIGGLE EFFECT ON MOBILE
    useEffect(() => {
        if (!isFirstRender) {
            const element = wiggle.current;
            if (!element) return;

            element.classList.remove(styles.wiggle);

            if (isMobile) {
                void element.offsetWidth;
                element.classList.add(styles.wiggle);

                const handle = () => element.classList.remove(styles.wiggle);
                element.addEventListener("animationend", handle);
                return () => element.removeEventListener("animationend", handle);
            }
        }
    }, [name, isMobile]);


    const textColor: object = name == "Discord" ? {color: "white"} : {color: "inherit"}
    const nameFormatted: string = name.toLowerCase().split(' ').join('_')

    return (
        <a
            href={link}
            target="_blank"
            className={`${styles.card}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            ref={wiggle}
        >
            <Image
                src={`/images/card_${nameFormatted}_1x.webp`}
                alt={`${name} Playing Card`}
                width={350}
                height={486}
                className={`${styles.card} ${styles.bgImg}`}
            />
            <div className={styles.content}>
                <h2 className={styles.title}
                    style={textColor}>{name}</h2>
                <p className={`${styles.description} ${styles[`${nameFormatted}Description`]}`}>{description}</p>
            </div>
        </a>
    )
}