type TIconTypes = "icon" | "button";

export type TIconProps = { type: TIconTypes };

export const getIconColor = (type: TIconTypes) => {
    return `${
        type === "icon" ? "#2e3192" : "#fff"
    }`;
};