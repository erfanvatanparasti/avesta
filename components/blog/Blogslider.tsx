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

export default function Blogslider(props: any) {
  const { data, error, isLoading } = useSWR("/api/blogs", 
    (...args) => fetch(...args).then(res => res.json()), {
      revalidateOnFocus: false,
      revalidateIfStale: true
    });

  const [blogs, setBlogs] = useState<blogSliderType[]>([]);
  const [activeIndex, setActiveIndex] = useState(1); // همیشه وسط (ایندکس 1)

  // تابع برای rotate به چپ
  const rotateLeft = (arr: blogSliderType[]) => {
    if (arr.length <= 1) return arr;
    return [...arr.slice(1), arr[0]];
  };

  // تابع برای rotate به راست
  const rotateRight = (arr: blogSliderType[]) => {
    if (arr.length <= 1) return arr;
    return [arr[arr.length - 1], ...arr.slice(0, -1)];
  };

  // هندل کلیک روی آیتم
  const handleItemClick = (clickedIndex: number) => {
    setBlogs(prev => {
      let newBlogs = [...prev];
      
      // اگر روی آیتم اول (راست) کلیک شد - rotate چپ
      if (clickedIndex === 0) {
        newBlogs = rotateLeft(newBlogs);
      }
      // اگر روی آیتم آخر (چپ) کلیک شد - rotate راست
      else if (clickedIndex === 2) {
        newBlogs = rotateRight(newBlogs);
      }
      // اگر روی آیتم وسط کلیک شد - هیچ rotate‌ای انجام نده
      
      // آپدیت order برای همه آیتم‌ها
      return newBlogs.map((blog, index) => ({
        ...blog,
        order: index === 1 ? "active" : "unactive"
      }));
    });
  };

  // مقداردهی اولیه blogs
  useEffect(() => {
    if (data && data.data) {
      const blogsData: blogSliderType[] = data.data;
      
      // اطمینان از اینکه حداقل ۳ آیتم داریم
      if (blogsData.length >= 3) {
        // از ابتدا وسطی رو active کنیم
        const initializedBlogs = blogsData.map((blog, index) => ({
          ...blog,
          order: index === 1 ? "active" : "unactive"
        }));
        setBlogs(initializedBlogs);
      } else if (blogsData.length > 0) {
        // اگر کمتر از ۳ آیتم داشتیم
        const initializedBlogs = blogsData.map((blog, index) => ({
          ...blog,
          order: "active" // همه رو active کن
        }));
        setBlogs(initializedBlogs);
      }
    }
  }, [data]);

  // تابع برای گرفتن کلاس CSS بر اساس موقعیت
  const getBlogClass = (order: string, index: number) => {
    if (order === "active") return "blog-active";
    
    // کلاس‌های مخصوص برای موقعیت‌های مختلف
    if (index === 0) return "blog-left";
    if (index === 2) return "blog-right";
    
    return "blog-unactive";
  };

  if (error) return <div className="text-center py-10 text-red-500">خطا در دریافت اطلاعات بلاگ‌ها</div>;
  
  return (
    <div className={`${props.className} my-5 mx-auto w-full max-w-7xl px-6 tablet:px-0`}>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-primary dark:text-white">
        <h3 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center w-full">
          نگاهی به <span className="text-orange">رویداد</span>های مهم اوستا هوش‌یار
        </h3>
      </div>
      
      <div className="mt-10 py-5 relative blog-slider flex items-center justify-center min-h-[400px]">
        {isLoading ? (
          <div className="blog-item blog-loading h-[300px] py-0 rounded-xl shadow-left-side">
            <div className="blog-content flex flex-col justify-center gap-y-10 px-5 bg-bg-primary dark:bg-[#501665] rounded-xl text-center">
              <h4 className="text-HeadingM text-right mx-auto">در حال دریافت اطلاعات</h4>
              <hr className="h-[2px] bg-primary" /> 
              <p className="text-Body">
                در حال دریافت اخبار و مقالات <br />
                لطفا منتظر بمانید
              </p>
            </div>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-10">هیچ بلاگی یافت نشد</div>
        ) : (
          // نمایش ۳ آیتم در هر لحظه
          blogs.slice(0, 3).map((blog: blogSliderType, i: number) => (
            <div 
              key={`${blog.id}-${i}`}
              onClick={() => handleItemClick(i)}
              className={`blog-item py-0 rounded-xl cursor-pointer transition-all duration-300 
                ${getBlogClass(blog.order, i)}
                ${i === 1 ? 'z-10 scale-105' : i === 0 ? 'z-5 -mr-4 scale-95' : 'z-5 -ml-4 scale-95'}
                ${blog.order === "active" ? 'opacity-100' : 'opacity-70 hover:opacity-90'}`}
            >
              <Image 
                  src={`/imgs/blogs/${blog.image}`} 
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={blog.title}
                  className="rounded-t-xl"
                />
              <div className="blog-content shadow-left-side flex flex-col justify-center gap-y-5 p-5 bg-bg-primary dark:bg-[#501665] rounded-b-xl text-center">
                <h4 className="text-HeadingS tablet:text-HeadingM text-right mx-auto">{blog.title}</h4>
                <hr className="h-[1px] bg-primary" /> 
                <p className="text-BodyS tablet:text-Body line-clamp-2">{blog.text}</p>
                <div className="w-auto border-primary dark:border-secondary border-2 py-2 rounded-full leading-6 flex items-center justify-center gap-x-3 hover:bg-primary hover:text-white transition-colors">
                  <span>➡</span> مشاهده جزئیات خبر
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}