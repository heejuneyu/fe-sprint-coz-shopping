import React from 'react';
import styled from 'styled-components';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
        
const ModalContent = styled.div`
    width: 160px;
    height: 110px;
    box-shadow: 0px 0px 6px 0px #00000040;
    background-color: #FFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 70px;
    z-index: 3;
    margin-left:83%;

    &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff;
    transform: translateX(-50%);
    z-index: 3;
  }
`    

const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
      
        const openModalHandler = () => {
          // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
          setIsOpen(!isOpen)
        };
    return (
         <div class="headerbox">
        <img id = "image1" src= "../logo1.png" ></img>
        <div class="sitename">
        <Link to="/" style={{ textDecoration: "none" }}>COZ Shopping</Link>
        </div>
        <img class="HamburgerBtn" src = "../Hamburgericon.png" onClick={openModalHandler}></img>
        {isOpen ? (
          <ModalContent>
            <div id ="menu">
              <p id= "modallist">000님, 안녕하세요!</p>
              <Link to="/product/list" ><FontAwesomeIcon icon={faGift} />상품리스트 페이지</Link>
              <Link to="/pages/bookmark" ><FontAwesomeIcon icon={faStar} />북마크 페이지</Link>
              </div> 
          </ModalContent>
        ): null}
        </div>
    );
};
  
export default Header;