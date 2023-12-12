import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  padding: 20px 10vw 0;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: #f0f6ff;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: auto;
  padding-top: 70px;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  align-self: stretch;
  background: var(--mainBackColor);

  @media (max-width: 767px) {
    height: 650px;
  }
`;

export const HeaderContent1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  text-align: center;
  font-size: max(3.4vw, 32px);
  font-weight: 700;
  line-height: 80px;
  color: var(--blackColor);
  margin-top: 0;
`;

export const HeaderSpan = styled.span`
  background: linear-gradient(91deg, #6d6afe 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeaderLink = styled(Link)`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  width: 350px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export const HeaderImageDiv = styled.div`
  position: relative;
  width: 1118px;
  height: 590px;
  padding: 50px 41px;
  overflow: hidden;
  background-size: cover;
`;

export const HeaderImage = styled(Image)`
  padding: 50px 41px;
  overflow: hidden;
  background-size: cover;
`;

export const MainContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent1 = styled.div`
  padding: 120px 0 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'div1 img'
    'div2 img';

  @media (max-width: 767px) {
    margin-bottom: 0;
    display: grid;
    grid-template-columns: none;
    gap: 12px;
    padding: 0 32px;
    grid-template-areas:
      'div1'
      'img'
      'div2';
  }
`;

export const MainContent1Div1 = styled.div`
  color: var(--blackColor);
  font-size: max(2.2vw, 29px);
  font-weight: 700;
  letter-spacing: -0.3px;
  padding-top: 150px;
  grid-area: div1;

  @media (max-width: 767px) {
    padding: 0;
    margin: 0;
    width: 90vw;
  }
  .MainContentDiv1 br {
    display: none !important;
  }
`;

export const MainContent1Span1 = styled.span`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const MainContent1Span2 = styled.span`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: max(2.2vw, 29px);
  font-weight: 700;
`;

export const MainContent1Div2 = styled.div`
  position: relative;
  color: #6b6b6b;
  font-size: max(0.72vw, 15px);
  font-weight: 500;
  line-height: 150%;
  grid-area: div2;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    margin-top: 0px;
    grid-row: 3;
  }
  .MainContentDiv2 br {
    display: none !important;
  }
`;

export const MainContent1ImageDiv = styled.div`
  position: relative;
  width: 550px;
  height: 450px;
  border-radius: max(0.72vw, 15px);
  background: var(--mainBackColor);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: -12px;
  overflow: hidden;
  grid-area: img;

  @media (max-width: 767px) {
    width: 90vw;
    height: 60vw;
    gap: 0;
  }
`;

export const MainContent1Image = styled(Image)``;
