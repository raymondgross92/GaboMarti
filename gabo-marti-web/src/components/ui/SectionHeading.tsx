import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionHeading({
    title,
    subtitle,
    align = 'center',
    className = '',
}: SectionHeadingProps) {
    return (
        <div className={`${styles.container} ${styles[align]} ${className}`}>
            {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
            <h2 className={styles.title}>{title}</h2>
        </div>
    );
}
