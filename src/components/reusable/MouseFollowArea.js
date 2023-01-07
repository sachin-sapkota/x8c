import ReactDOM from 'react-dom';
import { useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useWidth } from '../../hooks';

const MouseFollowArea = ({ className, children, isSmall = false }) => {
    const divRef = useRef();
    const windowWidth = useWidth();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [offset] = useDebounce(mousePosition, 30, { maxWait: 30 });

    const handleMouseEvent = (e) => {
        var element = ReactDOM.findDOMNode(divRef.current);
        var rect = element.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.x, y: e.clientY - rect.y });
    };

    return (
        <div
            className={`mouse-area w-full h-full ${className} relative overflow-hidden cursor-pointer`}
            onMouseMove={handleMouseEvent}
            onMouseEnter={handleMouseEvent}
            ref={divRef}
        >
            {children}
            <div
                className={`hidden md:flex indicator absolute rounded-full bg-[#adaaaa3b] backdrop-blur-[12px] transition-all duration-[150ms] ${
                    isSmall ? 'w-[120px] h-[120px]' : 'w-[100px] h-[100px] md:w-[180px] md:h-[180px]'
                } items-center justify-center`}
                style={{
                    top: offset.y - (isSmall ? 60 : windowWidth > 768 ? 90 : 50),
                    left: offset.x - (isSmall ? 60 : windowWidth > 768 ? 90 : 50),
                }}
            >
                <span className={`${isSmall ? 'text-[10px]' : 'text-[12px] md:text-lg'} text-center`}>
                    VIEW
                    <br />
                    PROJECT
                </span>
            </div>
        </div>
    );
};

export default MouseFollowArea;
