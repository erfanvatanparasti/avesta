import Image from "next/image";
import AboutAvesta from "@/components/AboutAvesta";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Collaborations from "@/components/Collaborations";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InfoGraphy from "@/components/InfoGraphy01";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { Suspense } from 'react'
import Blogslider from "@/components/Blogslider";

export default function Home() {
  
  return (<main className="mx-auto gap-y-10 flex flex-col">
      <div className="top-bg-patern px-2 minitablet:px-4 tablet:px-6">
        <Image src="/icons/bg-pattern-01.svg" className="absolute top-0 left-0 z-[-1] w-full max-w-xs" width={550} height={500} alt=""/>
        <Image src="/icons/bg-pattern-02.svg" className="absolute top-0 right-0 z-[-1] w-full max-w-xs" width={550} height={500} alt=""/>
      </div>
      <Hero className=" px-2 minitablet:px-4 tablet:px-6 pb-5 pt-4 flex flex-col gap-y-4 tablet:gap-y-6 max-w-7xl"/>
      <InfoGraphy className=" px-2 minitablet:px-4 tablet:px-6 max-w-7xl"/>
       
      <div className="section-1 px-2 minitablet:px-4 tablet:px-6">
        <Services className=" max-w-7xl"/>
        <AboutAvesta className="mt-16 tablet:my-20 max-w-7xl"/>
      </div>
      <div className="section-2 inline-flex flex-col gap-10">
        <Achievements className="my-20 tablet:my-10"/>
        <Features className="my-20 tablet:my-10"/>
        <Collaborations className="py-10"/>
        <Certificates />
        <Testimonials />
      </div>
      <Blogslider />
    </main>
  );
}
