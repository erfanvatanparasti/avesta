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
      <div className={`${props.className} collaborations`} id="collaborations">
        <Swiper slidesPerView={deviceType == "mobile" ? 1: 3} autoplay={true} modules={[Navigation, Scrollbar, A11y]} dir='ltr' centeredSlides={deviceType === "mobile"? true: false}>
          <SwiperSlide key={1}>  
            <Image src={`/imgs/1${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <Image src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <Image src={`/imgs/3${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={4}>
            <Image src={`/imgs/4${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={8}>
            <Image src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={5}>
            <Image src={`/imgs/5${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={6}>
            <Image src={`/imgs/6${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
          <SwiperSlide key={7}>
            <Image src={`/imgs/2${themeLogo}.png`} width={250} height={150} alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>
     );
  }