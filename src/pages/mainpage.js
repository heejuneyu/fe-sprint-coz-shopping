import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from '../components/imageModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

    // const [isFavorite, setIsFavorite] = useState(false);
  
    // const toggleFavorite = () => {
    //   setIsFavorite(!isFavorite);
    // };
    const notify = () => toast("북마크 되었습니다")
    return(
      <div class= "mainbox">
        <div id ="boldtitle">상품리스트</div>
        <div class="merchandiselistbox">
      {products.map((product)=>(
        <div class="merchandiselist" key={product.id}>
        {product.image_url !== null?(
        <img id ="imagesize" src={product.image_url} onClick={() => openModal(product.image_url)} ></img>
        ) : <img id ="imagesize" src={product.brand_image_url} onClick={() => openModal(product.brand_image_url)} ></img>}

        <div id ="topexplain">
          {product.title !==null ?(<div>{product.title}</div>): <div>{product.brand_name}</div>}
        {product.discountPercentage !== null ? (<div>{product.discountPercentage}%</div>): <div>고객관심수</div>}
        
        <div>{product.sub_title}</div>
        {product.price !==null ?(<div>{product.price}원</div>) : <div></div>}
        </div>
        <div class="starbtn" onClick={notify}>
        <FontAwesomeIcon icon={faStar} color={'yellow'} />
        
      </div>
      <ToastContainer></ToastContainer>
       </div>
       ))}
       </div>
       {showModal && <Modal imageUrl={selectedImage} onClose={closeModal} />}
      </div>
    )
}

