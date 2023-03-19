import React from 'react'
import { Avatar, Card } from 'antd'
import {testimonialData} from '../data/testimonialData'
function Testimonial() {

  const { Meta } = Card;
  return (
    <>
    {testimonialData?.map((data,index)=>{
      return(
          <Card
        style={{ width: 300, marginTop: 16 }}>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random?key=2" />}
            title={data.name}
            description={data.body}
          />
      </Card>
      )
    })}
    </>
  )
}

export default Testimonial