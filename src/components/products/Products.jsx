import React from 'react'
import { useState } from 'react';
import { Card ,Button} from 'antd';
import { useEffect } from 'react';
import './Product.css'
import { NavLink, useParams } from 'react-router-dom';
const { Meta } = Card;
import { useGetAllCarsQuery,useDeleteCarsMutation } from '../../slice/authSlice';
// import { useDispatch } from 'react-redux'
// import { useAuthQuery } from '../../redux/api/authApi'
const Products = () => {
  const {id}= useParams()
    const {data:users} = useGetAllCarsQuery()
  const [deleteCars] = useDeleteCarsMutation()
  return (
<div className='cardDad'>
  {
    users?.map(item=>{
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
      <div className="btn__Wrap">
      <Button onClick={()=>deleteCars(item.id)} type="primary" danger>
      Delete
    </Button>
    <Button type="primary">
     <NavLink to='/single'>Edit</NavLink>
    </Button>
      </div>
      </Card>
       </NavLink>
      )
    })
  }
</div>
  )
}

export default Products