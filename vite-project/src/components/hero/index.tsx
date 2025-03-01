import { FC } from "react";
import styled from "styled-components";
import Header from "../header";

const HeroContainer = styled.section`
    background-color: #C7D0D9;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative; /* Needed for absolute positioning */
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-grow: 1;
`;

const HeroImage = styled.img`
    max-width: 100%;
    object-fit: contain; 
`;



const Hero: FC = () => {
    return (
        <HeroContainer>
            <Header />
            <ImageContainer>
                <HeroImage src="/My project 1 (1).png" alt="Hero Image" />
            </ImageContainer>
        </HeroContainer>
    );
};

export default Hero;
