import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jblack",
  description: "James Black developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`noise ${inter.className}`} >
        {children}
      </body>
    </html>
  );
}
