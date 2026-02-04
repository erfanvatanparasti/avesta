import Link from "next/link";

export default function NotFound() {
    return (
    <div className="mx-auto text-center min-h-[400px] flex flex-col items-center justify-center gap-5">
        <h1 className="text-HeadingMx tablet:text-HeadingL font-bold py-5 text-center loptop:text-justify w-full">یافت نشد!</h1>
        <p className="text-center text-BodyL font-regular">به نظر می‌رسد آدرس وارد شده وجود ندارد و یا تغییر یافته است!</p>
        <div className="pt-10">
            <Link href="/contact-us" className="border-2 rounded-full px-5 py-3 mx-5">ارتباط با ما</Link> | <Link href="/" className="border-2 rounded-full px-5 py-3 mx-5 text-white dark:text-primary bg-primary dark:bg-bg-secondry">صفحه اصلی <i className="la la-reply mr-1"></i></Link>
        </div>
    </div>
    );
}