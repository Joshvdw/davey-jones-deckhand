import styles from "./Icon.module.css"
import {SocialLinks} from "@/data/companyLinks";

export const Icon = ({name, link}: SocialLinks) => {
    return (
        <a href={link} target="_blank" className={styles.icon}>
            {name}
        </a>
    )
}