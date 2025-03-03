import { FC, useState, useEffect } from "react";
import Hero from "../components/hero";
import MenuButton from "../components/menu/MenuButton";
import styled from "styled-components";
import Menu from "../components/menu";
import Portofolio from "../components/portofolio";
import Testimonial from "../components/testimonial";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

const PageWrapper = styled.div`
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    position: relative;
    height: 100vh; 
`;

const MenuButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;


const MenuContentButtonWrapper = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 40px;
    right: 40px;
    z-index: 1000;
    display: ${({ isVisible }) => (isVisible ? "block" : "none")}; 
`;

const MenuContentButton = styled.img`
height: 70px;
    width: 70px;
    cursor: pointer;
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
    font-weight: 500;
    line-height: 48px;
    color: black;
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
`;

const LandingPage: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight; 
            if (window.scrollY > heroHeight) {
                setShowHamburger(true);
            } else {
                setShowHamburger(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <PageWrapper>
            <HeroWrapper>
                <Hero />
                <MenuButtonWrapper>
                    <MenuButton onClick={() => setIsMenuOpen(true)} />
                </MenuButtonWrapper>
            </HeroWrapper>

            <MenuContentButtonWrapper isVisible={showHamburger}>
                <MenuContentButton 
                    src="/hamburger.png" 
                    alt="Menu" 
                    onClick={() => setIsMenuOpen(true)}
                />
            </MenuContentButtonWrapper>

            <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <ContentSection>
                <TitleWrapper>
                    <Title>About</Title>
                </TitleWrapper>
                <ContentWrapper>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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
<Gallery/>
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
