"use client"

import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";
import {CardType} from "@/types/types";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {Chevron} from "@/components/Deck/Chevron";
import {useState, useEffect} from "react";

type MobileDeckProps = {
    cardCount: number;
    setCardCount: React.Dispatch<React.SetStateAction<number>>;
}

const preloadImages = (cards: CardType[]) => {
    cards.forEach(card => {
        const nameFormatted = card.name.toLowerCase().split(' ').join('_');
        const img = new Image();
        img.src = `/images/card_${nameFormatted}_1x.webp`;
    });
};

const MobileDeck = ({cardCount, setCardCount}: MobileDeckProps) => {
    // Mobile Deck Image Preloader
    useEffect(() => {
        preloadImages(cards);
    }, []);
    return (<>
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
        </>
    );
}
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

