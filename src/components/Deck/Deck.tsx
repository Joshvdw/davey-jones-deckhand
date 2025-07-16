"use client"

import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {Chevron} from "@/components/Deck/Chevron";
import {useState} from "react";

// const HELP_TEXT = "Click on the cards to visit the links!";

type MobileDeckProps = {
    cardCount: number;
    setCardCount: React.Dispatch<React.SetStateAction<number>>;
}

const MobileDeck = ({cardCount, setCardCount}: MobileDeckProps) => (
    <>
        <div className={styles.deck}>
            <Chevron
                isReversed={true}
                cardCount={cardCount}
                setCardCount={setCardCount}
                totalCards={cards.length - 1}
            />
            <Card {...cards[cardCount]} />
            <Chevron
                isReversed={false}
                cardCount={cardCount}
                setCardCount={setCardCount}
                totalCards={cards.length - 1}
            />
        </div>
        {/*<p className={styles.mobileText}>{HELP_TEXT}</p>*/}
    </>
);

const DesktopDeck = () => (
    <div className={styles.deck}>
        {cards.map((card, i) => (
            <Card key={i} {...card} />
        ))}
    </div>
);

export const Deck = () => {
    const [cardCount, setCardCount] = useState(0);
    const isMobile: boolean = useIsSmallScreen();
    return (
        <>
            {
                isMobile ? (
                    <MobileDeck cardCount={cardCount} setCardCount={setCardCount}/>
                ) : (
                    <DesktopDeck/>
                )
            }
        </>
    )
}

