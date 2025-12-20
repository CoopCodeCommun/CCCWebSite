import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.css';

// Default images if carousel folder is empty (fallback to demo images)
const defaultImages = [
    '/img/demo/BilletDemo1300Thumb.jpg', // Placeholder 1
    '/img/demo/cartes.jpg', // Placeholder 2
    '/img/Graphical_codecommun.png', // Placeholder 3
];

// In a real scenario, we might import these dynamically or the user drops them in.
// For now, we will use a hardcoded list that the user can update.
const carouselImages = [
    // We will try to use images from static/img/carousel if they existed, but for now use defaults
    ...defaultImages
];

export default function HeroCarousel(): JSX.Element {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
    };

    return (
        <div className={styles.carouselContainer}>
            <Slider {...settings}>
                {carouselImages.map((img, idx) => (
                    <div key={idx} className={styles.slide}>
                        <div
                            className={styles.slideImage}
                            style={{ backgroundImage: `url(${img})` }}
                        />
                        <div className={styles.overlay} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
