"use client";
import { navLinks } from "@/data/navLinks";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useThemeContext } from "@/context/ThemeContext";

export default function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const pathname = usePathname();
    const { theme } = useThemeContext();

    useEffect(() => {
        if (openMobileMenu) {
            document.body.classList.add("max-md:overflow-hidden");
        } else {
            document.body.classList.remove("max-md:overflow-hidden");
        }
    }, [openMobileMenu]);

    return (
        <nav className={`bedebo-site-container flex items-center justify-between fixed inset-x-0 z-50 top-0 py-4 ${openMobileMenu ? '' : 'backdrop-blur'} ${pathname === "/" ? "text-[#1E2841]" : ""}`}>
            <a href="https://prebuiltui.com?utm_source=landing">
                <Image className="h-9 md:h-9.5 w-auto shrink-0" src={pathname === "/" ? "/assets/logo-dark.svg" : theme === "dark" ? "/assets/logo-light.svg" : "/assets/logo-dark.svg"} alt="Logo" width={140} height={40} priority fetchPriority="high" />
            </a>
            <div className="hidden items-center gap-5 xl:flex xl:gap-7 xl:pl-12">
                {navLinks.map((link) => {
                    const isBlogActive = link.name === "Blog" && pathname.startsWith("/blog/");
                    return <Link key={link.name} href={link.href} aria-current={isBlogActive ? "page" : undefined} className={`rounded-sm transition-colors hover:text-slate-600 dark:hover:text-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3DB268] ${isBlogActive ? "font-semibold text-[#267A47] dark:text-[#75D59A]" : ""}`}>{link.name}</Link>;
                })}
            </div>
            {/* Mobile menu */}
            <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/60 dark:bg-black/40 backdrop-blur-md xl:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
                {navLinks.map((link) => {
                    const isBlogActive = link.name === "Blog" && pathname.startsWith("/blog/");
                    return <Link key={link.name} href={link.href} aria-current={isBlogActive ? "page" : undefined} className={`rounded-sm transition-colors hover:text-[#267A47] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3DB268] dark:hover:text-[#75D59A] ${isBlogActive ? "font-semibold text-[#267A47] dark:text-[#75D59A]" : ""}`} onClick={() => setOpenMobileMenu(false)}>{link.name}</Link>;
                })}
                <button>
                    Sign in
                </button>
                <button className="aspect-square size-10 p-1 items-center justify-center bg-[#267A47] hover:bg-[#1E663A] transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
                    <XIcon />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <button className="hidden xl:block hover:bg-slate-100 dark:hover:bg-[#123822] transition px-4 py-2 border border-[#267A47] rounded-md">
                    Sign in
                </button>
                <button className="hidden xl:block px-4 py-2 bg-[#267A47] hover:bg-[#1E663A] transition text-white rounded-md">
                    Get started
                </button>
                <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="xl:hidden">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </div>
        </nav>
    );
}
