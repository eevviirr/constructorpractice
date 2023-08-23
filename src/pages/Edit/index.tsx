import { Swiper } from "swiper/react";

import maskProject from "@/public/maskProject.png";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import EditForm from "./EditForm";
import useLongPress from "../../hooks/useLongPress";
import { LinkButton } from "../../shared/Buttons/LinkButton";
import { DeleteButton } from "../../shared/Buttons/DeleteButton";
import { useAppDispatch } from "@/src/hooks/useAppDispatch";
import { setActive } from "@/src/store/slice/ButtonSlice";
import { Categories } from "./Categories";

const PageEdit = () => {
    const [buttonActive, setButtonActive] = useState(false);

    const backspaceLongPress = useLongPress(() =>
        setButtonActive(!buttonActive)
    );
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const dispatch = useAppDispatch();

    return (
        <>
            <img
                src={maskProject}
                alt=""
                className="absolute z-0 w-full h-screen object-cover"
            />
            <div className="container">
                    <Categories />
                <div className="forms pt-[273px]">
                    <Swiper
                        spaceBetween={13}
                        loop={true}
                        className="mySwiper overflow-visible transition-all duration-500 absolute top-1/2 left-0 w-full"
                        slidesPerView={1.6}
                        centeredSlides={true}
                        breakpoints={{
                            550: {
                                slidesPerView: 1.2,
                            },
                        }}
                        onSlideChange={(e) => setActiveIndex(e.realIndex)}
                    >
                        {[...new Array(8)].map((_, i) => {
                            return (
                                <SwiperSlide
                                    {...backspaceLongPress}
                                    key={i}
                                    className="w-auto flex justify-center"
                                >
                                    <div
                                        className={`py-[30px] px-[26px] bg-white rounded-[15px] flex gap-[10px] justify-center items-center transition-all duration-200 ${
                                            activeIndex === i
                                                ? "scale-[1.2]"
                                                : ""
                                        }`}
                                    >
                                        <div className="w-[65px] h-[65px] shadow-md bg-gradient-to-b shadow-[rgba(0,0,0,0.25)] from-[#9E9E9E] to-white"></div>
                                        <div className="w-[65px] h-[65px] shadow-md bg-gradient-to-b shadow-[rgba(0,0,0,0.25)] from-[#9E9E9E] to-white"></div>
                                        <span
                                            className={`absolute -bottom-8 text-white transition-all duration-200 ${
                                                activeIndex === i
                                                    ? "translate-y-0"
                                                    : "-translate-y-10"
                                            }`}
                                        >
                                            Название формы
                                        </span>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <EditForm />

            {buttonActive ? (
                <DeleteButton title="Удалить" buttonActive={false} />
            ) : (
                <LinkButton
                    link={""}
                    title="Все формы"
                    buttonActive={false}
                    handleClick={() => {
                        dispatch(setActive(true));
                    }}
                />
            )}
        </>
    );
};

export default PageEdit;
