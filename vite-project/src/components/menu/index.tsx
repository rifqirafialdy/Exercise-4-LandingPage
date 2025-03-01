import { FC } from "react";
import styled from "styled-components";

const Overlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: black;
    opacity: 50%;
    visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  

`;

const MenuContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
    z-index: 1000; 
`;
const CloseButton = styled.img`
    position: absolute;
    top: 60px; 
    right: 60px; 
    width: 60px;
    height: 60px;
    cursor: pointer;
`;
const MenuOptions = styled.ul`
    position: absolute;
    top: 121px;
    left: 67px;
    list-style: none;
    cursor: pointer;

`
const OptionList = styled.li`
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 500;
font-size: 50px;
line-height: 62px;
letter-spacing: 0%;
color: white;
&:hover{
    list-style-type: disc;
}
    
`
const SocialLinksOpt= styled.ul`
    position: absolute;
    bottom: 57px;
    left: 70px;
    display: flex;
    gap: 10px;
    list-style: none;
    cursor: pointer;

`
const SocialLink = styled.li`
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 400;
font-size: 18px;
line-height: 28.8px;
letter-spacing: 0%;
color: white;
letter-spacing: 1px;
&:hover{
    text-decoration: underline;
}

`

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, onClose }) => {
    return (
        <>
            <Overlay isOpen={isOpen} onClick={onClose} />
            <MenuContainer isOpen={isOpen}>
            <CloseButton src="/CLOSE.png" alt="Close Menu" onClick={onClose} />
            <MenuOptions>
                <OptionList>Home</OptionList>
                <OptionList>About</OptionList>
                <OptionList>Work</OptionList>
                <OptionList>Contact</OptionList>
            </MenuOptions>
            <SocialLinksOpt>
                <SocialLink>Linkedin</SocialLink>
                <SocialLink>Twitter</SocialLink>
                <SocialLink>Instagram</SocialLink>
                <SocialLink>Webflow</SocialLink>
            </SocialLinksOpt>
            </MenuContainer>
        </>
    );
};

export default Menu;
