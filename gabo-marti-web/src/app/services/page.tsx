import Services from "@/components/sections/Services";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import styles from './services.module.css';

export default function ServicesPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Full Page Background */}
            <div className={styles.backgroundImage}>
                <img src="/Images/webseite_1.png" alt="Gabo Marti Dienstleistungen" />
                <div className={styles.overlay}></div>
            </div>

            {/* Content Overlay */}
            <div className={styles.contentWrapper}>
                <ScrollAnimation>
                    <div className={styles.heroHeader}>
                        <SectionHeading
                            title="Dienstleistungen"
                            subtitle="Qualität seit über 40 Jahren"
                        />
                    </div>
                </ScrollAnimation>

                <Services hideHeading={true} />
            </div>
        </div>
    );
}
