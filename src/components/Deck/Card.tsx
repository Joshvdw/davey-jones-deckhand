import styles from "./Card.module.css"

export const Card = () => {
    return (
        <div className={styles.card}>
        </div>
    )
}


// function Card({ title, subtitle, variant = 'primary', footer, children }) {
//     const cardClass = `${styles.card} ${styles[variant] || ''}`;
//
//     return (
//         <div className={cardClass}>
//             {title && <h2 className={styles.title}>{title}</h2>}
//             {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
//             <div>{children}</div>
//             {footer && <div className={styles.footer}>{footer}</div>}
//         </div>
//     );
// }
//
// export default Card;