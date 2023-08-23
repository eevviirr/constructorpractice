import { Filter } from "../../shared/Filter";
import FormBlock from "../Edit/FormBlock";
import Equalizer from "@/src/shared/Equalizer";

const PageBackgroundEdit = () => {
    return (
        <>
            <div className="container pt-10">
                <Filter
                    filterName={[
                        "Процедурный",
                        "Файл",
                        "Градиент",
                        "Цвет",
                        "ИИ",
                    ]}
                />
            </div>
            <div className="w-full py-[60px] bg-slate-300 mt-1">
                <div className="container">
                    <FormBlock />
                </div>
                
                <div className="w-full left-0 mt-[30px] flex justify-center absolute cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M19.5 12C19.5 10.7681 19.4536 9.54699 19.3624 8.3384C19.2128 6.35425 17.6458 4.78724 15.6616 4.63757C14.453 4.54641 13.2319 4.5 12 4.5C10.7681 4.5 9.54699 4.54641 8.3384 4.63757C6.35425 4.78724 4.78724 6.35425 4.63757 8.3384C4.62097 8.55852 4.60585 8.77906 4.59222 9M19.5 12L22.5 9M19.5 12L16.5 9M4.5 12C4.5 13.2319 4.54641 14.453 4.63757 15.6616C4.78724 17.6458 6.35425 19.2128 8.3384 19.3624C9.54699 19.4536 10.7681 19.5 12 19.5C13.2319 19.5 14.453 19.4536 15.6616 19.3624C17.6458 19.2128 19.2128 17.6458 19.3624 15.6616C19.379 15.4415 19.3941 15.2209 19.4078 15M4.5 12L7.5 15M4.5 12L1.5 15"
                            stroke="#0F172A"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>
            <div className="w-full pt-[54px] pb-[37px] bg-[#292230]">
                <div className="container">
                    <Equalizer />
                </div>
                
            </div>
        </>
    );
};

export default PageBackgroundEdit;
