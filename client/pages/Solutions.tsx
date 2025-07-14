import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  BookOpen,
  Brain,
  Receipt,
  Code,
  MessageSquare,
  Zap,
  BarChart3,
  UserCheck,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    id: "students",
    title: "For Students",
    subtitle: "Ace your studies with AI-powered learning",
    description:
      "Master your academic journey with intelligent study planning and productivity tools designed specifically for students.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-900/20 to-indigo-900/30",
    tools: ["Just Better Study", "Just Better AI"],
    features: [
      "Smart study scheduling",
      "AI-powered note analysis",
      "Progress tracking",
      "Deadline management",
      "Collaborative study groups",
    ],
    testimonial: {
      quote:
        "Just Better Study helped me improve my GPA by 0.8 points in one semester. The AI scheduling is incredible!",
      author: "Sarah M.",
      role: "Computer Science Student",
      avatar: "SM",
      rating: 5,
    },
    price: "Free",
    popular: false,
  },
  {
    id: "freelancers",
    title: "For Freelancers",
    subtitle: "Run your business like a pro",
    description:
      "Everything you need to manage clients, create content, and get paid faster. Perfect for independent professionals.",
    icon: Briefcase,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-900/20 to-emerald-900/30",
    tools: ["Just Better AI", "Just Better Invoice", "Just Better Build"],
    features: [
      "Automated invoicing",
      "AI content creation",
      "Client management",
      "Payment tracking",
      "Project templates",
    ],
    testimonial: {
      quote:
        "I get paid 3x faster now and spend 70% less time on admin work. Game changer for my freelance business!",
      author: "Marcus R.",
      role: "Freelance Designer",
      avatar: "MR",
      rating: 5,
    },
    price: "$29/month",
    popular: true,
  },
  {
    id: "startups",
    title: "For Startups",
    subtitle: "Scale your team efficiently",
    description:
      "Comprehensive tools for growing teams. From communication to analytics, everything you need to build and scale.",
    icon: Rocket,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-900/20 to-pink-900/30",
    tools: [
      "Just Better Business",
      "Just Better Insight",
      "Just Better Flow",
      "Just Better Hire",
    ],
    features: [
      "Team collaboration",
      "Workflow automation",
      "Data analytics",
      "Smart hiring",
      "Integrated communication",
    ],
    testimonial: {
      quote:
        "We replaced 6 different tools with Just Better. Our team productivity increased by 40% in the first month.",
      author: "Alex K.",
      role: "Startup Founder",
      avatar: "AK",
      rating: 5,
    },
    price: "$99/month",
    popular: false,
  },
  {
    id: "product-teams",
    title: "For Product Teams",
    subtitle: "Build better products faster",
    description:
      "Streamline your product development with integrated feedback collection, workflow automation, and analytics.",
    icon: Users,
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-900/20 to-red-900/30",
    tools: ["Just Better Feedback", "Just Better Flow", "Just Better Insight"],
    features: [
      "User feedback analysis",
      "Product workflow automation",
      "Performance analytics",
      "A/B testing insights",
      "Team coordination",
    ],
    testimonial: {
      quote:
        "Our product iteration speed doubled with Just Better's integrated approach. Customer satisfaction is up 35%.",
      author: "Lisa T.",
      role: "Product Manager",
      avatar: "LT",
      rating: 5,
    },
    price: "$79/month",
    popular: false,
  },
];

const benefits = [
  {
    icon: CheckCircle,
    title: "Integrated Ecosystem",
    description: "All tools work seamlessly together with shared data",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description: "Smart automation and insights across all applications",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with real-time collaboration features",
  },
  {
    icon: BarChart3,
    title: "Analytics Included",
    description: "Deep insights and reporting across all your tools",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,_rgba(120,119,198,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Solutions Made{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Just Better
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose the perfect bundle of tools for your specific needs. From
              individual productivity to enterprise scaling, we have the right
              solution for you.
            </p>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-brand-primary/30 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Find Your Perfect Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Each solution is carefully crafted with the right combination of
                tools for your specific use case.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={solution.id}
                    className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10"
                  >
                    {/* Popular badge */}
                    {solution.popular && (
                      <div className="absolute -top-3 left-8 px-4 py-1 text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full">
                        Most Popular
                      </div>
                    )}

                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {solution.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {solution.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-white">
                            {solution.price}
                          </div>
                          {solution.price !== "Free" && (
                            <div className="text-sm text-gray-400">
                              per team
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {solution.description}
                      </p>

                      {/* Tools Included */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">
                          Tools Included:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.tools.map((tool) => (
                            <span
                              key={tool}
                              className={`px-3 py-1 text-sm bg-gradient-to-r ${solution.gradient} text-white rounded-lg`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">
                          Key Features:
                        </h4>
                        <div className="space-y-2">
                          {solution.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-gray-900/50 rounded-2xl p-4 mb-6 group-hover:bg-gray-800/50 transition-colors duration-300">
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(solution.testimonial.rating)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                              />
                            ),
                          )}
                        </div>
                        <p className="text-sm text-gray-300 mb-3 italic">
                          "{solution.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {solution.testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-medium text-white text-sm">
                              {solution.testimonial.author}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {solution.testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl text-lg py-6 group-hover:shadow-lg group-hover:shadow-brand-primary/30 transition-all duration-300">
                        View Recommended Tools
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compare Solutions</h2>
              <p className="text-gray-300">
                See what's included in each solution at a glance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800/30 rounded-2xl overflow-hidden">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">
                      Feature
                    </th>
                    {solutions.map((solution) => (
                      <th
                        key={solution.id}
                        className="px-6 py-4 text-center text-white font-semibold min-w-[150px]"
                      >
                        {solution.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  <tr>
                    <td className="px-6 py-4 text-gray-300">
                      AI-Powered Tools
                    </td>
                    {solutions.map((solution) => (
                      <td key={solution.id} className="px-6 py-4 text-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">Team Features</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Basic</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">
                      Advanced Analytics
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">—</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">Basic</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-gray-300">
                      Priority Support
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-500">—</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need something different?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team can create a custom solution tailored to your specific
              needs and workflow.
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
                <Link to="/request-custom-solution">
                  Request Custom Solution
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
