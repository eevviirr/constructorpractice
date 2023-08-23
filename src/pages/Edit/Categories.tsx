import { Category } from "@/src/shared/Category";

const Categories = () => {
    return (
        <div className="tags relative pt-10 flex flex-wrap gap-[9px] justify-center">
            <Category title="Кнопка действия" />
            <Category title="Фон" />
            <Category title="Соц. сети" />
            <Category title="Управление" />
            <Category title="Оформление" />
            <Category title="Текст" />
        </div>
    );
};

export { Categories };
