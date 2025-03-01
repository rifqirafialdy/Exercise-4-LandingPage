import { FC } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    padding: 26px 80px 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavContainer = styled.nav`
    display: flex;
    gap: 20px; 
`;

const NavOption = styled.a`
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 21.6px;
    text-decoration: none;
    color: black;
    
    &:hover {
        text-decoration: underline;
    }
`;

const Header: FC = () => {
    return (
        <HeaderContainer>
            <img src="/Logo.png" alt="Website Logo" width="100" />
            <NavContainer>
                <NavOption href="#">About</NavOption>
                <NavOption href="#">Work</NavOption>
                <NavOption href="/contact">Contact</NavOption>
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
