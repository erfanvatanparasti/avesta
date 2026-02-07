import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Image src="/imgs/logo.svg" width={138} height={76} alt="اوستا | مدیریت هوشمند لجستیک و حمل‌ونقل کالا"/>
      </div>
      <div className="footer-columns">
        <div className="footer-menu">
          <h3>منو</h3>
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
        <div className="footer-column">
          <h3>دفتر تهران</h3>
          <p>طرشت ، مترو دانشگاه شريف خيابان تيموري نرسيده به اتوبان يادگار امام کوچه عموزاده، پلاک 8 طبقه دوم واحد 1<br/>
          تلفن :  66055124 - 021</p>
        </div>
        <div className="footer-column">
          <h3>دفتر خوزستان</h3>
          <p>بندرامام خمینی (ره) اداره کل بنادر و دریانوردی ، مجتمع بندری امام خمینی (ره) اسکله 20<br/>
          تلفن :  66055124 - 021</p>
        </div>
        <div className="basis-1/4 grow-1"></div>
      </div>
      <hr/>
      <div className="footer-copywrite">
        <nav>
          <ul>
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
