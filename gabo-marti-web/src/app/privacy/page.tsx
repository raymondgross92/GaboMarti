'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function PrivacyPage() {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Datenschutz" subtitle="Rechtliche Hinweise" />

                    <div className="prose" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text)' }}>
                        <h3>1. Datenschutzerklärung (DSG)</h3>
                        <p>
                            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten uns an diese Bestimmungen. Persönliche Daten werden streng vertraulich behandelt und weder an Dritte verkauft noch weitergegeben.
                        </p>

                        <h4>1.1 Bearbeitung von Personendaten</h4>
                        <p>
                            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
                            Beim Zugriff auf unsere Webseiten werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allg. übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, sodass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.
                        </p>

                        <h4>1.2 Cookies</h4>
                        <p>
                            Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die beim Besuch dieser Website in Ihrem Computer dauerhaft oder temporär gespeichert werden. Zweck der Cookies ist insbesondere die Analyse der Nutzung dieser Website zur statistischen Auswertung sowie für kontinuierliche Verbesserungen. In Ihrem Browser können Sie Cookies in den Einstellungen jederzeit ganz oder teilweise deaktivieren. Bei deaktivierten Cookies stehen Ihnen allenfalls nicht mehr alle Funktionen dieser Website zur Verfügung.
                        </p>

                        <h4>1.3 Kontaktformular</h4>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>

                        <h4>1.4 Ihre Rechte</h4>
                        <p>
                            Sie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Ebenso haben Sie das Recht auf Berichtigung, Sperrung oder, abgesehen von der vorgeschriebenen Datenspeicherung zur Geschäftsabwicklung, Löschung Ihrer personenbezogenen Daten.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
