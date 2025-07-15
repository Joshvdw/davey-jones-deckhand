"use client"

import styles from "./Deck.module.css"
import {cards} from "@/data/cards";
import {Card} from "@/components/Deck/Card";
import {useIsSmallScreen} from "@/hooks/mobileHooks";
import {Chevron} from "@/components/Deck/Chevron";
import {useState} from "react";

export const Deck = () => {
    const [cardCount, setCardCount] = useState(0);
    // const [showHelpText, setShowHelpText] = useState(true);
    // const prevCount = useRef(0);

    // optional text delay pop up
    // useEffect(() => {
    //     if (prevCount.current !== cardCount)
    //         setShowHelpText(false);
    //     prevCount.current = cardCount;
    //     setTimeout(() => {
    //         setShowHelpText(true);
    //     }, 500)
    // }, [cardCount])

    const isMobile: boolean = useIsSmallScreen();
    return (
        <>
            {
                isMobile ? (
                    // MOBILE DECK
                    <>
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
                        {/*{showHelpText &&*/}
                        <p className={styles.mobileText}>Click on the cards to visit the links!</p>
                        {/*}*/}
                    </>
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