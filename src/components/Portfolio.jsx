// import React from 'react'
// import {MainPage} from "./MainPage";
// import {GeneralInfo} from "./GeneralInfo";
// import {Projects} from "./Projects";
//
//
// export const Portfolio = () => {
//
//     const handleScroll = (event) => {
//         const container = event.target;
//         const scrollAmount = event.deltaY;
//         const scrollLeft = container.scrollLeft + scrollAmount;
//
//         if (scrollAmount !== 0) {
//             container.scrollTo({
//                 top: 0,
//                 left: scrollLeft,
//                 behavior: 'smooth'
//             });
//         }
//     };
//
//     const scrolling = () => {
//         const containerElement = document.getElementById('container');
//         containerElement.addEventListener('wheel', handleScroll, { passive: true });
//     }
//
//
//     return(
//         <div id="container" className="page-container" onWheel={scrolling}>
//             <MainPage/>
//             <GeneralInfo/>
//             <Projects/>
//         </div>
//     )
// }

import React, { useRef, useEffect } from 'react';
import {MainPage} from "./MainPage.jsx";
import {Projects} from "./Projects";
import {GeneralInfo} from "./GeneralInfo.jsx";

export const Portfolio = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const handleWheelScroll = (event) => {
            if (containerRef.current) {
                containerRef.current.scrollBy({
                    top: 0,
                    left: event.deltaY,
                    behavior: 'smooth',
                });
            }
        };

        if (containerRef.current) {
            containerRef.current.addEventListener('wheel', handleWheelScroll);
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.removeEventListener('wheel', handleWheelScroll);
            }
        };
    }, []);

    return (
        <>
            <div ref={containerRef} className="page-container">
                <MainPage/>
                <GeneralInfo/>
                <Projects/>
            </div>
        </>
    );
};


