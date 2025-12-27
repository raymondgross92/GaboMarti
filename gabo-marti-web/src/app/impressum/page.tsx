'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function ImpressumPage() {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Impressum" subtitle="Rechtliche Hinweise" />

                    <div className="prose" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text)' }}>
                        <p>
                            <strong>Gabo Marti GmbH</strong> ist ein Fachgeschäft rund um das Thema Motorboote & Zubehör.
                        </p>
                        <p>
                            <strong>Gabo Marti GmbH</strong><br />
                            Sonnmattstrasse 1<br />
                            6206 Neuenkirch<br />
                            Telefon: 041 467 10 46<br />
                            E-Mail: <a href="mailto:info@gabomarti.ch" style={{ color: 'var(--primary)' }}>info@gabomarti.ch</a><br />
                            Web: <a href="https://www.gabomarti.ch" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>www.gabomarti.ch</a>
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Webdesign</h3>
                            <p>Diese Homepage wurde von <strong>Ray-Tech</strong> realisiert.</p>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h3 style={{ marginBottom: '0.5rem' }}>Bildwelt</h3>
                            <p>Die Bildwelt wurde von <strong>Daniel Wechsler Photography, Sursee</strong> erstellt.</p>
                        </div>

                        <hr style={{ margin: '3rem 0', borderColor: 'var(--border)' }} />

                        <h3>Haftungsausschluss</h3>
                        <p>
                            Gabo Marti GmbH übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen Gabo Marti GmbH gegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Gabo Marti GmbH behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
                        </p>

                        <h3>Haftung für Links</h3>
                        <p>
                            Verweise und Links auf Webseiten Dritter liegen ausserhalb des Verantwortungsbereichs vom Gabo Marti GmbH. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
                        </p>

                        <h3>Urheber- und Leistungsschutzrechte</h3>
                        <p>
                            Die auf dieser Website veröffentlichten Inhalte und Produkte unterliegen dem Schweizerischen Urheberrechtsgesetz. Jede Verwertung oder Weitergabe bedarf der vorherigen schriftlichen Zustimmung vom Gabo Marti GmbH. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
