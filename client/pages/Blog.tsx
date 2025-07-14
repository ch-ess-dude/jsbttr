import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  User,
  ArrowRight,
  Filter,
  Search,
  Clock,
  Tag,
  TrendingUp,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Productivity Tools",
    summary:
      "Explore how artificial intelligence is revolutionizing the way we work and collaborate. From smart automation to predictive analytics, discover what's next.",
    content:
      "As we enter a new era of workplace productivity, artificial intelligence is becoming the cornerstone of efficient operations...",
    tag: "AI",
    author: "Sarah Chen",
    publishDate: "2024-01-15",
    readTime: "5 min read",
    featured: true,
    image: "/api/placeholder/600/300",
  },
  {
    id: 2,
    title: "5 Ways to Streamline Your Team's Workflow",
    summary:
      "Practical tips for reducing friction in team collaboration and boosting productivity with the right tools and processes.",
    content:
      "Team productivity isn't just about having the right tools—it's about creating workflows that make sense...",
    tag: "Productivity",
    author: "Michael Rodriguez",
    publishDate: "2024-01-12",
    readTime: "7 min read",
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 3,
    title: "Education Technology: Transforming How Students Learn",
    summary:
      "How modern educational tools are reshaping the learning experience and helping students achieve better outcomes.",
    content:
      "The education landscape is evolving rapidly, with technology playing an increasingly important role...",
    tag: "Education",
    author: "Dr. Lisa Thompson",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 4,
    title: "Building Better Products with User Feedback",
    summary:
      "Learn how to effectively collect, analyze, and act on user feedback to create products that truly serve your customers.",
    content:
      "User feedback is the lifeblood of great product development. But collecting feedback is just the first step...",
    tag: "Product",
    author: "Alex Kim",
    publishDate: "2024-01-08",
    readTime: "4 min read",
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 5,
    title: "The ROI of Integrated Business Tools",
    summary:
      "Calculate the real cost savings and productivity gains from consolidating your business software stack.",
    content:
      "Many businesses struggle with tool sprawl, using dozens of disconnected applications...",
    tag: "Business",
    author: "David Park",
    publishDate: "2024-01-05",
    readTime: "8 min read",
    featured: false,
    image: "/api/placeholder/600/300",
  },
  {
    id: 6,
    title: "Creative Workflows: From Idea to Execution",
    summary:
      "Streamline your creative process with AI-powered tools that help you move from concept to final product faster.",
    content:
      "The creative process has always been about iteration, experimentation, and refinement...",
    tag: "Creative",
    author: "Emma Wilson",
    publishDate: "2024-01-03",
    readTime: "5 min read",
    featured: false,
    image: "/api/placeholder/600/300",
  },
];

const tags = [
  "All",
  "AI",
  "Productivity",
  "Education",
  "Product",
  "Business",
  "Creative",
];

export default function Blog() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts = regularPosts.filter((post) => {
    const matchesTag = selectedTag === "All" || post.tag === selectedTag;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-subtle to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Insights, Ideas &{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Product Updates
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends in productivity, technology,
              and team collaboration. Learn from experts and discover new ways
              to work better.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-8 bg-surface-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-brand-primary" />
                <span className="font-semibold text-brand-primary">
                  Featured Article
                </span>
              </div>

              <div className="bg-surface-elevated rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium">
                        <Tag className="w-3 h-3" />
                        {featuredPost.tag}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Featured
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.summary}
                    </p>

                    <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.publishDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>

                  <div className="bg-muted rounded-2xl flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-6xl mb-2">📊</div>
                      <p>Featured Article Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filter Bar */}
        <section className="py-8 bg-background border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-surface-elevated border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className={`rounded-xl ${
                      selectedTag === tag
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white"
                        : "border-border hover:bg-surface-elevated"
                    }`}
                  >
                    <Filter className="w-3 h-3 mr-1" />
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-surface-elevated rounded-3xl overflow-hidden border border-border/50 hover:border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image placeholder */}
                  <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="text-4xl mb-2">📝</div>
                      <p className="text-sm">Article Image</p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-brand-primary/10 text-brand-primary rounded-lg text-xs font-medium">
                        <Tag className="w-3 h-3" />
                        {post.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                      <Calendar className="w-3 h-3" />
                      <span>{post.publishDate}</span>
                    </div>

                    {/* Read More */}
                    <Button
                      variant="ghost"
                      className="w-full justify-center hover:bg-brand-primary/10 hover:text-brand-primary rounded-xl group"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No articles found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <Button
                  onClick={() => {
                    setSelectedTag("All");
                    setSearchQuery("");
                  }}
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl"
                >
                  Show All Articles
                </Button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-border hover:bg-surface-elevated"
                >
                  Previous
                </Button>
                <div className="flex gap-1">
                  {[1, 2, 3].map((page) => (
                    <Button
                      key={page}
                      variant={page === 1 ? "default" : "outline"}
                      size="sm"
                      className={`w-10 h-10 rounded-xl ${
                        page === 1
                          ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white"
                          : "border-border hover:bg-surface-elevated"
                      }`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl border-border hover:bg-surface-elevated"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
