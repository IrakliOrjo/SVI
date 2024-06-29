import { Comfortaa } from "next/font/google";
import "./globals.css";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "SVI Wine",
  description: "SWI Wine Cellar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
