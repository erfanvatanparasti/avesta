"use client"
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';

export default function InfoGraphy(props: any){
     const {theme} = useTheme();
     return (
      <div className={`${props.className??''} infography`}>
        <div>
          <div className='infography-column basis-1/7'>
            <div className='inline-flex flex-col items-center gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image src={`/icons/airplaneIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='text-[16px] tablet:text-TitleM'>حمل هوایی</h3>
            </div>
            <div className='inline-flex flex-col gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image src={`/icons/trainIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='infography-title'>حمل ریلی</h3>
            </div>
          </div>
          <div className='infography-column'>
            <div>
              <div className='avesta-cpu-container'>
                <Image src={`/icons/avestaCpuContainer-${theme}.svg`} alt="Info Graph" width={900} height={300} />
              </div>              
              <span className='border-gray '>
                <Image className='dark:bg-black infography-item px-0' src={`/icons/aiIcon-${theme}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='infography-title -mt-7'>هوش مصنوعی</h3>
            </div>
          </div>
          <div className='infography-column basis-1/7'>
            <div className='inline-flex flex-col items-center gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl rounded-xl'>
                <Image src={`/icons/shipIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='infography-title'>حمل دریایی</h3>
            </div>
            <div className='inline-flex flex-col gap-y-1 tablet:gap-y-3'>
              <span className='infography-item border-2 dark:border-0 border-gray p-2 dark:p-1 cursor-pointer rounded-xl'>
                <Image src={`/icons/truckIcon-${theme == 'dark'? 'dark': 'light'}.svg`} alt="Info Graph" width={72} height={72} />
              </span>
              <h3 className='infography-title'>حمل جاده‌ای</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }