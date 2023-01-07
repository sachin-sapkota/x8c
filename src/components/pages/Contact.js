import { useState } from 'react';
import { Header } from '../layout';
import BackImage from '../../assets/image/back5.png';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, Direction, Discord, Linkedin, Telegram, Twitter } from '../../assets/icons';
import { selectOptions } from '../../utils/constants';
import { ExternalLink, PrimaryButton } from '../reusable';
import { useWidth } from '../../hooks';

const Contact = () => {
    const { t } = useTranslation();
    const windowWidth = useWidth();
    const [selectedOption, setOption] = useState();
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className="w-screen min-h-screen relative">
            <Header />
            <section className="w-screen min-h-screen lg:h-screen lg:-mt-[80px] lg:pt-[80px] relative bg-black px-8 md:px-5 z-[5]">
                <div className="flex flex-col lg:flex-row h-full max-w-[1280px] mx-auto">
                    <div className="relative w-full h-full flex justify-center lg:block">
                        <img
                            src={BackImage}
                            alt="map background"
                            className="max-w-[unset] h-[70vh] object-center lg:max-w-[100vw] lg:h-full lg:object-right object-cover relative lg:absolute lg:right-0 z-10"
                        />
                        <div className="hidden lg:flex absolute z-20 bottom-[60px] items-center justify-between w-full pr-[100px]">
                            <div className="flex flex-col">
                                <span className="text-pink">{t('contact.email.us')}</span>
                                <ExternalLink to={`mailto://${t('contact.email')}`} className="text-[24px]">
                                    {t('contact.email')}
                                </ExternalLink>
                            </div>
                            <div className="flex gap-x-8">
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Telegram />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Twitter />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Discord />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Linkedin />
                                </ExternalLink>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[600px] min-w-[80vw] mx-auto lg:max-w-full lg:min-w-[580px] xl:min-w-[620px] h-full relative flex flex-col justify-center lg:pl-[70px] xl:pl-[110px]">
                        <div className="w-full relative z-10">
                            <h1 className="text-[40px] leading-[44px] mobile:text-[46px] mobile:leading[54px] tracking-[2px] md:text-large md:tracking-[4px]">
                                GET IN
                                <br />
                                <ArrowRightIcon
                                    width={windowWidth > 768 ? 50 : 32}
                                    height={windowWidth > 768 ? 25 : 16}
                                    fill="#ff006c"
                                    className="inline mb-5 ml-4 mr-4"
                                />{' '}
                                TOUCH
                            </h1>
                        </div>
                        <div className="relative z-20">
                            <div
                                className={`relative mt-4 cursor-pointer border-b-[2px] border-[#FFFFFF20]`}
                                onClick={() => setCollapsed((prev) => !prev)}
                            >
                                <p className="text-gray-400 text-[20px] py-[18px]">{selectedOption ?? 'Select'}</p>
                                <Direction
                                    className={`absolute right-0 top-6 transition ${
                                        !collapsed ? 'rotate-0' : 'rotate-180'
                                    }`}
                                    width={24}
                                    height={24}
                                    stroke={2}
                                    fill={'#FFFFFF80'}
                                />
                                <div
                                    className={`${
                                        collapsed ? 'max-h-0' : 'max-h-[200px]'
                                    } transition-all overflow-hidden absolute w-full bg-black lg:bg-gray-300 z-20 border-b-[2px] border-[#FFFFFF20]`}
                                >
                                    {selectOptions.map((option) => (
                                        <div
                                            className="py-[18px] border-t-[2px] border-[#FFFFFF20] hover:text-pink custom-select-option transition bg-black lg:bg-gray-300"
                                            key={option}
                                            onClick={() => setOption(option)}
                                        >
                                            <ArrowRightIcon
                                                className="inline mb-1 mr-4 transition-all"
                                                width={24}
                                                height={12}
                                            />
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end mt-[40px]">
                                <PrimaryButton text={t('btn.next')} theme="pink" />
                            </div>
                        </div>
                        <div className="relative z-10 flex lg:hidden flex-col items-center my-20">
                            <div className="flex gap-x-8">
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Telegram />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Twitter />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Discord />
                                </ExternalLink>
                                <ExternalLink to="#" className="cursor-pointer">
                                    <Linkedin />
                                </ExternalLink>
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <span className="text-pink">{t('contact.email.us')}</span>
                                <ExternalLink to={`mailto://${t('contact.email')}`} className="text-[24px]">
                                    {t('contact.email')}
                                </ExternalLink>
                            </div>
                        </div>
                        <div className="hidden lg:block absolute w-screen h-screen -top-[80px] left-0 bg-gray-300 z-0" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
