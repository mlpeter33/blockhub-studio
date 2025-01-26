import {useEffect} from 'react';
import {gsap} from 'gsap';

export default function GridGame() {
    useEffect(() => {
        gsap.fromTo(
            ".grid-item",
            {opacity: 0, y: 50},
            {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out" 
            }
        );
    } , []);
    return(
        <div className="grid grid-cols-3 gap-4 mt-10"></div>)}
