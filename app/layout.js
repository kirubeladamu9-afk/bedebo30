import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";
import Script from "next/script";

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
    title: "Bedebo Ethiopia",
    description: "Landing is a SaaS template for developers to build SaaS applications.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`(() => { const theme = localStorage.getItem("theme"); document.documentElement.classList.toggle("dark", theme !== "light"); })();`}
                </Script>
                <ThemeContextProvider>
                    <LenisScroll />
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}
