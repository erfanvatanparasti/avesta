"use client"
import { useTheme } from '@/context/ThemeContext';
export default function Achievements(props: any){
     const {theme} = useTheme();
     return (
      <div className={`${props.className??''} bg-bg-secondry inline-flex items-center justify-between dark:bg-[#0e091c80] my-5 w-full px-2 tablet:px-24 achievements-numbers tablet:ltr`}>
        <div className="flex flex-col-reverse tablet:flex-row w-full gap-y-6 flex-wrap tablet:flex-nowrap max-w-7xl items-center justify-between mx-auto tablet:py-6">
          <div className="flex flex-col items-center justify-center px-0 tablet:px-6 tablet:basis-2/5 w-full max-w-7xl ml-auto mx-auto min-h-[320px] tablet:min-h-[400px] py-0" style={{backgroundImage: `url(/imgs/map-bg${theme == 'dark'? '-dark':''}.png)`}}>
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
          <div className="flex flex-col items-start justify-center basis-full tablet:basis-3/5 gap-y-8 pb-0 tablet:py-16 w-full ml-auto text-primary dark:text-white mx-auto px-2">
            <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 tablet:px-8 text-center tablet:text-right loptop:text-justify w-full">دستاوردهای شرکت <span className="text-orange">اَوستا</span> هوش‌یـار</h3>
            <p className="pb-3 tablet:px-8 mb-0 tablet:mb-10 text-BodyL tablet:text-TitleL text-justify">
              شرکت اوستا هوش‌یار با فعالیت گسترده در حوزه حمل‌ونقل، توانسته است نقش برجسته‌ای در صنعت حمل‌ونقل کشور ایفا کند. آمارهای به‌دست‌آمده نشان‌دهنده توان عملیاتی بالای این شرکت در جابه‌جایی بار، مدیریت بهینه ناوگان، و جلب اعتماد صاحبان کالا است. بررسی این داده‌ها نشان می‌دهد که اوستا باربندر در مسیر رشد و توسعه پایدار قرار دارد.
            </p>
          </div>
        </div>
      </div>
    );
  }