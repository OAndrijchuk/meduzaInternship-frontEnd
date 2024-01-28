import { FunctionType } from ".";

export type ActionButtonsType = {
    remove?: FunctionType | null;
    accept?: FunctionType | null;
    reject?: FunctionType | null;
    add?: FunctionType | null;
}