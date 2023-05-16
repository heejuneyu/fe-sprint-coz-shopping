import React from 'react';


export default function Itemlistpage(){
    return(
        <div id="item-list-container">
        <div id="item-list-body">
          <div id="item-list-title">
            <div class="imagebox">
              
            <img class='all' src="./titleimage/all.png"></img>
            
            <img class='merchandise' src="./titleimage/merchandise.png"></img>
            <img class='category' src="./titleimage/category.png"></img>
            <img class='event' src="./titleimage/event.png"></img>
           
            <img class='brand' src="./titleimage/brand.png"></img>
           </div>
            <div class ="titlenamebox">
            <div id="titlename">전체</div>
            <div id="titlename">상품</div>
            <div id="titlename">카테고리</div>
            <div id="titlename">기획전</div>
            <div id="titlename">브랜드</div>
            </div>
          </div>
        </div>
      </div>
    )
}