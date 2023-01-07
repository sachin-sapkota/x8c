import { Footer, Header } from '../layout';
import { useWidth } from '../../hooks';
import BackImage from '../../assets/image/back1.jpg';
import { ArrowRightIcon } from '../../assets/icons';
import { BookDiscovery, MouseFollowArea, PrimaryButton, TrustedBy } from '../reusable';
import { projects, services } from '../../utils/constants';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// var supportsPassive = true;
// var wheelOpt = supportsPassive ? { passive: false } : false;
// var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
// var keys = { 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
var offset = 0;
// var direction = 'down';
// var disabled = false;

const Home = () => {
    const { t } = useTranslation();
    const projectRef = useRef();
    const projectMobileRef = useRef();
    const projectListRef = useRef();
    const serviceRef = useRef();
    const serviceContainerRef = useRef();
    const createRef = useRef();
    const growRef = useRef();
    const windowWidth = useWidth();
    // const [sliderPos, setSliderPos] = useState(0);
    const [projectHover, setProjectHover] = useState(0);
    const [serviceHover, setServiceHover] = useState(0);
    const [projectMenuFixed, setProjectMenuFixed] = useState(false);

    // function preventDefault(e) {
    //     if (!serviceRef.current || !serviceContainerRef.current || document.documentElement.clientWidth <= 768) return;

    //     const vh = document.documentElement.clientHeight;
    //     const sliderCenter = serviceContainerRef.current.offsetTop + serviceContainerRef.current.clientHeight / 2;
    //     const viewportCenter = offset + vh / 2;
    //     const scrollDelta = (serviceRef.current.scrollHeight - serviceRef.current.clientHeight) / 5;

    //     let direction = 'down';

    //     if (e.type === 'wheel') {
    //         direction = e.deltaY > 0 ? 'down' : 'up';
    //     } else if (e.type === 'keydown') {
    //         if (!keys[e.keyCode]) return;
    //         if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'End') direction = 'down';
    //         if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Home') direction = 'up';
    //     }

    //     if (Math.abs(sliderCenter - viewportCenter) < 1) {
    //         if (direction === 'down') {
    //             if (
    //                 Math.abs(
    //                     serviceRef.current.scrollTop - serviceRef.current.scrollHeight + serviceRef.current.clientHeight
    //                 ) > 1
    //             ) {
    //                 serviceRef.current.scrollBy({
    //                     top: scrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = false;
    //             }
    //         } else {
    //             if (Math.abs(serviceRef.current.scrollTop) > 1) {
    //                 serviceRef.current.scrollBy({
    //                     top: -scrollDelta,
    //                     behavior: 'smooth',
    //                 });
    //                 e.preventDefault();
    //             } else {
    //                 disabled = false;
    //             }
    //         }
    //     } else if (disabled) {
    //         document.documentElement.scrollTop -= viewportCenter - sliderCenter;
    //         e.preventDefault();
    //     }
    // }

    useEffect(() => {
        const timerId = setInterval(() => {
            // direction = window.pageYOffset > offset ? 'down' : 'up';
            offset = window.pageYOffset;

            if (
                !projectRef.current ||
                !projectMobileRef.current ||
                !createRef.current ||
                !growRef.current ||
                !serviceRef.current ||
                !serviceContainerRef.current
            )
                return;

            // mixed horizontal and vertical scroll on service part

            const vh = document.documentElement.clientHeight;
            // const sliderCenter = serviceContainerRef.current.offsetTop + serviceContainerRef.current.clientHeight / 2;
            // const viewportCenter = offset + vh / 2;
            // setSliderPos(
            //     (serviceRef.current.clientHeight * serviceRef.current.scrollTop) /
            //         (serviceRef.current.scrollHeight - serviceRef.current.clientHeight)
            // );

            // if (document.documentElement.clientWidth > 768) {
            //     if (
            //         sliderCenter < viewportCenter &&
            //         direction === 'down' &&
            //         Math.abs(
            //             serviceRef.current.scrollTop - serviceRef.current.scrollHeight + serviceRef.current.clientHeight
            //         ) > 1
            //     ) {
            //         document.documentElement.scrollTop -= viewportCenter - sliderCenter;
            //         disabled = true;
            //     } else if (
            //         sliderCenter > viewportCenter &&
            //         direction === 'up' &&
            //         Math.abs(serviceRef.current.scrollTop) > 1
            //     ) {
            //         document.documentElement.scrollTop += sliderCenter - viewportCenter;
            //         disabled = true;
            //     }
            // }

            // change project background following current hover project on PC

            if (
                projectRef?.current?.offsetTop + 70 <= offset &&
                projectRef?.current?.offsetTop + projectRef?.current?.clientHeight - 885 >= offset
            ) {
                setProjectMenuFixed(true);
            } else {
                setProjectMenuFixed(false);
            }

            if (
                projectRef?.current?.offsetTop - vh <= offset &&
                projectRef?.current.offsetTop + projectRef?.current.clientHeight - vh / 2 > offset
            ) {
                const cardOffsets = new Array(projects.length).fill(0);
                const projectOffset = offset - projectRef?.current?.offsetTop + vh / 2;

                for (let i = 0; i < projects.length; i++) {
                    if (i === 0) cardOffsets[i] = 150;
                    else cardOffsets[i] = cardOffsets[i - 1] + 600;
                    if (cardOffsets[i] <= projectOffset && cardOffsets[i] + 550 >= projectOffset) {
                        setProjectHover(i);
                    }
                }
            }

            // Left side circle animation

            const serviceOffset = serviceRef.current.scrollTop + 80;
            const createOffset = createRef.current.offsetTop - serviceRef.current.offsetTop;
            const growOffset = growRef.current.offsetTop - serviceRef.current.offsetTop;

            if (serviceOffset < createOffset) setServiceHover(0);
            else if (serviceOffset < growOffset) setServiceHover(1);
            else setServiceHover(2);

            // project background animation on mobile

            const projectMobileOffset = projectMobileRef.current.scrollLeft;
            const vw = document.documentElement.clientWidth;
            const cardOffsets = new Array(projects.length).fill(0);
            const projectOffset = projectMobileOffset + projectMobileRef.current.clientWidth / 2;

            for (let i = 0; i < projects.length; i++) {
                if (i === 0) cardOffsets[i] = vw * 0.02;
                else cardOffsets[i] = cardOffsets[i - 1] + vw * 0.74;
                if (cardOffsets[i] <= projectOffset && cardOffsets[i] + vw * 0.7 >= projectOffset) {
                    setProjectHover(i);
                }
            }

            projectListRef.current.scrollLeft =
                (projectListRef.current.scrollWidth * projectMobileRef.current.scrollLeft) /
                projectMobileRef.current.scrollWidth;
        }, 100);

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
                <div className="max-w-[1400px] mx-auto h-full overflow-hidden flex justify-center items-center rounded-[32px] relative">
                    <img src={BackImage} alt="background" className="h-full w-full object-cover" />
                    <div className="absolute w-full h-full bg-gradient-to-t from-[#b9b9b9] to-[#5d5d5d] mix-blend-multiply isolate" />
                    <div className="absolute w-full left-8 bottom-12 md:bottom-16 md:left-12 flex flex-col items-end w-fit">
                        <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                            YOUR
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; PROJECT
                        </h1>
                        <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                            OUR WORLD
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col md:items-center lg:items-start lg:flex-row pt-[80px] pb-[30px] md:pt-[200px] md:pb-[50px]">
                    <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large basis-full flex-grow flex-shrink md:tracking-[6px]">
                        WHAT
                        <br />
                        <ArrowRightIcon
                            width={windowWidth > 768 ? 50 : 32}
                            height={windowWidth > 768 ? 25 : 16}
                            className="inline mb-3 mr-4 md:mb-5 md:mr-8"
                        />
                        WE DO
                    </h1>
                    <div className="pt-8 lg:pt-[180px] max-w-[580px]">
                        <p className="leading-[28px] md:text-[20px] md:leading-[36px] md:tracking-[2px]">
                            {t('home.what.we.do')}
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center mt-8 md:mt-16">
                            <PrimaryButton text={t('btn.our.work')} className="w-[80vw] mobile:max-w-[60vw] md:w-fit" />
                            <PrimaryButton
                                text={t('btn.creative.sprints')}
                                className="w-[80vw] mt-5 mobile:max-w-[60vw] md:w-fit md:ml-6 md:mt-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="hidden md:block w-screen px-8 md:px-5 mask-vertical transition-all duration-[500ms]"
                ref={projectRef}
                style={{
                    background: projects[projectHover].background,
                }}
            >
                <div className="max-w-[1320px] mx-auto relative pt-[150px] pb-[250px]">
                    <div
                        className={`${
                            projectMenuFixed
                                ? 'fixed top-[85px]'
                                : projectHover === projects.length - 1
                                ? 'fixed top-[85px] opacity-0'
                                : 'absolute'
                        } py-[18px] transition`}
                    >
                        {projects.map((item, index) => (
                            <div className="mb-3" key={item.name}>
                                <span
                                    className={`text-[20px] tracking-[1px] ${
                                        index === projectHover ? 'opacity-100' : 'opacity-40'
                                    } transition`}
                                >
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full pl-[200px] lg:pl-[280px] grid grid-rows-1 gap-y-[50px]">
                        {projects.map((item) => (
                            <MouseFollowArea key={item.name} className="h-[550px]">
                                <div className="rounded-[32px] flex justify-center overflow-hidden relative project-area h-full">
                                    <img
                                        src={item.image}
                                        alt="project detail"
                                        className="object-cover w-full h-full max-w-[unset]"
                                    />
                                </div>
                            </MouseFollowArea>
                        ))}
                    </div>
                </div>
            </section>

            <section
                className="md:hidden w-screen transition-all duration-[500ms] mask-vertical-mobile"
                style={{
                    background: projects[projectHover].background,
                }}
            >
                <div className="max-w-[1320px] mx-auto relative px-8 pt-[80px] pb-[100px]">
                    <div
                        className="absolute bottom-[40px] w-full overflow-x-scroll hide-scrollbar touch-none"
                        ref={projectListRef}
                    >
                        <div className={`flex items-center w-max pr-8`}>
                            {projects.map((item, index) => (
                                <div className="mr-8" key={item.name}>
                                    <span
                                        className={`text-[20px] tracking-[1px] ${
                                            index === projectHover ? 'opacity-100' : 'opacity-40'
                                        } transition`}
                                    >
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full overflow-x-scroll hide-scrollbar mask-horizontal" ref={projectMobileRef}>
                        <div className="flex items-center w-max">
                            {projects.map((item) => (
                                <MouseFollowArea key={item.name} className="w-[70vw] h-[70vw] mx-[3vw]">
                                    <div className="rounded-[5vw] flex justify-center overflow-hidden relative project-area w-full h-full">
                                        <img
                                            src={item.image}
                                            alt="project detail"
                                            className="object-cover max-w-[unset]"
                                        />
                                    </div>
                                </MouseFollowArea>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row md:items-center pt-[75px] pb-[75px] md:pt-[200px] md:pb-[150px]">
                    <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large basis-full flex-grow flex-shrink md:tracking-[6px]">
                        TRUSTED
                        <br />
                        <ArrowRightIcon
                            width={windowWidth > 768 ? 50 : 32}
                            height={windowWidth > 768 ? 25 : 16}
                            className="inline mb-2 mr-2 md:mb-5 md:mr-4 rotate-[90deg] lg:rotate-0"
                        />
                        BY
                    </h1>
                    <TrustedBy className="-mx-12 mt-8 md:mx-0 lg:mt-0" />
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div
                    className="max-w-[1120px] mx-auto md:grid md:grid-cols-2 gap-x-[40px] lg:gap-x-[120px] my-[50px] mb-[100px] md:mb-[200px] relative"
                    ref={serviceContainerRef}
                >
                    <div className="relative h-0 pb-[100%] hidden md:block">
                        <div
                            className={`absolute rounded-full w-full h-full border-[2px] transition ${
                                serviceHover === 2 ? 'border-pink box-shadow-pink' : 'border-gray-500'
                            }`}
                        >
                            <div className="w-full h-[33%] flex items-center justify-center">
                                <p
                                    className={`text-[20px] transition ${
                                        serviceHover === 2 ? 'text-pink text-shadow-pink' : 'text-gray-500'
                                    }`}
                                >
                                    {t('home.grow')}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`absolute rounded-full w-[66.6%] h-[66.6%] bottom-0 left-[16.6%] border-[2px] transition ${
                                serviceHover === 1 ? 'border-pink box-shadow-pink' : 'border-gray-500'
                            }`}
                        >
                            <div className="w-full h-[50%] flex items-center justify-center">
                                <p
                                    className={`text-[20px] transition ${
                                        serviceHover === 1 ? 'text-pink text-shadow-pink' : 'text-gray-500'
                                    }`}
                                >
                                    {t('home.create')}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`absolute rounded-full w-[33.3%] h-[33.3%] bottom-0 left-[33.3%] border-[2px] transition ${
                                serviceHover === 0 ? 'border-pink box-shadow-pink' : 'border-gray-500'
                            }`}
                        >
                            <div className="w-full h-full flex items-center justify-center">
                                <p
                                    className={`text-[20px] transition ${
                                        serviceHover === 0 ? 'text-pink text-shadow-pink' : 'text-gray-500'
                                    }`}
                                >
                                    {t('home.devise')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="overflow-y-scroll h-[60vh] md:h-[500px] custom-scrollbar mask-vertical-1"
                        ref={serviceRef}
                    >
                        <div className="flex flex-col py-4 md:py-12">
                            {services.map((item, index) => (
                                <div
                                    className={`${index > 0 ? 'mt-6' : ''}`}
                                    key={item.label}
                                    ref={
                                        item.label === 'Branding'
                                            ? createRef
                                            : item.label === 'KOL Management'
                                            ? growRef
                                            : null
                                    }
                                >
                                    <p className="text-[20px]">{item.label}</p>
                                    <p className="text-[14px] mt-4">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="absolute w-[4px] h-full top-0 right-[2px] bg-[#333333]" />
                    <div
                        className="absolute w-[8px] h-[8px] top-0 right-0 bg-pink rounded-full transition-all"
                        style={{
                            top: sliderPos,
                        }}
                    /> */}
                </div>
            </section>

            <BookDiscovery />

            <Footer />
        </div>
    );
};

export default Home;
