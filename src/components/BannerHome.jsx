import SliderHome from "./SliderHome";

const BannerHome = () => {
    return (
        <div className="grid grid-cols-8 gap-2">
            <div className=" col-span-1">
                <p>Women`s & Girls Fashion</p>
                <p>Health & Beauty</p>
                <p>Watches, Bags, Jewellery</p>
                <p>Men`s & Boys Fashion</p>
                <p>Mother & Baby</p>
                <p>Electronics Device</p>
                <p>TV & Home Appliances</p>
                <p>Electronic Accessories</p>
                <p>Groceries</p>
                <p>Home & Lifestyle</p>
                <p>Sports & Outdoors</p>
                <p>Automotive & Motorbike</p>

            </div>
            <div className=" col-span-7">
                <SliderHome></SliderHome>
            </div>
        </div>
    );
};

export default BannerHome;