import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Transition from "@/app/template";


const kanit = Kanit({ subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
 });

export const metadata = {
  title: "Copa America 2024",
  description: "Website de Copa America 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      
      <body className={kanit.className}>
      <main className="flex h-screen flex-col p-2 md:p-4">
        <Navbar/>
        {children}
        <Footer/>
      </main>
      </body>

    </html>
  );
}
