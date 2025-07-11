import styles from "./Background.module.css"
import Image from "next/image";

export const Background = () => {
    return (
        <div className={styles.background}>
            <Image src={"/gifs/Website_Background-Gif-1080p-no-logo---128bit.gif"}
                   alt={"background gif"}
                   width={1920}
                   height={1080}
                   className={styles.gif}
            />
        </div>
    )
}