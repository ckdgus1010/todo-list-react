import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

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

const Form = styled.form`
    margin: 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    background-color: #f8f9fa;
    input {
        width: 65%;
    }
`;

const List = styled.ul`
    margin: 20px;
    padding: 10px 20px;
`;

const ToDoLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

const ToDoButtons = styled.div`
    display: flex;
    gap: 0.4rem;
`;

const ToDoButton = styled.button`
    all: unset;
    cursor: pointer;
`;

interface IFormData {
    toDo_content: string;
    toDo_category: string;
}

interface IToDoData {
    id: number;
    content: string;
    category: string;
}

function ToDoList() {
    const [toDos, setToDos] = useState<IToDoData[]>([]);

    const { register, handleSubmit, setValue } = useForm<IFormData>();
    const onValid = (data: IFormData) => {
        setValue("toDo_content", "");

        setToDos((prev) => [
            ...prev,
            {
                id: Date.now(),
                content: data.toDo_content,
                category: data.toDo_category,
            },
        ]);
    };

    return (
        <Container>
            <ToDoListBox>
                <Title>To Do List</Title>
                <Hr />
                <Form onSubmit={handleSubmit(onValid)}>
                    <select {...register("toDo_category", {})}>
                        <option>📝 To Do</option>
                        <option>🔄 Doing</option>
                        <option>✅ Done</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Write a to do"
                        {...register("toDo_content", {
                            required: "Please write a To Do.",
                        })}
                    />
                    <button type="submit">Add</button>
                </Form>
                <List>
                    {toDos?.map((toDo) => (
                        <ToDoLi key={toDo.id}>
                            <span>{toDo.content}</span>
                            <ToDoButtons>
                                <ToDoButton>📝 To Do</ToDoButton>
                                <ToDoButton>🔄 Doing</ToDoButton>
                                <ToDoButton>✅ Done</ToDoButton>
                            </ToDoButtons>
                        </ToDoLi>
                    ))}
                </List>
            </ToDoListBox>
        </Container>
    );
}

export default ToDoList;
