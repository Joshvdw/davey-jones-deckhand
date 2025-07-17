import styles from "./Logo.module.css";
import Image from "next/image";

export const Logo = ({isModal}: { isModal: boolean }) => {
    const image = (
        <Image
            src="/logos/DJDH25-LogoHoriz-Col-Lrg.png"
            alt="Davey Jones' Deckhand Logo"
            width={1000}
            height={299}
            className={styles.logo}
        />
    );

    return isModal ? (
        <div className={`${styles.logoWrapper} ${styles.squareLogo}`}>
            {image}
        </div>
    ) : (
        <a
            href="https://store.steampowered.com/app/3544900/Davy_Jones_Deckhand/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.logoWrapper} ${styles.rectLogo}`}
        >
            {image}
        </a>
    );
};