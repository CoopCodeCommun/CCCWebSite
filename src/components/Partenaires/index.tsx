import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: string;
    link: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'La Raffinerie',
        img: '/img/Nico300.png',
        link: '',
        description: (
            <>
                Friche éco-culturelle
            </>
        ),
    },
    {
        title: 'Association 3Peaks',
        img: '/img/partenaires/',
        link: '',
        description: (
            <>
                Association culturelle organisatrice du Manapany Festival
            </>
        ),
    },
    {
        title: 'COmmunnecter.org',
        img: '/img/partenaires/',
        link: '',
        description: (
            <>
                 Votre réseau social libre et local
            </>
        ),
    },
    {
        title: 'RTLx',
        img: '',
        link: 'https://www.jetbrains.com/community/opensource/#support',
        description: (
            <>
                La Réunion des Tiers-lieux.
            </>
        ),
    },
    {
        title: 'Jetbrain',
        img: '',
        link: 'https://www.jetbrains.com/community/opensource/#support',
        description: (
            <>
                Licenses for Open Source Development - Community Support
            </>
        ),
    },

];

function Feature({title, img, link, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={img} style={{width: '14em'}} alt="profil"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Partenaires(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
