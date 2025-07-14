import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  CheckCircle,
  ArrowRight,
  Users,
  Building2,
  Zap,
  Shield,
  Clock,
  Star,
  MessageSquare,
  Settings,
  RefreshCw,
} from "lucide-react";

const benefits = [
  {
    icon: Settings,
    title: "White-glove Onboarding",
    description:
      "Dedicated setup assistance with our solutions architects to ensure perfect integration with your existing workflow.",
  },
  {
    icon: Zap,
    title: "Custom Integrations",
    description:
      "Connect any tool or system with our flexible API and custom integration development services.",
  },
  {
    icon: Shield,
    title: "Priority Support",
    description:
      "24/7 dedicated support team with guaranteed response times and direct access to our engineering team.",
  },
];

const migrationTools = [
  { name: "Slack", logo: "SL", users: "50M+" },
  { name: "Notion", logo: "NT", users: "30M+" },
  { name: "Zapier", logo: "ZP", users: "5M+" },
  { name: "Asana", logo: "AS", users: "100M+" },
  { name: "Trello", logo: "TR", users: "50M+" },
  { name: "Monday", logo: "MN", users: "152K+" },
];

const companyRoles = [
  "CEO/Founder",
  "CTO/VP Engineering",
  "Product Manager",
  "Operations Manager",
  "IT Director",
  "Team Lead",
  "Other",
];

const companySizes = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const interestedTools = [
  "Just Better AI",
  "Just Better Business",
  "Just Better Flow",
  "Just Better Insight",
  "Just Better Feedback",
  "Just Better Create",
  "All Tools",
];

export default function RequestCustomSolution() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    tools: [] as string[],
    useCase: "",
    currentTools: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToolToggle = (tool: string) => {
    setFormData({
      ...formData,
      tools: formData.tools.includes(tool)
        ? formData.tools.filter((t) => t !== tool)
        : [...formData.tools, tool],
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(120,119,198,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Custom Solutions</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Need something{" "}
                  <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    tailored?
                  </span>
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Every business is unique. Let us create a custom solution that
                  fits your exact needs, integrates with your existing tools,
                  and scales with your growth.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-1">
                      24hrs
                    </div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-1">
                      95%
                    </div>
                    <div className="text-sm text-gray-400">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-primary mb-1">
                      100+
                    </div>
                    <div className="text-sm text-gray-400">
                      Custom Solutions
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Animated AI Assistant */}
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">
                      AI Solutions Architect
                    </span>
                  </div>

                  {/* Chat bubbles */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-brand-primary/20 rounded-2xl rounded-bl-md p-4">
                      <p className="text-white text-sm">
                        "I need a solution that integrates with our existing
                        Slack workspace and automates our client onboarding
                        process."
                      </p>
                    </div>
                    <div className="bg-gray-700/50 rounded-2xl rounded-br-md p-4 ml-4">
                      <p className="text-gray-300 text-sm">
                        Perfect! I can create a custom workflow that connects
                        Just Better Business with Slack, automates client
                        onboarding, and includes progress tracking. Let's build
                        this together.
                      </p>
                    </div>
                  </div>

                  {/* AI Assistant Avatar */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">AI Assistant</div>
                      <div className="text-gray-400 text-sm">
                        Analyzing your requirements...
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce delay-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Custom Solutions?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get exactly what you need with our tailored approach to business
                automation and productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 text-center hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Migration Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Already using tools like these?
                </h2>
                <p className="text-gray-300 text-lg">
                  We'll help you migrate seamlessly while preserving your data
                  and workflows.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                {migrationTools.map((tool, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-700/50 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-700 transition-colors duration-300">
                      <span className="text-white font-bold text-lg">
                        {tool.logo}
                      </span>
                    </div>
                    <h4 className="text-white font-medium mb-1">{tool.name}</h4>
                    <p className="text-gray-400 text-sm">{tool.users} users</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  <span>Zero downtime migration guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-gray-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Let's Build Your Solution
              </h2>
              <p className="text-gray-300 text-lg">
                Tell us about your needs and we'll create a custom proposal
                within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-400/30 rounded-3xl p-12 text-center">
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">
                  Request Submitted!
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Thank you for your interest. Our solutions team will review
                  your request and get back to you within 24 hours.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Response within 24 hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>Custom proposal included</span>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Role *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                    >
                      <option value="">Select your role</option>
                      {companyRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company Size *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">
                    Tools Interested In *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interestedTools.map((tool) => (
                      <label
                        key={tool}
                        className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl cursor-pointer hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        <input
                          type="checkbox"
                          checked={formData.tools.includes(tool)}
                          onChange={() => handleToolToggle(tool)}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
                            formData.tools.includes(tool)
                              ? "bg-brand-primary border-brand-primary"
                              : "border-gray-600"
                          }`}
                        >
                          {formData.tools.includes(tool) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-white text-sm">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Describe Your Use Case *
                  </label>
                  <textarea
                    name="useCase"
                    value={formData.useCase}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200 resize-none"
                    placeholder="Tell us about your specific needs, challenges, and goals..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Current Tools (Optional)
                  </label>
                  <input
                    type="text"
                    name="currentTools"
                    value={formData.currentTools}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                    placeholder="e.g., Slack, Notion, Salesforce, etc."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-2xl text-lg py-6 group"
                >
                  Book Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>

                <p className="text-center text-gray-400 text-sm">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
