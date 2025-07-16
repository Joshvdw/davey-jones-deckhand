import {RefObject} from "react";
import {getRandomBetween1And3} from "@/utils/utils";

const sounds: { [key: string]: HTMLAudioElement } = {};
const volumes: { [key: string]: number | undefined } = {};
let muted: boolean = false;

function setAudioRefs(soundRefs: RefObject<HTMLAudioElement | null>[]) {
    soundRefs.forEach((ref) => {
        const el = ref.current;
        if (el?.id) {
            sounds[el.id] = el;
        }
    });
}

function storeVolumes() {
    Object.keys(sounds).forEach((key) => {
        const sound = sounds[key];
        if (sound) {
            volumes[key] = sound.volume;
        }
    });
}

function playSound(soundId: string) {
    if (!muted && soundId !== "undefined") {
        let sound
        if (soundId == "hoverSound") {
            sound = sounds[`${soundId}${getRandomBetween1And3(0)}`];
        } else {
            sound = sounds[soundId];
        }
        if (sound) {
            sound.play();
        }
    }
}

function reduceVolume(target: string, amount: number) {
    const sound = sounds[target];
    if (sound) {
        sound.volume = amount;
        storeVolumes();
    }
}

function muteSounds() {
    const allSounds = Object.keys(sounds);
    allSounds.forEach((key) => {
        sounds[key].muted = true;
    });
    muted = true;
}

function unMuteSounds() {
    const allSounds = Object.keys(sounds);
    allSounds.forEach((key) => {
        sounds[key].muted = false;
    });
    muted = false;
}

function isMuted() {
    return muted;
}

export {
    setAudioRefs,
    playSound,
    reduceVolume,
    muteSounds,
    unMuteSounds,
    isMuted,
};