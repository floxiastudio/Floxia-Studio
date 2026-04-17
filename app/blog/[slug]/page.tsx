import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { getPostBySlug } from "@/lib/wordpress";
import { format } from "date-fns";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Floxia Studio",
    };
  }

  return {
    title: `${post.title.rendered} | Floxia Studio`,
    description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ""),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay bg-background">
      <Navigation />

      <article className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          {/* Back button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Articles
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
              {post._embedded?.["wp:term"]?.[0]?.[0] && (
                <span className="bg-foreground/5 py-1 px-3 rounded-full">
                  {post._embedded["wp:term"][0][0].name}
                </span>
              )}
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-display leading-[1.1] mb-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </header>

          {/* Featured Image */}
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-foreground/10 group">
              <img
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Post Content */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16">
            <div 
              className="prose prose-invert prose-lg max-w-none 
                [&>p]:text-foreground/80 [&>p]:leading-relaxed [&>p]:mb-6
                [&>h2]:text-3xl [&>h2]:font-display [&>h2]:mt-12 [&>h2]:mb-6
                [&>h3]:text-2xl [&>h3]:font-display [&>h3]:mt-8 [&>h3]:mb-4
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6 [&>ol]:space-y-2
                [&>blockquote]:border-l-4 [&>blockquote]:border-foreground [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-10
                [&>img]:rounded-2xl [&>img]:border [&>img]:border-foreground/10
                [&>a]:text-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a]:hover:text-muted-foreground [&>a]:transition-colors"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Sidebar / Actions */}
            <aside className="hidden lg:block space-y-12">
              <div className="sticky top-32">
                <h4 className="text-sm font-semibold uppercase tracking-widest mb-6">Share Story</h4>
                <div className="flex flex-col gap-4">
                  <button className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <div className="p-2 border border-foreground/10 rounded-full group-hover:bg-foreground/5">
                      <Share2 className="w-4 h-4" />
                    </div>
                    Copy Link
                  </button>
                </div>

                <div className="mt-16 pt-12 border-t border-foreground/10">
                  <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 border-b border-foreground/5 pb-4">Written By</h4>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-display text-lg">
                      F
                    </div>
                    <div>
                      <p className="font-medium">Floxia Team</p>
                      <p className="text-xs text-muted-foreground">Digital Strategists</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <FooterSection />
    </main>
  );
}
