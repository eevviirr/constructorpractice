import { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import maskProject from "@/public/maskProject.png";
import "swiper/css";
import useLongPress from "@/src/hooks/useLongPress.ts";
import { SelectedBlock } from "./SelectedBlock";

const Projects: FC = () => {
    const [selectedImageWidth, setSelectedImageWidth] = useState<any>();
    const [modalStatus, setModalStatus] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    console.log(activeIndex);

    const openModalWindow = (e: any) => {
        const rect = e.target.getBoundingClientRect();
        setModalStatus(!modalStatus);
        setSelectedImageWidth({ margin: rect.top, height: rect.height });
        console.log(rect.height);
    };
    const longPress = useLongPress(openModalWindow);
    return (
        <>
            {modalStatus && (
                <SelectedBlock
                    style={{
                        marginTop: selectedImageWidth
                            ? selectedImageWidth.margin
                            : "" ?? "auto",
                        backgroundImage: `url(${maskProject})`,
                        height: selectedImageWidth.height,
                    }}
                    setModalStatus={setModalStatus}
                />
            )}
            <Swiper
                spaceBetween={20}
                loop={true}
                className="mySwiper container w-[300px] overflow-visible "
                slidesPerView={1.5}
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
                            style={{ backgroundImage: `url(${maskProject})` }}
                            {...longPress}
                            className={`w-full h-[276px] transition-all duration-200  ${
                                activeIndex === i ? "!scale-[1.1]" : ""
                            }`}
                            key={i}
                        ></SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
};

export { Projects };
