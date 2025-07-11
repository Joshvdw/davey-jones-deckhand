import styles from "./Logo.module.css"
import Image from "next/image";

export const Logo = () => {
    return (
        <div className={styles.logoWrapper}>
            <Image src={"/logos/DJDH25-LogoHoriz-Col-Lrg.png"}
                   alt={"Davey Jones' Deckhand Logo"}
                   width={1000}
                   height={299}
                   className={styles.logo}
            />
        </div>
    )
}