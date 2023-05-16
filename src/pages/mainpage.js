import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';



export default function Mainpage(){

  const [products, setproducts] = useState([])

  useEffect(()=> {
    axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
  
    .then(res => {
      console.log(res)
      setproducts(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, [])
    return(
      <div class= "mainbox">
        <div id ="boldtitle">상품리스트</div>
        <div class="merchandiselistbox">
      {products.map((product)=>(
        <div class="merchandiselist" key={product.id}>
          <img id ="imagesize" src={product.image_url}></img>
          <div>
          <div>{product.title}</div>
          <div>{product.price}원</div>
          </div>
         </div>
         ))}
        </div>
        </div>
    )
}