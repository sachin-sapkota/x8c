import AnimatedNumber from 'react-animated-number';
import { useWidth } from '../../hooks';

const NumberAnimation = ({ data, number }) => {
    const { prefix, suffix, text } = data;
    const windowWidth = useWidth();

    if (!data) return;

    return (
        <div className="number-animation flex flex-col justify-center items-center relative bg-[#131418] rounded-[5px] py-2 px-2 md:py-6 md:px-10">
            <div className="flex items-center justify-center">
                <AnimatedNumber
                    style={{
                        transition: '0.8s ease-out',
                        transitionProperty: 'background-color, color',
                        fontSize: windowWidth > 768 ? 42 : 26,
                        color: '#ff006c',
                    }}
                    duration={1500}
                    stepPrecision={0}
                    value={number}
                    formatValue={(n) => `${prefix}${n}${suffix}`}
                />
            </div>
            <span className="text-[14px] h-[40px] md:text-[20px] text-center md:h-[60px] flex items-center">
                {text}
            </span>
        </div>
    );
};

export default NumberAnimation;
