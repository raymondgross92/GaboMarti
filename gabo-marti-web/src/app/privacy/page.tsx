'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function PrivacyPage() {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '4rem' }}>
            <div className="container">
                <ScrollAnimation>
                    <SectionHeading title="Datenschutz" subtitle="Rechtliche Hinweise" />

                    <div className="prose" style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        color: 'var(--text)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <p>
                            Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                        </p>
                        <p>
                            <strong>Gabo Marti GmbH</strong><br />
                            Sonnmattstrasse 1<br />
                            6206 Neuenkirch<br />
                            Schweiz<br />
                            E-Mail: info@gabomarti.ch<br />
                            Webseite: www.gabomarti.ch
                        </p>

                        <h3>1. Allgemeine Hinweise</h3>
                        <p>
                            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p>
                            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
                        </p>
                        <p>
                            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                        </p>

                        <h3>2. Bearbeitung von Personendaten</h3>
                        <p>
                            Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen. Die Bearbeitung beinhaltet jeden Umgang mit personenbezogenen Daten, unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, Löschen, Speichern, Verändern, Vernichten und Verwenden von personenbezogenen Daten.
                        </p>

                        <h3>3. Erfassung von Daten auf dieser Website</h3>

                        <h4>Server-Log-Dateien</h4>
                        <p>
                            Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Logistfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                        </p>
                        <ul>
                            <li>Browsertyp und Browserversion</li>
                            <li>Verwendetes Betriebssystem</li>
                            <li>Referrer URL</li>
                            <li>Hostname des zugreifenden Rechners</li>
                            <li>Uhrzeit der Serveranfrage</li>
                        </ul>
                        <p>
                            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                        </p>

                        <h4>Kontaktformular</h4>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>

                        <h3>4. Cookies</h3>
                        <p>
                            Diese Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                        </p>
                        <p>
                            Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                        </p>
                        <p>
                            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                        </p>

                        <h3>5. Dienste von Drittanbietern</h3>

                        <h4>Google Maps</h4>
                        <p>
                            Diese Website nutzt den Kartendienst Google Maps API. Anbieter ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                        </p>
                        <p>
                            Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte.
                            Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>https://policies.google.com/privacy</a>.
                        </p>

                        <h4>Formsubmit</h4>
                        <p>
                            Wir verwenden den Dienst „FormSubmit“ (formsubmit.co) für die Versendung von Kontaktformularen. Durch die Nutzung dieses Formulars stimmen Sie zu, dass die von Ihnen angegebenen Daten an FormSubmit zur Verarbeitung übertragen werden. Weitere Informationen finden Sie in der Datenschutzerklärung von FormSubmit.
                        </p>

                        <h3>6. Ihre Rechte</h3>
                        <p>
                            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                        </p>

                        <h3>7. Änderungen</h3>
                        <p>
                            Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über die Änderung per E-Mail oder auf andere geeignete Weise informieren.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
}
