import { styled } from "styled-components";
import { toDoAtom, type IToDoAtom } from "../atoms/atom-todo";
import { useAtom } from "jotai";

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

function ToDo({ id, content, category }: IToDoAtom) {
    const [toDos, setToDos] = useAtom(toDoAtom);

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;

        const targetIndex = toDos.findIndex((toDo) => toDo.id === id);
        const newToDo = {
            id: id,
            content: content,
            category: name as any,
        };

        setToDos((oldToDos) => {
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ];
        });
    };

    return (
        <ToDoLi id={id.toString()}>
            <span>{content}</span>
            <ToDoButtons>
                {category !== "TO_DO" && (
                    <ToDoButton name="TO_DO" onClick={onClick}>
                        📝 To Do
                    </ToDoButton>
                )}
                {category !== "DOING" && (
                    <ToDoButton name="DOING" onClick={onClick}>
                        🔄 Doing
                    </ToDoButton>
                )}
                {category !== "DONE" && (
                    <ToDoButton name="DONE" onClick={onClick}>
                        ✅ Done
                    </ToDoButton>
                )}
            </ToDoButtons>
        </ToDoLi>
    );
}

export default ToDo;
