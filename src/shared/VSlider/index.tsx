import { CustomSlider } from "./CustomSlider";

const VSlider = () => {
    return (
        <CustomSlider
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            orientation="vertical"
        />
    );
};

export { VSlider };
