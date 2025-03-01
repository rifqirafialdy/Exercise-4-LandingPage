import { FC, useState } from "react";
import styled from "styled-components";
import { DUMMY_PROJECTS } from "../../constants/projectList"; // Adjust path if needed

const PortofolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProjectRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    &:not(:last-child) { 
        border-bottom: 1px solid #C7D0D9; 
    }
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const ProjectTitle = styled.h2`
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 60px;
    line-height: 72.61px;
    letter-spacing: 0%;
    margin: 0; /* Remove default margin */
`;

const Roles = styled.p`
    font-family: "Neue Montreal", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 28.8px;
    letter-spacing: 0%;
    color: #3C3D3E;
    margin: 0; /* Remove default margin */
`;
const LinkIcon = styled.img`
    transition: opacity 0.3s ease-in-out ;;
`




const Portofolio: FC = () => {
    return (
        <PortofolioWrapper>
            {DUMMY_PROJECTS.map((project, index) => {
                    const [imgsrc,setImgsrc]= useState("link.png");
return(
                <ProjectRow key={index}>
                    <ProjectInfo>
                        <ProjectTitle>{project.name}</ProjectTitle>
                        <Roles>{project.roles.join(" - ")}</Roles>
                    </ProjectInfo>
                    <LinkIcon src={imgsrc}
                            alt="project link"
                            onMouseEnter={() => setImgsrc("black-link.png")}
                            onMouseLeave={() => setImgsrc("link.png")}
                        />
                </ProjectRow>
)})}
        </PortofolioWrapper>
    );
};

export default Portofolio;
