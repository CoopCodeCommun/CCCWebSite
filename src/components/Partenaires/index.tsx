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
        img: '/img/partenaires/raffinerie1.resized.jpg',
        link: 'https://www.laraffinerie.re/',
        description: (
            <>
                Friche éco-culturelle
            </>
        ),
    },
    {
        title: 'Association 3Peaks',
        img: '/img/partenaires/3peaks-ori.resized.png',
        link: '',
        description: (
            <>
                Association culturelle organisatrice du Manapany Festival
            </>
        ),
    },
    {
        title: 'COmmunecter.org',
        img: '/img/partenaires/logo_vert_dark_Plan de travail 1.png',
        link: '',
        description: (
            <>
                Votre réseau social libre et local
            </>
        ),
    },
    {
        title: 'RTLx',
        img: '/img/partenaires/Logo-RTL.png',
        link: '',
        description: (
            <>
                La Réunion des Tiers-lieux
            </>
        ),
    },
    {
        title: 'Le Demeter',
        img: '/img/partenaires/Demeter.resized.png',
        link: '',
        description: (
            <>
                Micro Brasserie
            </>
        ),
    },
    {
        title: 'Le Bisik',
        img: '/img/partenaires/logo-Bisik.blanc_.png',
        link: 'https://bisik.re/',
        description: (
            <>
                Lieux de musiques actuelles
            </>
        ),
    },
    {
        title: 'Jetbrain',
        img: '/img/partenaires/jb_beam.resized.png',
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
                <img src={img} style={{height: '8em'}} alt="profil"/>
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
