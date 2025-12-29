import Services from "@/components/sections/Services";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import styles from './services.module.css';

export default function ServicesPage() {
    return (
        <div style={{ backgroundColor: 'var(--background)' }}>
            {/* Hero Header */}
            <div className={styles.pageHero}>
                <div className={styles.heroImage}>
                    <img src="/Images/webseite_1.png" alt="Gabo Marti Dienstleistungen" />
                </div>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <ScrollAnimation>
                        <SectionHeading
                            title="Dienstleistungen"
                            subtitle="Qualität seit über 40 Jahren"
                            className="text-white"
                        />
                    </ScrollAnimation>
                </div>
            </div>

            <Services hideHeading={true} />
        </div>
    );
}
