import styles from "./Card.module.css"
import {CardType} from "@/data/cards";

export const Card = ({name, link, description}: CardType) => {
    return (
        <a href={link} target="_blank" className={styles.card}>
            <h2 className={styles.title}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </a>
    )
}