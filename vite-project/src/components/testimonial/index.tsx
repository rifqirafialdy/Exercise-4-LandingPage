import { FC } from "react";
import { DUMMY_TESTIMONI } from "../../constants/testimonials";
import styled from "styled-components";

const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: "Neue Montreal", sans-serif;

`;

const TestimonialItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TestimonialText = styled.p`
    font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;

`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const ProfilePic = styled.img`
    width: 64px;
    height: 64px;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const Name = styled.h3`
font-weight: 500;
font-size: 18px;
line-height: 28.8px;
letter-spacing: 0%;
margin: 0;

`;

const Position = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 22.4px;
letter-spacing: 0%;
margin: 0;

`;

const Testimonial: FC = () => {
    return (
        <TestimonialWrapper>
            {DUMMY_TESTIMONI.map((testimoni, index) => (
                <TestimonialItem key={index}>
                    <TestimonialText>{testimoni.testimoni}</TestimonialText>
                    <ProfileWrapper>
                        <ProfilePic src={testimoni.pic} alt={testimoni.name} />
                        <ProfileInfo>
                            <Name>{testimoni.name}</Name>
                            <Position>{testimoni.position} @ {testimoni.workplace}</Position>
                        </ProfileInfo>
                    </ProfileWrapper>
                </TestimonialItem>
            ))}
        </TestimonialWrapper>
    );
};

export default Testimonial;
