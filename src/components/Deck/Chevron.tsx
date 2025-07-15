import styles from "./Chevron.module.css"
import Image from "next/image";

export const Chevron = ({isReversed, cardCount, setCardCount, totalCards}: {
    isReversed: boolean,
    cardCount: number,
    setCardCount: React.Dispatch<React.SetStateAction<number>>
    totalCards: number
}) => {
    return (
        <Image
            src={"/icons/chevron.svg"}
            alt={`chevron`}
            height={64}
            width={64}
            className={styles.chevron}
            style={{transform: isReversed ? "rotate(180deg)" : ""}}
            onClick={() => setCardCount(isReversed ? (cardCount == 0 ? totalCards : cardCount - 1) : (cardCount == totalCards ? 0 : cardCount + 1))}
        />
    )
}