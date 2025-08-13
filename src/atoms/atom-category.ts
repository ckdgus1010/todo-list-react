import { atom } from "jotai";
import type { ToDoCategories } from "./atom-todo";

export const categoryAtom = atom<ToDoCategories>("TO_DO");
