import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    img: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    // {
    //     title: 'Mike CARON',
    //     img: '/img/MikeCadre300.png',
    //     description: (
    //         <>
    //             Bionic FabLabeur
    //         </>
    //     ),
    // },
    // {
    //     title: 'Axel CHABRAN',
    //     img: '/img/AxelLoupe300.png',
    //     description: (
    //         <>
    //             Project Manago-coopératif
    //         </>
    //     ),
    // },
    // {
    //     title: 'Nicolas DIJOUX',
    //     img: '/img/Nico300.png',
    //     description: (
    //         <>
    //             Kréol Javascript Framework Maker
    //         </>
    //     ),
    // },
    // {
    //     title: 'Glen Llaci',
    //     img: '/img/GlenMiaou300.png',
    //     description: (
    //         <>
    //             Extracteur de ruby
    //         </>
    //     ),
    // },
    // {
    //     title: 'Jonas TURBEAUX',
    //     img: '/img/jojoCable300.png',
    //     description: (
    //         <>
    //             Charmeur de python
    //         </>
    //     ),
    // },

];

function Feature({title, img, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={img} style={{height: '10em'}} alt="profil"/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
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
