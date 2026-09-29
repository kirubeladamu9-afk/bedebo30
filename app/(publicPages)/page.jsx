"use client"
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { companiesLogo } from "@/data/companiesLogo";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import Pricing from "@/sections/Pricing";
import OurImpact from "@/sections/OurImpact";
import GetInvolved from "@/sections/GetInvolved";
import OurStory from "@/sections/OurStory";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
            <section className="relative overflow-hidden bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-cover px-6 md:px-10 lg:px-16">
                <div className="mx-auto max-w-7xl">
                    <div className="grid min-h-0 grid-cols-1 items-center gap-12 pt-28 md:min-h-[calc(100svh-4rem)] pb-16 md:grid-cols-2 md:gap-10 md:pt-24 md:pb-14 lg:gap-16">
                        <div className="flex flex-col items-start">
                            <div className="flex flex-wrap items-center gap-3 rounded-full border border-slate-300 bg-white/70 p-1.5 pr-4 dark:border-slate-600 dark:bg-slate-600/20">
                                <div className="flex items-center -space-x-3">
                                    <Image className="size-7 rounded-full" height={50} width={50}
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50"
                                        alt="userImage1" />
                                    <Image className="size-7 rounded-full" height={50} width={50}
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50"
                                        alt="userImage2" />
                                    <Image className="size-7 rounded-full" height={50} width={50}
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50&h=50&auto=format&fit=crop"
                                        alt="userImage3" />
                                </div>
                                <p className="text-xs">Join community of 1m+ founders </p>
                            </div>
                            <h1 className="mt-6 max-w-xl text-5xl/15 font-semibold md:text-[52px]/15 lg:text-[60px]/17">
                                Every startup begins with{" "}
                                <span className="bg-gradient-to-r from-[#267A47] dark:from-[#75D59A] to-[#2B844B] dark:to-[#B5E8C6] bg-clip-text text-transparent">spark</span>
                            </h1>
                            <p className="mt-5 max-w-lg text-base dark:text-slate-300">
                                Our latest thoughts, trends, and tools, written to help you learn, build, and grow faster.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <button className="h-11 rounded-md bg-[#267A47] px-5 text-white transition hover:bg-[#1E663A] sm:px-6">
                                    Get started
                                </button>
                                <button className="flex h-11 items-center gap-2 rounded-md border border-[#267A47] px-5 text-slate-600 transition dark:text-white sm:px-6">
                                    <VideoIcon strokeWidth={1} />
                                    <span>Watch demo</span>
                                </button>
                            </div>
                        </div>
                        <div aria-hidden="true" className="relative mx-auto w-full max-w-xl rounded-[30px] border border-[#3DB268]/25 bg-[#3DB268]/[0.07] p-3 shadow-[0_28px_90px_rgba(61,178,104,0.16)] sm:p-5">
                            <div className="absolute -right-8 -top-10 size-40 rounded-full bg-[#3DB268]/20 blur-3xl" />
                            <div className="relative aspect-[1.12/1] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                                <div className="flex h-12 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
                                    <div className="flex items-center gap-1.5">
                                        <span className="size-2.5 rounded-full bg-[#3DB268]/80" />
                                        <span className="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                                        <span className="size-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                                    </div>
                                    <div className="h-2 w-20 rounded-full bg-slate-100 dark:bg-slate-800" />
                                </div>
                                <div className="flex h-[calc(100%-3rem)]">
                                    <div className="hidden w-[22%] flex-col gap-4 border-r border-slate-100 bg-slate-50/80 p-4 sm:flex dark:border-slate-800 dark:bg-slate-950/40">
                                        <div className="mb-2 h-5 w-3/4 rounded bg-[#3DB268]/20" />
                                        <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
                                        <div className="h-2 w-4/5 rounded-full bg-slate-100 dark:bg-slate-800" />
                                        <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800" />
                                        <div className="h-2 w-3/4 rounded-full bg-slate-100 dark:bg-slate-800" />
                                    </div>
                                    <div className="min-w-0 flex-1 p-4 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-2">
                                                <div className="h-3 w-24 rounded-full bg-slate-200 dark:bg-slate-700 sm:w-32" />
                                                <div className="h-2 w-16 rounded-full bg-slate-100 dark:bg-slate-800 sm:w-24" />
                                            </div>
                                            <div className="size-7 rounded-lg bg-[#3DB268]/15" />
                                        </div>
                                        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                                            {[0, 1, 2].map((item) => (
                                                <div key={item} className="rounded-lg border border-slate-100 p-2.5 dark:border-slate-800 sm:p-3">
                                                    <div className="h-1.5 w-3/4 rounded-full bg-slate-100 dark:bg-slate-800" />
                                                    <div className="mt-3 h-3 w-1/2 rounded-full bg-[#3DB268]/30" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-3 flex h-24 items-end gap-2 rounded-xl border border-slate-100 px-3 pb-3 pt-4 dark:border-slate-800 sm:mt-4 sm:h-36">
                                            {[34, 51, 42, 68, 55, 82, 64, 92, 74].map((height, index) => (
                                                <div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-[#3DB268]/35 to-[#3DB268]/90" style={{ height: `${height}%` }} />
                                            ))}
                                        </div>
                                        <div className="mt-3 flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-slate-800">
                                            <div className="size-7 shrink-0 rounded-lg bg-[#3DB268]/15" />
                                            <div className="flex-1 space-y-2">
                                                <div className="h-2 w-2/3 rounded-full bg-slate-200 dark:bg-slate-700" />
                                                <div className="h-1.5 w-1/2 rounded-full bg-slate-100 dark:bg-slate-800" />
                                            </div>
                                            <div className="h-2 w-10 rounded-full bg-[#3DB268]/30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="pb-7 text-center text-base font-medium text-slate-400">
                        Trusting by leading brands, including —
                    </h3>
                    <Marquee className="mx-auto max-w-5xl pb-12" gradient={true} speed={25} gradientColor={theme === "dark" ? "#000" : "#fff"}>
                        <div className="flex items-center justify-center">
                            {[...companiesLogo, ...companiesLogo].map((company, index) => (
                                <Image key={index} className="mx-11" src={company.logo} alt={company.name} width={100} height={100} />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </section>

            <OurStory />

            <section id="solutions" className="scroll-mt-24">
                <SectionTitle text1="OUR SOLUTIONS" text2="Our Solutions" text3="Tailored solutions designed to help your business grow." />

                <div className="mt-10 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:gap-4 md:px-16 lg:grid-cols-4 lg:px-24 xl:px-32">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="h-56 space-y-3 rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800/20">
                            <feature.icon className="mt-4 size-8 text-[#3DB268]" strokeWidth={1.3} />
                            <h3 className="truncate whitespace-nowrap text-base font-medium">{feature.title}</h3>
                            <p className="line-clamp-3 text-slate-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <OurImpact />

            <GetInvolved />

            <Pricing />

            <FaqSection />

            <div id="get-started" className="flex flex-col items-center text-center justify-center mt-20">
                <h3 className="text-3xl font-semibold mt-16 mb-4">Ready to Get Started?</h3>
                <p className="text-slate-600 dark:text-slate-200 max-w-xl mx-auto">
                    Join thousands of satisfied customers and transform your business today.
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-[#267A47] hover:bg-[#1E663A] transition text-white rounded-md px-6 h-11">
                        Start free trial
                    </button>
                    <button className="border border-[#267A47] transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Contact sales
                    </button>
                </div>
            </div>

        </>
    );
}
