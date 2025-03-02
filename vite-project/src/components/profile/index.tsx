import { FC } from "react"
import styled from "styled-components";
const Profile:FC = ()=>{
    const ProfileSection = styled.section`
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 70%;

    `
    const ImageContainer = styled.img`
        width: 297px;
        height: 297px;
    `
    const DetailsContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `
    const Title =styled.h1`
    font-family: "Neue Montreal", sans-serif;
    font-weight: 400;
font-size: 18px;
line-height: 28.8px;
letter-spacing: 0%;
color:#3C3D3E;
margin: 0;

    `
    const Content = styled.h2`
    font-family: "Neue Montreal", sans-serif;
    font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;
margin: 0;
    `
    const SocialLink=styled.a`
        font-family: "Neue Montreal", sans-serif;
    font-weight: 400;
font-size: 27px;
line-height: 37.8px;
letter-spacing: 0%;
margin: 0;
cursor: pointer;
&:hover{
    text-decoration: underline;
}

    `
    return (
        <ProfileSection>
            <ImageContainer src="Rectangle 25.png" alt="" />
            <DetailsContainer>
                <Title>Contact Details</Title>
                <Content>ayush.barnwal@brightscout.com</Content>
                <Content>+91 8651447521</Content>
            </DetailsContainer>
            <DetailsContainer>
                <Title>Social</Title>
                <SocialLink>Linkedin</SocialLink>
                <SocialLink>Instagram</SocialLink>
                <SocialLink>Twitter</SocialLink>
                <SocialLink>Webflow</SocialLink>
                <SocialLink>Figma</SocialLink>
                
            </DetailsContainer>
        </ProfileSection>
    )
}
export default Profile;