"use client";

import SectionTitle from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const articles = [
    {
        category: "Agriculture",
        date: "March 12, 2025",
        readTime: "6 min read",
        title: "Building Resilient Harvests, One Farm at a Time",
        excerpt: "Explore how practical tools and stronger local partnerships help farmers adapt, grow healthier crops, and build more reliable livelihoods.",
        image: "https://images.pexels.com/photos/11678440/pexels-photo-11678440.jpeg",
        imageAlt: "Farmers examining fresh broccoli in a lush green field",
    },
    {
        category: "Traceability",
        date: "February 27, 2025",
        readTime: "5 min read",
        title: "From Field to Market: The Value of Knowing Every Step",
        excerpt: "A transparent supply chain helps growers, buyers, and communities make confident decisions about where food comes from and how it travels.",
        image: "https://images.pexels.com/photos/12935049/pexels-photo-12935049.jpeg",
        imageAlt: "A worker scanning a product code to trace goods through a supply chain",
    },
    {
        category: "Sustainability",
        date: "February 10, 2025",
        readTime: "4 min read",
        title: "Growing More With Less Through Sustainable Farming",
        excerpt: "Small changes in soil care, water use, and crop planning can help farms reduce waste while protecting the resources future harvests depend on.",
        image: "https://images.pexels.com/photos/8218738/pexels-photo-8218738.jpeg",
        imageAlt: "Young corn seedlings growing in a vibrant green field",
    },
];

export default function OurBlogs() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.12 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="blog" ref={sectionRef} className="scroll-mt-24 px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
            <div className={`mx-auto max-w-7xl transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                <SectionTitle text1="OUR BLOGS" text2="Our Blogs" text3="Insights, stories, and updates from the field to the market." />

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <article key={article.title} className="group flex h-[520px] flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-[0_4px_18px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3DB268] hover:shadow-[0_14px_32px_rgba(61,178,104,0.14)] motion-reduce:transform-none motion-reduce:transition-none dark:border-slate-800 dark:bg-slate-800/20">
                            <div className="relative aspect-video shrink-0 overflow-hidden rounded-lg bg-[#3DB268]/10">
                                <Image fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none" src={article.image} alt={article.imageAlt} />
                                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#3DB268]/10 mix-blend-multiply" />
                            </div>
                            <div className="mt-5 flex flex-1 flex-col">
                                <span className="text-sm font-semibold text-[#267A47] dark:text-[#75D59A]">{article.category}</span>
                                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{article.date} <span aria-hidden="true">·</span> {article.readTime}</p>
                                <h3 className="mt-3 line-clamp-2 min-h-14 text-lg font-semibold leading-7">{article.title}</h3>
                                <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-500 dark:text-slate-400">{article.excerpt}</p>
                                <a href="#blog" className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#267A47] transition-colors hover:text-[#1E663A] dark:text-[#75D59A] dark:hover:text-[#B5E8C6]">
                                    Read more
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <a href="#blog" className="inline-flex h-12 items-center justify-center rounded-lg border border-[#3DB268] px-6 text-sm font-semibold text-[#267A47] transition-colors hover:bg-[#3DB268]/10 dark:text-[#75D59A]">
                        View all articles
                    </a>
                </div>
            </div>
        </section>
    );
}
