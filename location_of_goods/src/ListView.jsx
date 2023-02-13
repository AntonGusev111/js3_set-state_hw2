import React from 'react'

export default function ListView(props) {
  let ShopItem = props.items.map((item, index)=>{
    return(
      <>
      <div className="row" key={index}>
      <img class='cell-img' src={item.img}></img>
      <div className="cell-name" >{item.name}</div>
      <div className="cell-color">{item.color}</div>
      <div className="cell-price">${item.price}</div>
      <div className="cell-add_to_card">ADD TO CART</div>
      </div>
      </>
    )
  })
  return (
    <div>
      {ShopItem}
    </div>
  )
}
