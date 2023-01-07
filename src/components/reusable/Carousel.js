import React, { useEffect, useState } from 'react';
import { testimonials } from '../../utils/constants';
import QuoteImage from '../../assets/svg/quote.svg';
import { ArrowRightIcon } from '../../assets/icons';

var touchStart = { x: 0, y: 0 };

const Carousel = () => {
    const [selected, setSelected] = useState(0);

    const onTouchStart = (e) => {
        touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStart.x;
        const deltaY = e.changedTouches[0].clientY - touchStart.y;
        if (Math.abs(deltaY) > Math.abs(deltaX)) return;
        if (deltaX < 0) setSelected((prev) => (prev + 1) % 3);
        else if (deltaX > 0) setSelected((prev) => (prev + 2) % 3);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            setSelected((prev) => (prev + 1) % 3);
        }, 10 * 1000); // 10 seconds auto sliding

        return () => {
            clearInterval(timerId);
        };
    }, [selected]);

    return (
        <section className="w-screen px-4 md:px-5 py-10 md:py-40">
            <div
                className="max-w-[1040px] mx-auto h-[900px] md:h-[500px] relative"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                {testimonials.map((testimonial, index) => (
                    <div
                        className={`flex items-center transition-all duration-500 absolute w-full h-full left-0 top-0 ${
                            index === selected ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                        key={index}
                    >
                        <div className="hidden md:block min-w-[300px] h-[450px] lg:min-w-[400px] lg:h-[500px] rounded-[20px] overflow-hidden">
                            <img
                                src={testimonial.image}
                                alt="testimonial avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:ml-[40px] lg:ml-[120px] max-w-[400px] mx-auto">
                            <div className="flex gap-x-6 justify-center md:justify-start">
                                <img src={QuoteImage} alt="quote svg" className="h-[40px] lg:h-[50px] mt-2" />
                                <h2 className="hidden md:block text-[32px] leading-[36px] lg:text-[42px] lg:leading-[48px] tracking-[2px]">
                                    WORKING AT
                                    <br />
                                    <ArrowRightIcon width={40} height={20} className="inline mr-4 mb-3" />
                                    X8C IS DOPE
                                </h2>
                                <h2 className="block md:hidden text-[32px] leading-[36px] lg:text-[42px] lg:leading-[48px] tracking-[2px]">
                                    WORKING
                                    <br />
                                    <ArrowRightIcon width={40} height={20} className="inline mr-2 mb-3" /> AT X8C
                                    <br />
                                    IS DOPE
                                </h2>
                            </div>
                            <div className="w-full max-w-[300px] h-[400px] rounded-[20px] overflow-hidden block md:hidden mx-auto mt-8">
                                <img
                                    src={testimonial.image}
                                    alt="testimonial avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-[16px] leading-[24px] lg:text-[20px] lg:leading-[32px] max-w-[500px] mt-8">
                                {testimonial.text}
                            </p>
                            <span className="text-pink text-[14px] mt-8 block">{testimonial.position}</span>
                            <div className="flex items-center gap-x-4 mt-16 justify-center md:justify-start">
                                {testimonials.map((item, index) => (
                                    <div
                                        className={`cursor-pointer h-[16px] w-[54px] flex items-center`}
                                        key={index}
                                        onClick={() => setSelected(index)}
                                    >
                                        <div
                                            className={`w-full h-[2px] ${
                                                selected === index ? 'bg-pink' : 'bg-gray-200'
                                            }`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Carousel;
