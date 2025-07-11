"use client"

import styles from "./Card.module.css"
import {CardType} from "@/data/cards";
import Image from "next/image";

export const Card = ({name, link, description}: CardType) => {
    const textColor: object = name == "Discord" ? {color: "white"} : {color: "inherit"}
    const imgPathFormatted: string = `/images/card_${name.toLowerCase().split(' ').join('_')}_1x.webp`
    return (
        <a href={link} target="_blank" className={`${styles.card}`}>
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