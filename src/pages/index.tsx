import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';


function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary background-image', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title overlay">{siteConfig.title}</h1>
                <p className="hero__subtitle overlay">{siteConfig.tagline}</p>
            </div>
        </header>
    );
}

function MigrationAnnouncement() {
    return (
        <div
            className={clsx(styles.announcement, styles.announcementDark)}
            data-theme="dark">
            <div className={styles.announcementInner}>
                <Translate>
                    {`Logiciels libres, communs productifs, organisations coopératives, outils d'émancipations collectifs : La coopérative Code Commun fabrique, expérimente, recherche. Vous voulez participer ?`}
                </Translate>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Coop' et logiciel libre"
            description="Fabrique de communs numériques">
            <HomepageHeader/>
            <main>
                <MigrationAnnouncement/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
