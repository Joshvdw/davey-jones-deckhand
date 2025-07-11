export const dynamic = 'force-static'; // SSG 

import styles from "./page.module.css";
import {Nav} from "@/components/Nav/Nav"
import {Background} from "@/components/Background"
import {Deck} from "@/components/Deck/Deck"

export default function Home() {
    return (
        <div className={styles.page}>
            <Nav/>
            <Background/>
            <Deck/>
        </div>
    );
}
