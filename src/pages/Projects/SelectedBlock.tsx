import { FC, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IProjectProps } from "./SelectedBlockInterface";
import { Link } from "react-router-dom";
import gsap from "gsap";

interface ISelectedBlockProps extends IProjectProps {
    setModalStatus: (status: boolean) => void;
}

const SelectedBlock: FC<ISelectedBlockProps> = ({ style, setModalStatus }) => {
    const spawn = useRef<any>();
    useEffect(() => {
        gsap.to(spawn.current, {
            duration: 0.1,
            opacity: 1,
            ease: "linear",
        });
    }, []);
    const handleContextMenu = (event: any) => {
        event.preventDefault(); // Предотвращаем стандартное действие браузера (появление контекстного меню)
        return false; // Дополнительно предотвращаем появление контекстного меню на устройствах с сенсорными экранами
    };
    return (
        <div
            ref={spawn}
            onClick={() => setModalStatus(false)}
            className=" opacity-0 fixed top-0 left-0 h-screen w-full z-10 bg-[#53535359] backdrop-blur-sm transition"
        >
            <Swiper
                spaceBetween={7.27}
                loop={true}
                className="mySwiper z-20 container overflow-visible transition-all h-full w-[300px] "
                slidesPerView={1.5}
                centeredSlides={true}
                breakpoints={{
                    550: {
                        slidesPerView: 1.2,
                    },
                }}
            >
                <SwiperSlide className="w-auto top-0">
                    <div
                        style={style}
                        className="w-full object-cover animate-shake select-none"
                        onContextMenu={handleContextMenu}
                        onTouchStart={handleContextMenu} // Добавляем обработчик для сенсорных событий
                    ></div>
                    <div className="w-[300px] mt-4 py-[10px] bg-[#EEEEEE] opacity-70 absolute  left-1/2 -translate-x-1/2 rounded-[16px]">
                        <Link
                            to={"edit/"}
                            className=" block px-[18px] w-full border-b border-b-[#A6A0A0] text-[16px] whitespace-nowrap ] mb-[5px]"
                        >
                            Редактировать
                        </Link>
                        <Link
                            to={"/"}
                            className="block px-[18px] w-full border-b border-b-[#A6A0A0] text-[16px] whitespace-nowrap mt-[5px] mb-[5px]"
                        >
                            Изменить название проекта
                        </Link>
                        <Link
                            to={"/"}
                            className="block px-[18px] w-full border-b border-b-[#A6A0A0] text-[16px] whitespace-nowrap mt-[5px] mb-[5px]"
                        >
                            Настройка домена
                        </Link>
                        <button className=" px-[18px] text-[#FF0000] text-[16px] font-[500]">
                            Удалить
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export { SelectedBlock };
