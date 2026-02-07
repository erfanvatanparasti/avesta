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
import Blogslider from "@/components/blog/Blogslider";

export default async function Home() {
  await new Promise((res, rej) => {
    setTimeout(() => res(1), 1000)
  })
  return (<main>
      <section id="main">
        <Hero/>
        <InfoGraphy/>
       </section>
      <div className="section-1">
        <Services className=" max-w-7xl"/>
        <AboutAvesta/>
      </div>
      <div className="section-2">
        <Achievements/>
        <Features/>
        <Collaborations/>
        <Certificates />
        <Testimonials />
      </div>
      <Blogslider />
    </main>
  );
}


export async function generateMetadata() {
  return {
    title: "اَوستا سامانه مدیریت الکترونیکی و هوشمند حمل و نقل کالا و لجستیک",
    description: "اوستا، سامانه‌ای برای مدیریت هوشمند لجستیک و حمل‌ونقل کالا با خدمات پیشرفته در سراسر کشور.",
    openGraph: {
      title: "اَوستا سامانه مدیریت الکترونیکی و هوشمند حمل و نقل کالا و لجستیک",
      description: "اوستا، سامانه‌ای برای مدیریت هوشمند لجستیک و حمل‌ونقل کالا با خدمات پیشرفته در سراسر کشور.",
      url: "https://avestasmart.com",
      siteName: " شرکت اَوستا‌ هوش‌یار",
      images: [
        {
          url: "https://avestasmart.com/assets/logo/logo-dark.webp",
          width: 1200,
          height: 630,
          alt: "Our Blog",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: " شرکت اَوستا‌ هوش‌یار",
      description: "اوستا، سامانه‌ای برای مدیریت هوشمند لجستیک و حمل‌ونقل کالا با خدمات پیشرفته در سراسر کشور.",
      images: ["https://avestasmart.com/assets/logo/logo-dark.webp"],
    },
  };
}