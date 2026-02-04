"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
type blogSliderType = {
  id: string,
  title: string,
  text: string,
  image: string,
  order: string
};
export default function Blogslider(props: any){
  const changeSlide = (slide:string) => {
    setBlogs(prev => prev.map((p:blogSliderType, i:number) => {
      return slide == p.id? {...p, order: 'active'}: {...p, order: 'unactive'};
    }).sort(blog => blog.order == "active"? 1: -1));
  };
  const [currentSlide, setCurrentSlide] = useState("01");
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<blogSliderType[]>([]);
  useEffect(() => {
    changeSlide(currentSlide);
    console.log({currentSlide})
  }, [currentSlide]);
  useEffect(() => {
    const fetchBlogs =  async() => {
      setLoading(true);
      new Promise((res, rej) => {
        setTimeout(() => {
          const data: blogSliderType[] = [
            {
              id: "03",
              title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
              text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
              image: "blog-03.jpg",
              order: 'unactive'
            },
            {
              id: "02",
              title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
              text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
              image: "blog-02.jpg",
              order: 'active'
            },
            {
              id: "01",
              title: "۲۶ آذر، روز ملی حمل‌ونقل ایران گرامی باد",
              text: "حمل‌ونقل، شریان حیاتی اقتصاد و زیرساخت توسعه پایدار کشور است. از جاده و ریل تا دریا و هوا، این صنعت نقشی تعیین‌کننده در پایداری زنجیره تأمین، رشد تجارت و اتصال هوشمند کسب‌وکارها",
              image: "blog-01.jpg",
              order: 'unactive'
            },
          ]
          setBlogs(data.sort(blog => blog.order == "active"? 1: -1))
          res(1);
          setLoading(false);
        }, 2000);
      });
    }
    fetchBlogs();
  }, [])
  return (
      <div className={`${props.className} my-5 mx-auto w-full max-w-3xl px-6 tablet:px-0 `}>
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-primary dark:text-white">
          <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center w-full">
              نگاهی به <span className="text-orange">رویداد </span>های مهم اوستا هوش‌یار
          </h3>
        </div>
        <div className="mt-10 py-5 relative blog-slider">
          {loading ? <>
          <div className="blog-item blog-loading h-[300px] py-0 rounded-xl shadow-left-side">
            <div className="blog-content flex flex-col justify-center gap-y-10 px-5 bg-bg-primary dark:bg-[#501665] rounded-xl text-center">
              <h4 className="text-HeadingM text-right mx-auto">در حال دریافت اطلاعات</h4>
              <hr className="h-[2px] bg-primary"/> 
              <p className="text-Body">
                در حال دریافت اخبار و مقالات <br/>
                لطفا منتظر بمانید
              </p>
            </div>
          </div>
          </>:
          blogs.map((blog:blogSliderType, i:number) => <div key={i} onClick={(e:any) => setCurrentSlide(blog.id)} className={`blog-item py-0 rounded-xl blog-${blog.order}-${blog.id} shadow-left-side`}>
            <Image src={`/imgs/blogs/${blog.image}`} height={300} width={768} alt=""/>
            <div className="blog-content shadow-left-side flex flex-col justify-center gap-y-10 px-5 bg-bg-primary dark:bg-[#501665] rounded-xl text-center">
              <h4 className="text-HeadingM text-right mx-auto">{blog.title}</h4>
              <hr className="h-[2px] bg-primary"/> 
              <p className="text-Body">{blog.text}</p>
              <p className="w-auto border-primary dark:border-secondary border-2 py-2 rounded-full leading-6 flex items-center justify-center gap-x-3"><span>➡</span> مشاهده جزئیات خبر</p> 
            </div>
          </div>)}
        </div>
      </div>);
}
