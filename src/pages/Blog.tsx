import { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { fetchBlogPosts, type BlogPostListItem } from "@/services/servicesApi";
import { urlFor } from "@/lib/sanityImage";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetchBlogPosts()
      .then((data) => {
        if (!cancelled) setPosts(data);
      })
      .catch((err) => console.error("Failed to load blog posts:", err))
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Novinky, tipy a informácie o estetike a wellness
            </p>
          </div>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Načítavam články...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Zatiaľ nie sú k dispozícii žiadne články.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Card key={post._id} className="hover:shadow-elegant transition-all duration-300 flex flex-col">
                  {post.featuredImage && (
                    <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                      <img
                        src={urlFor(post.featuredImage.asset).width(600).height(400).url()}
                        alt={post.featuredImage.alt || post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.publishedAt).toLocaleDateString('sk-SK')}
                    </div>
                    <CardTitle className="text-2xl font-display mb-2">{post.title}</CardTitle>
                    {post.subtitle && (
                      <CardDescription className="text-base">
                        {post.subtitle}
                      </CardDescription>
                    )}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {post.categories.map((category, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" asChild className="p-0 h-auto text-accent hover:text-accent/80">
                      <Link to={`/blog/${post.slug}`}>
                        Čítať viac →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
