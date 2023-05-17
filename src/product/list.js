import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import All from '../components/all';

export default function List(){
  const [products, setproducts] = useState([])

  useEffect(()=> {
    axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
  
    .then(res => {
      console.log(res)
      setproducts(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, [])

  const [isOpen, setIsOpen] = useState(false);
      
  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };

    return(
        <div id="item-list-container">
        <div id="item-list-body">
          <div id="item-list-title">
            <div class="imagebox">
              
           <img class='all' src="../titleimage/all.png"></img>
            <img class='merchandise' src="../titleimage/merchandise.png"></img>
            <img class='category' src="../titleimage/category.png"></img>
            <img class='event' src="../titleimage/event.png"></img>
            <img class='brand' src="../titleimage/brand.png"></img>
           </div>
            <div class ="titlenamebox">
            <div onClick={openModalHandler} id ="titlename" >전체</div>
            <div onClick={openModalHandler} id="titlename">상품</div>
            <div onClick={openModalHandler} id="titlename">카테고리</div>
            <div onClick={openModalHandler} id="titlename">기획전</div>
            <div onClick={openModalHandler} id="titlename">브랜드</div>
            
            </div>

          </div>

        <All></All>
        </div>
      </div>
    )
}


 




