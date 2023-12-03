import styled from 'styled-components';
import * as F from './styled-component/FooterStyledComponent';
import Image from 'next/image';

const Div = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;
export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FoterLeft>©codeit - 2023</F.FoterLeft>
      <F.FooterMidle>
        <F.PolicyNFaqA href="./policy.html">Privacy Policy</F.PolicyNFaqA>
        <F.PolicyNFaqA href="./faq.html">FAQ</F.PolicyNFaqA>
      </F.FooterMidle>
      <F.FooterRight>
        <a href="https://www.facebook.com">
          <Div>
            <Image src="/facebook.svg" fill alt="facebook" />
          </Div>
        </a>
        <a href="https://www.twitter.com">
          <Div>
            <Image src="/twitter.svg" fill alt="twitter" />
          </Div>
        </a>
        <a href="https://www.youtube.com">
          <Div>
            <Image src="/youtube.svg" fill alt="youtube" />
          </Div>
        </a>
        <a href="https://www.instagram.com">
          <Div>
            <Image src="/insta.svg" fill alt="instagram" />
          </Div>
        </a>
      </F.FooterRight>
    </F.FooterContainer>
  );
}