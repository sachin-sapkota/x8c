import Marquee from 'react-fast-marquee';
import SpotifySvg from '../../assets/svg/spotify.svg';
import NetflixSvg from '../../assets/svg/netflix.svg';
import PaypalSvg from '../../assets/svg/paypal.svg';
import HeinekenSvg from '../../assets/svg/heineken.svg';
import GoogleSvg from '../../assets/svg/google.svg';
import CocaColaSvg from '../../assets/svg/coca-cola.svg';

const TrustedBy = ({ className }) => {
    return (
        <div className={`${className}`}>
            <Marquee gradientColor={[0, 0, 0]}>
                <div className="flex items-center opacity-40">
                    <img src={SpotifySvg} alt="trusted by Spotify" className="mx-8" />
                    <img src={NetflixSvg} alt="trusted by Netflix" className="mx-8" />
                    <img src={PaypalSvg} alt="trusted by Paypal" className="mx-8" />
                    <img src={HeinekenSvg} alt="trusted by Heineken" className="mx-8" />
                    <img src={GoogleSvg} alt="trusted by Google" className="mx-8" />
                    <img src={CocaColaSvg} alt="trusted by CocaCola" className="mx-8" />
                </div>
            </Marquee>
            <Marquee gradientColor={[0, 0, 0]} className="mt-4 md:mt-8 ml-16 -mr-16">
                <div className="flex items-center opacity-40">
                    <img src={NetflixSvg} alt="trusted by Netflix" className="mx-8" />
                    <img src={PaypalSvg} alt="trusted by Paypal" className="mx-8" />
                    <img src={HeinekenSvg} alt="trusted by Heineken" className="mx-8" />
                    <img src={GoogleSvg} alt="trusted by Google" className="mx-8" />
                    <img src={CocaColaSvg} alt="trusted by CocaCola" className="mx-8" />
                    <img src={SpotifySvg} alt="trusted by Spotify" className="mx-8" />
                </div>
            </Marquee>
            <Marquee gradientColor={[0, 0, 0]} className="mt-4 md:mt-8">
                <div className="flex items-center opacity-40">
                    <img src={PaypalSvg} alt="trusted by Paypal" className="mx-8" />
                    <img src={HeinekenSvg} alt="trusted by Heineken" className="mx-8" />
                    <img src={GoogleSvg} alt="trusted by Google" className="mx-8" />
                    <img src={CocaColaSvg} alt="trusted by CocaCola" className="mx-8" />
                    <img src={SpotifySvg} alt="trusted by Spotify" className="mx-8" />
                    <img src={NetflixSvg} alt="trusted by Netflix" className="mx-8" />
                </div>
            </Marquee>
        </div>
    );
};

export default TrustedBy;
