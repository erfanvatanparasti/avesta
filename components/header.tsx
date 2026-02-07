"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle"
import { useTheme } from '@/context/ThemeContext';
import { useEffect, useRef, useState } from "react";
import { useDeviceType } from '@/context/useDeviceType';

export default function Header(props: any) {
  const deviceType = useDeviceType();
  const {theme}:any = useTheme();
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
      <span className={`menu-screen ${(hamburger_status || (!hamburger_status && servicesMenu))?'z-10':'z-0'}`} style={(hamburger_status || (!hamburger_status && servicesMenu))? {opacity: 0.8, zIndex: 10}: {opacity: 0, zIndex: 0, display: "none"}} onClick={() => {
        setServicesMenu(false)
        setHamburgerStatus(false)
      }}></span>
      <nav className={`${props.className} ${servicesMenu? 'dark:bg-dark-radial z-10': ''} header-menu`} dir="rtl">
        <Image className="logo-menu" src={`/imgs/logo${theme == "dark"? '-dark':''}.png`} width={66} height={42} alt="اوستا | مدیریت هوشمند لجستیک و حمل‌ونقل کالا"/>
        {!menuType && <ul className="menu-desktop z-25">
          <li><Link className="menu-item" href="/">صفحه اصلی</Link></li>
          <li className="relative">
            <span onMouseEnter={(e:any) => setServicesMenu(true)}>خدمات {servicesMenu? "-":"+"}</span> 
            {servicesMenu && <ol style={{animationDelay: "0.5s"}} className="z-15">
              <li>صدور فاکتور خدمات (ISI)</li>
              <li>ترخیص کالا و امور گمرکی (GCA)</li>
              <li>مدیریت حمل و نقل دریایی (MTM)</li>
              <li>مدیریت جابجایی کالا (PTS)</li>
              <li>مدیریت حمل و نقل ریلی (RTM)</li>
              <li>مدیریت عملیات بندری (POM)</li>
              <li>سامانه بارکوش (Barkoush)</li>
              <li>سامانه جامع انبارداری کالا (GWS)</li>
              <li>مدیریت ترافیک و حمل و نقل هوشمند(ITS)</li>
              <li>مدیریت حمل و نقل جاده ای (HTM)'</li>
            </ol>}
          </li>
          <li><Link className="menu-item" href="/">درباره اوستا</Link></li>
          <li><Link className="menu-item" href="/">فراخوان کامیون‌ها</Link></li>
          <li><Link className="menu-item" href="/">فرصت‌های شغلی</Link></li>
          <li><Link className="menu-item" href="/">آرشیو دیجیتال</Link></li>
          <li><Link className="menu-item" href="/">ارتباط با ما</Link></li>
        </ul>}
        <div className="menu-buttons">
          <ThemeToggle/>
          {menuType && <div ref={hamburegerRef} className={`hamburger-button ${hamburger_status? 'open-hamburger': 'close-hamburger'}`} onClick={toggleHamburger}>
            <span style={{animationDelay: ".35s"}} className={`hamburger-bar-right ${hamburger_status? 'hamburger-bar-open': 'hamburger-bar-close'}`}>&nbsp;</span>
            <span style={{animationDelay: "0.2s"}} className={`animated ${hamburger_status? 'hidden': 'rotate-0'}`}>&nbsp;</span>
            <span style={{animationDelay: ".35s"}} className={`hamburger-bar-left ${hamburger_status? 'hamburger-bar-open ': 'hamburger-bar-close'}`}>&nbsp;</span>
          </div>}
        </div>
        {menuType && hamburger_status && <ul className={` hambureger-menu ${servicesMenu? 'hambureger-menu-open': 'hambureger-menu-close'}`}>
          <li>صفحه اصلی</li>
          <li onClick={() => setServicesMenu(prev => !prev)}>
            <span> {servicesMenu? "-":"+"} خدمات</span> 
            {servicesMenu && <ol style={{animationDelay: "0.5s"}}>
              <li>صدور فاکتور خدمات (ISI)</li>
              <li>ترخیص کالا و امور گمرکی (GCA)</li>
              <li>مدیریت حمل و نقل دریایی (MTM)</li>
              <li>مدیریت جابجایی کالا (PTS)</li>
              <li>مدیریت حمل و نقل ریلی (RTM)</li>
              <li>مدیریت عملیات بندری (POM)</li>
              <li>سامانه بارکوش (Barkoush)</li>
              <li>سامانه جامع انبارداری کالا (GWS)</li>
              <li>مدیریت ترافیک و حمل و نقل هوشمند(ITS)</li>
              <li>مدیریت حمل و نقل جاده ای (HTM)'</li>
            </ol>}
          </li>
          <li>درباره اوستا</li>
          <li>فراخوان کامیون ها</li>
          <li>فرصت شغلی</li>
          <li>آرشیو دیجیتال</li>
          <li>ارتباط با ما</li>
        </ul>
        }
      </nav>
    </>
  );
}
