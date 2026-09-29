"use client"
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { companiesLogo } from "@/data/companiesLogo";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import OurImpact from "@/sections/OurImpact";
import GetInvolved from "@/sections/GetInvolved";
import Traceability from "@/sections/Traceability";
import OurStory from "@/sections/OurStory";
import OurBlogs from "@/sections/OurBlogs";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

export default function Page() {
    const { theme } = useThemeContext();
    return (
        <>
            <section
                className="bedebo-hero"
                aria-labelledby="hero-heading"
                style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F1284462c73094a1f9485fd79b4e21dca%2F2f20b077d2c64a60890b8e3a444ac5ce?format=webp&width=1920&height=810')" }}
            >
                <div className="bedebo-hero-content bedebo-site-container">
                    <h1 id="hero-heading" className="bedebo-hero-heading">
                        Empowering Ethiopian<br className="bedebo-desktop-break" />{" "}
                        Agriculture Through<br className="bedebo-desktop-break" />{" "}
                        <span>Innovation</span>
                    </h1>
                    <p className="bedebo-hero-subheadline">
                        Integrating digital solutions and sustainable energy for a thriving future
                    </p>
                    <p className="bedebo-hero-copy">
                        At Bedebo, we are revolutionizing the agricultural value chain in Ethiopia. Through digital platforms and eco-friendly energy solutions, we are enhancing livelihoods, reducing post-harvest losses, and empowering small-scale farmers and women. Join us on our journey towards a sustainable agricultural future.
                    </p>
                    <button type="button" className="bedebo-hero-button">
                        Download Bedebo Apps
                        <ArrowRight aria-hidden="true" size={22} strokeWidth={2} />
                    </button>
                </div>
            </section>

            <section className="px-6 pt-8">
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
            </section>

            <OurStory />

            <section id="solutions" className="scroll-mt-24">
                <SectionTitle label="OUR SOLUTIONS" title="Our" highlight="Solutions" description="Tailored solutions designed to help your business grow." headingId="solutions-title" />

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

            <Traceability />

            <OurBlogs />

            <FaqSection />

            <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 flex flex-col items-center text-center justify-center mt-20">
                <SectionTitle
                    label="GET IN TOUCH"
                    title="Ready to Get"
                    highlight="Started?"
                    description="Join thousands of satisfied customers and transform your business today."
                    headingId="contact-title"
                    className="section-header--cta"
                />
                <div className="flex items-center gap-4 mt-8">
                    <button className="bg-[#267A47] hover:bg-[#1E663A] transition text-white rounded-md px-6 h-11">
                        Start free trial
                    </button>
                    <button className="border border-[#267A47] transition text-slate-600 dark:text-white rounded-md px-6 h-11">
                        Contact sales
                    </button>
                </div>
            </section>

        </>
    );
}
