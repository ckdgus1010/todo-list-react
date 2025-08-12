import { atom } from "jotai";
import type { IToDoAtom } from "./atom-todo";

export const categoryAtom = atom<IToDoAtom["category"]>("TO_DO");