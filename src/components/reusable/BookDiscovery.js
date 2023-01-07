import PrimaryButton from './PrimaryButton';

const BookDiscovery = ({ className }) => {
    return (
        <section
            className={`w-screen py-12 bg-[#ff006c] flex flex-col md:flex-row items-center justify-center ${className}`}
        >
            <p className="text-[24px] text-black text-center font-semibold">
                BOOK IN A <br className="block mobile:hidden" />
                DISCOVERY TODAY
            </p>
            <PrimaryButton text="BOOK DISCOVERY" theme="dark" className="mt-8 md:mt-0 md:ml-12" />
        </section>
    );
};

export default BookDiscovery;
