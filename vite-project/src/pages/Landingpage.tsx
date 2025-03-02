import { FC, useState } from "react";
import Hero from "../components/hero";
import MenuButton from "../components/menu/MenuButton";
import styled from "styled-components";
import Menu from "../components/menu";
import Portofolio from "../components/portofolio";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";

const PageWrapper = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    position: relative;
`;

const MenuButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;

const ContentSection = styled.section`
    padding-top: 160px;
    padding-left: 80px;
    padding-right: 88px;
    display: flex;
    align-items: baseline; 
    justify-content: space-between;
`;

const TitleWrapper = styled.div`
    width: 30%; 
    padding: 20px; 
`;

const Title = styled.h1`
    font-family: 'Neue Montreal', sans-serif;
    font-size: 40px;
    color: black;
font-weight: 500;
line-height: 48px;
letter-spacing: 0%;

`;

const ContentWrapper = styled.div`
    width: 65%; 
    padding: 20px;
`;

const Text = styled.p`
    font-family: 'Neue Montreal', sans-serif;
    font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;

`;

const LandingPage: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <PageWrapper>
            <HeroWrapper>
                <Hero />
                <MenuButtonWrapper>
                    <MenuButton onClick={() => setIsMenuOpen(true)} />
                </MenuButtonWrapper>
            </HeroWrapper>
            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <ContentSection>
                <TitleWrapper>
                    <Title>About</Title>
                </TitleWrapper>
                <ContentWrapper>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </Text>
                </ContentWrapper>
            </ContentSection>
            <ContentSection>
                <TitleWrapper>
                    <Title>Recent Work</Title>
                </TitleWrapper>
                <ContentWrapper>
                <Portofolio/>
                </ContentWrapper>
            </ContentSection>
            <ContentSection>
                <TitleWrapper>
                    <Title>Testimonials</Title>
                </TitleWrapper>
                <ContentWrapper>
                    <Testimonial/>
                </ContentWrapper>
            </ContentSection>
            <Footer/>
        </PageWrapper>
    );
};

export default LandingPage;
