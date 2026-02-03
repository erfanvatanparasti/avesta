"use client"
import { useEffect, useState } from "react";
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { useDeviceType } from '@/context/useDeviceType';
export default function Testimonials(props: any){
  const deviceType = useDeviceType();
  const [testimonials, setTestimonials] = useState<any[]>([]);
  useEffect(() => {
    setTestimonials(getTestimonials());
  }, []);
    return (
    <div className={`${props.className??''} my-5 px-3 tablet:px-5 py-8 mx-auto max-w-7xl w-full flex flex-col gap-y-10`} id="testimonials">
      <h3 className='text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center loptop:text-justify w-full'><span className='text-orange'>اعتماد</span> شما سرمایه ارزشمند ما</h3>
      <Swiper slidesPerView={deviceType == "mobile" ? 1: 2.5} className='mx-auto w-full' autoplay={true} centeredSlides={deviceType === "mobile"? true: false} navigation={true} pagination={true} modules={[Pagination, A11y]} dir='ltr'>
        {testimonials.map((testimonial: any, i: number) => <SwiperSlide key={i} className="item mx-auto p-3">  
          <div className="flex flex-col items-center justify-center bg-[#E4D8F488] dark:bg-[unset] dark:bg-dark-radial-02 p-3 rounded-2xl border-r-[1px] border-[#C17BFF]">
            <div className="cart-title flex items-center ml-auto mr-0 border-b-[1px] border-primary" dir='rtl'>
              <Image className="my-3 rounded-full" src={`/imgs/testimonials/${testimonial.image}`} width={80} height={80}  alt="cart"/>
              <div className='testimonial-person text-[14px] font-regular flex flex-col items-start justify-between gap-y-5 mx-3 w-full'>
                <span className='text-TitleM'>{testimonial.position}</span>
                <span>{testimonial.preFullname} <span className='text-orange'> {testimonial.fullname}</span></span>
              </div>
            </div>
            <div className="card-contnent p-5 mx-auto text-center mt-3">
              <p className="text-right text-BodyL font-regular" dir='rtl'>"{testimonial.message}"</p>
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>
    </div>
    );
}

export function getTestimonials() {
    return [
      {
        image: "testimonial-01.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-02.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-03.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-04.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-05.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      },
      {
        image: "testimonial-06.png",
        position: "مدیر بازرگانی پشتیبانی امور دام",
        fullname: "علیرضا فرهمند",
        preFullname: "جناب آقای",
        message: "اعتماد به اوستا هوش‌یار برای ما یک تصمیم درست بود. دقت، سرعت و تعهد این مجموعه در حمل‌ونقل بارهای فله‌ای فراتر از انتظارات ما بود. همکاری با این شرکت تجربه‌ای عالی و اطمینان‌بخش است."
      }
    ];
}