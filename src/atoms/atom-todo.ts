import { atom } from "jotai";
import { categoryAtom } from "./atom-category";

export const ToDoCategories = {
    TO_DO: "TO_DO",
    DOING: "DOING",
    DONE: "DONE",
}

export type ToDoCategories = typeof ToDoCategories[keyof typeof ToDoCategories];

export interface IToDoAtom {
    id: number;
    content: string;
    category: ToDoCategories;
}

export const initialToDos: IToDoAtom[] = (() => {
    const rawData = localStorage.getItem("toDos");
    return rawData ? (JSON.parse(rawData) as IToDoAtom[]) : [];
})();

export const toDoAtom = atom<IToDoAtom[]>(initialToDos);

export const toDoSelector = atom((get) => {
    const category = get(categoryAtom);
    const toDos = get(toDoAtom);

    return toDos.filter((toDo) => toDo.category === category);
});
