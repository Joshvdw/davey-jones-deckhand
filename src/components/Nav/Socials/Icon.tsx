import styles from "./Icon.module.css"
import {SocialLinks} from "@/data/companyLinks";
import Image from "next/image";

export const Icon = ({name, link}: SocialLinks) => {
    const logoPathFormatted: string = `/icons/${name.toLowerCase().split(' ').join('_')}.svg`

    return (
        <a href={link} target="_blank" className={styles.icon}>
            <Image src={logoPathFormatted} alt={`${name} logo`} height={24} width={24}/>
        </a>
    )
}