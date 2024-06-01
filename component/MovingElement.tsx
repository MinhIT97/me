// components/MovingElement.js

import { useEffect, useRef } from 'react';
import styles from '../styles/component/MovingElement.module.css';

const MovingElement = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const element = elementRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            console.log(rect);
            
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const deltaX = event.clientX - elementX;
            const deltaY = event.clientY - elementY;

            const moveX = deltaX / 10; // Điều chỉnh tốc độ di chuyển
            const moveY = deltaY / 10;

            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className={styles.movingElement} ref={elementRef}>
        
    </div>;
};

export default MovingElement;
