import { styled } from "styled-components";
import { toDoAtom, type IToDoAtom } from "../atoms/atom-todo";
import { useAtom, useAtomValue } from "jotai";
import { allCategoriesAtom } from "../atoms/atom-category";

const ToDoLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
        color: #0d0d0d;
    }
`;

const ToDoButtons = styled.div`
    display: flex;
    gap: 0.8rem;
`;

const ToDoButton = styled.button`
    all: unset;
    cursor: pointer;
    color: #0d0d0d;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

function ToDo({ id, content, category }: IToDoAtom) {
    const [toDos, setToDos] = useAtom(toDoAtom);
    const allCategories = useAtomValue(allCategoriesAtom);

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
                {Object.values(allCategories).map((cat) => {
                    return (
                        category !== cat && (
                            <ToDoButton key={cat} name={cat} onClick={onClick}>
                                {cat}
                            </ToDoButton>
                        )
                    );
                })}
            </ToDoButtons>
        </ToDoLi>
    );
}

export default ToDo;
