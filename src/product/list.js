import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function List(){
  const [products, setproducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=> {
    axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products')
  
    .then(res => {
      console.log(res)
      setproducts(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  }, [])
      
  const filterResult = (category) => {
    const result = products.filter((product) => product.type === category);
    setFilteredProducts(result);
  };
  const resetFilter = () => {
    setFilteredProducts([]);
  };


  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const productList = filteredProducts.length > 0 ? filteredProducts : products;
    return(
        <div id="item-list-container">
        <div id="item-list-body">
          <div id="item-list-title">
            <div class="imagebox">
              
           <img id='topimage' onClick={() =>setFilteredProducts(products)} src="../titleimage/all.png"></img>
            <img id='topimage'onClick={() =>filterResult('Product')} src="../titleimage/merchandise.png"></img>
            <img id='topimage' onClick={() =>filterResult('Category')} src="../titleimage/category.png"></img>
            <img id='topimage' onClick={() =>filterResult('Exhibition')} src="../titleimage/event.png"></img>
            <img id='topimage' onClick={() =>filterResult('Brand')} src="../titleimage/brand.png"></img>
           </div>
            <div class ="titlenamebox">
            <div onClick={() =>setFilteredProducts(products)} id ="titlename" >전체</div>
            <div onClick={() =>filterResult('Product')} id="titlename">상품</div>
            <div onClick={() =>filterResult('Category')} id="titlename">카테고리</div>
            <div onClick={() =>filterResult('Exhibition')} id="titlename">기획전</div>
            <div onClick={() =>filterResult('Brand')} id="titlename">브랜드</div>
            
            </div>

          </div>

          <div class = "productslist">
      {productList.map((product)=>(
  <div class="merchandiselist" key={product.id}>
    {product.image_url !== null?(
    <img id ="imagesize" src={product.image_url}></img>
    ) : <img id ="imagesize" src={product.brand_image_url} ></img>}

    <div id ="topexplain">
      {product.title !==null ?(<div>{product.title}</div>): <div>{product.brand_name}</div>}
    {product.discountPercentage !== null ? (<div>{product.discountPercentage}%</div>): <div>고객관심수</div>}
    
    <div>{product.sub_title}</div>
    {product.price !==null ?(<div>{product.price}원</div>) : <div></div>}
    </div>
   </div>
   ))}
   </div>

        </div>
      </div>
    )
}


 




