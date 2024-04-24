import bootom1 from "../assets/sliderBottom/1.png"
import bootom2 from "../assets/sliderBottom/2.png"
import bootom3 from "../assets/sliderBottom/3.png"
import bootom4 from "../assets/sliderBottom/4.png"
import bootom5 from "../assets/sliderBottom/5.png"
import bootom6 from "../assets/sliderBottom/6.png"

const SliderBottom = () => {
    return (
        <div className="bg-[#FFE8DE] flex gap-2 items-center p-2 justify-between">
            <div className="flex gap-1">
                <img src={bootom1} alt="" />
                <p>
                    Safe Payments</p>
            </div>
            <div className="border border-1 h-[10px] border-[#e08e6b]"></div>
            <div className="flex gap-1">
                <img src={bootom2} alt="" />
                <p>
                    Safe Payments</p>
            </div>
            <div className="border border-1 h-[10px] border-[#e08e6b]"></div>
            <div className="flex gap-1">
                <img src={bootom3} alt="" />
                <p>
                    Safe Payments</p>
            </div>
            <div className="border border-1 h-[10px] border-[#e08e6b]"></div>
            <div className="flex gap-1">
                <img src={bootom4} alt="" />
                <p>
                    Safe Payments</p>
            </div>
            <div className="border border-1 h-[10px] border-[#e08e6b]"></div>
            <div className="flex gap-1">
                <img src={bootom5} alt="" />
                <p>
                    Safe Payments</p>
            </div>
            <div className="border border-1 h-[10px] border-[#e08e6b]"></div>
            <div className="flex gap-1">
                <img src={bootom6} alt="" />
                <p>
                    Safe Payments</p>
            </div>
        </div>
    );
};

export default SliderBottom;