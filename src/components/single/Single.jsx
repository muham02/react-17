import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import { useAddCarsMutation } from '../../slice/authSlice';
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Single = () => {
  const [update, setUpdate] = useState({})
  const handleChange =  (e)=>{
setUpdate({...user,[e.target.name]:e.target.value})
  }
  const navigate = useNavigate()
  const [addCars] = useAddCarsMutation()
  const handleSubmit = async (e)=>{
    e.preventDefault()
    await addCars(update)
    navigate('/')
  }
  return (
<Form 
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 400,
      height:300,
      margin:"100px auto",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column",
      flexWrap:"wrap",
      borderRadius:"9px",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    onMetaChange={handleChange}
      label="name"
      name="name"
      rules={[
        {
          message: 'write car name',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
    onMetaChange={handleChange}

      label="model"
      name="model"
      rules={[
        {
          message: 'write car model',
        },
      ]}
    >
      <Input/>
    </Form.Item>

   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button onClick={handleSubmit} type="primary" htmlType="submit">
        Send
      </Button>
    </Form.Item>
  </Form>

  )
}

export default Single