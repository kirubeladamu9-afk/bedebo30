import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
    return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((article) => article.slug === slug);
    if (!post) {
        const title = "Bedebo Ethiopia - Page Not Found";
        return {
            title: "Page Not Found",
            openGraph: { title },
            twitter: { title },
        };
    }

    const title = `Bedebo Ethiopia - ${post.title}`;
    return {
        title,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}` },
        openGraph: {
            type: "article",
            title,
            description: post.excerpt,
            publishedTime: new Date(`${post.date}T12:00:00Z`).toISOString(),
            authors: [post.author.name],
            images: [{ url: post.coverImage, alt: post.coverImageAlt }],
        },
        twitter: { card: "summary_large_image", title, description: post.excerpt, images: [post.coverImage] },
    };
}

export default async function BlogDetailPage({ params }) {
    const { slug } = await params;
    const postIndex = blogPosts.findIndex((article) => article.slug === slug);
    if (postIndex < 0) notFound();

    const post = blogPosts[postIndex];
    const previousPost = blogPosts[(postIndex - 1 + blogPosts.length) % blogPosts.length];
    const nextPost = blogPosts[(postIndex + 1) % blogPosts.length];
    const relatedPosts = blogPosts.filter((article) => article.slug !== post.slug).slice(0, 3);
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: [post.coverImage],
        datePublished: new Date(`${post.date}T12:00:00Z`).toISOString(),
        author: { "@type": "Person", name: post.author.name },
        publisher: { "@type": "Organization", name: "Bedebo" },
        mainEntityOfPage: `/blog/${post.slug}`,
        keywords: post.tags.join(", "),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
            <BlogArticle post={post} allPosts={blogPosts} previousPost={previousPost} nextPost={nextPost} relatedPosts={relatedPosts} />
        </>
    );
}
