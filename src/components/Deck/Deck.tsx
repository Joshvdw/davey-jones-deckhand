"use client"

import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {Chevron} from "@/components/Deck/Chevron";
import {useState, useEffect} from "react";

type MobileDeckProps = {
    cardCount: number;
    setCardCount: React.Dispatch<React.SetStateAction<number>>;
}

const MobileDeck = ({cardCount, setCardCount}: MobileDeckProps) => {
    const [isFading, setIsFading] = useState(false);
    const [displayedCardIndex, setDisplayedCardIndex] = useState(cardCount);

    useEffect(() => {
        setIsFading(true);
        const timeout = setTimeout(() => {
            setDisplayedCardIndex(cardCount);
            setIsFading(false);
        }, 200);

        return () => clearTimeout(timeout);
    }, [cardCount]);

    return (
        <div className={styles.deck}>
            <Chevron
                isReversed={true}
                cardCount={cardCount}
                setCardCount={setCardCount}
                totalCards={cards.length - 1}
            />
            <div className={`${styles.fadeWrapper} ${isFading ? styles.fadeOut : styles.fadeIn}`}>
                {cards.map((card, i) => (
                    <Card
                        key={card.name}
                        {...card}
                        isActive={i === displayedCardIndex}
                        style={{display: i === displayedCardIndex ? "block" : "none"}}
                    />
                ))}

            </div>
            <Chevron
                isReversed={false}
                cardCount={cardCount}
                setCardCount={setCardCount}
                totalCards={cards.length - 1}
            />
        </div>
    );
};


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

