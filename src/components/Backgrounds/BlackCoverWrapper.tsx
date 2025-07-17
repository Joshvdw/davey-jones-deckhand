import {useEffect, useState} from 'react';
import styles from './BlackCoverWrapper.module.css';

interface Props {
    isLoaded?: boolean; // Optional prop to control fade externally
}

export const BlackCoverWrapper = ({isLoaded}: Props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (isLoaded) {
            setIsVisible(false);
        }
    }, [isLoaded]);

    return (
        <div className={`${styles.blackCover} ${!isVisible ? styles.fadeOut : ''}`}/>
    );
};