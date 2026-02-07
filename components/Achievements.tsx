"use client"
import { useTheme } from '@/context/ThemeContext';
export default function Achievements(props: any){
  const {theme}:any = useTheme();
     return (
      <div className={`${props.className??''} achievements-numbers`}>
        <div>
          <div style={{backgroundImage: `url(/imgs/map-bg${theme == 'dark'? '-dark':''}.png)`}}>
            <div className='w-full flex items-center justify-between text-primary dark:text-white text-TitleM'>
              <div className='inline-flex flex-col basis-1/3 items-center gap-x-4 justify-between mb-auto gap-y-20'>
                <div className='inline-flex flex-col gap-y-1 text-center font-bold' dir="ltr">
                  <span>+138</span>
                  <span className='whitespace-nowrap'>صاحبان کالا</span>
                </div>
                <div className='inline-flex flex-col gap-y-1 text-center font-bold' dir="ltr">
                  <span>+6106</span>
                  <span className='whitespace-nowrap'>ثبت واگن</span>
                </div>
              </div>
              <div className='inline-flex flex-col basis-1/3'>
                <div className='inline-flex flex-col gap-y-1 items-center justify-between text-center font-bold' dir="ltr">
                  <span>+56419603</span>
                  <span className='whitespace-nowrap'>تناژ تخلیه تا کنون</span>
                </div>
              </div>
              <div className='inline-flex flex-col basis-1/3 items-center justify-between mb-auto gap-y-20'>
                <div className='inline-flex flex-col gap-y-1 text-center font-bold' dir="ltr">
                  <span>+1453</span>
                  <span className='whitespace-nowrap'>فروند کشتی</span>
                </div>
                <div className='inline-flex flex-col gap-y-1 text-center font-bold' dir="ltr">
                  <span>+872</span>
                  <span className='whitespace-nowrap'>ثبت کامیون</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="section-title">دستاوردهای شرکت <span className="text-orange">اَوستا</span> هوش‌یـار</h3>
            <p className="section-description">
              شرکت اوستا هوش‌یار با فعالیت گسترده در حوزه حمل‌ونقل، توانسته است نقش برجسته‌ای در صنعت حمل‌ونقل کشور ایفا کند. آمارهای به‌دست‌آمده نشان‌دهنده توان عملیاتی بالای این شرکت در جابه‌جایی بار، مدیریت بهینه ناوگان، و جلب اعتماد صاحبان کالا است. بررسی این داده‌ها نشان می‌دهد که اوستا باربندر در مسیر رشد و توسعه پایدار قرار دارد.
            </p>
          </div>
        </div>
      </div>
    );
  }