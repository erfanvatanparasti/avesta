"use client"

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Features(props: any){
  const {theme}:any = useTheme();
  const [themeIcon, setThemeIcon] = useState('light');
  useEffect(() => {
    setThemeIcon(theme);
  }, [theme])
  return (
        <div className={`${props.className} features`}>
          <div className="features-content">
            <h3 >
                <span className="text-orange">اولین </span>قدمتان را در مسیر حمل‌ونقل کالا با اوستا <span className="text-orange">هوشمندانه</span> بردارید
            </h3>
            <p>
              انتخاب یک شریک مطمئن، تأثیر مستقیمی بر موفقیت کسب‌وکار شما دارد. اوستا هوش‌یار با ارائه راهکارهای هوشمند، شفاف و کارآمد، بهترین انتخاب برای حمل‌ونقل شما فراهم می‌آورد.
            </p>
          </div>
          <div className="features-items">
            <div className="feature-item">
              <div className="feature-item-title">
                <Image src={`/imgs/productivity_and_production_capacity-easy-process-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span>فرایند آسان</span>
              </div>
              <div className="feature-item-contnent">
                <p>بهره‌گیری از فناوری‌های ارتباطی برای تسهیل تمامی مراحل حمل‌ونقل</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-title">
                <Image src={`/imgs/productivity_and_production_capacity-transparency-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span>سرعت و شفافیت</span>
              </div>
              <div className="feature-item-contnent">
                <p>بکارگیری تکنولوژی‌های نوین برای تسریع و رصد لحظه‌ای محموله‌ها</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-title">
                <Image src={`/imgs/productivity_and_production_capacity-costs-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span>کاهش هزینه‌ها</span>
              </div>
              <div className="feature-item-contnent">
                <p>بهینه‌سازی مسیرها و فرآیندها برای صرفه‌جویی در هزینه‌های حمل‌ونقل</p> 
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item-title">
                <Image src={`/imgs/productivity_and_production_capacity-${themeIcon}.png`} width={80} height={100}  alt="cart"/>
                <span>دسترسی لحظه‌ای</span>
              </div>
              <div className="feature-item-contnent p-6">
                <p>امکان مشاهده و مدیریت اطلاعات بار در هر زمان و مکان</p>
              </div>
            </div>
          </div>
        </div>);
}