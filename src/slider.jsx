import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

function Slider() {

  return (
    <div className='h-[90vh] p-2 w-[40vw] mx-20 -my-32'>
    <Swiper
       
      spaceBetween={80}
      hashNavigation={{
        watchState: true,
      }}
      pagination={{
        
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, HashNavigation]}
      className="mySwiper"
    >
    <SwiperSlide data-hash="slide1" >
    <div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
    <div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
<div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
  <img
    src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
    className="p-10 h-[10px] mx-20"
    alt="Logo"
  />
  <p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
</div>
</div>
</SwiperSlide>
      <SwiperSlide data-hash="slide1" >
      <div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
      <div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
  <div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
    <img
      src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
      className="p-10 h-[10px] mx-20"
      alt="Logo"
    />
    <p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
  </div>
</div>
</SwiperSlide>
<SwiperSlide data-hash="slide1" >
      <div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
      <div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
  <div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
    <img
      src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
      className="p-10 h-[10px] mx-20"
      alt="Logo"
    />
    <p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
  </div>
</div>
</SwiperSlide><SwiperSlide data-hash="slide1" >
<div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
<div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
<div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
<img
src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
className="p-10 h-[10px] mx-20"
alt="Logo"
/>
<p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
</div>
</div>
</SwiperSlide><SwiperSlide data-hash="slide1" >
<div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
<div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
<div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
<img
src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
className="p-10 h-[10px] mx-20"
alt="Logo"
/>
<p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
</div>
</div>
</SwiperSlide><SwiperSlide data-hash="slide1" >
<div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
<div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
<div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
<img
src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
className="p-10 h-[10px] mx-20"
alt="Logo"
/>
<p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
</div>
</div>
</SwiperSlide><SwiperSlide data-hash="slide1" >
<div className='h-[560px] w-[560px] mx-5 bg-white rounded-[60px] flex items-center justify-center'>
<div className='w-24 h-10 bg-[#8a93e5] -mt-80 -ml-16 rounded-r-lg'>Hello... </div>
<div className='h-[400px] w-[400px] items-center justify-center  rounded-xl flex flex-col'>
<img
src="https://www.verywellfit.com/thmb/kxlmSIbGIrJ3RvlHWwERu6wv3jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hot-dog-3c747f76830f44d993fa9b4bf0e553dd.jpg"
className="p-10 h-[10px] mx-20"
alt="Logo"
/>
<p className='text-[#818181]'>Crystal Agate Phone <span className='text-[#317189]'>-$18.59</span></p>
</div>
</div>
</SwiperSlide>
    </Swiper>

    
  </div>
  )
}

export default Slider;