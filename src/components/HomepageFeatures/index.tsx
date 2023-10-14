import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Nicolas DIJOUX',
        Svg: require('@site/static/img/undraw_pancakes_238t.svg').default,
        description: (
            <>
                Fullstack Javascript. Kréol Framework Maker.
            </>
        ),
    },
    {
        title: 'Axel CHABRAN',
        Svg: require('@site/static/img/AxelLoupe.svg').default,
        description: (
            <>
                President coopératif. Cognito scientist.
            </>
        ),
    },
    {
        title: 'Jonas TURBEAUX',
        Svg: require('@site/static/img/jojoCable.svg').default,
        description: (
            <>
                Fullstack Python. Maker d'utopie.
            </>
        ),
    },
    {
        title: 'Glen Llaci',
        Svg: require('@site/static/img/undraw_statistic_chart_re_w0pk.svg').default,
        description: (
            <>
                Charmeur de serpents sur ruby.
            </>
        ),
    },
    {
        title: 'Mike CARON',
        Svg: require('@site/static/img/MikeCadre.svg').default,
        description: (
            <>
                Bionic FabLabeur.
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
