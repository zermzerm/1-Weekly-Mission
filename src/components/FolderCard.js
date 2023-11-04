import { Link } from 'react-router-dom';
import { dateCalculator } from './dateCalculator';
import noImage from './img/no-image.svg';
import kebab from './img/kebab.svg';
import star from './img/star.svg';
import { useRef, useState } from 'react';
import FolderNamingModal from './FolderNamingModal';

export default function FolderCard(link) {
  const apiDate = new Date(link.item.created_at);
  const elapsedTime = dateCalculator(apiDate);
  const year = apiDate.getFullYear();
  const month = apiDate.getMonth() + 1;
  const days = apiDate.getDate();
  const [clicked, setClicked] = useState(false);
  const [onModal, setOnModal] = useState(false);

  const back = useRef();

  const kebabfunc = (e) => {
    e.preventDefault();
  };

  const kebabClick = (e) => {
    setClicked(!clicked);
  };

  const kebabDeleteButton = (e) => {
    setClicked(!clicked);
    setOnModal(!onModal);
  };
  const kebabPlusButton = (e) => {
    setClicked(!clicked);
    setOnModal(!onModal);
  };

  const onClickCloseModal = () => {
    setOnModal(!onModal);
  };

  const clickOutside = (e) => {
    if (back.current && !back.current.contains(e.target)) {
      setClicked(!clicked);
    }
  };

  if (link.item.image_source === undefined || link.item.image_source === null) {
    link.item.image_source = noImage;
  }
  document.addEventListener('mousedown', clickOutside);
  return (
    <>
      <Link to={link.item.url} className="card-wrapper" target="_blank">
        <div className="card-box">
          <div className="card-img-div">
            <img
              className="card-img"
              src={link.item.image_source}
              alt={link.item.title}
            />
          </div>
          <div className="card-text">
            <div className="card-time-div">
              <div className="card-time-ago">{elapsedTime}</div>

              <div className="kebab-button" onClick={kebabfunc}>
                <img src={kebab} alt="kebabImg" onClick={kebabClick} />
                {clicked && (
                  <div className="kebab-wrapper">
                    <div className="kebab-div" ref={back}>
                      <div className="kebab-plus" onClick={kebabDeleteButton}>
                        삭제하기
                      </div>
                      <div className="kebab-delete" onClick={kebabPlusButton}>
                        폴더에 추가
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div></div>
            <div className="text-description">{link.item.description}</div>
            <div className="card-year">{`${year}. ${month}. ${days}`}</div>
          </div>
          <img src={star} className="star-img" alt="starImg" />
        </div>
      </Link>
      {onModal && <FolderNamingModal handleClick={onClickCloseModal} />}
    </>
  );
}
