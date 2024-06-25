import styles from './EnvironmentalImpact.module.css';

const EnvironmentalImpact = ({ title, impacts, limits }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            {impacts.map((impact, index) => (
            <div key={index} className={styles.impact}>
                <span>{impact.label}</span>
                <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${impact.value}%` }}></div>
                </div>
                <div className={styles.labels}>
                <span>Très faible</span>
                <span>Très fort</span>
                </div>
            </div>
            ))}
            <div className={styles.limits}>
            <span>Limites</span>
            <div className={styles.limitContent}>
                <span>😞</span>
                <span>{limits}</span>
            </div>
            </div>
        </div>
    );
};

export default EnvironmentalImpact;
