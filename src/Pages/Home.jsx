import BannerHome from "../components/BannerHome";
import FlashContainer from "../components/FlashContainer";
import SliderBottom from "../components/SliderBottom";

const Home = () => {
    return (
        <div>
            {/* home banner */}
            <div className="mt-3">
                <BannerHome></BannerHome>
            </div>
            <div className="mt-4">
                <SliderBottom></SliderBottom>
            </div>
            {/* flash container */}
            <h2 className="mt-10">FlashSale</h2>
            <div className="mt-2">
                <FlashContainer></FlashContainer>
            </div>
            {/*  */}
            <div>
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default Home;