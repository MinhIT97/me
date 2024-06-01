import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from '../../styles/component/MovingElement.module.css';

function IconImage({ src, width = 24, classParent = '', alt = 'image' }) {

    const elementRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!isHovered) return;

            const element = elementRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
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
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        elementRef.current.style.transform = 'translate(0, 0)';
    };
    return (
        <div className={classParent + ' ' + styles.movingElement} ref={elementRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative" style={{ width: width, height: width }}>
                <Image alt={alt}
                    src={src}
                    placeholder="blur"
                    quality={100}
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    );
}



export default IconImage;