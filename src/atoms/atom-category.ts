import { atom } from "jotai";

export const ToDoCategories = {
    TO_DO: "📝 To Do",
    DOING: "🔄 Doing",
    DONE: "✅ Done",
};

export type ToDoCategories =
    (typeof ToDoCategories)[keyof typeof ToDoCategories];

export const categoryAtom = atom<ToDoCategories>(ToDoCategories.TO_DO);

// ---

type CustomCategories = Record<string, string>;

export const initialCustomCategories: CustomCategories = (() => {
    const rawData = localStorage.getItem("custom_categories");
    return rawData ? (JSON.parse(rawData) as CustomCategories) : {};
})();

export const customCategoriesAtom = atom<CustomCategories>(
    initialCustomCategories
);

export const allCategoriesAtom = atom((get) => {
    const custom = get(customCategoriesAtom);
    return {
        ...ToDoCategories,
        ...custom,
    };
});
