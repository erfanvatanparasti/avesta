"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle"
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useRef, useState } from "react";
import { useDeviceType } from '@/context/useDeviceType';

export default function Header(props: any) {
  const deviceType = useDeviceType();
  const {theme} = useTheme();
  const hamburegerRef = useRef(null);
  const [hamburger_status, setHamburgerStatus] = useState(false)
  const [menuType, setMenuType] = useState(false)
  const [servicesMenu, setServicesMenu] = useState(false)
  const toggleHamburger = (event:any) => {
    console.log({hamburger_status})
    setHamburgerStatus(prev => !prev)
  }
  const closeByScape = (e:KeyboardEvent) => {
        if (e.key === 'Escape') {
          setServicesMenu(false)
          setHamburgerStatus(false)
        }
    };
  useEffect(() => {
    setMenuType(["mobile", "minitablet", "tablet"].some((item:string) => item == deviceType))
    
    document.addEventListener('keyup', closeByScape);
    return () => {
      document.removeEventListener('keyup', closeByScape);
    };
  },[hamburger_status, deviceType]);
  return (<>
      <span className={`menu-screen bg-[#000000AA] dark:bg-[#FFFFFFAA] ${(hamburger_status || (!hamburger_status && servicesMenu))?'z-10':'z-0'}`} style={(hamburger_status || (!hamburger_status && servicesMenu))? {opacity: 0.8, zIndex: 10}: {opacity: 0, zIndex: 0, display: "none"}} onKeyUp={(e:KeyboardEvent) => {
        console.log(e)
      }} onClick={() => {
        setServicesMenu(false)
        setHamburgerStatus(false)
      }}></span>
      <nav className={`${props.className} ${servicesMenu? 'dark:bg-dark-radial z-10': ''} flex items-center justify-between laptop:justify-around w-full rounded-full bg-bg-secondry dark:bg-bg-menubar-dark mt-5 max-w-wide mx-auto gap-x-6 loptop:gap-x-24 px-8 tablet:px-10 labtop:px-12 py-2 z-10 relative`} dir="rtl">
        <Image className="logo-menu" src={`/imgs/logo${theme == "dark"? '-dark':''}.png`} alt="Logo" width={66} height={42} alt="اوستا | مدیریت هوشمند لجستیک و حمل‌ونقل کالا"/>
        {!menuType && <ul className="flex gap-x-2 px-3 text-primary dark:text-white z-25">
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">صفحه اصلی</Link></li>
          <li className="p-2 relative">
            <span onMouseEnter={(e:any) => setServicesMenu(true)}>خدمات {servicesMenu? "-":"+"}</span> 
            {servicesMenu && <ol style={{animationDelay: "0.5s"}} className="transition fixed z-15 top-28 w-full max-w-xl text-Body leading-8 bg-bg-secondry dark:bg-[#000000D0] dark:bg-dark-radial p-3 rounded-lg">
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">صدور فاکتور خدمات (ISI)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">ترخیص کالا و امور گمرکی (GCA)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت حمل و نقل دریایی (MTM)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت جابجایی کالا (PTS)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت حمل و نقل ریلی (RTM)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت عملیات بندری (POM)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">سامانه بارکوش (Barkoush)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">سامانه جامع انبارداری کالا (GWS)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت ترافیک و حمل و نقل هوشمند(ITS)</li>
              <li className="cursor-pointer transition hover:-translate-x-2 hover:text-orange">مدیریت حمل و نقل جاده ای (HTM)'</li>
            </ol>}
          </li>
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">درباره اوستا</Link></li>
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">فراخوان کامیون‌ها</Link></li>
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">فرصت‌های شغلی</Link></li>
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">آرشیو دیجیتال</Link></li>
          <li className="p-2"><Link className="py-2 text-Body tablet:text-BodyL hover:text-orange" href="/">ارتباط با ما</Link></li>
        </ul>}
        <div className="flex gap-x-4 items-center justify-end w-full tablet:w-auto">
          <ThemeToggle className=""/>
          {menuType && <div ref={hamburegerRef} className={`relative left-2 h-full hamburger-button flex flex-col gap-2 pl-6 mr-3 ${hamburger_status? 'open-hamburger': 'close-hamburger'}`} onClick={toggleHamburger}>
            <span style={{animationDelay: ".35s"}} className={`animated ${hamburger_status? 'hamburger-bar-open hamburger-bar-right': 'hamburger-bar-close'} absolute w-9 -top-3 max-h-[2px] overflow-hidden dark:bg-bg-primary bg-primary`}>&nbsp;</span>
            <span style={{animationDelay: "0.2s"}} className={`animated ${hamburger_status? 'hidden': 'rotate-0'} absolute w-9 max-h-[2px] overflow-hidden dark:bg-bg-primary bg-primary`}>&nbsp;</span>
            <span style={{animationDelay: ".35s"}} className={`animated ${hamburger_status? 'hamburger-bar-open hamburger-bar-left': 'hamburger-bar-close'} absolute w-9 top-3 max-h-[2px] overflow-hidden dark:bg-bg-primary bg-primary`}>&nbsp;</span>
          </div>}
        </div>
        {menuType && hamburger_status && <ul className={`transition hambureger-menu ${servicesMenu? 'hambureger-menu-open': 'hambureger-menu-close'} fixed top-20 left-2 minitablet:left-8 z-10 text-primary text-BodyL max-w-[340px] minitablet:max-w-[500px] w-full leading-8 bg-bg-primary rounded-lg  p-4 cursor-pointer`}>
          <li className="transition hover:translate-x-2 hover:text-orange">صفحه اصلی</li>
          <li className="transition hover:translate-x-2 hover:text-orange" onClick={() => setServicesMenu(prev => !prev)}>
            <span> {servicesMenu? "-":"+"} خدمات</span> 
            {servicesMenu && <ol style={{animationDelay: "0.5s"}} className="transition -translate-x-4 text-Body leading-6">
              <li className="transition hover:translate-x-2 hover:text-orange">صدور فاکتور خدمات (ISI)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">ترخیص کالا و امور گمرکی (GCA)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت حمل و نقل دریایی (MTM)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت جابجایی کالا (PTS)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت حمل و نقل ریلی (RTM)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت عملیات بندری (POM)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">سامانه بارکوش (Barkoush)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">سامانه جامع انبارداری کالا (GWS)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت ترافیک و حمل و نقل هوشمند(ITS)</li>
              <li className="transition hover:translate-x-2 hover:text-orange">مدیریت حمل و نقل جاده ای (HTM)'</li>
            </ol>}
          </li>
          <li className="transition hover:translate-x-2 hover:text-orange">درباره اوستا</li>
          <li className="transition hover:translate-x-2 hover:text-orange">فراخوان کامیون ها</li>
          <li className="transition hover:translate-x-2 hover:text-orange">فرصت شغلی</li>
          <li className="transition hover:translate-x-2 hover:text-orange">آرشیو دیجیتال</li>
          <li className="transition hover:translate-x-2 hover:text-orange">ارتباط با ما</li>
        </ul>
        }
      </nav>
    </>
  );
}
