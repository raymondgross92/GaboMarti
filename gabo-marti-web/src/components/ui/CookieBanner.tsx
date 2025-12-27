'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookiePreferences', JSON.stringify({ essential: true, marketing: true }));
        setShowBanner(false);
        setShowSettings(false);
        window.dispatchEvent(new Event('cookieConsentChanged'));
    };

    const handleDeclineAll = () => {
        localStorage.setItem('cookieConsent', 'declined');
        localStorage.setItem('cookiePreferences', JSON.stringify({ essential: true, marketing: false }));
        setShowBanner(false);
        setShowSettings(false);
        window.dispatchEvent(new Event('cookieConsentChanged'));
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', 'custom');
        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        setShowBanner(false);
        setShowSettings(false);
        window.dispatchEvent(new Event('cookieConsentChanged'));
    };

    if (!showBanner) return null;

    if (showSettings) {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 101,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem'
            }}>
                <div style={{
                    backgroundColor: '#1E293B',
                    padding: '2rem',
                    borderRadius: '0.75rem',
                    maxWidth: '500px',
                    width: '100%',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}>
                    <h3 style={{ color: 'white', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>Cookie-Einstellungen</h3>
                    <p style={{ color: '#CBD5E1', marginBottom: '1.5rem' }}>
                        Entscheiden Sie selbst, welche Cookies Sie zulassen möchten.
                    </p>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ color: 'white', fontWeight: 500 }}>Notwendig</span>
                            <input type="checkbox" checked disabled />
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                            Diese Cookies sind für das Funktionieren der Website technisch notwendig und können nicht deaktiviert werden.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <label htmlFor="marketing" style={{ color: 'white', fontWeight: 500, cursor: 'pointer' }}>Marketing & Analyse</label>
                            <input
                                type="checkbox"
                                id="marketing"
                                checked={preferences.marketing}
                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                        <p style={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                            Helfen uns, die Webseite zu verbessern und Ihnen relevante Inhalte anzuzeigen (z.B. Google Maps).
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                        <button
                            onClick={handleSavePreferences}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                background: '#0EA5E9',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: 500
                            }}
                            className="hover:bg-sky-600"
                        >
                            Auswahl speichern
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1rem',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center',
                maxWidth: '1200px',
                width: '100%'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    gap: '1rem'
                }}>
                    <p style={{ color: '#E2E8F0', fontSize: '0.9rem', margin: 0, flex: 1, minWidth: '280px' }}>
                        Wir verwenden Cookies, um Ihnen das beste Erlebnis auf unserer Webseite zu bieten.
                        Durch die Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.
                        Weitere Informationen finden Sie in unserer <Link href="/privacy" style={{ color: '#38BDF8', textDecoration: 'underline' }}>Datenschutzerklärung</Link>.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button
                            onClick={() => setShowSettings(true)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #475569',
                                background: 'transparent',
                                color: '#CBD5E1',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                transition: 'all 0.2s'
                            }}
                            className="hover:bg-slate-800 hover:text-white"
                        >
                            Einstellungen
                        </button>
                        <button
                            onClick={handleDeclineAll}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #475569',
                                background: 'transparent',
                                color: '#CBD5E1',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                transition: 'all 0.2s'
                            }}
                            className="hover:bg-slate-800 hover:text-white"
                        >
                            Ablehnen
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                background: '#0EA5E9',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                transition: 'all 0.2s'
                            }}
                            className="hover:bg-sky-600"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
