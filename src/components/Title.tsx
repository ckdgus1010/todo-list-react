import { styled } from "styled-components";

const H1 = styled.h1`
    margin: 40px 20px 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 10px;
`;

const Hr = styled.hr`
    width: 150px;
    margin-bottom: 30px;
`;

interface IProps {
    title: string
}

function Title({ title }: IProps) {
    return (
        <>
            <H1>{title}</H1>
            <Hr />
        </>
    );
}

export default Title;
