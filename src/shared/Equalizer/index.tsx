import { VSlider } from "../VSlider";

const Equalizer = () => {
    return (
        <div className="w-full pt-[54px] pb-[37px] bg-[#292230]">
            <div className="container flex h-[140px] justify-between">
                {[...new Array(6)].map((_) => {
                    return <VSlider />;
                })}
            </div>
        </div>
    );
};

export default Equalizer;
