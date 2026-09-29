import SectionTitle from "@/components/SectionTitle";
import { ArrowRight, Handshake, Sprout, Store } from "lucide-react";

const involvementOptions = [
    {
        icon: Sprout,
        title: "For Farmers and Agricultural Service Providers",
        description: "Access practical tools, agronomy guidance, and fair-market opportunities for resilient, productive farms.",
    },
    {
        icon: Handshake,
        title: "For Partners and Investors",
        description: "Invest in locally led initiatives that strengthen rural livelihoods and create lasting agricultural value.",
    },
    {
        icon: Store,
        title: "For Vendors and Wholesalers",
        description: "Connect with dependable producers and expand market access for quality goods.",
    },
];

export default function GetInvolved() {
    return (
        <section id="get-involved" aria-labelledby="get-involved-title" className="scroll-mt-24">
            <SectionTitle label="GET INVOLVED" title="Get" highlight="Involved" description="How can you get involved with Bedebo's operation?" headingId="get-involved-title" />
            <div className="mt-10 grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:gap-4 md:px-16 lg:grid-cols-3 lg:px-24 xl:px-32">
                {involvementOptions.map(({ icon: Icon, title, description }) => (
                    <article key={title} className="flex h-[360px] flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center shadow-[0_4px_18px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#3DB268] hover:shadow-[0_12px_28px_rgba(61,178,104,0.12)] dark:border-slate-800 dark:bg-slate-800/20">
                        <Icon className="mb-5 size-8 shrink-0 text-[#3DB268]" strokeWidth={1.5} />
                        <h3 className="line-clamp-2 min-h-12 text-center text-[15px] font-semibold leading-6">{title}</h3>
                        <p className="mt-3 line-clamp-4 min-h-24 text-center text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
                        <a href="#contact" className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-sm font-semibold text-[#267A47] transition-colors hover:text-[#1E663A] dark:text-[#75D59A] dark:hover:text-[#B5E8C6]">
                            Learn more
                            <ArrowRight size={16} />
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}
