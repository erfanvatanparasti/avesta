import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 bg-dark-radial-02 minitablet:bg-footer minitablet:dark:bg-dark-footer laptop:px-44 py-12 min-h-[300px] text-white items-start flex justify-start flex-col">
      <div className="flex justify-start items-center w-full max-w-7xl">
        <div className="w-full mobile:basis-full">
          <Image className="w-full max-w-32" src="/imgs/logo.png" alt="Logo" width={66} height={44} alt="اوستا | مدیریت هوشمند لجستیک و حمل‌ونقل کالا"/>
        </div>
      </div>
      <div className="flex flex-wrap justify-between max-w-7xl mx-0">
        <div className="px-3 minitablet:py-3 basis-full minitablet:basis-1/2 tablet:basis-1/4 max-w-90">
          <h3 className="text-primary dark:text-orange text-TitleM py-6">منو</h3>
          <ul>
            <li className="text-TitleM">صفحه اصلی</li>
            <li className="text-TitleM">خدمات</li>
            <li className="text-TitleM">درباره ما</li>
            <li className="text-TitleM">فراخوان کامیون‌ها</li>
            <li className="text-TitleM">فرصت‌های شغلی</li>
            <li className="text-TitleM">آرشیو دیجیتال</li>
            <li className="text-TitleM">ارتباط با ما</li>
          </ul>
        </div>
        <div className="px-3 minitablet:py-3 basis-full minitablet:basis-1/2 tablet:basis-1/3 laptop:basis-1/4 max-w-90">
          <h3 className="text-primary dark:text-orange text-TitleM py-6">دفتر تهران</h3>
          <p className="text-TitleM">طرشت ، مترو دانشگاه شريف خيابان تيموري نرسيده به اتوبان يادگار امام کوچه عموزاده، پلاک 8 طبقه دوم واحد 1<br/>
          تلفن :  66055124 - 021</p>
        </div>
        <div className="px-3 minitablet:py-3 basis-full minitablet:basis-1/2 tablet:basis-1/3 laptop:basis-1/4 max-w-90">
          <h3 className="text-primary dark:text-orange text-TitleM py-6">دفتر خوزستان</h3>
          <p className="text-TitleM">بندرامام خمینی (ره) اداره کل بنادر و دریانوردی ، مجتمع بندری امام خمینی (ره) اسکله 20<br/>
          تلفن :  66055124 - 021</p>
        </div>
        <div className="basis-1/4 grow-1"></div>
      </div>
      <hr className="w-full my-8 block max-w-7xl" />
      <div className="flex flex-wrap minitablet:flex-nowrap gap-3 justify-center minitablet:justify-between w-full max-w-7xl">
        <nav>
          <ul className="inline-flex items-center gap-x-2">
            <li><Link href="/"><Image src="/icons/linkedin.svg" alt="Logo" width={24} height={24}/></Link></li>
            <li><Link href="/"><Image src="/icons/instagram.svg" alt="Logo" width={24} height={24}/></Link></li>
            <li><Link href="/"><Image src="/icons/youtube.svg" alt="Logo" width={24} height={24}/></Link></li>
          </ul>
        </nav>
        <p dir="ltr">AvestaSmart © {new Date().getFullYear()} . All rights reserved.</p>
      </div>
    </footer>
  ); 
}
