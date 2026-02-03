"use client"

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Features(props: any){
  const {theme} = useTheme();
  const [themeIcon, setThemeIcon] = useState('light');
  useEffect(() => {
    setThemeIcon(theme);
  }, [theme])
  return (
        <div className={`${props.className} my-5 mx-auto max-w-7xl px-6 tablet:px-0 `}>
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-primary dark:text-white">
            <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center w-full">
                <span className="text-orange">اولین </span>قدمتان را در مسیر حمل‌ونقل کالا با اوستا <span className="text-orange">هوشمندانه</span> بردارید
            </h3>
            <p className="pb-3 tablet:px-8 mb-10 text-BodyL tablet:text-TitleL text-justify">
              انتخاب یک شریک مطمئن، تأثیر مستقیمی بر موفقیت کسب‌وکار شما دارد. اوستا هوش‌یار با ارائه راهکارهای هوشمند، شفاف و کارآمد، بهترین انتخاب برای حمل‌ونقل شما فراهم می‌آورد.
            </p>
          </div>
          <div className="flex flex-wrap tablet:flex-nowrap items-stretch justify-between py-5 gap-x-4 minitablet:gap-x-0 tablet:gap-x-4 gap-y-4 tablet:gap-y-0">
            <div className="basis-full minitablet:basis-1/2 loptop:basis-1/4 inline-flex h-full flex-col items-center justify-center bg-[#E4D8F488] dark:bg-[unset] dark:bg-dark-radial-02 px-3 py-8 tablet:py-4 loptop:py-8 rounded-2xl border-r-[1px] border-[#C17BFF]">
              <div className="cart-title">
                <Image className="mx-auto my-3" src={`/imgs/productivity_and_production_capacity-easy-process-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span className="text-TitleL text-center font-medium">فرایند آسان</span>
              </div>
              <div className="card-contnent p-5 mx-auto text-center">
                <p className="text-right font-regular">بهره‌گیری از فناوری‌های ارتباطی برای تسهیل تمامی مراحل حمل‌ونقل</p>
              </div>
            </div>
            <div className="basis-full minitablet:basis-1/2 loptop:basis-1/4 inline-flex h-full flex-col items-center justify-center bg-[#E4D8F488] dark:bg-[unset] dark:bg-dark-radial-02 px-3 py-8 tablet:py-4 loptop:py-8 rounded-2xl border-r-[1px] border-[#C17BFF]">
              <div className="cart-title">
                <Image className="mx-auto my-3" src={`/imgs/productivity_and_production_capacity-transparency-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span className="text-TitleL text-center font-medium">سرعت و شفافیت</span>
              </div>
              <div className="card-contnent p-5 mx-auto text-center">
                <p className="text-right font-regular">بکارگیری تکنولوژی‌های نوین برای تسریع و رصد لحظه‌ای محموله‌ها</p>
              </div>
            </div>
            <div className="basis-full minitablet:basis-1/2 loptop:basis-1/4 inline-flex h-full flex-col items-center justify-center bg-[#E4D8F488] dark:bg-[unset] dark:bg-dark-radial-02 px-3 py-8 tablet:py-4 loptop:py-8 rounded-2xl border-r-[1px] border-[#C17BFF]">
              <div className="cart-title">
                <Image className="mx-auto my-3" src={`/imgs/productivity_and_production_capacity-costs-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span className="text-TitleL text-center font-medium">کاهش هزینه‌ها</span>
              </div>
              <div className="card-contnent p-5 mx-auto text-center">
                <p className="text-right font-regular">بهینه‌سازی مسیرها و فرآیندها برای صرفه‌جویی در هزینه‌های حمل‌ونقل</p> 
              </div>
            </div>
            <div className="basis-full minitablet:basis-1/2 loptop:basis-1/4 inline-flex h-full flex-col items-center justify-center bg-[#E4D8F488] dark:bg-[unset] dark:bg-dark-radial-02 px-3 py-8 tablet:py-4 loptop:py-8 rounded-2xl border-r-[1px] border-[#C17BFF]">
              <div className="cart-title">
                <Image className="mx-auto my-3" src={`/imgs/productivity_and_production_capacity-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span className="text-TitleL text-center font-medium">دسترسی لحظه‌ای</span>
              </div>
              <div className="card-contnent p-6 mx-auto text-center">
                <p className="text-right font-regular">امکان مشاهده و مدیریت اطلاعات بار در هر زمان و مکان</p>
              </div>
            </div>
          </div>
        </div>);
}