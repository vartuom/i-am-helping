type TIconTypes = "white" | "blue";

export type TIconProps = { type: TIconTypes, className?: string };

export const getIconColor = (type: TIconTypes) => {
    return `${type === "blue" ? "#2e3192" : "#fff"
        }`;
};