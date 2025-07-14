import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  DollarSign,
  Shield,
  Settings,
  BarChart3,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronRight,
  Play,
  Lock,
  CreditCard,
  UserCog,
} from "lucide-react";

const valueBlocks = [
  {
    icon: Building2,
    title: "Fewer Tools, Better Workflows",
    description:
      "Replace dozens of disconnected apps with one integrated platform. Reduce tool sprawl and simplify your tech stack.",
    stats: "Replace 15+ tools",
  },
  {
    icon: DollarSign,
    title: "Significant Cost Savings",
    description:
      "Save up to 60% on software costs while improving productivity. One subscription for all your team needs.",
    stats: "Save up to $50k/year",
  },
  {
    icon: Zap,
    title: "10x Faster Implementation",
    description:
      "Get your team up and running in hours, not months. Our smart onboarding gets you productive immediately.",
    stats: "Setup in 24 hours",
  },
];

const features = [
  {
    icon: CreditCard,
    title: "Centralized Billing",
    description:
      "One invoice for all tools. Simplified accounting with detailed usage reports and cost allocation.",
    details: [
      "Single monthly invoice",
      "Department cost allocation",
      "Usage analytics",
      "Automatic renewals",
    ],
  },
  {
    icon: UserCog,
    title: "Role-Based Access",
    description:
      "Advanced permissions and user management. Control who sees what with granular access controls.",
    details: [
      "Custom role creation",
      "Permission templates",
      "SSO integration",
      "Audit trails",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security with SOC 2 compliance. Your data is protected with end-to-end encryption.",
    details: [
      "SOC 2 Type II certified",
      "End-to-end encryption",
      "Regular security audits",
      "GDPR compliant",
    ],
  },
];

const integrations = [
  { name: "Slack", logo: "SL", color: "bg-purple-500" },
  { name: "Zapier", logo: "ZP", color: "bg-orange-500" },
  { name: "Google Workspace", logo: "GW", color: "bg-blue-500" },
  { name: "Microsoft 365", logo: "MS", color: "bg-blue-600" },
  { name: "Salesforce", logo: "SF", color: "bg-blue-400" },
  { name: "HubSpot", logo: "HS", color: "bg-orange-600" },
  { name: "Notion", logo: "NT", color: "bg-gray-800" },
  { name: "Asana", logo: "AS", color: "bg-red-500" },
];

const testimonials = [
  {
    quote:
      "Just Better transformed our team productivity. We went from 12 different tools to just one platform, and our efficiency increased by 40%.",
    author: "Michael Chen",
    role: "CTO",
    company: "TechFlow Inc",
    avatar: "MC",
    rating: 5,
    employees: "50-100",
  },
  {
    quote:
      "The cost savings alone paid for the first year. But the real value is in how seamlessly our team now collaborates.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "GrowthLab",
    avatar: "SJ",
    rating: 5,
    employees: "100-500",
  },
  {
    quote:
      "Implementation was surprisingly smooth. Our team was fully productive within a week of switching to Just Better.",
    author: "David Rodriguez",
    role: "Founder",
    company: "InnovateCorp",
    avatar: "DR",
    rating: 5,
    employees: "20-50",
  },
];

export default function ForBusinesses() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 className="w-4 h-4" />
                  <span>Enterprise Ready</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Empower Your Team.{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    Simplify Your Stack.
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Replace dozens of disconnected tools with one powerful
                  platform. Built for teams that demand security, scalability,
                  and seamless collaboration.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl text-lg px-8 py-6 group"
                  >
                    Request Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl text-lg px-8 py-6 group"
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Start 14-Day Trial
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-400" />
                    <span>Enterprise Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>500+ Companies Trust Us</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Admin Panel Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-700/50 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg"></div>
                      <div>
                        <div className="text-white font-semibold">
                          Admin Dashboard
                        </div>
                        <div className="text-gray-400 text-sm">
                          TechFlow Inc
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-900/50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-white">47</div>
                      <div className="text-gray-400 text-xs">Active Users</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-green-400">
                        $12.4k
                      </div>
                      <div className="text-gray-400 text-xs">Saved/Month</div>
                    </div>
                    <div className="bg-gray-900/50 rounded-xl p-3">
                      <div className="text-2xl font-bold text-blue-400">
                        94%
                      </div>
                      <div className="text-gray-400 text-xs">Uptime</div>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Team Members</span>
                      <span className="text-gray-400">Role</span>
                    </div>
                    {[
                      { name: "Sarah Chen", role: "Admin", active: true },
                      { name: "Mike Johnson", role: "Editor", active: true },
                      { name: "Alex Smith", role: "Viewer", active: false },
                    ].map((member, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm">
                            {member.name}
                          </div>
                        </div>
                        <div className="text-gray-400 text-xs">
                          {member.role}
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            member.active ? "bg-green-400" : "bg-gray-600"
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Blocks */}
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Teams Choose Just Better
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join hundreds of teams who've streamlined their operations and
                boosted productivity with our integrated platform.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {valueBlocks.map((block, index) => {
                const IconComponent = block.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {block.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {block.description}
                    </p>

                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 text-brand-primary px-4 py-2 rounded-full text-sm font-medium">
                      <BarChart3 className="w-4 h-4" />
                      {block.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Built for businesses that need security, control, and
                scalability without compromising on user experience.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    <p className="text-gray-300 mb-6">{feature.description}</p>

                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Partners */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Integrates with Your Existing Tools
              </h2>
              <p className="text-gray-300">
                Seamlessly connect with the tools your team already uses
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 ${integration.color} rounded-xl flex items-center justify-center mb-3 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <span className="text-white font-bold text-sm">
                      {integration.logo}
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm text-center">
                    {integration.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Testimonials */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Trusted by Growing Teams
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See how businesses like yours have transformed their operations
                with Just Better.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {testimonial.employees} employees
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses that have streamlined their operations
              with Just Better. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl text-lg px-8 py-6 group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl text-lg px-8 py-6"
              >
                Start 14-Day Trial
              </Button>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>White-glove onboarding</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
