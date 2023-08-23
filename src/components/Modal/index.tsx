import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import close from "../../assets/icons/close.svg";
import { IModalProps } from "./ModalInterface";

const Modal: FC<IModalProps> = ({ children }) => {
    const divRef = useRef(null);
    let navigate = useNavigate();
    const closeModal = (): void => {
        const object = divRef.current;
        gsap.to(object, {
            duration: 1,
            y: "100%", // Конечная позиция за пределами экрана вверху
            ease: "power3.out", // Вид анимации
        });
        setTimeout(() => {
            navigate("/constructorpractice/");
        }, 1000);
    };

    useEffect(() => {
        const object = divRef.current;
        gsap.from(object, {
            duration: 1,
            y: "100%", // Начальная позиция за пределами экрана внизу
            ease: "power3.out", // Вид анимации
        });
    }, []);

    return (
        //модальное окно
        <div
            ref={divRef}
            className={`fixed top-0 left-0 w-full h-full bg-white `}
        >
            <button
                className="p-5 overflow-hidden absolute z-10"
                onClick={() => closeModal()}
            >
                <img src={close} alt="close button" />
            </button>

            {children}
        </div>
    );
};

export { Modal };
