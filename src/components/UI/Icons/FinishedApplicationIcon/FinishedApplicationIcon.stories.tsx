import { FinishedApplicationIcon } from "./FinishedApplicationIcon";

export default {
    component: FinishedApplicationIcon,
    title: 'Icons/Finished Application Icon',
    argTypes: {
        backgroudColor: { control: 'color' }
    }
};

export const Default = () => <FinishedApplicationIcon />