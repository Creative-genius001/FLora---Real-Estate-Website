import React from 'react'
import '../styles/card.css'
import { motion } from "framer-motion"
const icon1 = require('../assets/icons/deal.png')
const icon2 = require('../assets/icons/credit-card.png')
const icon3 = require('../assets/icons/timer.png')



interface props {
    icon: string,
    title: string,
    desc: string
}
const data: props[] = [
    {
        icon: icon1,
        title: 'Property Insurance',
        desc: 'Property insurance against any potential damages that may occur during the sales and purchasing of the apaprtment'
    },
    {
        icon: icon2,
        title: 'Easy Payment',
        desc: 'Payment against any potential damages that may occur during the sales and purchasing of the apaprtment'
    },
    {
        icon: icon3,
        title: 'Quick Process',
        desc: 'Processes of any potential damages that may occur during the sales and purchasing of the apaprtment'
    }
]

const WorkCard = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 , y: 50}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    opacity : {delay: 0.5, duration: 2},
                    y : {delay: 0.5, duration: 0.4}
                 }}
                viewport={{ once: true }}
    className='cards-container flex justify-between mt-12 w-[80%] mx-auto'>
        { data?.map(d=> {
            return(
                <motion.div
                 
                 key={d.title} className='card rounded-[12px] '>
                    <div className='mb-4'><img src={d.icon} alt={d.title} className='object-cover w-[50px] h-[50px] ' /></div>
                    <h1 className='card-h mb-2'>{d.title}</h1>
                    <p className='card-p'>{d.desc}</p>
                </motion.div>
            )
        })}

    </motion.div>
  )
}

export default WorkCard