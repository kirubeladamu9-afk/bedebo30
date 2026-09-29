"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.08 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <footer
            id="contact"
            ref={sectionRef}
            aria-labelledby="contact-title"
            className={`relative isolate mt-20 scroll-mt-24 overflow-hidden bg-[#0a140c] text-white transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
            <Image
                src="/assets/contact-field.webp"
                alt="Aerial view of a tractor working a farm field"
                fill
                sizes="100vw"
                className="z-0 object-cover"
            />
            <div className="absolute inset-0 z-[1]" style={{ backgroundColor: "rgba(10, 20, 12, 0.65)" }} />

            <div className="bedebo-site-container relative z-10 pb-8 pt-24">
                <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="flex items-center gap-3 text-[#3DB268]">
                            <span className="h-px w-10 bg-[#3DB268]" aria-hidden="true" />
                            <p className="text-xs font-semibold uppercase tracking-[0.25em]">Get in Touch</p>
                        </div>
                        <h2 id="contact-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                            Contact <span className="text-[#3DB268]">Us</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-6 text-white/90 sm:text-base">
                            We are eager to hear from you. Whether you are a farmer, potential partner, or just interested in learning more about our work, contact us today.
                        </p>

                        <address className="mt-8 space-y-5 not-italic">
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10">
                                    <MapPin size={20} strokeWidth={1.7} aria-hidden="true" />
                                </span>
                                <p className="pt-2 text-sm leading-6 text-white/95">HQ: Legehar, ORDA Building, 15th Floor, Addis Ababa, Ethiopia</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10">
                                    <Phone size={19} strokeWidth={1.7} aria-hidden="true" />
                                </span>
                                <p className="pt-1 text-sm leading-6 text-white/95">
                                    <a href="tel:+25199202640" className="transition-colors hover:text-[#75D59A]">+251-99-202-640</a>
                                    <br />
                                    <a href="tel:+251115580006" className="transition-colors hover:text-[#75D59A]">+251-11-558-0006</a>
                                    <span> / </span>
                                    <a href="tel:+2519115580010" className="transition-colors hover:text-[#75D59A]">+251-911-558-0010</a>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10">
                                    <Mail size={19} strokeWidth={1.7} aria-hidden="true" />
                                </span>
                                <a href="mailto:bedebethiopia@gmail.com" className="text-sm text-white/95 transition-colors hover:text-[#75D59A]">bedebethiopia@gmail.com</a>
                            </div>
                        </address>
                    </div>

                    <form className="space-y-6 rounded-[32px] border border-white/25 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur-lg sm:p-8">
                        <div>
                            <label htmlFor="contact-name" className="sr-only">Name</label>
                            <input id="contact-name" name="name" type="text" placeholder="Name" className="h-[60px] w-full rounded-full border border-transparent bg-white/85 px-6 text-sm text-slate-800 outline-none placeholder:text-slate-600 focus-visible:border-[#3DB268] focus-visible:ring-2 focus-visible:ring-[#3DB268]" />
                        </div>
                        <div>
                            <label htmlFor="contact-email" className="sr-only">Email</label>
                            <input id="contact-email" name="email" type="email" placeholder="Email" className="h-[60px] w-full rounded-full border border-transparent bg-white/85 px-6 text-sm text-slate-800 outline-none placeholder:text-slate-600 focus-visible:border-[#3DB268] focus-visible:ring-2 focus-visible:ring-[#3DB268]" />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="sr-only">Message</label>
                            <textarea id="contact-message" name="message" placeholder="Message" className="h-[200px] w-full resize-y rounded-[28px] border border-transparent bg-white/85 px-6 py-5 text-sm text-slate-800 outline-none placeholder:text-slate-600 focus-visible:border-[#3DB268] focus-visible:ring-2 focus-visible:ring-[#3DB268]" />
                        </div>
                        <button type="button" className="h-16 w-full rounded-full bg-[#3DB268] text-base font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#319b59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="mt-16 border-t border-white/25 pt-5 text-center text-xs text-white/85">
                    Copyright © {new Date().getFullYear()}, Powered by{" "}
                    <a href="#contact" className="text-[#3DB268] underline-offset-4 transition hover:underline">Bedebo Ethiopia</a>
                </div>
            </div>
        </footer>
    );
}
