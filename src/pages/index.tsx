import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Partenaires from '@site/src/components/Partenaires';

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

function Bandeau() {
    return (
        <div
            className={clsx(styles.announcement, styles.announcementDark)}
            data-theme="dark">
            <div className={styles.announcementInner}>
                <Translate>
                    {`Logiciels libres, formations, communs productifs, organisations coopératives, outils d'émancipations collectifs : La SCIC Code Commun fabrique, expérimente, recherche. Voulez vous participer ?`}
                </Translate>
            </div>
        </div>
    );
}

function Bandeau_bis() {
    return (
        <div
            className={clsx(styles.announcement, styles.announcementDark)}
            data-theme="dark">
            <div className={styles.announcementInner}>
                <Translate>
                    {`Partenaires`}
                </Translate>
            </div>
        </div>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title="Fabrique de communs numériques"
            description="Fabrique de communs numériques">
            <HomepageHeader/>
            <main>
                <Bandeau/>
                <HomepageFeatures/>
                <Bandeau_bis/>
                <Partenaires/>
            </main>
        </Layout>
    );
}
