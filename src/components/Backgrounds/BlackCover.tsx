import styles from "./BlackCover.module.css";

export function BlackCover({className = ""}: { className?: string }) {
    return (
        <div className={`${styles.blackCover} ${className}`}/>
    );
}
