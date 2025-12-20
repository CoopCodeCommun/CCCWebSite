import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../SoftwareShowcase/styles.module.css'; // Reusing styles

type FeatureItem = {
    title: string;
    img: string;
    link: string;
    description: JSX.Element;
};

const ContributionList: FeatureItem[] = [
    {
        title: 'Reparons.org',
        img: '/img/undraw_ride_a_bicycle_re_6tjy.svg',
        link: 'https://github.com/AtelierSoude/OpenRepairPlatform',
        description: (
            <>
                Plateforme pour gérer des ateliers de co-réparation.
            </>
        ),
    },
    {
        title: 'Movilab',
        img: '/img/undraw_world_re_768g.svg',
        link: 'https://movilab.org/wiki/Accueil',
        description: (
            <>
                Encyclopédie vivante des Tiers Lieux.
            </>
        ),
    },
];

function Contribution({ title, img, link, description }: FeatureItem) {
    return (
        <div className={clsx('col col--6 margin-bottom--lg')}>
            <div className="text--center">
                <Link to={link}>
                    <img src={img} className={styles.featureSvg} alt={title} style={{ height: '150px', objectFit: 'contain' }} />
                </Link>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link
                    className="button button--secondary"
                    to={link}>
                    Contribuer
                </Link>
            </div>
        </div>
    );
}

export default function Contributions(): JSX.Element {
    return (
        <section className={styles.features} style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-color-emphasis-100)' }}>
            <div className="container">
                <h2 className="text--center margin-bottom--lg">On contribue</h2>
                <div className="row" style={{ justifyContent: 'center' }}>
                    {ContributionList.map((props, idx) => (
                        <Contribution key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
