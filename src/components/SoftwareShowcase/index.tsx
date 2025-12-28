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
        title: 'TiBillet',
        img: '/img/kit/logos/png/monochrome.png',
        link: 'https://tibillet.org/fr',
        description: (
            <>
                Tibillet est une suite d'outils pour faciliter nos organisations collectives : système de caisse,
                adhésions/abonnement, monnaie temps/locales, billetterie, cashless, agenda fédéré, Sécurité Sociale
                Alimentaire...
                Une solution complète et libre.
            </>
        ),
    },
    {
        title: 'O2Badge',
        img: '/img/badge_blanc.png',
        link: 'https://github.com/CoopCodeCommun/FossBadge',
        description: (
            <>
                Plateforme de complète de gestion de badges numériques ouverts (Open Badges). Valorisons collectivement
                nos savoirs-faire et tout ce qui relève de l’expérience humaine !
            </>
        ),
    },
    // {
    //     title: 'Hypostasia',
    //     img: '/img/undraw_share_link_re_54rx.svg',
    //     link: 'https://beta.hypostasia.org/',
    //     description: (
    //         <>
    //             Outil d'analyse hypermédia.
    //         </>
    //     ),
    // },
    {
        title: 'Reparons.org',
        img: '/img/soudure.png',
        link: 'https://reparons.org/',
        description: (
            <>
                Plateforme libre
                de réservation d'ateliers de
                réparation
                Vous avez envie de réparer ou de créer ?
                Prenez rendez-vous et nous le faisons ensemble !
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

function Feature({title, img, link, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4 margin-bottom--lg')}>
            <div className="text--center">
                <Link to={link}>
                    <img src={img} className={styles.featureSvg} alt={title}
                         style={{height: '150px', objectFit: 'contain', borderRadius: '10px'}}/>
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
        <section className={styles.features} style={{padding: '4rem 0'}}>
            <div className="container">
                <h2 className="text--center margin-bottom--lg">nous maintenons et contribuons à :</h2>
                <div className="row" style={{justifyContent: 'center'}}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
