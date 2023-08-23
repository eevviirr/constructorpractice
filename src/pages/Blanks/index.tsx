import { useState } from "react";
import maskProject from "@/public/maskProject.png";
import BlanksItem from "@/src/shared/BlanksItem";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setActiveButton } from "@/src/store/slice/ButtonSlice";
import { Filter } from "../../shared/Filter";
import { LinkButton } from "../../shared/Buttons/LinkButton";

const PageBlanks = () => {
    const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
    const [isBlurBlanks, setIsBlurBlanks] = useState(true);
    const buttonActive = useAppSelector((state) => state.isActive.valueButton);
    const dispatch = useAppDispatch();

    const isBlur = (index: number) => {
        if (isBlurBlanks) {
            setIsBlurBlanks(false);
            dispatch(setActiveButton(false));
        } else {
            setIsBlurBlanks(true);
            dispatch(setActiveButton(true));
        }
        setSelectedBlock(index);
    };

    return (
        <>
            <div className="px-40 max-xl:px-20 max-sm:px-10">
                <h2 className="pt-4 text-xl font-bold text-center">
                    Выбери болванку
                </h2>

                <Filter filterName={["все", "обычные", "с дайджестом"]} />

                <p className="descr font-semibold text-black/60 spacing leading-[143.4%] text-center text-[14px]">
                    Выбери Выкрученный на максималку ПРАКТИС или сдержанный
                    ПОНАРТ или начни создавать с чистого листа
                </p>
            </div>

            <div className="h-[calc(100vh-170px)] blanks mt-4 overflow-scroll">
                {[...new Array(8)].map((_, i) => {
                    const isBlockSelected = i == selectedBlock;

                    return (
                        <BlanksItem
                            key={i}
                            imgUrl={maskProject}
                            handleClick={() => isBlur(i)}
                            isBlockSelected={isBlockSelected}
                            isBlurBlanks={isBlurBlanks}
                            index={i}
                        />
                    );
                })}
            </div>

            <LinkButton
                link={"1"}
                title={"далее"}
                buttonActive={buttonActive}
            />
        </>
    );
};

export default PageBlanks;
