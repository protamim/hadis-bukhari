import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Chakra } from "@/providers/chakra";
import QuickNavigationBar from "@/components/quickNavigation/quickNavigation";
import CategoryNavigation from "@/components/categoryNavigation/categoryNavigation";
import { MobileCategoryNavigation } from "@/components/categoryNavigation";

const kalpurush = localFont({ src: "../font/kalpurush.ttf" });
export const kfgq = localFont({ src: "../font/KFGQ.otf" });

export const metadata = {
  title: "ওহীর সুচনা অধ্যায় - সহিহ বুখারী",
  description:
    "আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kalpurush.className} bg-[#ebeef2] h-screen rounded-tl-xl`}
      >
        <Chakra>
          {/* Header */}
          <div className="bg-white px-4 mb-4 border-b border-gray-100 shadow-sm fixed top-0 w-full z-40 lg:border-none lg:shadow-none">
            <Header />
          </div>

          {/* Quick navigation */}
          <div className="bg-white fixed bottom-0 w-full z-20 px-4 shadow-xl lg:h-[calc(100vh-80px)] lg:w-[100px] lg:left-0 lg:flex lg:items-center">
            <QuickNavigationBar />
          </div>

          {/* category navigation*/}
          <div className="relative bg-white hidden xl:block xl:rounded-xl xl:h-[calc(100vh-115px)] xl:top-[100px] xl:w-[370px] xl:fixed xl:left-[125px] xl:bottom-0">
            <CategoryNavigation />
          </div>

          {/* Main Content Area */}
          <main className="bg-transparent overflow-y-auto px-4 fixed top-0 h-screen w-full z-10 pt-20 pb-[75px] lg:pb-9 lg:top-[95px] lg:h-[calc(100vh-95px)] lg:pt-0 lg:pl-[120px] xl:w-[calc(100%-500px)] xl:right-0 xl:pl-6 xl:pt-0 xl:top-[100px] xl:pb-[7.625rem]">
            {/* Category Navigation for mobile */}
            <div className="mb-6 xl:hidden">
              <MobileCategoryNavigation />
            </div>
            {/* Dynamic content - Content container */}
            {children}
          </main>
        </Chakra>
      </body>
    </html>
  );
}
