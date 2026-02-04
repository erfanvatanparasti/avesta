"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
type blogSliderType = {
  id: string,
  title: string,
  text: string,
  image: string,
  order: string
};
export default function Blogslider(props: any){
  const { data, error, isLoading }  = useSWR("/api/blogs", (...args) => fetch(...args).then(res => res.json()));
  const changeSlide = (slide:string) => {
    setBlogs(prev => prev.map((p:blogSliderType, i:number) => {
      return slide == p.id? {...p, order: 'active'}: {...p, order: 'unactive'};
    }).sort(blog => blog.order == "active"? 1: -1));
  };
  const [currentSlide, setCurrentSlide] = useState("01");
  const [blogs, setBlogs] = useState<blogSliderType[]>([]);
  useEffect(() => {
    changeSlide(currentSlide);
  }, [currentSlide]);
  useEffect(() => {
    if(data){
        const blogs: blogSliderType[] = data.data?? [];
        setBlogs(blogs.sort((blog:blogSliderType) => blog.order == "active"? 1: -1))
    }
  }, [isLoading])
    if (error) return <div>خطا: {data.message}</div>;
  return (
      <div className={`${props.className} my-5 mx-auto w-full max-w-3xl px-6 tablet:px-0 `}>
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-primary dark:text-white">
          <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center w-full">
              نگاهی به <span className="text-orange">رویداد </span>های مهم اوستا هوش‌یار
          </h3>
        </div>
        <div className="mt-10 py-5 relative blog-slider">
          {isLoading ? <>
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
