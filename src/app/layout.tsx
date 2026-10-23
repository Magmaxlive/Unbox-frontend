import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Providers from "@/components/tanStack/providers";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Unbox",
  description: "Break open what matters",
};

export default function RootLayout({ children, }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <Navbar/>
        <main className='flex-1'>
            {children}
       </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
