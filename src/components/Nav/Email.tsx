import styles from "./Email.module.css"
import {email} from "@/data/companyLinks";

export const Email = () => {
    return (
        <a href={`mailto:${email.link}`} target="_blank" className={styles.email}>
            {email.name}
        </a>
    )
}