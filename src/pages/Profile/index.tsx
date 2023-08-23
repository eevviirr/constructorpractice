import { ProfileAvatar } from "@/src/shared/Avatar";
import cat from "@/public/cat.jpg";
import { useAppSelector } from "@/src/hooks/useAppSelector";
import { Filter } from "@/src/shared/Filter";
import { InputDefault } from "@/src/shared/Inputs/InputDefault";
import { Social } from "@/src/shared/Social";
import settings from "@/src/assets/icons/settings.svg";
import { Link } from "react-router-dom";
import { InputChecked } from "@/src/shared/Inputs/InputChecked";

const PageDefaultProfile = () => {
    const profile = useAppSelector((state) => state.profile);

    return (
        <div className="h-full relative font-montserrat overflow-scroll pb-12">
            <Link
                to={"/profile/settings"}
                className=" absolute top-0 right-0 p-5"
            >
                <img src={settings} alt="" className="w-5" />
            </Link>
            {/* АВАТАР ПОЛЬЗОВАТЕЛЯ */}
            <ProfileAvatar
                imgUser={profile.avatar}
                bgImg={cat}
                userFIO={`${profile.firstName} ${profile.lastName} `}
                userStatus={profile.status}
            />

            {/* Фильтр */}
            <div className="container">
                <Filter
                    filterName={["Профиль", "Награды", "Испытания", "Роли"]}
                />

                <div className="flex justify-between items-center pt-4">
                    <span>День рождения</span>
                    <InputDefault
                        name="date"
                        type="date"
                        valueInp="2004-01-20"
                        disabled={true}
                    />
                </div>
                <div className="pt-4">
                    <span>Телефон</span>
                    <InputDefault
                        name="tel"
                        type="tel"
                        valueInp="+79052418161"
                        disabled={true}
                    />
                </div>
                <div className="pt-4">
                    <Social />
                </div>
                <div className="pt-4">
                    <h4 className="h4">Био</h4>
                    <InputChecked
                        checked={false}
                        name="tel"
                        type="text"
                        placeholder="О себе"
                    />
                </div>
            </div>
        </div>
    );
};

export { PageDefaultProfile };
