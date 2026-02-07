import React from 'react';

export default function Hero(props: any){
     return (
      <div className={`${props.className??""} hero-main-page`}>
        <div className="hero-first">
          <h1>سامانه مدیریت الکترونیکی و هوشمند <span className="text-orange">اَوستا</span></h1>
          <p>ارائه خدمات پیشرفته حمل و نقل کالا و لجستیک</p>
        </div>
        <div className="hero-last">
          <p className="dark:text-[#C4BCFC]">نخستین شرکت خلاق در دفتر معاونت علمی و فناوری ریاست جمهوری</p>
          <p className="text-orange">عارضه‌یابی، تولید، مشاوره ، پیاده‌سازی و پشتیبانی</p>
        </div>
      </div>
    );
  }