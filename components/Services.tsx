"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

  export default function Services(props: any) {
    const [services, setServices] = useState<any[]>([]);
    const [current, setCurrent] = useState<number>(0);
    useEffect(() => {
      setServices([
        {
          index: 0,
          title: "سامانه جامع انبارداری کالا ",
          text: "این سامانه تمامی عملیات مرتبط با ورود، خروج، موجودی و جابجایی کالا در انبارها را پوشش می‌دهد. گزارش‌های لحظه‌ای و مدیریت یکپارچه انبارها از جمله قابلیت‌های کلیدی آن است.",
          icon: "gws.png",
          image: "gws.png"
        },
        {
          index: 1,
          title: "سامانه ترخیص کالا",
          text: "با سامانه ترخیص کالا، می‌توانید کلیه مراحل از ثبت سفارش تا دریافت کالا را به صورت شفاف، آسان و مطمئن مدیریت کنید.",
          icon: "gca.png",
          image: "gca.png"
        },
        {
          index: 2,
          title: "مدیریت هوشمند حمل جاده‌ای",
          text: "این سامانه امکان ارتباط مستقیم با پایانه‌های حمل و نقل جاده‌ای را فراهم می‌سازد. مدیریت ورود و خروج ناوگان، صدور مجوز تردد و کنترل صف کامیون‌ها به‌صورت برخط انجام می‌شود.",
          icon: "htm.png",
          image: "htm.png"
        },
        {
          index: 5,
          title: "سامانه جامع انبارداری کالا ",
          text: "این سامانه تمامی عملیات مرتبط با ورود، خروج، موجودی و جابجایی کالا در انبارها را پوشش می‌دهد. گزارش‌های لحظه‌ای و مدیریت یکپارچه انبارها از جمله قابلیت‌های کلیدی آن است.",
          icon: "gws.png",
          image: "gws.png"
        },
        {
          index: 3,
          title: "مدیریت جابجایی کالا",
          text: "فرآیند جابجایی داخلی کالا در محوطه‌ها و پایانه‌های بندری از طریق این سامانه سازماندهی می‌گردد. رهگیری لحظه‌ای کالا و تخصیص بهینه تجهیزات از مزایای اصلی آن به شمار می‌رود.",
          icon: "pts.png",
          image: "pts.png"
        },
        {
          index: 4,
          title: "مدیریت عملیات بندری",
          text: "کلیه اطلاعات رانندگان، وسایل نقلیه و محموله‌ها در این سامانه ثبت و مدیریت می‌شود. فرآیند حمل و نقل کالا از طریق ردیابی هوشمند و گزارش‌های جامع قابل پایش خواهد بود.",
          icon: "pom.png",
          image: "pom.png"
        },
      ]);
    }, [])
    return (
      <div className={`${props.className} w-full mx-auto px-6 tablet:px-24 py-5 tablet:py-20 dark:shadow-[unset] shadow-from-bottom dark:after:content-[none] rounded-2xl overflow-hidden services-container dark:bg-dark-radial dark:text-white`}>
        <h3 className="text-HeadingMx tablet:text-HeadingL font-bold pt-5 text-center tablet:text-right"> خدمات جامع و چندوجهی <span className="text-orange">اَوستا</span> هوش‌یار در حوزه حمل‌ونقل</h3>
        <div className="flex flex-wrap minitablet:flex-nowrap py-10">
          <div className="z-15 inline-flex flex-nowrap items-start flex-col gap-y-5 py-3 basis-full minitablet:basis-1/2">
            {services.map((service:any, i:number) => (<div key={i} className={`cursor-pointer animated ${current == service.index? 'border-orange border-r-4': 'border-gray border-r-2'} h-full pr-3`}>
              <div className="inline-flex flex-row gap gap-x-2 items-start" onClick={() => setCurrent(service.index)}>
                {current == service.index && <Image src={`/icons/${services[current].icon}`} width={30} height={20} alt="" className="animated"/>}
                <h3 className="HeadingM font-bold">{service.title}</h3>
              </div>
              <p className={`${current == service.index? '': 'hidden'} text-Body tablet:text-BodyL animated`}>{service.text}</p>
            </div>))}
          </div>
          <Image src={`/imgs/${services[current]?.image}`} width={450} height={200} className="mx-auto max-w-[350px] tablet:max-w-xl h-full mt-6 mx-auto tablet:m-auto tablet:w-full basis-full basis-full minitablet:basis-1/2 animated z-5" alt="سامانه ترخیص کالا"/>
        </div>
      </div>);
  }