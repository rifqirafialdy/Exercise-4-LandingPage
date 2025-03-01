import { FC } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    font-family: 'Neue Montreal', sans-serif;
    gap: 10px;
    padding: 15px;
    padding-left: 15px;
    border-top-left-radius: 64.29px;
    border-bottom-left-radius: 64.29px;
    cursor: pointer;
    min-width: 50px; 
    max-width: 50px; 
    overflow: hidden;
    white-space: nowrap;
    transition: max-width 0.4s ease-in-out; 

    &:hover {
        max-width: 200px; 
    }
`;

const ButtonIcon = styled.img`
    width: 30px;
    height: 30px;
`;

const ButtonText = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    ${ButtonContainer}:hover & {
        opacity: 1;
        transform: translateX(0);
    }
`;
interface MenuButtonProps {
    onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = ({ onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>
            <ButtonIcon src="/wave.png" alt="Menu Icon" />
            <ButtonText>Hi I'm Ayush</ButtonText>
        </ButtonContainer>
    );
};

export default MenuButton;
