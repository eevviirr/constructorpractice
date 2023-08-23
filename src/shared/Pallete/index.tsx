import { useState } from "react";

import { VSlider } from "@/src/shared/VSlider/index.tsx";
import { CheckedButton } from "../Buttons/CheckedButton/index.tsx";
import { useAppSelector } from "@/src/hooks/useAppSelector.ts";
import { CanvasColor } from "../CanvasColor/index.tsx";
function PagePallete() {
    const color = useAppSelector((state) => state.color.ColorHex);
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="container grid grid-cols-2 grid-rows-2 items-center  justify-items-center">
            <div className="grid grid-cols-2 place-items-center col-start-1 col-end-3">
                <h3>Включить градиент</h3>
                <CheckedButton
                    checked={checked}
                    setChecked={() => setChecked((e) => !e)}
                />
            </div>
            <div className="flex items-center justify-center ml-[50px] ">
                <CanvasColor />
                <div className="Pallete-thumb "></div>
                <div
                    style={{
                        width: 66,
                        height: 66,
                        opacity: 0.2,
                        background: color,
                        position: "absolute",
                        borderRadius: "50%",
                    }}
                ></div>
            </div>
            <div className="h-[140px]">
                <VSlider />
            </div>
            {color && (
                <p style={{ color: color, fontSize: 20 }}>
                    Selected Color:{color}
                </p>
            )}
        </div>
    );
}

export { PagePallete };
