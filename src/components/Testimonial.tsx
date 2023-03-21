import React from 'react'
import { Avatar, Card, Rate } from 'antd'
import {testimonialData} from '../data/testimonialData'
import { motion } from 'framer-motion';


function Testimonial() {

  const { Meta } = Card;
  return (
    <>
    {testimonialData?.map((data,index)=>{
      return(
          <Card className='testimonial-card w-[370px]'
            style={{zIndex: "", position: "relative", height: "auto", marginTop: 16, fontFamily: "Syne", paddingTop: "17px", paddingBottom: "30px", paddingLeft: "10px", paddingRight: "10px" }}>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title={data.name}
            description={data.body}
          />
          <Rate className='absolute right-8' style={formattedStyles} defaultValue={3} />
      </Card>
      )
    })}
    </>
  )
}

const formattedStyles = {
  fontSize: "14px",
  marginTop: "15px",
}

export default Testimonial