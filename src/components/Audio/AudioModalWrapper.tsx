"use client"

import {useState} from "react";
import {AudioModal} from "@/components/Audio/AudioModal";
import {MuteBtn} from "@/components/Audio/MuteBtn";

export const AudioWrapperModal = () => {
    const [hideModal, setHideModal] = useState(false);
    return (
        <>
            {!hideModal && <AudioModal setHideModal={setHideModal}/>}
            <MuteBtn hideModal={hideModal}/>
        </>
    )
}