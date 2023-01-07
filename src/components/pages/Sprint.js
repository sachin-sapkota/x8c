import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../layout';
import BackImage from '../../assets/image/back7.png';
import ProjectImage1 from '../../assets/image/project1.png';
import ProjectImage2 from '../../assets/image/project2.png';
import LetterEffect from '../../assets/image/letter-effect.png';
import { BookDiscovery, MouseFollowArea, PrimaryButton } from '../reusable';
import { ArrowRightIcon } from '../../assets/icons';
import { brandSprintInfo, productSprintInfo } from '../../utils/constants';
import { useWidth } from '../../hooks';

var offset = 0;

const Sprint = () => {
    const benefitRef = useRef();
    const productRef = useRef();
    const windowWidth = useWidth();
    const [animate, setAnimate] = useState(false);
    const [useWhite, setUseWhite] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        const timerId = setInterval(() => {
            offset = window.pageYOffset;
            const vh = document.documentElement.clientHeight;
            const vw = document.documentElement.clientWidth;

            setAnimate(offset + vh + (vw > 768 ? 200 : -200) >= benefitRef.current.offsetTop);
            setUseWhite(offset + vh - (vw > 768 ? 400 : 200) >= productRef.current.offsetTop);
        }, 100);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />

            <section className="w-screen h-screen pt-[90px] md:h-[700px] px-3 md:pt-0 md:px-5 pb-3 md:pb-0">
                <div className="max-w-[1400px] mx-auto h-full overflow-hidden rounded-[32px] relative">
                    <img
                        src={BackImage}
                        alt="background"
                        className="object-cover object-right w-full h-full max-w-[unset] relative z-20"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1a1b2050] mix-blend-multiply isolate z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[#1a1b20] z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#b9b9b9] to-[#5d5d5d] z-[25] mix-blend-multiply isolate block lg:hidden" />
                    <div className="absolute w-full bottom-12 left-6 bottom-8 md:left-20 md:top-[100px] z-30">
                        <div className="flex flex-col items-end w-fit">
                            <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FROM
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONCEPT <br />
                                TO MARKET
                                <br />
                                <span className="text-pink relative ml-8">
                                    <div className="absolute w-full h-full flex items-center top-0 left-0">
                                        <img
                                            src={LetterEffect}
                                            alt="letter effect background"
                                            className=" w-full h-[60px] mt-[5px]"
                                        />
                                    </div>
                                    <ArrowRightIcon
                                        className="inline mb-5 mx-4"
                                        width={50}
                                        height={25}
                                        fill="#ff006c"
                                    />
                                    AT PACE
                                </span>
                            </h1>
                        </div>
                        <div className="flex gap-x-8 flex-col md:flex-row max-w-[270px] md:max-w-full mt-[50px]">
                            <PrimaryButton text={t('sprint.brand')} className="" />
                            <PrimaryButton text={t('sprint.product')} className="mt-8 md:mt-0" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 py-[50px] md:py-[200px]" ref={benefitRef}>
                <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row">
                    <div className="grow basis-full">
                        <h1 className="text-[46px] leading-[54px] tracking-[2px] lg:text-large lg:leading-[100px] lg:tracking-[4px]">
                            HOW IT
                            <br />
                            <ArrowRightIcon
                                className="inline mb-3 mr-4"
                                width={windowWidth > 768 ? 50 : 32}
                                height={windowWidth > 768 ? 25 : 16}
                            />
                            WORKS
                        </h1>
                        <p className="hidden md:block mt-16 text-[20px] leading-[32px] max-w-[520px]">
                            {t('sprint.how.it.works.text')}
                        </p>
                    </div>
                    <div className="flex items-center flex-col w-full mt-8 md:mt-0">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <div
                                className={`rounded-full bg-[#FFFFFF16] flex items-center p-[14px] mb-4 transition w-full max-w-[400px] ${
                                    animate ? 'opacity-100' : 'opacity-0 translate-x-8'
                                }`}
                                key={index}
                                style={{
                                    transitionDelay: `${index * 150}ms`,
                                }}
                            >
                                <div className="min-w-[50px] min-h-[50px] rounded-full bg-pink box-shadow-pink flex items-center justify-center">
                                    <span className="text-black font-bold">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                </div>
                                <p className="text-[16px] md:text-[20px] text-center w-full md:w-[300px]">
                                    Benefit of Sprints Here
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-screen px-4 md:px-5 pt-[50px] pb-[50px] md:pb-[150px]">
                <div className="max-w-[1120px] mx-auto">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 xl:gap-x-24">
                        <div className="relative">
                            <h2 className="text-[24px] md:text-[42px]">{t('sprint.brand')}</h2>
                            <ArrowRightIcon
                                fill="#ff006c"
                                width={32}
                                height={16}
                                className="absolute right-0 top-2 rotate-90 block md:hidden"
                            />
                            <p className="whitespace-pre-line text-[14px] mt-6 leading-[22px] md:mt-[36px] md:leading-[26px]">
                                {t('sprint.brand.text')}
                            </p>
                            <div className="block md:hidden relative w-full h-[90vw] max-w-[400px] max-h-[400px] mt-5">
                                <img
                                    src={ProjectImage1}
                                    alt="project avatar"
                                    className="object-cover w-full h-full rounded-[20px]"
                                />
                                <div className="absolute w-full h-full bg-gradient-to-b from-transparent to-[#505050] mix-blend-multiply isolate left-0 top-0" />
                                <div className="absolute left-8 bottom-8">
                                    <a className="" href="/case-study">
                                        {t('case.study')}
                                        <ArrowRightIcon className="mb-2 ml-4 inline" width={24} height={12} />
                                    </a>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-10 grid grid-cols-3 gap-x-2 md:gap-x-4">
                                {brandSprintInfo.map((item) => (
                                    <div
                                        className="flex flex-col items-center justify-center md:p-4 rounded-[10px] bg-[#FFFFFF16] h-[100px]"
                                        key={item.title}
                                    >
                                        <span className="text-[14px] lg:text-[16px] text-center">{item.title}</span>
                                        <span className="mt-2 lg:text-[20px] text-pink">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="/case-study">
                            <MouseFollowArea className="h-full hidden md:block" isSmall={true}>
                                <img
                                    src={ProjectImage1}
                                    alt="project avatar"
                                    className="object-cover w-full h-full rounded-[20px]"
                                />
                            </MouseFollowArea>
                        </a>
                    </div>
                    <PrimaryButton text={t('sprint.brand.book')} className="mx-auto mt-10 md:mt-[110px]" />
                    <p className="text-center text-[12px] opacity-50 mt-6">{t('sprint.brand.lead.time')}</p>
                </div>
            </section>

            <section
                className={`w-screen px-4 md:px-5 pt-[100px] pb-[50px] md:pt-[250px] md:pb-[200px] ${
                    useWhite ? 'bg-[#E9E9E9] text-black' : ''
                } mask-vertical-4 md:mask-vertical-3 transition`}
                ref={productRef}
            >
                <div className="max-w-[1120px] mx-auto">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 xl:gap-x-24">
                        <div className="relative">
                            <h2 className="text-[24px] md:text-[42px]">{t('sprint.product')}</h2>
                            <ArrowRightIcon
                                fill="#ff006c"
                                width={32}
                                height={16}
                                className="absolute right-0 top-2 rotate-90 block md:hidden"
                            />
                            <p className="whitespace-pre-line text-[14px] mt-6 leading-[22px] md:mt-[36px] md:leading-[26px]">
                                {t('sprint.product.text')}
                            </p>
                            <div className="block md:hidden relative w-full h-[90vw] max-w-[400px] max-h-[400px] mt-5">
                                <img
                                    src={ProjectImage2}
                                    alt="project avatar"
                                    className="object-cover w-full h-full rounded-[20px]"
                                />
                                <div className="absolute left-8 bottom-8">
                                    <a className="text-white" href="/case-study">
                                        {t('case.study')}
                                        <ArrowRightIcon className="mb-2 ml-4 inline" width={24} height={12} />
                                    </a>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-10 grid grid-cols-3 gap-x-4">
                                {productSprintInfo.map((item) => (
                                    <div
                                        className="flex flex-col items-center justify-center md:p-4 rounded-[10px] bg-[#FFFFFF16] h-[100px]"
                                        key={item.title}
                                    >
                                        <span className="text-[14px] lg:text-[16px] text-center">{item.title}</span>
                                        <span className={`mt-2 lg:text-[20px] ${useWhite ? '' : 'text-pink'}`}>
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="/case-study">
                            <MouseFollowArea className="h-full hidden md:block" isSmall={true}>
                                <img
                                    src={ProjectImage2}
                                    alt="project avatar"
                                    className="object-cover w-full h-full rounded-[20px]"
                                />
                            </MouseFollowArea>
                        </a>
                    </div>
                    <PrimaryButton
                        text={t('sprint.product.book')}
                        className="mx-auto mt-10 md:mt-[110px]"
                        theme={useWhite ? 'dark' : 'light'}
                    />
                    <p className="text-center text-[12px] opacity-50 mt-6">{t('sprint.product.lead.time')}</p>
                </div>
            </section>

            <BookDiscovery />

            <Footer />
        </div>
    );
};

export default Sprint;
