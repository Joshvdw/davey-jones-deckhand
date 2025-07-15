"use client"

import styles from "./Nav.module.css"
import {Email} from "./Email"
import {Logo} from "./Logo"
import {SocialsWrapper} from "./Socials/SocialsWrapper"
import {useIsSmallScreen} from "@/hooks/mobileHooks";

export const Nav = () => {
    const isMobile: boolean = useIsSmallScreen();
    return (
        <>
            {/*mobile logo*/}
            {isMobile && <Logo isModal={false}/>}

            <div className={styles.nav}>
                <Email/>
                {/*desktop logo*/}
                {!isMobile && <Logo isModal={false}/>}
                <SocialsWrapper/>
            </div>
        </>
    )
}