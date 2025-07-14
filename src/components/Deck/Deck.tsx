import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {Chevron} from "@/components/Deck/Chevron";
import {useState} from "react";

export const Deck = () => {
    const [cardCount, setCardCount] = useState(0);
    const isMobile: boolean = useIsSmallScreen();
    return (
        <>
            {
                isMobile ? (
                    // MOBILE DECK
                    <div className={styles.deck}>
                        <Chevron
                            isReversed={true}
                            cardCount={cardCount}
                            setCardCount={setCardCount}
                            totalCards={cards.length - 1}
                        />
                        <Card {...cards[cardCount]}/>
                        <Chevron
                            isReversed={false}
                            cardCount={cardCount}
                            setCardCount={setCardCount}
                            totalCards={cards.length - 1}
                        />
                    </div>
                ) : (
                    // DESKTOP DECK
                    <div className={styles.deck}>
                        {cards.map((card, i) => (
                            <Card key={i} {...card}/>
                        ))}
                    </div>
                )
            }
        </>
    )
}