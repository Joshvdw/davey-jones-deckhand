import styles from "./Email.module.css"
import {email} from "@/data/companyLinks";
import Image from "next/image";

export const Email = () => {
    const logoPathFormatted: string = `/icons/${email.name.toLowerCase().split(' ').join('_')}.svg`

    return (
        <a href={`mailto:${email.link}`} target="_blank" className={styles.emailWrapper}>
            <Image src={logoPathFormatted} alt={`${email.name} logo`} height={24} width={24}/>
            {email.link}
        </a>
    )
}