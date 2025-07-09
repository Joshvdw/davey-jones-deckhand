import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";

export const Deck = () => {
    return (
        <div className={styles.deck}>
            {cards.map((card, i) => (
                <Card key={i} {...card}/>
            ))}
        </div>
    )
}