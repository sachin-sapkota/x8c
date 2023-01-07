import { Footer, Header } from '../layout';
import BackImage from '../../assets/image/back2.png';
import { ArrowRightIcon } from '../../assets/icons';
import { BookDiscovery, NumberAnimation, PrimaryButton, TrustedBy } from '../reusable';
import { useWidth } from '../../hooks';
import { numbersInfo, teamInfo } from '../../utils/constants';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const numbersRef = useRef();
    const useNumberRef = useRef(false);
    const windowWidth = useWidth();
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            if (!useNumberRef.current) setOffset(window.pageYOffset);
        };
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!numbersRef.current || useNumberRef.current) return;
        const vh = document.documentElement.clientHeight;

        if (
            numbersRef.current.offsetTop - vh + (windowWidth < 768 ? 300 : 0) <= offset &&
            numbersRef.current.offsetTop - vh + numbersRef.current.clientHeight >= offset
        ) {
            useNumberRef.current = true;
            setOffset(0);
        }
    }, [offset, windowWidth, useNumberRef]);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />

            <section className="w-screen h-screen md:h-[700px] pt-[90px] md:pt-0 px-3 md:px-5 pb-3 md:pb-0">
                <div className="max-w-[1400px] mx-auto h-full overflow-hidden rounded-[32px] relative">
                    <img
                        src={BackImage}
                        alt="background"
                        className="object-cover object-right w-full h-full max-w-[unset]"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-[#13141880] md:from-[#131418] to-transparent mix-blend-multiply isolate" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-[#13141880] md:from-[#131418] to-transparent" />
                    <div className="absolute w-full bottom-12 left-6 md:left-20 md:top-[120px]">
                        <div className="flex flex-col items-end w-fit">
                            <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                LOREM
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; IPSUM SIT
                            </h1>
                            <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                AMET DOLOR
                            </h1>
                        </div>
                        <PrimaryButton text={t('about.meet.team')} className="mt-[60px]" />
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col md:items-center lg:items-start lg:flex-row pt-[80px] pb-[30px] md:pt-[200px] md:pb-[150px]">
                    <h1 className="text-[46px] leading-[54px] tracking-[2px] md:text-large basis-full flex-grow flex-shrink md:tracking-[6px]">
                        ABOUT
                        <br />
                        <ArrowRightIcon
                            width={windowWidth > 768 ? 50 : 32}
                            height={windowWidth > 768 ? 25 : 16}
                            className="inline mb-3 mr-4 md:mb-5 md:mr-8"
                        />
                        US
                    </h1>
                    <div className="pt-8 lg:pt-[180px] max-w-[580px]">
                        <p className="leading-[28px] md:text-[20px] md:leading-[36px] md:tracking-[2px]">
                            {t('about.text')}
                        </p>
                        <div className="flex flex-col md:flex-row md:items-center mt-8 md:mt-16">
                            <PrimaryButton text={t('btn.our.work')} className="w-[70vw] mobile:max-w-[60vw] md:w-fit" />
                            <PrimaryButton
                                text={t('btn.get.in.touch')}
                                className="w-[70vw] mt-5 mobile:max-w-[60vw] md:w-fit md:ml-6 md:mt-0"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-4 md:px-5 pt-[50px] pb-[100px]" ref={numbersRef}>
                <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row">
                    <div className="max-w-[380px]">
                        <h1 className="text-[40px] leading-[42px] md:text-[44px] md:leading-[48px]">
                            WE ARE
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-pink">WINNING</span>{' '}
                            <ArrowRightIcon
                                width={36}
                                height={18}
                                fill="#FF006C"
                                className="inline mb-2 ml-4 rotate-90 lg:rotate-0"
                            />
                        </h1>
                        <p className="md:text-[20px] mt-8">{t('about.winning.text')}</p>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:ml-16">
                        <div className="grid grid-cols-3 gap-x-2 md:gap-x-4">
                            {[0, 1, 2].map((index) => (
                                <NumberAnimation
                                    key={index}
                                    data={numbersInfo[index]}
                                    number={useNumberRef.current ? numbersInfo[index].number : 0}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-x-2 md:gap-x-4 mt-2 md:mt-4">
                            {[3, 4].map((index) => (
                                <NumberAnimation
                                    key={index}
                                    data={numbersInfo[index]}
                                    number={useNumberRef.current ? numbersInfo[index].number : 0}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-4 md:px-5 pt-[50px] pb-[50px] md:pt-[100px] md:pb-[150px]">
                <div className="max-w-[1120px] mx-auto">
                    <h2 className="text-[40px] leading-[44px] text-left mobile:text-center">
                        MEET THE <br className="block mobile:hidden" />
                        <ArrowRightIcon
                            width={32}
                            height={16}
                            className="inline mr-4 mb-2 mobile:mx-4"
                            fill="#ff006c"
                        />{' '}
                        <span className="text-pink">TEAM</span>
                    </h2>
                    <p className="text-left mobile:text-center max-w-[640px] md:text-[20px] mx-auto mt-5">
                        {t('about.meet.team.text')}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 mobile:gap-x-7 gap-y-7 mt-8 mobile:mt-[70px]">
                        {teamInfo.map((member, index) => (
                            <div key={index} className="flex flex-col">
                                <div className="h-[220px] mobile:h-[330px] w-full" style={{ background: member.color }}>
                                    <img src={member.image} alt="team member" className="w-full h-full object-cover" />
                                </div>
                                <span className="text-[16px] mobile:text-[20px] mt-3 mobile:mt-5">{member.name}</span>
                                <span className="text-[14px]" style={{ color: member.color }}>
                                    {member.email}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-screen py-12 bg-[#00FFCE] flex flex-col md:flex-row items-center justify-center">
                <p className="text-[24px] text-black text-center font-semibold">
                    THINK YOU VE GOT <br className="block mobile:hidden" /> WHAT IT{' '}
                    <br className="hidden mobile:block lg:hidden" />
                    TAKES TO <br className="block mobile:hidden" />
                    JOIN THE TEAM?
                </p>
                <PrimaryButton text="VIEW CAREERS" theme="dark" className="mt-8 md:mt-0 md:ml-12" />
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

            <BookDiscovery />

            <Footer />
        </div>
    );
};

export default About;
