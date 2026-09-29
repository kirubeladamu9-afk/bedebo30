"use client";

import BlogCard from "@/components/BlogCard";
import SectionTitle from "@/components/SectionTitle";
import { blogPosts } from "@/data/blogPosts";
import { useEffect, useRef, useState } from "react";

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
                    {blogPosts.filter((article) => article.featured).map((article) => <BlogCard key={article.slug} article={article} />)}
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
