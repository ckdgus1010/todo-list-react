import { atom } from "jotai";
import { categoryAtom } from "./atom-category";

export interface IToDoAtom {
    id: number;
    content: string;
    category: "TO_DO" | "DOING" | "DONE";
}

export const toDoAtom = atom<IToDoAtom[]>([]);

export const toDoSelector = atom((get) => {
    const category = get(categoryAtom);
    const toDos = get(toDoAtom);

    return toDos.filter((toDo) => toDo.category === category);
})
