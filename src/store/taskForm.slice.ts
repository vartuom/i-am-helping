import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFirstStep, ISecondStep, IThirdStep } from "../types";


interface IInitialState {
    firstStep: IFirstStep;
    secondStep: ISecondStep;
    thirdStep: IThirdStep;
    isPending: boolean;
    isError: boolean;
    isMailed: boolean;
}

const initialState: IInitialState = {
    firstStep: {
        taskTime: "16:00",
        taskDate: "24.09.2022 г.",
        isNoTimeLimit: true,
        isProcessed: false,
    },
    secondStep: {
        taskType: "Выгулять собаку",
        taskDetails: "Заболел и совсем нет сил даже ходить по квартире. Почти неделю собаку выгуливали соседи, но в пятницу они не смогут. Помогите, пожалуйста!",
        isProcessed: false,
    },
    thirdStep: {
        taskMeetingPoint: "ул. Нахимова, д.9, у подъезда №3",
        isProcessed: false,
    },
    isPending: false,
    isError: false,
    isMailed: false,
};

export const taskFormSlice = createSlice({
    name: "taskForm",
    initialState,
    reducers: {
        setFirstStep(state, action: PayloadAction<IFirstStep>) {
            state.firstStep.taskTime = action.payload.taskTime;
            state.firstStep.taskDate = action.payload.taskDate;
            state.firstStep.isNoTimeLimit = action.payload.isNoTimeLimit;
            state.firstStep.isProcessed = true;
        },
        setSecondStep(state, action: PayloadAction<ISecondStep>) {
            state.secondStep.taskType = action.payload.taskType;
            state.secondStep.taskDetails = action.payload.taskDetails;
            state.secondStep.isProcessed = true;
        },
        setThirdStep(state, action) {
            state.thirdStep.taskMeetingPoint = action.payload.taskMeetingPoint;
            state.thirdStep.isProcessed = true;
        },
    },
});

export const { setFirstStep, setSecondStep, setThirdStep } =
    taskFormSlice.actions;
export default taskFormSlice.reducer;
