import { FC } from "react";
import styled from "styled-components";

const Form: FC = () => {
    const Title = styled.h1`
        font-family: "Neue Montreal", sans-serif;
        font-weight: 500;
        font-size: 60px;
        line-height: 72px;
        letter-spacing: 0%;
    `;

    const Input = styled.input`
    margin: 0;
          width: 100%;
        border: none;
        border-bottom: 1px solid black
        ;
        font-family: "Neue Montreal", sans-serif;
font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;
        background: transparent;
        outline: none;
        height: 100px;
        resize: none;
    `;

    const TextArea = styled.textarea`
        width: 100%;
        border: none;
        border-bottom: 1px solid black
        ;
        font-family: "Neue Montreal", sans-serif;
font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;
        background: transparent;
        outline: none;
        height: 100px;
        resize: none;
    `;

    const FormContainer = styled.div`
        margin: auto;
        display: flex;
        flex-direction: column;
    `;
    const InputTitle =styled.p`
        font-family: "Neue Montreal", sans-serif;
        font-weight: 400;
font-size: 18px;
line-height: 28.8px;
letter-spacing: 0%;
margin: 0;

    `
    const GetInTouchButton = styled.button`
    background-color: black;
    font-family: "Neue Montreal", sans-serif;
    color: #F4F7FA;
    font-size: 18px;
    line-height: 21.6px;
    padding: 24px 48px;
    margin-top: 20px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 176px;
    width: fit-content; /* Prevent full width */
    align-self: self-start; /* Center the button */

    &:hover {
        background-color: white;
        color: black;
    }
`;


    return (
        <FormContainer>
            <Title>Let’s build something cool together</Title>
            <InputTitle>Name</InputTitle>
            <Input type="text" placeholder="James Robert" />
            <InputTitle>Email</InputTitle>
            <Input type="email" placeholder="ayush.barnwal@brightscout.com" />
            <InputTitle>Subject</InputTitle>
            <Input type="text" placeholder="For web design work Enquire" />
            <InputTitle>Message</InputTitle>
            <TextArea placeholder="Type your Message"></TextArea>
            <GetInTouchButton>Submit</GetInTouchButton>
        </FormContainer>
    );
};

export default Form;
