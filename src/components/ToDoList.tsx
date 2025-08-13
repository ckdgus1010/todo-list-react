import { useAtomValue } from "jotai";
import styled from "styled-components";
import { toDoSelector } from "../atoms/atom-todo";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import CustomCategoryForm from "./CustomCategoryForm";
import Title from "./Title";

const Container = styled.div`
    margin: auto 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ToDoListBox = styled.div`
    width: 480px;
    max-height: 600px;
    border-radius: 20px;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
`;

const List = styled.ul`
    margin: 20px 20px 40px;
    padding: 10px 20px;
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
`;

function ToDoList() {
    const toDos = useAtomValue(toDoSelector);

    return (
        <Container>
            <ToDoListBox>
                <Title title={"To Do List"} />
                <ToDoForm />
                <List>
                    {toDos?.map((toDo) => (
                        <ToDo key={toDo.id} {...toDo} />
                    ))}
                </List>
            </ToDoListBox>
            <CustomCategoryForm />
        </Container>
    );
}

export default ToDoList;
