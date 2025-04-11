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
        title: 'La Rosêe',
        img: '/img/partenaires/larosee.jpg',
        link: '',
        description: (
            <>
                Réseau régional Occitanie
            </>
        ),
    },
    {
        title: 'ANTL',
        img: '/img/partenaires/antl.png',
        link: '',
        description: (
            <>
                L'Association Nationale des Tiers Lieux
            </>
        ),
    },
    {
        title: 'France Tiers Lieux',
        img: '/img/partenaires/ftl.png',
        link: '',
        description: (
            <>
                France Tiers Lieux
            </>
        ),
    },
        {
        title: 'Circa',
        img: '/img/partenaires/logo-alternative.fhd.png',
        link: '',
        description: (
            <>
                Pôle national du cirque actuel
            </>
        ),
    },
    {
        title: 'La Compagnie des Tiers-lieux',
        img: '/img/partenaires/ctl.svg',
        link: '',
        description: (
            <>
                Réseau régional des Haut-de-France
            </>
        ),
    },
    {
        title: 'Ministère de la culture',
        img: '/img/partenaires/france_2030.png',
        link: '',
        description: (
            <>
                Lauréat dispositif « Solutions de billetteries innovantes » de France 2030
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
        title: 'JetBrains',
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
