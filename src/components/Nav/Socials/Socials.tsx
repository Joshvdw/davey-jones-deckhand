import styles from "./Socials.module.css"
import {socialLinks} from "@/data/companyLinks";
import {Icon} from "@/components/Nav/Socials/Icon";

export const Socials = () => {
    return (
        <div className={styles.socialsWrapper}>
            {socialLinks.map((link, i) => (
                <Icon key={i} {...link}/>
            ))}
        </div>
    )
}