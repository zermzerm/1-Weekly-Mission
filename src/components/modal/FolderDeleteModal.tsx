import { MouseEvent, useRef } from 'react';
import xClose from '../img/Xclose.svg';
import * as M from '../styled-component/ModalStyledCompoenet';

interface Props {
  handleClick: () => void;
  value: string;
  title: string;
  cardLink: string;
}

export default function FolderDeleteModal({
  handleClick,
  value = '링크 삭제',
  title,
  cardLink,
}: Props) {
  const back = useRef();

  if (value === '폴더 추가' || title === '전체') {
    title = '내용 입력';
  }

  const backClick = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    if (target === back.current) handleClick();
  };

  return (
    //여기 back, onclick 이상
    <M.ModalBackground ref={`${back}`} onClick={backClick as () => void}>
      <M.ModlaWrapper>
        <M.ModalDeleteHeader>
          <M.ModalHeader>{value}</M.ModalHeader>
          <M.ModalLinkUrl>
            {value === '링크 삭제' ? cardLink : title}
          </M.ModalLinkUrl>
        </M.ModalDeleteHeader>
        <M.ModalMain>
          <M.ModalButton $color={'red'}>삭제하기</M.ModalButton>
        </M.ModalMain>
        <M.CloseImg src={xClose} alt="닫기 버튼" onClick={handleClick} />
      </M.ModlaWrapper>
    </M.ModalBackground>
  );
}