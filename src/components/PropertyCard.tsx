import React from 'react'
import { propertyData } from '../data/propertyData'
import { GrLocation, GrFavorite } from 'react-icons/gr'

const PropertyCard = () => {
  return (
    <>
      {propertyData?.map((p,index)=>{
        return(
          <div key={index} className='container relative w-[300px] h-[375px] bg-darkblue rounded-[12px] '>
            <div className=' absolute z-[1000] cursor-pointer top-4 right-3 w-[40px] h-auto rounded-[5px] bg-white p-2 flex justify-center items-center '><GrFavorite /></div>
             <div className='img-div  '>
              <img src={p.image} alt={p.title} className='object-cover w-full h-full  ' />
             </div>
             <div className='p-4'>
              <span className='num text-[18px]'>${p.price}</span>
              <h1 className='text-[24px] leading-[28px] mb-3 mt-1'>{p.title}</h1>
              <span className='flex items-center'><GrLocation className='mr-2' /> <p className='font-medium'>{p.location}</p></span>
             </div>
          </div>
        )
      })}
    </>
  )
}

export default PropertyCard