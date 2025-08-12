import { useAtomValue } from "jotai";
import styled from "styled-components";
import { toDoSelector } from "../atoms/atom-todo";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const Container = styled.div`
    margin: auto 10px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ToDoListBox = styled.div`
    width: 480px;
    height: 600px;
    border-radius: 10px;
    background-color: #f8f9fa;
`;

const Title = styled.div`
    margin: 40px 20px 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 10px;
    background-color: #f8f9fa;
`;

const Hr = styled.hr`
    width: 150px;
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 20px;
    padding: 10px 20px;
`;

function ToDoList() {
    const toDos = useAtomValue(toDoSelector);

    return (
        <Container>
            <ToDoListBox>
                <Title>To Do List</Title>
                <Hr />
                <ToDoForm />
                <List>
                    {toDos?.map((toDo) => (
                        <ToDo  key={toDo.id} {...toDo} />
                    ))}
                </List>
            </ToDoListBox>
        </Container>
    );
}

export default ToDoList;
