type TIconTypes = "white" | "blue";

export type TIconProps = { type: TIconTypes };

export const getIconColor = (type: TIconTypes) => {
    return `${
        type === "blue" ? "#2e3192" : "#fff"
    }`;
};