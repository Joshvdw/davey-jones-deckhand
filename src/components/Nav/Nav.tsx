import styles from "./Nav.module.css"
import { Email } from "./Email"
import { Logo } from "./Logo"
import { Socials} from "./Socials/Socials"

export const Nav = () => {
    return (
        <div className={styles.nav}>
            <Email />
            <Logo />
            <Socials />
        </div>
    )
}