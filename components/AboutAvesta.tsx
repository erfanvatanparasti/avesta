import Image from 'next/image';
import React from 'react';

export default function AboutAvesta(props: any){
     return (
      <div className={`${props.className} flex flex-wrap tablet:flex-nowrap w-full mx-auto px-6 loptop:px-24`}>
        <div className="flex flex-col items-start justify-center basis-full tablet:basis-3/5 gap-y-8 light:text-primary dark:text-white">
          <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center tablet:text-right w-full">درباره <span className="text-orange">اَوستا</span> هوش‌یـار</h3>
          <p className="pb-3 loptop:px-8 mb-0 tablet:mb-10 text-Body tablet:text-TitleM loptop:text-BodyL text-justify">
            شرکت اوستا هوش‌یار، به‌عنوان نخستین شرکت خلاق در حوزه لجستیک و حمل‌ونقل ثبت‌شده در معاونت علمی و فناوری ریاست جمهوری، با رویکردی نوآورانه و حرفه‌ای در راستای بهینه‌سازی صنعت حمل‌ونقل کشور فعالیت می‌کند. این شرکت با بهره‌گیری از فناوری‌های پیشرفته و دانش بومی، خدمات گسترده‌ای در زمینه هوشمندسازی حمل‌ونقل، لجستیک، انبارداری و امور گمرکی ارائه می‌دهد. از تخلیه و بارگیری کشتی‌ها تا فرآیندهای ترخیص و ترانزیت کالا، تمامی مراحل با استفاده از سیستم‌های هوشمند مدیریت شده و موجب افزایش بهره‌وری و شفافیت در زنجیره تأمین می‌شود.
            اوستا هوشیار با ارائه راهکارهای نرم‌افزاری پیشرفته، مدیریت بندری، ترخیص و حمل‌ونقل داخلی و بین‌المللی، نقش مهمی در تسهیل فرآیندهای لجستیکی ایفا می‌کند. این شرکت علاوه بر ارائه خدمات حمل‌ونقل و لجستیک، در حوزه عارضه‌یابی، تولید، مشاوره، پیاده‌سازی و پشتیبانی نیز فعالیت دارد. با نظارت لحظه‌به‌لحظه بر محموله‌ها، کاهش هزینه‌های حمل‌ونقل و افزایش سرعت انتقال کالا، راهکاری جامع و کارآمد برای مشتریان خود فراهم می‌سازد. همچنین، با تمرکز بر ارائه راه‌حل‌های سفارشی، نیازهای مختلف زنجیره تأمین را به‌صورت هوشمندانه و کارآمد برطرف می‌کند.
          </p>
          <Image src="/icons/linerImage.svg" alt='درباره اَوستا هوش‌یار' height={100} width={100} className=' w-full max-w-2xl mx-auto tablet:mx-0'/>
        </div>
        <div className="flex flex-col items-center justify-center p-6 basis-full tablet:basis-2/5 w-full">
          <Image src="/icons/about-avesta.svg" alt='درباره اَوستا هوش‌یار' height={100} width={100} className=' w-full max-w-[400px]'/> 
        </div>
      </div>
    );
  }