"use client"
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';

export default function InfoGraphy(props: any){
     const {theme} = useTheme();
     return (
      <div className={`${props.className??''} mx-auto w-full`}>
        <div className='flex items-center justify-between light:text-primary dark:text-white'>
          <div className='inline-flex flex-col basis-1/7 tablet:basis-1/5 items-center justify-between mb-auto gap-y-8'>
            <div className='inline-flex flex-col items-center gap-y-1 tablet:gap-y-3 '>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image className='dark:bg-black w-full mx-auto' src={`/icons/airplaneIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='text-[16px] tablet:text-TitleM'>حمل هوایی</h3>
            </div>
            <div className='inline-flex flex-col gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image className='dark:bg-black w-full mx-auto' src={`/icons/trainIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='text-BodyL text-center'>حمل ریلی</h3>
            </div>
          </div>
          <div className='inline-flex flex-col items-center basis-4/5 tablet:basis-[75%]'>
            <div className='inline-flex flex-col gap-y-3 tablet:gap-y-10 items-center justify-between'>
              <Image className='basis-2/3 h-full' src={`/icons/avestaCpuContainer-${theme}.svg`} alt="Info Graph" width={900} height={300} />
              <span className='basis-1/3 infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 rounded-xl border-gray cursor-pointer'>
                <Image className='dark:bg-black infography-item pb-2 px-0' src={`/icons/aiIcon-${theme}.svg`} alt="Info Graph" width={72} height={72} />
                <h3 className='text-BodyL text-center'>هوش مصنوعی</h3>
              </span>
            </div>
          </div>
          <div className='inline-flex flex-col basis-1/7 tablet:basis-1/5 items-center justify-between mb-auto gap-y-8'>
            <div className='inline-flex flex-col items-center gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl rounded-xl'>
                <Image className='dark:bg-black w-full mx-auto' src={`/icons/shipIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='text-BodyL text-center'>حمل دریایی</h3>
            </div>
            <div className='inline-flex flex-col gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image className='dark:bg-black w-full mx-auto' src={`/icons/truckIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='text-BodyL text-center'>حمل جاده‌ای</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }