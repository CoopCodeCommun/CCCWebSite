import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SoftwareShowcase from '@site/src/components/SoftwareShowcase';
import Contributions from '@site/src/components/Contributions';
import Partenaires from '@site/src/components/Partenaires';
import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary background-image', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title overlay">Fabrique de Communs Numériques</h1>
                <p className="hero__subtitle overlay">Des outils libres pour coopérer, partager et s'émanciper.</p>
            </div>
        </header>
    );
}

function SectionCollectif() {
    return (
        <div className={clsx(styles.announcement, styles.announcementDark)} data-theme="dark">
            <div className={styles.announcementInner}>
                <h2>Une fabrique collective</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Code Commun est une <strong>coopérative (SCIC)</strong>.
                    <br />
                    Nous fabriquons des <strong>logiciels libres</strong> pour l'économie sociale et solidaire.
                    <br />
                    Nous formons les gens à utiliser et créer ces outils.
                    <br />
                    Nous travaillons ensemble, de manière transparente et partagée.
                </p>
            </div>
        </div>
    );
}

function SectionPartenairesTitle() {
    return (
        <div className={clsx(styles.announcement, styles.announcementDark)} data-theme="dark" style={{ marginTop: '4rem' }}>
            <div className={styles.announcementInner}>
                <h2>Nos Partenaires</h2>
                <p>Ils nous soutiennent et construisent avec nous.</p>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title="Accueil"
            description="Fabrique de communs numériques et logiciels libres.">
            <HomepageHeader />
            <main>
                <SectionCollectif />
                <SoftwareShowcase />
                <Contributions />
                <SectionPartenairesTitle />
                <Partenaires />
            </main>
        </Layout>
    );
}
