import Image from "next/image";

export default function Footer() {
    return (
        <footer id="contact" aria-label="Contact Us" className="mt-20 w-full">
            <div className="relative w-full">
                <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F1284462c73094a1f9485fd79b4e21dca%2F3ea5dd7bad9347e2aa989a83c8d43cbb?format=webp&width=800&height=1200"
                    alt="Bedebo Contact Us section with contact details and message form"
                    width={800}
                    height={327}
                    className="block h-auto w-full"
                />
                <span className="absolute left-[53.5%] top-[92.5%] flex h-[6.5%] w-[12%] items-center justify-center bg-[#302a27] text-[clamp(4px,0.9vw,12px)] leading-none text-[#3DB268]">
                    Bedebo
                </span>
            </div>
        </footer>
    );
}
