import { FC } from "react";
import styled from "styled-components";

const images1 = [
  "image 33.png", 
  "image 33 (1).png", 
  "image 33 (2).png", 
  "image 33 (3).png"
];
const images2=[
    "image 33 (4).png",
    "image 33 (5).png",
    "image 33 (6).png",
    "image 33 (7).png"
]

const GallerySection = styled.section`
  width: 100vw;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 20px 0;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
`;

const ImageWrapper = styled.div`
  background-color: #C7D0D9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 444px;
  height: 306px;
`;

const Image = styled.img`
padding: 56px 48px;
width: 348px;
height: 194px;
`;

const Gallery: FC = () => {
  return (
    <GallerySection>
      <ImageContainer>
        {images1.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageContainer>
      <ImageContainer>
        {images2.map((src, index) => (
          <ImageWrapper key={index}>
            <Image src={src} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </GallerySection>
  );
};

export default Gallery;
