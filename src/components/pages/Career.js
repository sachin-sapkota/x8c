import { useEffect, useState } from 'react';
import { Footer, Header } from '../layout';
import BackImage from '../../assets/image/back6.png';
import { useTranslation } from 'react-i18next';
import { BookDiscovery, Carousel } from '../reusable';
import { ArrowRightIcon, Direction } from '../../assets/icons';
import { careerCategories, careerParallax, careerPositions } from '../../utils/constants';

var offset = 0;

const Career = () => {
    const { t } = useTranslation();
    const [parallax, setParallax] = useState(0);
    const [collapsed, setCollapsed] = useState(true);
    const [category, setCategory] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (window.pageYOffset === offset) return;

            offset = window.pageYOffset;
            if (offset < 2000) {
                setParallax((offset * 300) / 2000 - 120);
            }
        }, 100);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />

            <section className="w-screen h-screen md:h-[700px] pt-[90px] md:pt-0 px-3 md:px-5 pb-3 md:pb-0 pt-[80px] md:pt-0">
                <div className="max-w-[1400px] mx-auto h-full overflow-hidden rounded-[32px] relative">
                    <img
                        src={BackImage}
                        alt="background"
                        className="object-cover object-center w-full h-full max-w-[unset]"
                    />
                    <div className="absolute w-full bottom-12 left-6 md:left-20 md:bottom-[120px] z-20">
                        <div className="flex flex-col items-end w-fit">
                            <h1 className="hidden md:block text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                &nbsp;&nbsp;&nbsp;&nbsp;JOBS
                                <br />
                                CAREERS
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;AT
                                <ArrowRightIcon
                                    width={50}
                                    height={25}
                                    fill="#ff006c"
                                    className="inline mb-5 ml-8 mr-2"
                                />{' '}
                                <span className="text-pink">X8C</span>
                            </h1>
                            <h1 className="block md:hidden text-[46px] leading-[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                &nbsp;&nbsp;JOBS
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CAREERS
                                <br />
                                AT
                                <ArrowRightIcon
                                    width={50}
                                    height={25}
                                    fill="#ff006c"
                                    className="inline mb-5 ml-8 mr-2"
                                />{' '}
                                <span className="text-pink">X8C</span>
                            </h1>
                        </div>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-[#b9b9b9] to-[#5d5d5d] top-0 left-0 mix-blend-multiply isolate" />
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[60px] mb-[60px] md:pt-[200px] md:mb-[150px] mask-vertical-2">
                <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2">
                    <div className="max-w-[500px]">
                        <h2 className="text-[42px] tracking-[2px]">{t('career.why.us')}</h2>
                        <p className="mt-8 md:mt-12 text-[14px] leading-[24px] md:text-[20px] md:leading-[32px] whitespace-pre-line">
                            {t('career.why.us.text')}
                        </p>
                        {/* <ul className="list-disc pl-4 md:pl-6 text-[14px] leading-[24px] md:text-[20px] md:leading-[32px] mt-4">
                            {careerWhyUS.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul> */}
                    </div>
                    <div
                        className="grid grid-cols-2 gap-4 md:gap-8 pt-[80px] relative transition-all duration-500 mt-12 md:mt-0"
                        style={{
                            top: -parallax,
                        }}
                    >
                        {careerParallax.map((item, index) => (
                            <div
                                className={`relative ${
                                    index % 2 ? '-top-16 md:-top-20' : ''
                                } w-full h-[240px] mobile:h-[280px] md:h-[320px] rounded-[20px] overflow-hidden`}
                                key={item}
                            >
                                <img src={item} alt="career parallax" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 bg-gray-300 py-[50px] md:py-[150px]">
                <div className="max-w-[1120px] mx-auto">
                    <h2 className="text-[32px] leading-[40px] tracking-[2px] md:text-[42px] md:leading-[48px] md:tracking-[4px]">
                        OPEN
                        <br />
                        <ArrowRightIcon width={40} height={20} className="inline mb-3 mr-4" />
                        POSITIONS
                    </h2>
                    <p className="text-[14px] md:text-[20px] max-w-[500px] mt-6 md:mt-8">
                        {t('career.open.positions.text')}
                    </p>
                    <div className="flex flex-col md:flex-row w-full mt-[50px]">
                        <div className="hidden md:block min-w-[200px] border-r-[1px] border-gray-200">
                            {careerCategories.map((item) => (
                                <div className="leading-[32px] cursor-pointer hover:text-pink transition" key={item}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="relative z-20 block md:hidden">
                            <div
                                className={`relative mt-4 cursor-pointer border-b-[2px] border-[#FFFFFF20]`}
                                onClick={() => setCollapsed((prev) => !prev)}
                            >
                                <p className="text-pink py-2 px-4 border-t-[2px] border-[#FFFFFF20]">
                                    {careerCategories[category]}
                                </p>
                                <Direction
                                    className={`absolute right-0 top-3 transition ${
                                        !collapsed ? 'rotate-0' : 'rotate-180'
                                    }`}
                                    width={24}
                                    height={24}
                                    stroke={2}
                                    fill={'#ff006c'}
                                />
                                <div
                                    className={`${
                                        collapsed ? 'max-h-0' : 'max-h-[250px] border-b-[2px] border-[#FFFFFF20]'
                                    } transition-all overflow-hidden absolute w-full bg-gray-300 z-20 `}
                                >
                                    {careerCategories.map((option, index) =>
                                        index !== category ? (
                                            <div
                                                className="py-2 px-4 border-t-[2px] border-[#FFFFFF20] text-[14px] hover:text-pink custom-select-option transition bg-gray-300"
                                                key={option}
                                                onClick={() => setCategory(index)}
                                            >
                                                {option}
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex w-full flex-col md:pl-16">
                            {careerPositions.map((item) => (
                                <div className="grid grid-cols-12 py-6 border-t-[1px] border-gray-200" key={item.title}>
                                    <div className="col-span-4">{item.title}</div>
                                    <div className="col-span-3 opacity-40">{item.location}</div>
                                    <div className="col-span-2 opacity-40">{item.type}</div>
                                    <div className="col-span-2 opacity-40">{item.salary}</div>
                                    <div className="col-span-1 flex items-center justify-end cursor-pointer transition hover:opacity-40">
                                        <ArrowRightIcon fill="#ff006c" width={20} height={10} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex md:hidden w-full flex-col md:pl-16">
                            {careerPositions.map((item) => (
                                <div
                                    className="text-[14px] grid grid-cols-12 py-6 border-b-[1px] border-gray-200"
                                    key={item.title}
                                >
                                    <div className="col-span-10">
                                        <div className="">{item.title}</div>
                                        <div className="flex items-center gap-x-4">
                                            <div className="opacity-40">{item.location}</div>
                                            <div className="opacity-40">{item.type}</div>
                                        </div>
                                        <div className="opacity-40">{item.salary}</div>
                                    </div>
                                    <div className="col-span-2 flex items-start justify-end cursor-pointer transition hover:opacity-40 pt-4">
                                        <ArrowRightIcon fill="#ff006c" width={20} height={10} />
                                    </div>
                                </div>
                            ))}
                            <div className="opacity-40 underline text-[14px] w-fit mx-auto mt-8">
                                {t('career.load.more')}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

            <BookDiscovery />

            <Footer />
        </div>
    );
};

export default Career;
