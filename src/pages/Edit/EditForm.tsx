import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import FormBlock from "./FormBlock";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Filter } from "../../shared/Filter";
import { LinkButton } from "../../shared/Buttons/LinkButton";
import { setActive } from "../../store/slice/ButtonSlice";

const EditForm = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isActive = useAppSelector((state) => state.isActive.valueModal);
    const dispatch = useAppDispatch();
    return (
        <>
            <div
                className={`absolute top-[30vh] w-full bg-white h-[70vh] z-50 transition-all duration-500 ${
                    isActive ? "" : "translate-y-full"
                }`}
            >
                <div className="container">
                    <Filter
                        filterName={["Популярные", "Избранные", "Все", "Архив"]}
                    />
                    <div className="pt-4">
                        <Swiper
                            spaceBetween={13}
                            loop={true}
                            className="mySwiper overflow-visible transition-all duration-500"
                            slidesPerView={2}
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
                                        key={i}
                                        className="w-auto flex justify-center"
                                    >
                                        <div
                                            className={`p-[20px] bg-white rounded-[15px] flex gap-[10px] justify-center items-center transition-all duration-200 ${
                                                activeIndex === i
                                                    ? "scale-[1.2] shadow-inner"
                                                    : ""
                                            }`}
                                        >
                                            <div className="w-[45px] h-[45px] shadow-md bg-gradient-to-b shadow-[rgba(0,0,0,0.25)] from-[#9E9E9E] to-white"></div>
                                            <div className="w-[45px] h-[45px] shadow-md bg-gradient-to-b shadow-[rgba(0,0,0,0.25)] from-[#9E9E9E] to-white"></div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <span className=" block pt-[40px] text-[16px] font-[600] opacity-60 text-center">
                            Эта форма лучше всего подойдет для
                        </span>
                        <FormBlock />
                    </div>

                    <LinkButton
                        link={""}
                        title="Закрыть"
                        buttonActive={false}
                        handleClick={() => dispatch(setActive(!isActive))}
                    />
                </div>
            </div>
        </>
    );
};

export default EditForm;
