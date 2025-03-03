import { FC } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../header";

const HeroContainer = styled.section`
    background-color: #C7D0D9;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    flex-grow: 1;
    position: relative;
`;

const HeroImage = styled.img`
    max-width: 100%;
    object-fit: contain;
`;

const scrollText = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
`;

const OverlayText = styled.div`
    position: absolute;
    top: 50%;
    white-space: nowrap;
    font-family: "Neue Montreal", sans-serif;
    font-weight: 500;
    font-size: 150.38px;
    line-height: 180.45px;
    color: white;
    animation: ${scrollText} 10s linear infinite;
`;

const Hero: FC = () => {
    return (
        <HeroContainer>
            <Header />
            <ImageContainer>
                <HeroImage src="/My project 1 (1).png" alt="Hero Image" />
                <OverlayText>Webflow Developer - UI/UX Designer</OverlayText>
            </ImageContainer>
        </HeroContainer>
    );
};

export default Hero;
