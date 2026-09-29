import Link from "next/link";

export default function BlogArticleNotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
            <p className="rounded-full border border-[#3DB268]/20 bg-[#3DB268]/10 px-4 py-1.5 text-sm font-semibold text-[#267A47] dark:text-[#75D59A]">ARTICLE NOT FOUND</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight">This story has moved on.</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300">The article may have been updated or removed. Explore the latest stories from the Bedebo community instead.</p>
            <Link href="/#blog" className="mt-7 inline-flex h-12 items-center rounded-lg bg-[#267A47] px-6 font-semibold text-white transition hover:bg-[#1E663A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3DB268]">Back to all articles</Link>
        </main>
    );
}
