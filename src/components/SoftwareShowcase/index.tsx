import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: string;
    link: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'TiBillet / Lèspass',
        img: '/img/demo/BilletDemo1300Thumb.jpg',
        link: '/docs/Creations/tibillet-ticketing',
        description: (
            <>
                Gérez vos événements, vos adhésions, et vos réservations.
                Une billetterie complète et libre.
            </>
        ),
    },
    {
        title: 'Fedow',
        img: '/img/demo/cartes.jpg',
        link: '/docs/Creations/tibillet-fedow',
        description: (
            <>
                Un portefeuille numérique fédéré pour votre monnaie locale, temps ou cashless.
            </>
        ),
    },
    {
        title: 'OpenBadge',
        img: '/img/undraw_open_source_-1-qxw.svg',
        link: 'https://badge.codecommun.coop/',
        description: (
            <>
                Plateforme de délivrance de badges numériques ouverts (Open Badges).
            </>
        ),
    },
    {
        title: 'Hypostasia',
        img: '/img/undraw_share_link_re_54rx.svg',
        link: 'https://beta.hypostasia.org/',
        description: (
            <>
                Outil d'analyse hypermédia.
            </>
        ),
    },
    {
        title: 'Formations',
        img: '/img/Graphical_codecommun270.png',
        link: '/docs/category/formations',
        description: (
            <>
                Apprenez à coder, à administrer des systèmes Linux et à collaborer.
            </>
        ),
    },
];

function Feature({ title, img, link, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <div className="text--center">
                <Link to={link}>
                    <img src={img} className={styles.featureSvg} alt={title} style={{ height: '150px', objectFit: 'contain', borderRadius: '10px' }} />
                </Link>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link
                    className="button button--secondary"
                    to={link}>
                    Découvrir
                </Link>
            </div>
        </div>
    );
}

export default function SoftwareShowcase(): JSX.Element {
    return (
        <section className={styles.features} style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 className="text--center margin-bottom--lg">On maintient</h2>
                <div className="row" style={{ justifyContent: 'center' }}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
