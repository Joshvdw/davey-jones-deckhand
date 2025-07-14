"use client"
import {AudioModal} from "@/components/Audio/AudioModal";

export const dynamic = 'force-static'; // SSG

import {Audio} from "@/components/Audio/Audio";
import {useEffect, useState} from "react";

import styles from "./page.module.css";
import {Nav} from "@/components/Nav/Nav"
import {Background} from "@/components/Background"
import {Deck} from "@/components/Deck/Deck"

export default function Home() {
    const [visible, setVisible] = useState(false);
    const [hideModal, setHideModal] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={`${styles.page} fade-in ${visible ? "visible" : ""}`}>
            {!hideModal && <AudioModal setHideModal={setHideModal}/>}
            <Nav/>
            <Background/>
            <Deck/>
            <Audio/>
        </div>
    );
}
