import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from '../../styles/component/MovingElement.module.css';

const animations = ['rotate1', 'rotate2', 'rotate3', 'rotate4'];

function IconImage({ src, width = 24, classParent = '', alt = 'image' ,classChilren='' }) {
    const elementRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        // Chọn ngẫu nhiên một animation từ danh sách
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        setAnimation(randomAnimation);

        const handleMouseMove = (event) => {
            if (!isHovered) return;

            const element = elementRef.current;
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const elementX = rect.left + rect.width / 2;
            const elementY = rect.top + rect.height / 2;

            const deltaX = event.clientX - elementX;
            const deltaY = event.clientY - elementY;

            setPosition({ x: deltaX / 10, y: deltaY / 10 });
        };

        const animate = (event) => {
            requestAnimationFrame(() => handleMouseMove(event));
        };

        document.addEventListener('mousemove', animate);

        return () => {
            document.removeEventListener('mousemove', animate);
        };
    }, [isHovered]);

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
        }
    }, [position]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        elementRef.current.classList.add(styles.paused);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
        if (elementRef.current) {
            elementRef.current.style.transform = 'translate3d(0, 0, 0)';
            elementRef.current.classList.remove(styles.paused);
        }
    };

    return (
        <div
            className={`${classParent} ${styles.movingElement}`}
            ref={elementRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ animation: `${animation} 10s linear infinite` }}
        >
            <div className={classChilren + ' relative'} style={{ width: width, height: width }}>
                <Image
                    alt={alt}
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
