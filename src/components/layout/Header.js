import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { useWidth } from '../../hooks';
import Logo from '../../assets/logo/x8c.svg';
import { Cross, Direction, Discord, Hamburger, Linkedin, Minus, Plus, Telegram, Twitter } from '../../assets/icons';
import { navigation } from '../../utils/constants';
import { ExternalLink } from '../reusable';
import { useTranslation } from 'react-i18next';

const SPMenu = ({ isOpen, changeStatus }) => {
    const { t } = useTranslation();
    const windowWidth = useWidth();
    const [subOpened, setSubOpen] = useState(false);
    const [openedIndex, setOpenedIndex] = useState(-1);

    useEffect(() => {
        if (!isOpen) return;

        if (windowWidth > 768) closeSPMenu();
        // eslint-disable-next-line
    }, [windowWidth, isOpen]);

    const closeSPMenu = () => {
        setOpenedIndex(-1);
        setSubOpen(false);
        changeStatus();
    };

    return (
        <div
            className={`${
                isOpen ? 'top-0' : 'top-[-100vh]'
            } sp-menu-wrapper transition-all duration-[.5s] ml-[-2rem] fixed w-screen h-screen hide-scrollbar overflow-y-scroll bg-black px-16 flex flex-col`}
        >
            <div className={`flex justify-between items-center min-h-[80px] mx-[-2rem]`}>
                <Link to="/" className="unselectable">
                    <img src={Logo} alt="logo" />
                </Link>
                <Cross className="cursor-pointer" onClick={(e) => closeSPMenu()} />
            </div>
            <div className="flex flex-col gap-6 pt-16 w-max mx-auto">
                {navigation.map((item) => (
                    <div key={item.label}>
                        <div
                            className="cursor-pointer flex items-center menu-over"
                            onClick={(e) => {
                                if (!item?.children) return;
                                setSubOpen((prev) => !prev);
                                setOpenedIndex(-1);
                            }}
                        >
                            <a href={item.to}>
                                <span className={`text-[28px] ${item?.children && subOpened ? 'text-[#FF006C]' : ''}`}>
                                    {item.label}
                                </span>
                            </a>
                            {item?.children && (
                                <>
                                    <Direction
                                        className={`ml-2 ${subOpened ? 'rotate-0' : 'rotate-180'}`}
                                        width={14}
                                        height={14}
                                        stroke={4}
                                        fill={item?.children && subOpened ? '#FF006C' : 'white'}
                                    />
                                </>
                            )}
                        </div>
                        {item?.children && (
                            <div
                                className={`flex flex-col transition-all overflow-hidden duration-[.5s] ${
                                    subOpened ? `opacity-1` : 'opacity-0'
                                }`}
                                style={{
                                    maxHeight: subOpened ? 400 : 0,
                                }}
                            >
                                {item.children.map((children, index) => (
                                    <div className="flex flex-col flex-1 mt-4 mx-8" key={children.label}>
                                        <div
                                            className="flex justify-between mb-4"
                                            onClick={(e) => setOpenedIndex((prev) => (prev === index ? -1 : index))}
                                        >
                                            <span
                                                className={`text-[20px] cursor-pointer ${
                                                    index === openedIndex ? '' : 'text-gray-400'
                                                }`}
                                            >
                                                {children.label.toUpperCase()}
                                            </span>
                                            {index === openedIndex ? (
                                                <Minus width={18} height={18} className="cursor-pointer" />
                                            ) : (
                                                <Plus width={18} height={18} className="cursor-pointer" />
                                            )}
                                        </div>
                                        <div
                                            className={`flex flex-col transition-all overflow-hidden duration-[.5s] ${
                                                index === openedIndex ? `opacity-1` : 'opacity-0'
                                            }`}
                                            style={{
                                                maxHeight: index === openedIndex ? children.submenu.length * 35 : 0,
                                            }}
                                        >
                                            {children.submenu.map((sub) => (
                                                <span
                                                    className="mt-2 ml-2 cursor-pointer hover:text-[#FF006C] transition text-[16px]"
                                                    key={sub.label}
                                                >
                                                    <a href={sub.to}>{sub.label}</a>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-6 pb-6 mt-auto -mx-8 mobile:mx-0">
                <div className="flex justify-center mt-16 gap-x-8">
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
                <div className="flex justify-center mt-8 gap-x-8">
                    <ExternalLink to="policy" className="cursor-pointer">
                        <span className="text-gray-400">{t('header.privacy.policy')}</span>
                    </ExternalLink>
                    <ExternalLink to="terms" className="cursor-pointer">
                        <span className="text-gray-400">{t('header.terms.conditions')}</span>
                    </ExternalLink>
                </div>
                <div className="flex justify-center text-gray-400">
                    A part of&nbsp;
                    <ExternalLink className="underline" to="https://faculty.group">
                        Faculty Group
                    </ExternalLink>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    // const { t } = useTranslation();
    const [isSPOpen, setOpen] = useState(false);
    const isContact = window.location.pathname === '/contact';

    const closeSPMenu = () => {
        setOpen(false);
    };

    return (
        <div
            className={`fixed md:relative z-[100] w-screen px-8 md:px-5 ${
                isContact ? '' : 'bg-black'
            } menu-wrapper top-0`}
        >
            <div className={`max-w-[1280px] h-[80px] mx-auto flex justify-between items-center transition`}>
                <Link to="/" className="unselectable">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="hidden md:flex items-center">
                    {navigation.map((item) => (
                        <div className="ml-10 cursor-pointer flex items-center menu-over" key={item.label}>
                            <a className="py-[28px]" href={item.to}>
                                <span>{item.label}</span>
                            </a>
                            {item?.children && (
                                <>
                                    <Direction className="ml-2 rotate-180" width={14} height={14} stroke={4} />
                                    <div
                                        className={`absolute right-[-280px] w-[670px] top-[80px] ${
                                            isContact ? 'bg-gray-300' : 'bg-black'
                                        } sub-menu-wrapper rounded-b-2xl`}
                                    >
                                        <div className="flex pt-4 pb-12 px-12">
                                            {item.children.map((children) => (
                                                <div className="flex flex-col flex-1" key={children.label}>
                                                    <span className="mb-4 text-gray-400">{children.label}</span>
                                                    {children.submenu.map((sub) => (
                                                        <span
                                                            className="mt-2 hover:text-[#FF006C] transition"
                                                            key={sub.label}
                                                        >
                                                            <a href={sub.to}>{sub.label}</a>
                                                        </span>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="md:hidden">
                    <Hamburger className="cursor-pointer" onClick={(e) => setOpen(true)} />
                </div>
            </div>
            <SPMenu isOpen={isSPOpen} changeStatus={closeSPMenu} />
        </div>
    );
};

export default Header;
