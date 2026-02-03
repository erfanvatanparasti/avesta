import React from 'react';

export default function Hero(props: any){
     return (
      <div className={`${props.className} mx-auto light:text-primary dark:text-white tablet:pt-11`}>
        <div className="flex flex-col items-center justify-center text-center gap-y-2">
          <h1 className="text-HeadingL minitablet:text-Bold tablet:text-ExtraBold font-medium py-1 minitablet:py-3">سامانه مدیریت الکترونیکی و هوشمند <span className="text-orange">اَوستا</span></h1>
          <p className="text-TitleM minitablet:text-HeadingMx tablet:text-Bold font-medium ">ارائه خدمات پیشرفته حمل و نقل کالا و لجستیک</p>
        </div>
        <div className="flex flex-col gap-y-2 tablet:gap-y-5 items-center justify-center py-5 text-Body tablet:text-BodyL text-center">
          <p className="dark:text-[#C4BCFC]">نخستین شرکت خلاق در دفتر معاونت علمی و فناوری ریاست جمهوری</p>
          <p className="text-orange">عارضه‌یابی، تولید، مشاوره ، پیاده‌سازی و پشتیبانی</p>
        </div>
      </div>
    );
  }