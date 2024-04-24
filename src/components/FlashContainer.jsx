import moment from "moment";

const FlashContainer = () => {
    return (
        <div className="bg-white mb-4">
            <div className="flex justify-between p-3">
                <div className="flex gap-6">
                    <p className="text-[#F85606]">On Sale Now</p>
                    <div className="flex gap-3">
                        <p>Endinin</p>
                        <p>{moment().format('h:mm:ss')}</p>
                    </div>
                </div>
                <div>
                    <button className="border border-1 py-1 px-3 border-orange-500">SHOP MORE</button>
                </div>
            </div>
            <hr />
            <div>
               {/*  */}
            </div>
        </div>
    );
};

export default FlashContainer;