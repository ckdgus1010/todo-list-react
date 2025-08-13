import { atom } from "jotai";

export const ToDoCategories = {
    TO_DO: "📝 To Do",
    DOING: "🔄 Doing",
    DONE: "✅ Done",
}

export type ToDoCategories = typeof ToDoCategories[keyof typeof ToDoCategories];

export const categoryAtom = atom<ToDoCategories>(ToDoCategories.TO_DO);
