import styles from "./Logo.module.css"
import Image from "next/image";

export const Logo = () => {
    return (
        <a href="https://store.steampowered.com/app/3544900/Davy_Jones_Deckhand/" target="_blank"
           className={styles.logoWrapper}>
            <Image src={"/logos/DJDH25-LogoHoriz-Col-Lrg.png"}
                   alt={"Davey Jones' Deckhand Logo"}
                   width={1000}
                   height={299}
                   className={styles.logo}
            />
        </a>
    )
}