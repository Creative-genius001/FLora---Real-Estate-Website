import React from 'react'
import '../styles/card.css'


interface props {
    title: string,
    desc: string
}
const data: props[] = [
    {
        title: 'Property Insurance',
        desc: 'Property insurance against any potential damages that may occur during the sales and purchasing of the apaprtment'
    },
    {
        title: 'Easy Payment',
        desc: 'Payment against any potential damages that may occur during the sales and purchasing of the apaprtment'
    },
    {
        title: 'Quick Process',
        desc: 'Processes of any potential damages that may occur during the sales and purchasing of the apaprtment'
    }
]

const WorkCard = () => {
  return (
    <div className='flex justify-between mt-16 w-[80%] mx-auto'>
        { data?.map(d=> {
            return(
                <div key={d.title} className='card rounded-[12px] '>
                    <h1 className='card-h mb-2'>{d.title}</h1>
                    <p className='card-p'>{d.desc}</p>
                </div>
            )
        })}

    </div>
  )
}

export default WorkCard