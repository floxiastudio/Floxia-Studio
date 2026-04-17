import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { getPosts } from "@/lib/wordpress";
import { format } from "date-fns";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Floxia Studio",
  description: "Read the latest insights and updates from Floxia Studio about web development, AI, and design.",
};

export default async function BlogPage() {
  const posts = await getPosts(12);

  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 border-b border-foreground/5 bg-background">
        <div className="max-w-[1400px] mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-foreground/5 text-xs font-medium mb-4 uppercase tracking-wider">
            Our Insights
          </span>
          <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight">
            The <span className="text-stroke">Latest</span> Stories
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Exploring the intersection of technology, design, and digital strategy. 
            Stay updated with our latest findings and agency updates.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="group flex flex-col bg-card border border-foreground/10 rounded-2xl overflow-hidden hover-lift"
                >
                  <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
                    {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                      <img
                        src={post._embedded["wp:featuredmedia"][0].source_url}
                        alt={post.title.rendered}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                        No image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-black rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </span>
                      {post._embedded?.["wp:term"]?.[0]?.[0] && (
                        <span className="bg-foreground/5 py-0.5 px-2 rounded-full uppercase tracking-widest font-semibold">
                          {post._embedded["wp:term"][0][0].name}
                        </span>
                      )}
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h2 
                        className="text-2xl font-display mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      />
                    </Link>

                    <div 
                      className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 mb-8"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mt-auto group/btn"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-display mb-4">No posts found</h3>
              <p className="text-muted-foreground">Check back later for fresh content.</p>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
