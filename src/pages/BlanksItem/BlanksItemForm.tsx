import { InputChecked } from "../../shared/Inputs/InputChecked";

const BlanksItemForm = () => {
    return (
        <form className="pt-[12px] flex flex-col gap-[12px]">
            <InputChecked
                name=""
                type="text"
                checked={false}
                placeholder="Название проекта (Назови свой проект)"
            />
            <InputChecked
                name=""
                type="text"
                checked={true}
                placeholder="Введи слоган"
            />
            <InputChecked
                name=""
                type="text"
                checked={true}
                placeholder="Добавить описание"
            />
            <InputChecked
                name=""
                type="text"
                checked={true}
                placeholder="Цель, преимущества"
            />
        </form>
    );
};

export default BlanksItemForm;
