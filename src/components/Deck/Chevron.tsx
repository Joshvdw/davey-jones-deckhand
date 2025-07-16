import styles from "./Chevron.module.css"
import Image from "next/image";
import {playSound} from "@/utils/sound";

type ChevronProps = {
    isReversed: boolean,
    cardCount: number,
    setCardCount: React.Dispatch<React.SetStateAction<number>>
    totalCards: number
}

export const Chevron = ({isReversed, cardCount, setCardCount, totalCards}: ChevronProps) => {

    const handleClick = () => {
        playSound("hoverSound1")
        setCardCount(isReversed ? (cardCount == 0 ? totalCards : cardCount - 1) : (cardCount == totalCards ? 0 : cardCount + 1))
    }

    return (
        <div className={styles.chevronWrapper} onClick={handleClick}>
            <Image
                src={"/icons/chevron.svg"}
                alt={`chevron`}
                height={64}
                width={64}
                className={styles.chevron}
                style={{transform: isReversed ? "rotate(180deg)" : ""}}
            />
        </div>
    )
}