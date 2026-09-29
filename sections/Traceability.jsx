"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import { Check, PackageCheck, QrCode, Sprout, Truck, Warehouse } from "lucide-react";

const traceabilitySteps = [
    {
        title: "Farm Level & Digital Onboarding",
        actors: "200+ certified farmers",
        icon: Sprout,
        actions: [
            "Internationally certified farmers follow Organic and GlobalG.A.P. cultivation practices.",
            "Bedebo App records Farmer ID, location, produce type, gross and net weight.",
            "Quality grade and timestamp complete each digital farm record.",
        ],
    },
    {
        title: "Aggregation & Crate Standardization",
        actors: "Field agents & Union management",
        icon: QrCode,
        actions: [
            "Union check-in verifies incoming produce and farmer records.",
            "Harvest is consolidated into standardized 20–25 kg crates.",
            "A unique QR or batch ID links every crate to its farmer.",
        ],
    },
    {
        title: "Cold Logistics & Transit",
        actors: "Cold truck drivers & logistics operators",
        icon: Truck,
        actions: [
            "Produce is dispatched in temperature-controlled cold trucks.",
            "Digital transfer events are recorded in the Bedebo App.",
            "Custody is tracked throughout the journey.",
        ],
    },
    {
        title: "Warehousing & Storage",
        actors: "Central warehouse managers",
        icon: Warehouse,
        actions: [
            "Crate counts and produce quality are checked at check-in.",
            "Verified crates are held in cold room storage.",
            "A real-time inventory ledger tracks available stock.",
        ],
    },
    {
        title: "Order Fulfillment & Final Delivery",
        actors: "Fulfillment team & commercial vendors",
        icon: PackageCheck,
        actions: [
            "Purchase orders are allocated against cold room inventory.",
            "Crate IDs are scanned at warehouse check-out.",
            "An audit trail connects vendor shipment to the farmer’s harvest.",
        ],
    },
];

function TraceabilityStep({ step, index }) {
    const stepRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const Icon = step.icon;
    const isLeft = index % 2 === 0;

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (stepRef.current) observer.observe(stepRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative grid h-[380px] grid-cols-[3rem_minmax(0,1fr)] items-center gap-3 md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-4">
            <article ref={stepRef} className={`col-start-2 row-start-1 flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.05)] transition-all duration-700 ease-out dark:border-slate-800 dark:bg-slate-900/80 sm:p-6 md:row-start-1 ${isLeft ? "md:col-start-1" : "md:col-start-3"} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"} motion-reduce:translate-y-0 motion-reduce:transition-none motion-reduce:opacity-100`}>
                <div className="flex items-start justify-between gap-3">
                    <span className="text-4xl font-semibold leading-none tracking-tight text-[#3DB268]">0{index + 1}</span>
                    <span className="rounded-full bg-[#3DB268]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#267A47] dark:text-[#75D59A]">Step {index + 1}</span>
                </div>
                <h3 className="mt-4 line-clamp-2 min-h-12 text-base font-semibold leading-6 sm:text-lg">{step.title}</h3>
                <p className="mt-2 h-5 truncate text-[11px] leading-5 text-slate-500 dark:text-slate-400"><span className="font-semibold text-slate-700 dark:text-slate-300">Actors:</span> {step.actors}</p>
                <ul className="mt-4 space-y-2.5">
                    {step.actions.map((action) => (
                        <li key={action} className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                            <Check size={14} className="mt-0.5 shrink-0 text-[#3DB268]" strokeWidth={2.4} />
                            <span className="line-clamp-2">{action}</span>
                        </li>
                    ))}
                </ul>
            </article>
            <div className="z-10 col-start-1 row-start-1 flex size-12 items-center justify-center justify-self-center rounded-full border-2 border-[#3DB268] bg-white text-[#267A47] shadow-[0_0_0_6px_rgba(61,178,104,0.1)] dark:bg-slate-950 dark:text-[#75D59A] md:col-start-2 md:size-14">
                <Icon size={22} strokeWidth={1.7} />
            </div>
        </div>
    );
}

export default function Traceability() {
    return (
        <section id="traceability" className="scroll-mt-24 px-6 pb-20 md:px-10 lg:px-16">
            <SectionTitle text1="TRACEABILITY" text2="Traceability & Value Chain Breakdown" text3="From farm to vendor, every crate is tracked, verified, and traceable." />
            <div className="relative mx-auto mt-14 max-w-6xl before:absolute before:bottom-6 before:left-[23px] before:top-6 before:w-0.5 before:bg-[#3DB268]/30 before:content-[''] md:before:hidden">
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox="0 0 100 1000" preserveAspectRatio="none" fill="none">
                    <path d="M50 0 C38 65 62 135 50 200 S38 335 50 400 S62 535 50 600 S38 735 50 800 S62 935 50 1000" stroke="#3DB268" strokeOpacity="0.3" strokeWidth="0.8" />
                </svg>
                <div className="space-y-6 md:space-y-7">
                    {traceabilitySteps.map((step, index) => (
                        <TraceabilityStep key={step.title} step={step} index={index} />
                    ))}
                </div>
            </div>
            <div className="mx-auto mt-12 flex max-w-5xl items-center gap-4 rounded-2xl border border-[#3DB268]/20 bg-[#3DB268]/[0.08] px-5 py-5 dark:bg-[#3DB268]/[0.1] sm:px-8">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#3DB268]/15 text-[#267A47] dark:text-[#75D59A]">
                    <Check size={22} strokeWidth={2.5} />
                </span>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-200 sm:text-base"><span className="font-semibold text-[#267A47] dark:text-[#75D59A]">End-to-End Visibility:</span> from vendor shipment back to the individual farmer&apos;s harvest.</p>
            </div>
        </section>
    );
}
