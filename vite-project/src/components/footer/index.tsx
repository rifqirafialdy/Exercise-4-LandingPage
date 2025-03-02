import { FC } from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
    position: relative;
    background-color: black;
    width: 100%;
    margin-top: 20px;
    padding-top: 80px;
    padding-left: 80px;
    padding-right: 88px;
    padding-bottom: 32px;
    font-family: "Neue Montreal", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 50px;
    box-sizing: border-box;
`;

const FooterContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TextImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

const Heading = styled.h1`
    font-weight: 500;
    font-size: 40px;
    margin: 0;
`;

const ImageTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
`;

const GetInTouchButton = styled.button`
    background-color: white;
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 176px;

    &:hover {
        background-color: black;
        color: white;
    }
`;

const FooterBottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px 88px;
    opacity: 0.7;
    font-size: 14px;
    position: relative;
`;
const FooterBottomText = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 28.8px;
letter-spacing: 0%;

`

const SocialLinksOpt = styled.ul`
    position: absolute;
    bottom: 20px; 
    right: 88px; 
    display: flex;
    gap: 15px;
    list-style: none;
    cursor: pointer;
`;

const SocialLink = styled.li`
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28.8px;
    letter-spacing: 1px;
    color: white;
    &:hover {
        text-decoration: underline;
    }
`;

const Footer: FC = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <TextImageWrapper>
                    <Heading>Have something in mind?</Heading>
                    <ImageTextContainer>
                        <Image src="ayush.png" alt="Ayush" />
                        <Heading>Let’s build it together.</Heading>
                    </ImageTextContainer>
                </TextImageWrapper>

                <GetInTouchButton>Get in Touch</GetInTouchButton>
            </FooterContainer>

            <FooterBottomContainer>
                <FooterBottomText>Build with 💖 by Brightscout & Ayush</FooterBottomText>

                <SocialLinksOpt>
                    <SocialLink>LinkedIn</SocialLink>
                    <SocialLink>Twitter</SocialLink>
                    <SocialLink>Instagram</SocialLink>
                    <SocialLink>Webflow</SocialLink>
                </SocialLinksOpt>
            </FooterBottomContainer>
        </FooterWrapper>
    );
};

export default Footer;
