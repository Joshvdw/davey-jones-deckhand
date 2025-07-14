import styles from "./Logo.module.css"
import Image from "next/image";

export const Logo = ({isModal}: { isModal: boolean }) => {

    // const logoPath: string = isModal ? "/logos/DJDH25-LogoVert-Col-Lrg.png" : "/logos/DJDH25-LogoHoriz-Col-Lrg.png"

    return (
        <a href="https://store.steampowered.com/app/3544900/Davy_Jones_Deckhand/" target="_blank"
           className={`${styles.logoWrapper} ${isModal ? styles.squareLogo : styles.rectLogo}`}>
            <Image src={"/logos/DJDH25-LogoHoriz-Col-Lrg.png"}
                   alt={"Davey Jones' Deckhand Logo"}
                   width={1000}
                   height={299}
                   className={styles.logo}
            />
        </a>
    )
}