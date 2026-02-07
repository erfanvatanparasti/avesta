import logo from "@/public/imgs/logo.svg";
import Image from "next/image";

export default function Loading() {
  return <div className="loading z-20">
    <Image className="loading-logo" src={logo} alt="شرکت اوستا هوش‌یار | ارائه خدمات پیشرفته حمل و نقل کالا و لجستیک" width={1000} height={1000}/>
    </div>
}