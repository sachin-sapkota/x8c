import { Footer, Header } from '../layout';
import BackImage1 from '../../assets/image/back3.png';
import BackImage2 from '../../assets/image/back4.png';
import SpotifySvg from '../../assets/svg/spotify.svg';
import NetflixSvg from '../../assets/svg/netflix.svg';
import PaypalSvg from '../../assets/svg/paypal.svg';
import HeinekenSvg from '../../assets/svg/heineken.svg';
import GoogleSvg from '../../assets/svg/google.svg';
import CocaColaSvg from '../../assets/svg/coca-cola.svg';
import { BookDiscovery, PrimaryButton } from '../reusable';
import { useEffect, useRef, useState } from 'react';
import { projects, stepInfo } from '../../utils/constants';
import { ArrowRightIcon } from '../../assets/icons';
import { useWidth } from '../../hooks';
import { useTranslation } from 'react-i18next';

// var supportsPassive = true;
// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
// var keys = { 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
var offset = 0;
// var direction = 'down';
// var disabled = 0;
var stepWidth = 0;

const Service = () => {
    const { t } = useTranslation();
    const projectRef = useRef();
    const projectSliderRef = useRef();
    const stepRef = useRef();
    const stepSliderRef = useRef();
    const windowWidth = useWidth();
    // const [projectSliderWidth, setProjectSliderWidth] = useState(0);
    const [stepSliderWidth, setStepSliderWidth] = useState(0);

    // function preventDefault(e) {
    //     if (!projectRef.current || !projectSliderRef.current || document.documentElement.clientWidth <= 768) return;

    //     const vh = document.documentElement.clientHeight;
    //     const projectSliderCenter = projectRef.current.offsetTop + projectRef.current.clientHeight / 2;
    //     const stepSliderCenter = stepRef.current.offsetTop + stepRef.current.clientHeight / 2;
    //     const viewportCenter = offset + vh / 2;
    //     const projectScrollDelta = (projectSliderRef.current.scrollWidth - projectSliderRef.current.clientWidth) / 3;
    //     const stepScrollDelta = (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth) / 3;

    //     let direction = 'down';

    //     if (e.type === 'wheel') {
    //         direction = e.deltaY > 0 ? 'down' : 'up';
    //     } else if (e.type === 'keydown') {
    //         if (!keys[e.keyCode]) return;
    //         if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'End') direction = 'down';
    //         if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Home') direction = 'up';
    //     }

    //     if (Math.abs(projectSliderCenter - viewportCenter) < 1) {
    //         if (direction === 'down') {
    //             if (
    //                 Math.abs(
    //                     projectSliderRef.current.scrollLeft -
    //                         projectSliderRef.current.scrollWidth +
    //                         projectSliderRef.current.clientWidth
    //                 ) > 1
    //             ) {
    //                 projectSliderRef.current.scrollBy({
    //                     left: projectScrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = 0;
    //             }
    //         } else {
    //             if (Math.abs(projectSliderRef.current.scrollLeft) > 1) {
    //                 projectSliderRef.current.scrollBy({
    //                     left: -projectScrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = 0;
    //             }
    //         }
    //     } else if (Math.abs(stepSliderCenter - viewportCenter) < 1) {
    //         if (direction === 'down') {
    //             if (
    //                 Math.abs(
    //                     stepSliderRef.current.scrollLeft -
    //                         stepSliderRef.current.scrollWidth +
    //                         stepSliderRef.current.clientWidth
    //                 ) > 1
    //             ) {
    //                 stepSliderRef.current.scrollBy({
    //                     left: stepScrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = 0;
    //             }
    //         } else {
    //             if (Math.abs(stepSliderRef.current.scrollLeft) > 1) {
    //                 stepSliderRef.current.scrollBy({
    //                     left: -stepScrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = 0;
    //             }
    //         }
    //     } else if (disabled === 1) {
    //         document.documentElement.scrollTop -= viewportCenter - projectSliderCenter;
    //         e.preventDefault();
    //     } else if (disabled === 2) {
    //         document.documentElement.scrollTop -= viewportCenter - stepSliderCenter;
    //         e.preventDefault();
    //     }
    // }

    useEffect(() => {
        const timerId = setInterval(() => {
            if (window.pageYOffset !== offset) {
                // direction = window.pageYOffset > offset ? 'down' : 'up';
                offset = window.pageYOffset;
            }

            if (!projectRef.current || !projectRef.current || !stepRef.current) return;

            // const vh = document.documentElement.clientHeight;
            // const projectSliderCenter = projectRef.current.offsetTop + projectRef.current.clientHeight / 2;
            // const stepSliderCenter = stepRef.current.offsetTop + stepRef.current.clientHeight / 2;
            // const viewportCenter = offset + vh / 2;
            stepWidth = stepSliderRef.current.clientWidth;

            // setProjectSliderWidth(
            //     (projectSliderRef.current.scrollLeft * 100) /
            //         (projectSliderRef.current.scrollWidth - projectSliderRef.current.clientWidth)
            // );
            setStepSliderWidth(
                (stepSliderRef.current.scrollLeft * 100) /
                    (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth)
            );

            // if (document.documentElement.clientWidth > 768) {
            //     if (
            //         projectSliderCenter < viewportCenter &&
            //         direction === 'down' &&
            //         Math.abs(
            //             projectSliderRef.current.scrollLeft -
            //                 projectSliderRef.current.scrollWidth +
            //                 projectSliderRef.current.clientWidth
            //         ) > 1
            //     ) {
            //         document.documentElement.scrollTop -= viewportCenter - projectSliderCenter;
            //         disabled = 1;
            //     } else if (
            //         stepSliderCenter < viewportCenter &&
            //         direction === 'down' &&
            //         Math.abs(
            //             stepSliderRef.current.scrollLeft -
            //                 stepSliderRef.current.scrollWidth +
            //                 stepSliderRef.current.clientWidth
            //         ) > 1
            //     ) {
            //         document.documentElement.scrollTop -= viewportCenter - stepSliderCenter;
            //         disabled = 2;
            //     } else if (
            //         stepSliderCenter > viewportCenter &&
            //         direction === 'up' &&
            //         Math.abs(stepSliderRef.current.scrollLeft) > 1
            //     ) {
            //         document.documentElement.scrollTop += stepSliderCenter - viewportCenter;
            //         disabled = 2;
            //     } else if (
            //         projectSliderCenter > viewportCenter &&
            //         direction === 'up' &&
            //         Math.abs(projectSliderRef.current.scrollLeft) > 1
            //     ) {
            //         document.documentElement.scrollTop += projectSliderCenter - viewportCenter;
            //         disabled = 1;
            //     }
            // }
        }, 50);

        // window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        // window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        // window.addEventListener('keydown', preventDefault, false);

        return () => {
            clearInterval(timerId);
            // window.removeEventListener('DOMMouseScroll', preventDefault, false);
            // window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
            // window.removeEventListener('keydown', preventDefault, false);
        };
    }, []);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />

            <section className="w-screen h-screen md:h-[700px] pt-[90px] md:pt-0 px-3 md:px-5 pb-3 md:pb-0">
                <div className="max-w-[1400px] mx-auto pb-[30vh] md:pb-0 h-full overflow-hidden rounded-[32px] relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-b md:bg-gradient-to-r from-[#13141880] md:from-[#131418] to-transparent mix-blend-multiply isolate" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t md:bg-gradient-to-b md:bg-gradient-to-r from-[#13141880] md:from-[#131418] to-transparent" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#131418]" />
                    <img
                        src={BackImage1}
                        alt="background"
                        className="relative z-10 object-cover object-right w-full h-full max-w-[unset]"
                    />
                    <div className="absolute w-full bottom-12 left-6 md:left-20 md:bottom-[120px]">
                        <div className="flex flex-col items-end w-fit">
                            <h1 className="text-[40px] leading-[44px] mobile:text-[46px] mobile:leading[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                COMMUNITY
                                <br />
                                <ArrowRightIcon
                                    width={50}
                                    height={25}
                                    fill="#ff006c"
                                    className="hidden md:inline mb-5 ml-4 mr-4"
                                />{' '}
                                <span className="initial md:hidden">&nbsp;&nbsp;&nbsp;</span>
                                MODERATION
                            </h1>
                        </div>
                        <PrimaryButton
                            hasArrow={windowWidth <= 768}
                            text="LEARN MORE"
                            className="mt-8 md:mt-[50px] md:px-20"
                        />
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[60px] pb-[60px] md:pt-[250px] md:pb-[120px]">
                <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="relative z-10">
                        <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                            SUB
                            <br />
                            <ArrowRightIcon
                                width={windowWidth > 768 ? 50 : 32}
                                height={windowWidth > 768 ? 25 : 16}
                                className="inline mb-2 mx-2 md:mb-5 md:mx-4"
                            />{' '}
                            TITLE
                        </h1>
                        <p className="md:text-[20px] pt-10 md:pt-12">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            magna.
                        </p>
                    </div>
                    <img
                        src={BackImage2}
                        alt="background"
                        className="scale-[1.2] relative z-0 -left-[10vw] pt-8 md:left-0 md:pt-0 max-w-[400px] mx-auto md:max-w-full"
                    />
                </div>
            </section>

            <section
                className="w-screen px-8 md:px-5 pt-[240px] pb-[50px] md:pt-[120px] md:pb-[120px]"
                ref={projectRef}
            >
                <div className="max-w-[1120px] mx-auto relative pb-[50px] md:pb-[100px]">
                    <div
                        className={`overflow-x-scroll mask-horizontal-1 ${
                            windowWidth > 768 ? 'custom-scrollbar custom-scrollbar-horizontal' : 'hide-scrollbar'
                        } md:-mx-[60px] relative z-20 md:pb-[100px]`}
                        ref={projectSliderRef}
                    >
                        <div className="flex items-center gap-x-8 w-max px-[5vw] md:pl-[450px] md:pr-[100px] relative">
                            <div className="absolute black-screen h-full bg-black z-10 left-[450px] top-0" />
                            {projects.map((item, index) => (
                                <div className="relative z-20" key={index}>
                                    <div className="w-[70vw] h-[70vw] md:w-[350px] md:h-[350px] ">
                                        <img
                                            src={item.image}
                                            alt="project"
                                            className="w-full h-full object-cover rounded-[24px] md:rounded-[32px]"
                                        />
                                    </div>
                                    <p className="text-[20px] pt-4">
                                        {item.name}
                                        <ArrowRightIcon className="inline ml-4 mb-[2px]" width={20} height={10} />
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute flex flex-row gap-x-4 mobile:gap-x-8 md:gap-x-0 md:flex-col items-end left-0 -top-[200px] md:top-20 z-[15]">
                        <h2 className="text-[36px] leading-[42px] transition">
                            COMMUNITY
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MODERATION
                            <br />
                            &nbsp;&nbsp;&nbsp;PROJECTS
                        </h2>
                        <ArrowRightIcon
                            fill="#ff006c"
                            width={50}
                            height={25}
                            className="mt-8 rotate-90 mb-3 md:mb-0 md:rotate-0"
                        />
                    </div>
                    {/* <div className="hidden md:block absolute bottom-[0px] h-[2px] w-full bg-[#333333]" />
                    <div
                        className="hidden md:block absolute bottom-[0px] h-[2px] bg-pink transition-all duration-500"
                        style={{
                            width: `${projectSliderWidth}%`,
                        }}
                    /> */}
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 py-[20px]">
                <div className="max-w-[1120px] mx-auto grid grid-cols-3 gap-x-8 gap-y-8 md:grid-cols-6 items-center justify-items-center opacity-40">
                    <img src={CocaColaSvg} alt="CocaCola" />
                    <img src={GoogleSvg} alt="Google" />
                    <img src={SpotifySvg} alt="Spotify" />
                    <img src={NetflixSvg} alt="Netflix" />
                    <img src={PaypalSvg} alt="Paypal" />
                    <img src={HeinekenSvg} alt="Heineken" />
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[100px] pb-[50px] md:pt-[180px] md:pb-[100px]">
                <div className="max-w-[1120px] mx-auto md:flex justify-between">
                    <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[6px]">
                        TRIED &
                        <br />
                        <ArrowRightIcon
                            width={windowWidth > 768 ? 50 : 32}
                            height={windowWidth > 768 ? 25 : 16}
                            className="inline mb-3 mr-4 md:mb-5 md:mr-8"
                        />
                        TESTED
                    </h1>
                    <div className="pt-8 lg:pt-[120px] max-w-[530px]">
                        <p className="leading-[28px] md:text-[20px] md:leading-[36px] md:tracking-[2px]">
                            {t('service.tried.tested')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 py-[50px] md:pt-[120px] md:pb-[60px]" ref={stepRef}>
                <div className="max-w-[1120px] relative pb-[100px] mask-horizontal-1 -mx-8 md:mx-auto ">
                    <div
                        className={`overflow-x-scroll ${
                            windowWidth > 768 ? 'custom-scrollbar custom-scrollbar-horizontal' : 'hide-scrollbar'
                        } relative z-20 pl-8 md:pl-[60px] scroll-smooth md:pb-[100px]`}
                        ref={stepSliderRef}
                    >
                        <div
                            className="flex gap-x-20 w-max relative"
                            style={{
                                paddingRight: windowWidth <= 768 ? (stepWidth * 1) / 3 : stepWidth / 2,
                            }}
                        >
                            {stepInfo.map((item, index) => (
                                <div className="relative z-20 " key={index}>
                                    <div className="rounded-full h-[75px] w-[75px] bg-pink flex items-center justify-center">
                                        <span className="text-black text-[24px]">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="pl-[28px] pt-[60px] max-w-[350px]">
                                        <span className="text-[20px]">{item.label}</span>
                                        <p className="text-[14px]">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div
                                className="absolute h-[1px] border-t-[1px] border-pink border-dashed top-[37px]"
                                style={{
                                    width: `calc(100% - ${windowWidth <= 768 ? (stepWidth * 1) / 3 : stepWidth / 2}px)`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="absolute w-[66.6%] md:w-[50%] h-[4px] bg-pink rounded-[3px] left-0 top-[35px]" />
                    {/* <div className="hidden md:block absolute bottom-[0px] h-[2px] w-full bg-[#333333]" />
                    <div
                        className="hidden md:block absolute bottom-[0px] h-[2px] bg-pink transition-all duration-500"
                        style={{
                            width: `${stepSliderWidth}%`,
                        }}
                    /> */}
                    <div className="px-8 pt-8 flex md:hidden justify-between">
                        <div className="">
                            <ArrowRightIcon
                                fill={stepSliderWidth > 0 ? '#ff006c' : '#333333'}
                                className="-rotate-180 transition"
                                onClick={() => {
                                    stepSliderRef.current.scrollLeft -=
                                        (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth) / 5;
                                }}
                            />
                        </div>
                        <div className="">
                            <ArrowRightIcon
                                fill={stepSliderWidth < 100 ? '#ff006c' : '#333333'}
                                className="transition"
                                onClick={() => {
                                    stepSliderRef.current.scrollLeft +=
                                        (stepSliderRef.current.scrollWidth - stepSliderRef.current.clientWidth) / 5;
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <BookDiscovery />

            <Footer />
        </div>
    );
};

export default Service;
