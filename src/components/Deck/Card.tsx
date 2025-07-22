import styles from "./Card.module.css"
import {CardType} from "@/types/types";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";
import {playSound} from "@/utils/sound";
import {useIsSmallScreen} from "@/hooks/mobileHooks";

type CardProps = CardType & {
    style?: React.CSSProperties;
};

export const Card = ({name, link, description, style}: CardProps) => {
    const [hover, setHover] = useState(false)
    const isFirstRender = useRef(true);

    const wiggle = useRef<HTMLAnchorElement>(null);

    const isMobile: boolean = useIsSmallScreen();


    useEffect(() => {
        if (hover && !isMobile) {
            playSound("hoverSound")
        }
    }, [hover, isMobile])

    // CARD WIGGLE EFFECT ON MOBILE
    useEffect(() => {
        if (!isFirstRender.current) {
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

    useEffect(() => {
        isFirstRender.current = false;
    }, []);

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
            style={style}
        >
            <Image
                src={`/images/card_${nameFormatted}_1x.webp`}
                alt={`${name} Playing Card`}
                width={350}
                height={486}
                className={`${styles.card} ${styles.bgImg}`}
                priority={true}
            />
            <div className={styles.content}>
                <h2 className={styles.title}
                    style={textColor}>{name}</h2>
                <p className={`${styles.description} ${styles[`${nameFormatted}Description`]}`}>{description}</p>
            </div>
        </a>
    )
}