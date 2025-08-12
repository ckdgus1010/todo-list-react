import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
    margin: 20px;
    padding: 10px 20px;
    background-color: #f8f9fa;
`;

interface IFormData {
    toDo: string;
}

function ToDoFrom() {
    const { register, handleSubmit } = useForm<IFormData>();
    const onValid = (data: IFormData) => {
        console.log(data.toDo);
    }

    return (
        <Form onSubmit={handleSubmit(onValid)}>
            <input
                type="text"
                placeholder="Write a to do"
                {...register("toDo_content", {
                    required: "Please write a To Do.",
                })}
            />
            <button type="submit">Add</button>
        </Form>
    );
}

export default ToDoFrom;
