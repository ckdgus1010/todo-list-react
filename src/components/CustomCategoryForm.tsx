import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { customCategoriesAtom } from "../atoms/atom-category";
import { useEffect } from "react";
import Title from "./Title";

const Wrapper = styled.div`
    margin-top: 20px;
    width: 480px;
    border-radius: 20px;
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
`;

const Form = styled.form`
    margin: 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    input {
        width: 87%;
    }
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
        <Wrapper>
            <Title title={"Add new categories"}/>
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
        </Wrapper>
    );
}

export default CustomCategoryForm;
