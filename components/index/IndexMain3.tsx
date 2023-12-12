import * as I from '../../style/styled-component/IndexMain/IndexMainStyledComponent';

export default function IndexMain3() {
  return (
    <I.MainContainer1>
      <I.MainContent1>
        <I.MainContent1Div1>
          <I.MainContent1Span1>원하는</I.MainContent1Span1>
          <I.MainContent1Span2>링크</I.MainContent1Span2>를<br />
          저장하세요
        </I.MainContent1Div1>
        <I.MainContent1Div2>
          나중에 읽고 싶은 글, 다시 보고 싶은 영상,
          <br />
          사고 싶은 옷, 기억하고 싶은 모든 것을
          <br />한 공간에 저장하세요.
        </I.MainContent1Div2>

        <I.MainContent1ImageDiv>
          <I.MainContent1Image src="/main3.svg" fill alt="card첫번째" />
        </I.MainContent1ImageDiv>
      </I.MainContent1>
    </I.MainContainer1>
  );
}
