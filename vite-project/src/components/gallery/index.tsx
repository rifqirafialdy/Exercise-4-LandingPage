import { FC, useEffect, useRef } from "react";
import styled from "styled-components";

const images1 = [
  "image 33.png", 
  "image 33 (1).png", 
  "image 33 (2).png", 
  "image 33 (3).png"
];

const images2 = [
  "image 33 (4).png",
  "image 33 (5).png",
  "image 33 (6).png",
  "image 33 (7).png"
];

const GallerySection = styled.section`
  width: 100vw;
  overflow-x: hidden;
  white-space: nowrap;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ScrollingWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px;
  animation: scroll 20s linear infinite;
  min-width: max-content;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const ImageWrapper = styled.div`
  background-color: #C7D0D9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 444px;
  height: 306px;
  flex: 0 0 auto;
`;

const Image = styled.img`
  padding: 56px 48px;
  width: 348px;
  height: 194px;
`;

const Gallery: FC = () => {
  return (
    <GallerySection>
      <ScrollingWrapper>
        <ImageContainer>
          {[...images1, ...images1].map((src, index) => (
            <ImageWrapper key={index}>
              <Image src={src} alt={`Image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </ImageContainer>
      </ScrollingWrapper>
      <ScrollingWrapper>
        <ImageContainer>
          {[...images2, ...images2].map((src, index) => (
            <ImageWrapper key={index}>
              <Image src={src} alt={`Image ${index + 1}`} />
            </ImageWrapper>
          ))}
        </ImageContainer>
      </ScrollingWrapper>
    </GallerySection>
  );
};

export default Gallery;
