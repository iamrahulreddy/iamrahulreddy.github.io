import {preloadFonts} from './utils';
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

import { inject } from '@vercel/analytics';

inject();

Splitting();

const fx1Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect1]')];
const fx2Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
const fx3Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect3]')];
const fx5Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect5]')];
const fx6Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect6]')];
const fx13Titles = [...document.querySelectorAll('.content__title[data-splitting][data-effect13]')];

// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {
	
    lenis = new Lenis({
		lerp: 0.2,
		smooth: true
	});

    lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time);
		requestAnimationFrame(scrollFn);
	};
	
    requestAnimationFrame(scrollFn);

};

// GSAP Scroll Triggers
const scroll = () => {
    
    fx1Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20,20)
        },
        {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.8,
            scrollTrigger: {
                trigger: title,
                start: 'center+=20% bottom',
                end: '+=50%',
                scrub: true
            },
        });

    });
    
    fx2Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            yPercent: 120, 
            scaleY: 2.3, 
            scaleX: 0.7, 
            transformOrigin: '50% 0%' 
        }, 
        {
            duration: 1,
            ease: 'back.inOut(2)',
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=50%',
                end: 'bottom top+=40%',
                scrub: true
            }
        });

    });

    fx3Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars,  { 
            'will-change': 'transform', 
            transformOrigin: '50% 0%', 
            scaleY: 0
        },
        {
            ease: 'back',
            opacity: 1,
            scaleY: 1,
            yPercent: 0,
            stagger: 0.03,
            scrollTrigger: {
                trigger: title,
                start: 'center bottom-=5%',
                end: 'top top-=20%',
                scrub: true
            }
        });

    });


    fx5Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            xPercent: () => gsap.utils.random(-200,200), 
            yPercent: () => gsap.utils.random(-150,150) 
        },
        {
            ease: 'power1.inOut',
            opacity: 1,
            xPercent: 0,
            yPercent: 0,
            stagger: { each: 0.05, grid: 'auto', from: 'random'},
            scrollTrigger: {
                trigger: title,
                start: 'center bottom+=10%',
                end: 'bottom center',
                scrub: 0.9
            }
        });

    });

    fx6Titles.forEach(title => {
        
        const words = title.querySelectorAll('.word');
        
        for (const word of words) {

            const chars = word.querySelectorAll('.char');

            chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0, 
                rotationX: -90,
                yPercent: 50
            },
            {
                ease: 'power1.inOut',
                opacity: 1,
                rotationX: 0,
                yPercent: 0,
                stagger: {
                    each: 0.03,
                    from: 0
                },
                scrollTrigger: {
                    trigger: word,
                    start: 'center bottom+=40%',
                    end: 'bottom center-=30%',
                    scrub: 0.9
                }
            });

        }

    });

    fx13Titles.forEach(title => {
        
        const chars = title.querySelectorAll('.char');
        
        chars.forEach(char => gsap.set(char.parentNode, { perspective: 2000 })); 

        gsap.fromTo(chars, { 
            'will-change': 'opacity, transform', 
            opacity: 0, 
            rotationY: 180,
            xPercent: -40,
            yPercent: 100
        },
        {
            ease: 'power4.inOut()',
            opacity: 1,
            rotationY: 0,
            xPercent: 0,
            yPercent: 0,
            stagger: {
                each: -0.03,
                from: 0
            },
            scrollTrigger: {
                trigger: title,
                start: 'center bottom',
                end: 'bottom center-=30%',
                scrub: 0.9
            }
        });

    });
};

// Preload images and fonts
preloadFonts('cvn8slu').then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    // Lenis (smooth scrolling)
    initSmoothScrolling();
    // GSAP Scroll Triggers
    scroll();
});