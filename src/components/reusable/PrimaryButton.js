import { ArrowRightIcon } from '../../assets/icons';

const PrimaryButton = ({ text, className, clickHandler, theme = 'light', hasArrow = true, ...rest }) => {
    return (
        <button
            className={`md:text-[16px] px-8 py-[12px] rounded-full transition flex items-center btn-primary ${className} ${theme}`}
            onClick={clickHandler}
            {...rest}
        >
            {hasArrow && (
                <div className="relative z-10 mr-4">
                    <ArrowRightIcon
                        width={24}
                        height={24}
                        fill={`${theme === 'light' ? 'white' : theme === 'pink' ? '#ff006c' : 'black'}`}
                    />
                </div>
            )}
            <span className="relative z-10 tracking-[2px]">{text}</span>
        </button>
    );
};

export default PrimaryButton;
