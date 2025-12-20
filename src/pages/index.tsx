import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SoftwareShowcase from '@site/src/components/SoftwareShowcase';
import Contributions from '@site/src/components/Contributions';
import Partenaires from '@site/src/components/Partenaires';
import styles from './index.module.css';

import Link from '@docusaurus/Link';
import HeroCarousel from '@site/src/components/HeroCarousel';

function HomepageHeader() {
    return (
        <header className={styles.heroHeader}>
            <HeroCarousel />
            <div className={styles.heroContent}>
                <div className="container">
                    <h1 className={styles.heroTitle}>Coopérative Code Commun</h1>
                    <p className={styles.heroSubtitle}>Fabrique de Communs Numériques</p>
                    <div className={styles.heroDescription}>
                        <p>
                            Code Commun est une coopérative (SCIC).<br />
                            Nous fabriquons des communs numériques sous licence libre.<br />
                            Nous formons autant à l'usage qu'à la création de ces outils.<br />
                            Nous travaillons ensemble, de manière transparente et partagée, dans une approche centrée sur la communauté et la propriété d'usage.
                        </p>
                    </div>
                    <div className={styles.heroButtons}>
                        <Link
                            className="button button--primary button--lg"
                            to="/docs/Fabrique/charte">
                            Nos intentions
                        </Link>
                    </div>
                </div>
            </div>
        </header>
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
                <SoftwareShowcase />
                <Contributions />
                <SectionPartenairesTitle />
                <Partenaires />
            </main>
        </Layout>
    );
}
