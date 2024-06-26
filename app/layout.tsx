import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "../components/NavBar";
import CartProvider from "../components/Providers";
import ShoppingCartModal from "@/components/ShoppingCartModal";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "FlashyShop",
  description: "E-commerce website shop",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <CartProvider>
      <Navbar/>
      <ShoppingCartModal/>
      {children}
    </CartProvider>
    </body>
    </html>
  );
}
