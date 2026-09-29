"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import { ArrowUpRight, Leaf, UsersRound } from "lucide-react";

const impactStats = [
    { value: "10K+", label: "Farmers reached" },
    { value: "35%", label: "Higher yields" },
    { value: "50%", label: "Less waste" },
];

export default function OurImpact() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.15 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="impact" ref={sectionRef} aria-labelledby="impact-title" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32 lg:px-16">
            <div className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100 md:grid-cols-2 lg:gap-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}>
                <div className="order-2 md:order-1">
                    <SectionTitle
                        label="OUR IMPACT"
                        title="Our"
                        highlight="Impact"
                        description="The positive change we drive"
                        alignment="left"
                        className="section-header--flush"
                        headingId="impact-title"
                    />

                    <div className="mt-9 grid gap-6 sm:grid-cols-2">
                        <div className="flex gap-4">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#3DB268]/10 text-[#267A47] dark:text-[#75D59A]">
                                <UsersRound size={20} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="font-semibold">Empowering Communities</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Through our innovative solutions, we are enabling farmers to access new markets, improve their yields, reduce post-harvest losses, and increase their incomes. Our emphasis on women’s inclusion is advancing gender equality within the agricultural sector.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#3DB268]/10 text-[#267A47] dark:text-[#75D59A]">
                                <Leaf size={20} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h3 className="font-semibold">Sustainability</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">Our commitment to environmental sustainability is woven into every aspect of our work, from employing solar-powered cold storage and irrigation systems to contributing to carbon credit projects. We are not merely transforming agriculture; we are ensuring a healthier planet.</p>
                            </div>
                        </div>
                    </div>

                    <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-slate-800 sm:gap-5">
                        {impactStats.map((stat) => (
                            <div key={stat.label}>
                                <dd className="text-2xl font-semibold tracking-tight text-[#267A47] dark:text-[#75D59A] sm:text-3xl">{stat.value}</dd>
                                <dt className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">{stat.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                <div className="relative order-1 mx-auto w-full max-w-[560px] md:order-2">
                    <div className="absolute -inset-3 rounded-[42%_20%_20%_20%] border border-[#3DB268]/20 bg-[#3DB268]/[0.06]" />
                    <div className="relative aspect-[1.08/1] overflow-hidden rounded-[42%_20%_20%_20%] shadow-[0_28px_70px_rgba(15,23,42,0.18)]">
                        <Image fill priority={false} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg" alt="Farmers harvesting crops in a lush green field" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3DB268]/10 via-transparent to-[#267A47]/20" />
                    </div>
                    <div className="absolute -left-2 top-1/2 flex -translate-y-1/2 items-center gap-3 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-lg shadow-slate-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70 sm:-left-8 sm:px-5">
                        <span className="flex size-10 items-center justify-center rounded-full bg-[#3DB268]/15 text-[#267A47] dark:text-[#75D59A]">
                            <Leaf size={19} />
                        </span>
                        <span className="text-sm font-semibold text-[#267A47] dark:text-[#75D59A]">Our Impact</span>
                        <ArrowUpRight size={17} className="text-[#267A47] dark:text-[#75D59A]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
