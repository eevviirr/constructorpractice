import { LinkButton } from "../../shared/Buttons/LinkButton";
import { Category } from "../../shared/Category";
import BlanksItem from "@/src/shared/BlanksItem";
import maskProject from "@/public/maskProject.png";
import BlanksItemForm from "./BlanksItemForm";

const PageBlanksItem = () => {
    const goBack = () => {
        history.back();
    };

    return (
        <>
            <div className="h-full relative font-montserrat overflow-scroll pb-20">
                <div className="container">
                    <button onClick={() => goBack()}>Go back</button>
                </div>
                <BlanksItem
                    imgUrl={maskProject}
                    isBlockSelected={true}
                    isBlurBlanks={true}
                />
                <div className="container ">
                    <div className="h-full overflow-scroll">
                        <span className="text-[#585858] mt-[14px] text-lg font-medium capitalize">
                            Твой проект
                        </span>
                        <BlanksItemForm />
                        <span className="block pt-[38px] text-[#585858] text-[18px] font-[500] text-center">
                            Выбери до 3х сфер деятельности:
                        </span>
                        <div className="pt-[19px] flex flex-wrap gap-[6px] justify-center">
                            <Category title="Утки" />
                            <Category title="Селезни" />
                            <Category title="Прокрастинация" />
                            <Category title="Еда" />
                            <Category title="Кафетерии" />
                            <Category title="Кофе" />
                        </div>
                    </div>
                </div>
            </div>
            <LinkButton link={""} title="Создать" buttonActive={false} />
        </>
    );
};

export default PageBlanksItem;
