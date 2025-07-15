import styles from "./Card.module.css"
import {CardType} from "@/types/types";
import Image from "next/image";
import {useEffect, useState} from "react";
import {playSound} from "@/utils/sound";
import {getRandomBetween1And3} from "@/utils/utils";

export const Card = ({name, link, description}: CardType) => {
    const [hover, setHover] = useState(false)
    const previous: number = 0;

    useEffect(() => {
        if (hover) {
            playSound(`hoverSound${getRandomBetween1And3(previous)}`)
        }
    }, [hover])

    const textColor: object = name == "Discord" ? {color: "white"} : {color: "inherit"}
    const imgPathFormatted: string = `/images/card_${name.toLowerCase().split(' ').join('_')}_1x.webp`

    return (
        <a
            href={link}
            target="_blank"
            className={`${styles.card}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Image
                src={`${imgPathFormatted}`}
                alt={`${name} Playing Card`}
                width={350}
                height={486}
                className={`${styles.card} ${styles.bgImg}`}
            />
            <div className={styles.content}>
                <h2 className={styles.title}
                    style={textColor}>{name}</h2>
                <p className={styles.description}>{description}</p>
            </div>
        </a>
    )
}