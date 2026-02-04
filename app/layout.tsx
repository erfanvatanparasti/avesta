import type { Metadata } from "next";
import { headers } from 'next/headers';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from '@/context/ThemeContext';
import DeviceProvider from '@/context/DeviceContext';
import {parseUserAgent} from '@/context/parseUserAgent';
import localFont from 'next/font/local'

const iranyekanFont = localFont({
  src: [
    { path: '../public/fonts/IRANYekanX/woff/IRANYekanX-Regular.woff' },
    { path: '../public/fonts/IRANYekanX/woff/IRANSansX-Regular.woff' },
    { path: '../public/fonts/IRANYekanX/IRANYekanX-Medium.ttf', weight: '500' },
    { path: '../public/fonts/IRANYekanX/IRANYekanX-DemiBold.ttf', weight: '600' },
    { path: '../public/fonts/IRANYekanX/IRANYekanX-Bold.ttf', weight: '700' },
  ],
  variable: '--font-iranyekan',
})
export const metadata: Metadata = {
  title: "اَوستا هوش‌یار | خدمات پیشرفته حمل و نقل کالا و لجستیک",
  description: "اوستا، سامانه‌ای برای مدیریت هوشمند لجستیک و حمل‌ونقل کالا با خدمات پیشرفته در سراسر کشور.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ua = (await headers()).get('user-agent');  // <-- no await
  const serverDevice = parseUserAgent(ua);
  return (
    <html lang="en" dir="rtl" className={`${iranyekanFont.className}`}>
      <head>
        {/*
        */}
         <script src="/js/dotwave.min.js"></script>
        <script src="/js/dotwave-element.min.js"></script> 
        <script src="/js/script.js" defer></script>
      </head>
      <body className="bg-bg-primary dark:bg-black dark:text-white text-primary">
      <ThemeProvider>
        <DeviceProvider serverInfo={serverDevice}>

          <Header className="py-3 max-w-7xl"/>
          {children}
          <Footer/>
        </DeviceProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
