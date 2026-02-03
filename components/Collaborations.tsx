"use client"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { useDeviceType } from '@/context/useDeviceType';
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useState } from 'react';

export default function Collaborations(props: any){
  const deviceType = useDeviceType();
  const {theme} = useTheme();
  const [themeLogo, setThemeLogo] = useState('light');
  useEffect(() => {
    setThemeLogo(theme);
  }, [theme])
     return (
      <div className={`${props.className} my-5 px-5 w-full bg-[#F5F0FB] bg-[url("/imgs/collaborations-bg.png")] dark:bg-[url("/imgs/collaborations-bg-dark.jpg")]`} id="collaborations">
        <Swiper slidesPerView={deviceType == "mobile" ? 1: 3} className='items-center max-w-7xl w-full mx-auto' autoplay={true} modules={[Navigation, Scrollbar, A11y]} dir='ltr' centeredSlides={deviceType === "mobile"? true: false}>
          <SwiperSlide key={1} className="item mx-auto p-2">  
            <Image className='mx-auto' src={`/imgs/1${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={2} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={3} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/3${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={4} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/4${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={8} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={5} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/5${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={6} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/6${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={7} className="item mx-auto p-2">
            <Image className='mx-auto' src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
     );
  }