import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

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
              <div className="aspect-video bg-muted rounded-lg mb-8"></div>
            )}
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('sk-SK')}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
