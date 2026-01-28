'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useTranslations, useLocale } from 'next-intl';

const styles = {
    pageWrapper: {
        background: 'linear-gradient(90deg, #6c5cea 0%, #8979f2 100%)',
        minHeight: '100vh',
        paddingBottom: '100px'
    },
    headerBg: {
        backgroundImage: 'url(/assets/img/bg/header-bg5.png)'
    },
    textWhite: {
        color: '#fff'
    },
    breadcrumbLink: {
        color: '#fff',
        opacity: 0.8
    },
    downloadBtn: {
        padding: '15px 30px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: '#fff',
        color: '#6c5cea',
        border: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    sponsorSection: {
        marginTop: '60px',
        textAlign: 'center' as const,
        color: '#fff'
    },
    sponsorTitle: {
        color: '#fff',
        fontSize: '36px',
        fontWeight: '700',
        marginBottom: '10px'
    },
    sponsorSubtitle: {
        color: '#fff',
        fontSize: '20px',
        marginBottom: '30px',
        opacity: 0.9
    },
    contactBtn: {
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#6c5cea',
        padding: '15px 30px',
        borderRadius: '8px',
        fontWeight: '600',
        textDecoration: 'none',
        marginBottom: '20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s'
    },
    emailLink: {
        color: '#fff',
        textDecoration: 'underline',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '10px'
    },
    card: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        padding: '60px 40px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '800px',
        margin: '0 auto'
    }
};

export default function ExhibitionFloorPlan() {
    const tCommon = useTranslations('common');
    const t = useTranslations('sponsorship');
    const locale = useLocale();

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <div style={styles.pageWrapper}>
                {/* Page Header */}
                <div className="inner-page-header" style={styles.headerBg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 m-auto">
                                <div className="heading1 text-center">
                                    <h1 style={styles.textWhite}>{t('exhibitionFloorPlan')}</h1>
                                    <div className="space20" />
                                    <div className="breadcrumb-nav">
                                        <Link href={`/${locale}`} style={styles.breadcrumbLink}>{tCommon('home')}</Link>
                                        <span style={{ color: '#fff', margin: '0 10px' }}><i className="fa-solid fa-angle-right" /></span>
                                        <span style={styles.breadcrumbLink}>{t('pageTitle')}</span>
                                        <span style={{ color: '#fff', margin: '0 10px' }}><i className="fa-solid fa-angle-right" /></span>
                                        <span style={styles.textWhite}>{t('exhibitionFloorPlan')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space100" />

                <div className="container">
                    <div style={styles.card}>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                {/* Download Section */}
                                <div className="mb-5">
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        background: 'rgba(255,255,255,0.2)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px auto'
                                    }}>
                                        <i className="fa-solid fa-map-location-dot" style={{ fontSize: '32px', color: '#fff' }}></i>
                                    </div>
                                    <h3 style={{ color: '#fff', marginBottom: '24px' }}>Download Exhibition Floor Plan</h3>

                                    <a
                                        href="/assets/img/exhibition-floor-plan.jpg"
                                        download="ACCP2026-Exhibition-Floor-Plan.jpg"
                                        style={styles.downloadBtn}
                                        className="hover-scale"
                                    >
                                        <i className="fa-solid fa-download"></i>
                                        Download Exhibition Floor Plan
                                    </a>
                                </div>

                                <div style={{
                                    height: '1px',
                                    background: 'rgba(255,255,255,0.2)',
                                    width: '100%',
                                    maxWidth: '400px',
                                    margin: '0 auto'
                                }} />

                                {/* Sponsor Section */}
                                <div style={styles.sponsorSection}>
                                    <h2 style={styles.sponsorTitle}>Become a Sponsor</h2>
                                    <p style={styles.sponsorSubtitle}>Partner with ACCP 2026</p>

                                    <div className="d-flex justify-content-center flex-column align-items-center">
                                        <a href="mailto:accpbangkok2026@gmail.com" style={styles.contactBtn} className="hover-scale">
                                            <i className="fa-solid fa-envelope" style={{ marginRight: '10px' }}></i>
                                            Contact Us for Sponsorship
                                        </a>

                                        <a href="mailto:accpbangkok2026@gmail.com" style={styles.emailLink}>
                                            accpbangkok2026@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space100" />
            </div>

            <style jsx>{`
                .hover-scale:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.15) !important;
                }
            `}</style>
        </Layout>
    )
}
