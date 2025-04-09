import { Inter } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Best Smooth Scroll Birthday Website",
  description: "Created by Kaps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
