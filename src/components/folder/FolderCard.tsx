import { dateCalculator } from '../dateCalculator';
import noImage from '../img/no-image.svg';
import kebab from '../img/kebab.svg';
import star from '../img/star.svg';
import { useEffect, useRef, useState } from 'react';
import FolderDeleteModal from '../modal/FolderDeleteModal';
import ToFolderPlusModal from '../modal/ToFolderPlusModal';
import * as C from '../styled-component/CardStyledComponent';

export default function FolderCard(link) {
  const apiDate = new Date(link.item.created_at);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();
  const [clicked, setClicked] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showToFolderPlusModal, setShowToFolderPlusModal] = useState(false);

  const back = useRef();
  const kebabfunc = (e) => {
    e.preventDefault();
  };

  const kebabClick = () => {
    setClicked(!clicked);
  };

  const clickOutside = (e) => {
    if (back.current && !back.current.contains(e.target)) {
      setClicked(!clicked);
    }
  };

  const onClickDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const onClickToFolderModal = () => {
    setShowToFolderPlusModal(!showToFolderPlusModal);
  };

  if (link.item.image_source === undefined || link.item.image_source === null) {
    link.item.image_source = noImage;
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener(clickOutside);
  }, [clickOutside]);
  return (
    <>
      <C.CardWrapper to={link.item.url} target="_blank">
        <C.CardBox>
          <C.CardImgDiv>
            <C.CardImg
              className="card-img"
              src={link.item.image_source}
              alt={link.item.title}
            />
          </C.CardImgDiv>
          <C.CardText>
            <C.CardTimeDIv>
              <C.CardTimeAgo>{elapsedTime}</C.CardTimeAgo>

              <C.KebabButton onClick={kebabfunc}>
                <img src={kebab} alt="kebabImg" onClick={kebabClick} />
                {clicked && (
                  <div>
                    <C.KebabDiv ref={back}>
                      <C.KebabPlus onClick={onClickDeleteModal}>
                        삭제하기
                      </C.KebabPlus>
                      <C.KebabDelete onClick={onClickToFolderModal}>
                        폴더에 추가
                      </C.KebabDelete>
                    </C.KebabDiv>
                  </div>
                )}
              </C.KebabButton>
            </C.CardTimeDIv>
            <C.TextDescription>{link.item.description}</C.TextDescription>
            <C.CardYear>{`${year}. ${month}. ${days}`}</C.CardYear>
          </C.CardText>
          <C.StarImg src={star} alt="starImg" />
        </C.CardBox>
      </C.CardWrapper>

      {showDeleteModal && (
        <FolderDeleteModal
          handleClick={onClickDeleteModal}
          cardLink={link.item.url}
        />
      )}
      {showToFolderPlusModal && (
        <ToFolderPlusModal
          handleClick={onClickToFolderModal}
          cardLink={link.item.url}
        />
      )}
    </>
  );
}