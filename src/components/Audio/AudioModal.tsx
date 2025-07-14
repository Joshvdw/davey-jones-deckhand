import styles from "./AudioModal.module.css"
import {Logo} from "@/components/Nav/Logo";
import {muteSounds, playSound} from "@/utils/sound";

type AudioModalProps = {
    setHideModal: React.Dispatch<React.SetStateAction<boolean>>;
};


export const AudioModal = ({setHideModal}: AudioModalProps) => {

    const handleClick = (wantsSound: boolean) => {
        setHideModal(true);

        if (wantsSound) {
            playSound("bgMusic")
        } else {
            muteSounds();
        }
    }

    return (
        <div className={styles.audioModalWrapper}>
            <div className={styles.audioModal}>
                <Logo isModal={true}/>
                <h1 className={styles.title}>Play with sound?</h1>
                <div className={styles.btnWrapper}>
                    <div className={`${styles.btn} ${styles.btnNo}`} onClick={() => handleClick(false)}>
                        <h2>No</h2>
                    </div>
                    <div className={`${styles.btn} ${styles.btnYes}`} onClick={() => handleClick(true)}>
                        <h2>Yes</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}