import styled from 'styled-components';
import * as F from '../style/styled-component/Footer/FooterStyledComponent';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <F.FooterContainer>
      <F.FooterLeft>©codeit - 2023</F.FooterLeft>
      <F.FooterMiddle>
        <F.PolicyNFaqA href="./policy.html">Privacy Policy</F.PolicyNFaqA>
        <F.PolicyNFaqA href="./faq.html">FAQ</F.PolicyNFaqA>
      </F.FooterMiddle>
      <F.FooterRight>
        <Link href="https://www.facebook.com">
          <Div>
            <Image src="/facebook.svg" fill alt="facebook" />
          </Div>
        </Link>
        <Link href="https://www.twitter.com">
          <Div>
            <Image src="/twitter.svg" fill alt="twitter" />
          </Div>
        </Link>
        <Link href="https://www.youtube.com">
          <Div>
            <Image src="/youtube.svg" fill alt="youtube" />
          </Div>
        </Link>
        <Link href="https://www.instagram.com">
          <Div>
            <Image src="/insta.svg" fill alt="instagram" />
          </Div>
        </Link>
      </F.FooterRight>
    </F.FooterContainer>
  );
}

const Div = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
`;
