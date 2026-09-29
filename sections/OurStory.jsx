import Image from "next/image";
import { Lightbulb, ShieldCheck, Star } from "lucide-react";

export default function OurStory() {
    return (
        <section id="our-story" aria-labelledby="our-story-title" className="scroll-mt-20 px-6 pt-24 pb-12 md:px-10 md:pt-32 md:pb-8 lg:px-16">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 lg:gap-20">
                <div className="relative mx-auto aspect-square w-full max-w-[420px]">
                    <div className="absolute bottom-0 left-0 z-0 h-[36%] w-[44%] opacity-60" style={{ backgroundImage: "radial-gradient(#3DB268 1.5px, transparent 1.5px)", backgroundSize: "16px 16px" }} />
                    <div className="absolute inset-0 z-10 overflow-hidden rounded-full border-[3px] border-white shadow-[0_24px_60px_rgba(15,23,42,0.16)] dark:border-slate-950">
                        <Image fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover" src="https://images.pexels.com/photos/5257575/pexels-photo-5257575.jpeg" alt="Founders collaborating around a table" />
                    </div>
                </div>

                <div className="max-w-xl">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-9 bg-[#3DB268]" />
                        <p className="text-xs font-semibold tracking-[0.28em] text-[#267A47] dark:text-[#75D59A]">ABOUT US</p>
                    </div>
                    <h2 id="our-story-title" className="scroll-mt-28 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Let&apos;s Talk About{" "}
                        <span className="bg-gradient-to-r from-[#267A47] to-[#3DB268] bg-clip-text text-transparent">Company</span>
                    </h2>
                    <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                        <p>We bring curious minds and thoughtful design together to help teams do their best work.</p>
                        <p>From the first spark to a product people love, we partner with ambitious founders to make good ideas real.</p>
                    </div>
                    <div className="mt-7 flex items-center gap-4">
                        <span className="text-2xl font-semibold text-slate-900 dark:text-white">A+</span>
                        <span className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
                        <div>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">4.6 / 5.0</p>
                            <div className="mt-1 flex items-center gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
                                {[0, 1, 2, 3, 4].map((star) => (
                                    <Star key={star} size={14} fill="currentColor" strokeWidth={1.5} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#3DB268] to-[#267A47] text-white shadow-md shadow-[#3DB268]/20">
                                <Lightbulb size={19} strokeWidth={1.8} />
                            </span>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">Ideas shaped into meaningful work.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                                <ShieldCheck size={19} strokeWidth={1.8} />
                            </span>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">A trusted partner at every step.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
