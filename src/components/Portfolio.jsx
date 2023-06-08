import { useRef, useEffect } from 'react';
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


