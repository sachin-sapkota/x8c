import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../layout';
import BackImage from '../../assets/image/project1.png';
import { BookDiscovery, Carousel, TrustedBy } from '../reusable';
import { ArrowRightIcon } from '../../assets/icons';
import { useWidth } from '../../hooks';
import { projects } from '../../utils/constants';

const statistics = [
    { label: 'Statistic to go here', value: '35 x' },
    { label: 'Statistic to go here', value: '£3,343' },
    { label: 'Statistic to go here', value: '£122,184' },
];

const CaseStudy = () => {
    const { t } = useTranslation();
    const windowWidth = useWidth();

    return (
        <div className="w-screen min-h-screen relative">
            <Header />

            <section className="w-screen h-screen md:h-[350px] pt-[90px] md:pt-0 px-3 md:px-5 pb-3 md:pb-0">
                <div className="max-w-[1400px] mx-auto pb-[30vh] md:pb-0 h-full overflow-hidden rounded-[32px] relative">
                    <img
                        src={BackImage}
                        alt="background"
                        className="relative z-10 object-cover object-right w-full h-full max-w-[unset]"
                    />
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[50px] pb-[100px]">
                <div className="max-w-[1120px] mx-auto flex justify-between">
                    <div className="">
                        <p className="text-[18px] text-pink">
                            <ArrowRightIcon fill="#ff006c" width={20} height={10} className="inline mb-2 mr-2" />
                            HAPEBEAST
                        </p>
                        <h1 className="text-[48px] leading-[54px] tracking-[2px] max-w-[640px] mt-2">
                            {t('case.study.title')}
                        </h1>
                    </div>
                    <div className="text-[18px]">
                        <p className="text-pink">
                            <ArrowRightIcon fill="#ff006c" width={20} height={10} className="inline mb-2 mr-2" />
                            SERVICES
                        </p>
                        <div className="pl-[28px]">
                            <a href="/service" className="mt-2 block whitespace-nowrap transition hover:text-pink">
                                STRATEGY
                            </a>
                            <a href="/service" className="mt-2 block whitespace-nowrap transition hover:text-pink">
                                VALUE PROPOSITION
                            </a>
                            <a href="/service" className="mt-2 block whitespace-nowrap transition hover:text-pink">
                                BRAND ARCHITECTURE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[100px] pb-[100px]">
                <div className="max-w-[1120px] mx-auto flex justify-between gap-x-8">
                    <h1 className="text-[42px] leading-[50px] tracking-[2px] max-w-[480px] text-right">
                        THIS IS AN OPENING
                        <br /> PARAGRAPH ABOUT &nbsp;&nbsp;&nbsp;
                        <br />
                        THE PROJECT
                    </h1>
                    <p className="whitespace-pre-line text-[20px] mt-[200px] max-w-[540px]">
                        {t('case.study.paragraph.text')}
                    </p>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5 pt-[100px] pb-[100px]">
                <div className="max-w-[1120px] mx-auto">
                    <div className="w-full h-[500px] overflow-hidden rounded-[32px]">
                        <img src={BackImage} alt="background" className="object-cover w-full h-full" />
                    </div>
                    <div className="max-w-[580px] mx-auto mt-40">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna. <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna.
                        </p>
                        <div className="grid grid-cols-3 mt-12">
                            {statistics.map((statistic, index) => (
                                <div className="" key={index}>
                                    <p className="text-[32px] text-pink">{statistic.value}</p>
                                    <p className="">{statistic.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-8 mt-40">
                        <div className="col-span-1 h-[340px] overflow-hidden rounded-[20px]">
                            <img src={BackImage} alt="background" className="object-cover w-full h-full" />
                        </div>
                        <div className="col-span-2 h-[340px] overflow-hidden rounded-[20px]">
                            <img src={BackImage} alt="background" className="object-cover w-full h-full" />
                        </div>
                        <div className="col-span-2 h-[340px] overflow-hidden rounded-[20px]">
                            <img src={BackImage} alt="background" className="object-cover w-full h-full" />
                        </div>
                        <div className="col-span-1 h-[340px] overflow-hidden rounded-[20px]">
                            <img src={BackImage} alt="background" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>

            <Carousel />

            <section className="w-screen px-8 md:px-5 pt-[240px] pb-[50px] md:pt-[120px] md:pb-[120px]">
                <div className="max-w-[1120px] mx-auto relative pb-[50px] md:pb-[100px]">
                    <div
                        className={`overflow-x-scroll mask-horizontal-1 ${
                            windowWidth > 768 ? 'custom-scrollbar custom-scrollbar-horizontal' : 'hide-scrollbar'
                        } md:-mx-[60px] relative z-20 md:pb-[100px]`}
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
                            RELATED
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;PROJECTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h2>
                        <ArrowRightIcon
                            fill="#ff006c"
                            width={50}
                            height={25}
                            className="mt-8 rotate-90 mb-3 md:mb-0 md:rotate-0"
                        />
                    </div>
                </div>
            </section>

            <section className="w-screen px-8 md:px-5">
                <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row md:items-center pb-[75px] md:pb-[150px]">
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

export default CaseStudy;
