import {JsonLd} from "@/components/JsonLd";

export const dynamic = 'force-static'; // SSG

import {AudioWrapperModal} from "@/components/Audio/AudioModalWrapper";
import {Audio} from "@/components/Audio/Audio";
import styles from "./page.module.css";
import {Nav} from "@/components/Nav/Nav"
import {Background} from "@/components/Backgrounds/Background"
import {Deck} from "@/components/Deck/Deck"

export default function Home() {
    return (
        <div className={`${styles.page}`}>
            <JsonLd/>
            <AudioWrapperModal/>
            <Nav/>
            <Background/>
            <Deck/>
            <Audio/>
        </div>
    );
}
