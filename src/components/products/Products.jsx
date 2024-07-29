import React from 'react'
import { useState } from 'react';
import { Card } from 'antd';
import { useEffect } from 'react';
import './Product.css'
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
// import { useDispatch } from 'react-redux'
// import { useAuthQuery } from '../../redux/api/authApi'
const Products = () => {
  
    const [date,getDate] = useState([])
   const getData = async ()=>{
    
    try{
      await fetch("https://66a511d65dc27a3c190a9139.mockapi.io/api/cars/cars")
    .then(res=>res.json())
    .then(data=>{
getDate(data)
    })
    }
    catch(error){
      console.log(error);
    }
   }
 useEffect(()=>{
  getData()
 },[])
  return (
<div className='cardDad'>
  {
    date.map(item=>{
      return(
       <NavLink to="single/:id">
         <Card
        hoverable
        style={{
          width: 240,
          minHeight:"300px"
        }}
        cover={<img alt="example" src={item.image}/>}
      >
        <Meta title={item.name} description={item.price} text={item.model}/>
      </Card>
       </NavLink>
      )
    })
  }
</div>
  )
}

export default Products