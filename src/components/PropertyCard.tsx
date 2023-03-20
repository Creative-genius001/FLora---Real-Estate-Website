import React from 'react'
import { propertyData } from '../data/propertyData'
import { GrLocation, GrFavorite } from 'react-icons/gr'
import {
	Keyboard,
	Navigation,
	Pagination,
	EffectFade,
} from "swiper";
import {
	Swiper,
	SwiperSlide,
} from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const PropertyCard = () => {
  return (
    <>
      
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				centeredSlides={false}
				slidesPerGroupSkip={1}
				grabCursor={true}
				keyboard={{
					enabled: true,
				}}
				breakpoints={{
					320: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					760: {
						slidesPerView: 3,
						slidesPerGroup: 2,
					},
					1200: {
						slidesPerView: 4,
						slidesPerGroup: 2,
					},
				}}
				navigation={false}
				pagination={{
					clickable: true,
				}}
				fadeEffect={{
					crossFade: true,
				}}
				modules={[
					Keyboard,
					Navigation,
					Pagination,
					EffectFade,
				]}
				className="mySwiper">
            {propertyData?.map((p,index)=>{
                    return(
                      <div key={index} className="swiper-wrapper">
                         <SwiperSlide key={index} className='container relative w-[300px] h-[375px]  rounded-[12px] '>
                            <div className=' absolute z-[1000] cursor-pointer top-4 right-3 w-[40px] h-auto rounded-[5px] bg-white p-2 flex justify-center items-center '><GrFavorite /></div>
                            <div className='img-div  '>
                              <img src={p.image} alt={p.title} className='object-cover w-full h-full  ' />
                            </div>
                            <div className='property-card-content p-4'>
                              <span className='num text-[18px] text-darkblue'>${p.price}</span>
                              <h1 className='text-[24px] leading-[28px] mb-3 mt-1 cursor-pointer hover:text-darkblue  '>{p.title}</h1>
                              <span className='flex items-center'><GrLocation className='mr-2' /> <p className='font-medium'>{p.location}</p></span>
                            </div>
                          </SwiperSlide>
                      </div>
                     
                    )
                  })}
        </Swiper>
    </>
  )
}

export default PropertyCard