import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { toDoAtom } from "../atoms/atom-todo";
import { categoryAtom, ToDoCategories } from "../atoms/atom-category";
import { useEffect } from "react";

const Form = styled.form`
    margin: 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    input {
        width: 65%;
    }
`;

interface IFormData {
    toDo_content: string;
    toDo_category: ToDoCategories;
}

function ToDoForm() {
    const [toDos, setToDos] = useAtom(toDoAtom);
    const [category, setCategory] = useAtom(categoryAtom);

    useEffect(() => {
        localStorage.setItem("toDos", JSON.stringify(toDos));
    }, [toDos]);

    const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const {
            currentTarget: { value },
        } = event;

        setCategory(value as ToDoCategories);
    };

    const { register, handleSubmit, setValue } = useForm<IFormData>();

    const onValid = (data: IFormData) => {
        setValue("toDo_content", "");

        setToDos((prev) => [
            {
                id: Date.now(),
                content: data.toDo_content,
                category: data.toDo_category,
            },
            ...prev,
        ]);
    };

    return (
        <Form onSubmit={handleSubmit(onValid)}>
            <select
                {...register("toDo_category", {
                    value: category,
                    onChange: onChange,
                })}
            >
                <option value={ToDoCategories.TO_DO}>{ToDoCategories.TO_DO}</option>
                <option value={ToDoCategories.DOING}>{ToDoCategories.DOING}</option>
                <option value={ToDoCategories.DONE}>{ToDoCategories.DONE}</option>
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
    );
}

export default ToDoForm;
