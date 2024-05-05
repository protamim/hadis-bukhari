import localFont from "next/font/local";
import "./globals.css";

const kalpurush = localFont({ src: "../font/kalpurush.ttf" });

export const metadata = {
  title: "ওহীর সুচনা অধ্যায় - সহিহ বুখারী",
  description:
    "আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kalpurush.className} bg-[#ebeef2]`}>
      <h3 className="bg-green-200 h-20 flex items-center text-xl px-4">Navbar</h3>
        {children}
        </body>
    </html>
  );
}
