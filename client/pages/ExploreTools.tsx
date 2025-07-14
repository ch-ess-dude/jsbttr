import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Brain,
  BookOpen,
  Users,
  MessageSquare,
  Zap,
  Video,
  BarChart3,
  UserCheck,
  Receipt,
  Code,
  ArrowRight,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";

const tools = [
  {
    id: "ai",
    name: "Just Better AI",
    description:
      "Smart workspace for docs, tasks & AI tools. Boost your productivity with intelligent automation.",
    category: "Productivity",
    icon: Brain,
    gradient: "from-purple-500 to-purple-700",
    bgGradient: "from-purple-900/20 to-purple-800/30",
    features: [
      "AI-powered automation",
      "Smart document analysis",
      "Task prioritization",
    ],
    popular: true,
  },
  {
    id: "study",
    name: "Just Better Study",
    description:
      "AI-powered planner for students. Never miss a deadline with smart scheduling.",
    category: "Education",
    icon: BookOpen,
    gradient: "from-blue-500 to-blue-700",
    bgGradient: "from-blue-900/20 to-blue-800/30",
    features: ["Smart scheduling", "Progress tracking", "Study reminders"],
    popular: false,
  },
  {
    id: "business",
    name: "Just Better Business",
    description:
      "Replace Slack + GDocs for teams. Unified communication and collaboration platform.",
    category: "Business",
    icon: Users,
    gradient: "from-green-500 to-green-700",
    bgGradient: "from-green-900/20 to-green-800/30",
    features: ["Team collaboration", "Document sharing", "Real-time chat"],
    popular: true,
  },
  {
    id: "feedback",
    name: "Just Better Feedback",
    description:
      "Collect user feedback with AI insights. Turn customer voice into actionable data.",
    category: "Business",
    icon: MessageSquare,
    gradient: "from-orange-500 to-orange-700",
    bgGradient: "from-orange-900/20 to-orange-800/30",
    features: [
      "AI sentiment analysis",
      "Feedback categorization",
      "Trend detection",
    ],
    popular: false,
  },
  {
    id: "flow",
    name: "Just Better Flow",
    description:
      "No-code AI workflow builder. Automate repetitive tasks without coding.",
    category: "Productivity",
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-700",
    bgGradient: "from-yellow-900/20 to-yellow-800/30",
    features: [
      "Drag-and-drop builder",
      "API integrations",
      "Conditional logic",
    ],
    popular: false,
  },
  {
    id: "create",
    name: "Just Better Create",
    description:
      "AI studio for content, banners & videos. Create stunning visuals in minutes.",
    category: "Creative",
    icon: Video,
    gradient: "from-pink-500 to-pink-700",
    bgGradient: "from-pink-900/20 to-pink-800/30",
    features: ["AI-generated content", "Template library", "Brand consistency"],
    popular: true,
  },
  {
    id: "insight",
    name: "Just Better Insight",
    description:
      "Unified reporting & dashboard. Get actionable insights from all your data.",
    category: "Business",
    icon: BarChart3,
    gradient: "from-indigo-500 to-indigo-700",
    bgGradient: "from-indigo-900/20 to-indigo-800/30",
    features: ["Custom dashboards", "Real-time analytics", "Export reports"],
    popular: false,
  },
  {
    id: "hire",
    name: "Just Better Hire",
    description:
      "Smart hiring with AI scoring. Find the perfect candidates faster.",
    category: "Business",
    icon: UserCheck,
    gradient: "from-teal-500 to-teal-700",
    bgGradient: "from-teal-900/20 to-teal-800/30",
    features: [
      "AI candidate scoring",
      "Automated screening",
      "Interview scheduling",
    ],
    popular: false,
  },
  {
    id: "invoice",
    name: "Just Better Invoice",
    description:
      "Billing & follow-ups for freelancers. Get paid faster with automated invoicing.",
    category: "Productivity",
    icon: Receipt,
    gradient: "from-red-500 to-red-700",
    bgGradient: "from-red-900/20 to-red-800/30",
    features: ["Automated invoicing", "Payment tracking", "Client management"],
    popular: false,
  },
  {
    id: "build",
    name: "Just Better Build",
    description:
      "Website/app builder using prompts. Build applications with natural language.",
    category: "Creative",
    icon: Code,
    gradient: "from-violet-500 to-violet-700",
    bgGradient: "from-violet-900/20 to-violet-800/30",
    features: [
      "Natural language building",
      "Responsive design",
      "One-click deploy",
    ],
    popular: true,
  },
];

const categories = ["All", "Productivity", "Business", "Creative", "Education"];

export default function ExploreTools() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredTools = tools.filter(
    (tool) => selectedCategory === "All" || tool.category === selectedCategory,
  );

  const popularTools = tools.filter((tool) => tool.popular);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(120,119,198,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Tools
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover the perfect tools to transform your workflow. From
              productivity to creativity, we've got everything you need to work
              just better.
            </p>
          </div>
        </section>

        {/* Popular Tools Highlight */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              Most Popular
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularTools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={tool.id}
                    className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-3`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-400">{tool.category}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filters and Tools */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-xl ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white"
                        : "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {category}
                  </Button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-800/50 rounded-xl p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg ${
                    viewMode === "grid"
                      ? "bg-gray-700 text-white"
                      : "text-gray-400"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg ${
                    viewMode === "list"
                      ? "bg-gray-700 text-white"
                      : "text-gray-400"
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Tools Display */}
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredTools.map((tool) => {
                const IconComponent = tool.icon;

                if (viewMode === "list") {
                  return (
                    <div
                      key={tool.id}
                      className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10"
                    >
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${tool.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      ></div>

                      <div className="relative z-10 flex items-start gap-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-2">
                                {tool.name}
                              </h3>
                              <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full">
                                {tool.category}
                              </span>
                            </div>
                            {tool.popular && (
                              <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400/20 text-yellow-400 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>

                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {tool.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {tool.features.map((feature, index) => (
                              <span
                                key={index}
                                className="inline-block px-2 py-1 text-xs bg-gray-700/30 text-gray-400 rounded-lg"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          <Button className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-xl group">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={tool.id}
                    className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2"
                  >
                    {/* Popular badge */}
                    {tool.popular && (
                      <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-yellow-400/20 text-yellow-400 rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tool.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300">
                          {tool.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                          {tool.category}
                        </span>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {tool.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-white/60 transition-colors duration-300"></div>
                            <span className="text-sm text-gray-400 group-hover:text-white/80 transition-colors duration-300">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-gray-700/50 hover:bg-gradient-to-r hover:from-brand-primary hover:to-brand-secondary text-gray-300 hover:text-white border-0 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredTools.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No tools found
                </h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters to see more tools.
                </p>
                <Button
                  onClick={() => setSelectedCategory("All")}
                  className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl"
                >
                  Show All Tools
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with any tool for free. Upgrade when you need more power.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl text-lg px-8"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl text-lg px-8"
              >
                <Link to="/request-custom-solution">Custom Solution</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
