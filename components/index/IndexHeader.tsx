import * as I from '../../style/styled-component/IndexMain/IndexMainStyledComponent';

export default function IndexHeader() {
  return (
    <I.HeaderContainer>
      <I.HeaderWrapper>
        <I.HeaderContent1>
          <I.HeaderDiv>
            <I.HeaderSpan>세상의 모든 정보</I.HeaderSpan>를<br />
            쉽게 저장하고 관리해 보세요
          </I.HeaderDiv>
        </I.HeaderContent1>
        <I.HeaderLink href={'/signup'}>링크 추가하기</I.HeaderLink>
        <I.HeaderImageDiv>
          <I.HeaderImage src="/headerImage.svg" fill alt="본문1 사진" />
        </I.HeaderImageDiv>
      </I.HeaderWrapper>
    </I.HeaderContainer>
  );
}
