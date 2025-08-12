import { styled } from "styled-components";
import type { IToDoAtom } from "../atoms/atom-todo";

const ToDoLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    span {
        color: #0d0d0d;
    }
`;

const ToDoButtons = styled.div`
    display: flex;
    gap: 0.4rem;
`;

const ToDoButton = styled.button`
    all: unset;
    cursor: pointer;
    color: #0d0d0d;
`;

function ToDo({ content, category }: IToDoAtom) {
    return (
        <ToDoLi>
            <span>{content}</span>
            <ToDoButtons>
                {category !== "TO_DO" && <ToDoButton>📝 To Do</ToDoButton>}
                {category !== "DOING" && <ToDoButton>🔄 Doing</ToDoButton>}
                {category !== "DONE" && <ToDoButton>✅ Done</ToDoButton>}
            </ToDoButtons>
        </ToDoLi>
    );
}

export default ToDo;
