import { ExternalLink, PrimaryButton } from '../reusable';
import { ArrowRightIcon, Direction, Discord, Linkedin, Telegram, Twitter } from '../../assets/icons';
import { useTranslation } from 'react-i18next';
import { footerNavigation, selectOptions } from '../../utils/constants';
import { useState } from 'react';

const Footer = () => {
    const { t } = useTranslation();
    const [selectedOption, setOption] = useState();
    const [collapsed, setCollapsed] = useState(true);
    const [mobileCollapsed, setMobileCollapsed] = useState(true);

    return (
        <footer className="w-screen pb-[40px] md:px-5 md:py-[120px]">
            <div className="max-w-[1120px] mx-auto">
                <div className="flex flex-col-reverse lg:flex-row">
                    <div className="flex flex-col max-w-[500px] mx-auto">
                        <div className="hidden md:flex flex-col items-end lg:pr-20 w-max mx-auto mt-8 lg:mt-0">
                            <h1 className="text-[60px] leading-[60px] tracking-[2px]">
                                YOUR
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; PROJECT
                            </h1>
                            <h1 className="text-[60px] leading-[60px] tracking-[2px]">OUR WORLD</h1>
                        </div>
                        <div className="hidden md:grid grid-cols-2 mt-[75px]">
                            {footerNavigation.map((column, index) => (
                                <div className="grid grid-cols-1 gap-y-2" key={index}>
                                    {column.map((item) => (
                                        <a key={item.label} href={item.to} className="block text-gray-400 text-[14px]">
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="block md:hidden p-8 relative text-[20px] max-w-[380px] mx-auto w-screen">
                        <p
                            className="text-pink py-4 border-b-[1px] border-[#FFFFFF40] relative"
                            onClick={() => setMobileCollapsed((prev) => !prev)}
                        >
                            {t('footer.site.structure')}
                            <Direction
                                className={`absolute right-0 top-4 transition ${
                                    mobileCollapsed ? 'rotate-0' : 'rotate-180'
                                }`}
                                width={24}
                                height={24}
                                stroke={2}
                                fill={'#FF006C'}
                            />
                        </p>
                        <div
                            className={`${
                                mobileCollapsed ? 'max-h-0' : 'max-h-[650px]'
                            } transition-all overflow-hidden`}
                        >
                            {footerNavigation.map((column) =>
                                column.map((item) => (
                                    <a
                                        href={item.to}
                                        className="text-[14px] block py-[4px] hover:text-pink transition text-gray-400"
                                        key={item.label}
                                    >
                                        {item.label}
                                    </a>
                                ))
                            )}
                        </div>
                    </div>
                    <div className="bg-[#131418] md:rounded-[32px] w-full h-fit lg:ml-4 px-12 md:px-20 py-12 md:py-[56px]">
                        <h2 className="text-[40px] leading-[44px] tracking-[2px]">
                            HELLO!
                            <br />
                            <ArrowRightIcon className="inline mb-2 mr-4" width={24} height={12} />
                            HOW CAN WE HELP?
                        </h2>
                        <p className="text-pink text-[24px] mt-[40px]">{t('footer.looking.to')}</p>
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
                                className={`${collapsed ? 'max-h-0' : 'max-h-[200px]'} transition-all overflow-hidden`}
                            >
                                {selectOptions.map((option) => (
                                    <div
                                        className="py-[18px] border-t-[1px] border-[#FFFFFF20] hover:text-pink custom-select-option transition"
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
                </div>
                <div className="flex flex-col-reverse gap-y-4 md:flex-row items-center justify-between mt-8 md:mt-[55px]">
                    <div className="flex items-center gap-y-4 flex-col-reverse md:flex-row gap-x-12">
                        <p className="text-gray-400">
                            A part of&nbsp;
                            <ExternalLink className="underline" to="https://faculty.group">
                                Faculty Group
                            </ExternalLink>
                        </p>
                        <div className="flex flex-row gap-x-8">
                            <ExternalLink to="policy" className="cursor-pointer">
                                <span className="text-gray-400">{t('header.privacy.policy')}</span>
                            </ExternalLink>
                            <ExternalLink to="terms" className="cursor-pointer">
                                <span className="text-gray-400">{t('header.terms.conditions')}</span>
                            </ExternalLink>
                        </div>
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
        </footer>
    );
};

export default Footer;
