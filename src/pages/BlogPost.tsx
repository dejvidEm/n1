import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { fetchBlogPost, type BlogPostDetail } from "@/services/servicesApi";
import { urlFor } from "@/lib/sanityImage";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    let cancelled = false;
    setLoading(true);

    fetchBlogPost(slug)
      .then((data) => {
        if (!cancelled) setPost(data);
      })
      .catch((err) => console.error("Failed to load blog post:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <p className="text-muted-foreground">Načítavam článok...</p>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-display font-semibold mb-4">Článok nenájdený</h1>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Späť na blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Späť na blog
            </Link>
          </Button>

          <header className="mb-12">
            {post.featuredImage && (
              <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
                <img
                  src={urlFor(post.featuredImage.asset).width(1200).height(675).url()}
                  alt={post.featuredImage.alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-xl text-muted-foreground mb-4">
                {post.subtitle}
              </p>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.categories.map((category, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {category}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-medium prose-p:text-muted-foreground prose-strong:text-foreground">
            <PortableText value={post.content} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
