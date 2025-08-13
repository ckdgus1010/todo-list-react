import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { customCategoriesAtom } from "../atoms/atom-category";
import { useEffect } from "react";

const Form = styled.form`
    margin: 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

interface IFormData {
    custom_category: string;
}

function CustomCategoryForm() {
    const { register, handleSubmit, setValue } = useForm<IFormData>();
    const [customCategories, setNewCustomCategory] =
        useAtom(customCategoriesAtom);

    useEffect(() => {
        localStorage.setItem(
            "custom_categories",
            JSON.stringify(customCategories)
        );
    }, [customCategories]);

    const onValid = (data: IFormData) => {
        const cat = data.custom_category;
        setNewCustomCategory((prev) => ({ ...prev, [cat]: cat }));

        setValue("custom_category", "");
    };

    return (
        <Form onSubmit={handleSubmit(onValid)}>
            <input
                type="text"
                placeholder="Write your custom category"
                {...register("custom_category", {
                    required: "Please write a new category",
                })}
            />
            <button type="submit">Add</button>
        </Form>
    );
}

export default CustomCategoryForm;
