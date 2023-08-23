import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import vkLogo from "@/src/assets/icons/VK_logo.png";
import { useState } from "react";

const Social = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <>
            <span className="block mb-4">Соц сети</span>
            <Swiper
                spaceBetween={10}
                loop={true}
                className="mySwiper overflow-visible transition-all duration-500 z-0"
                slidesPerView={3}
                centeredSlides={true}
                onSlideChange={(e) => setActiveIndex(e.realIndex)}
                breakpoints={{
                    550: {
                        slidesPerView: 1.2,
                    },
                }}
            >
                {[...new Array(8)].map((_, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className={`text-white flex justify-center  transition-all duration-200 ${
                                activeIndex === i ? "!scale-[1.2]" : "grayscale blur-sm"
                            }`}
                        >
                            <img src={vkLogo} alt="vklink" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export { Social };
