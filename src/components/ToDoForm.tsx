import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useAtom, useSetAtom } from "jotai";
import { toDoAtom, type IToDoAtom } from "../atoms/atom-todo";
import { categoryAtom } from "../atoms/atom-category";

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
    toDo_category: IToDoAtom["category"];
}

function ToDoForm() {
    const setToDos = useSetAtom(toDoAtom);
    const [category, setCategory] = useAtom(categoryAtom);

    const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
        const {
            currentTarget: { value },
        } = event;

        setCategory(value as IToDoAtom["category"]);
    };

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
        <Form onSubmit={handleSubmit(onValid)}>
            <select
                {...register("toDo_category", {
                    value: category,
                    onChange: onChange,
                })}
            >
                <option value="TO_DO">📝 To Do</option>
                <option value="DOING">🔄 Doing</option>
                <option value="DONE">✅ Done</option>
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
