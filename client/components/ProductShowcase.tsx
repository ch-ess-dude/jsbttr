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
} from "lucide-react";

const products = [
  {
    name: "Just Better AI",
    description: "Smart workspace for docs, tasks & AI tools",
    target: "Individuals & Teams",
    icon: Brain,
    gradient: "from-purple-500 to-purple-700",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    name: "Just Better Study",
    description: "AI-powered planner for students",
    target: "Students & Exam Takers",
    icon: BookOpen,
    gradient: "from-blue-500 to-blue-700",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    name: "Just Better Business",
    description: "Replace Slack + GDocs for teams",
    target: "Startups & SMEs",
    icon: Users,
    gradient: "from-green-500 to-green-700",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    name: "Just Better Feedback",
    description: "Collect user feedback with AI insights",
    target: "Product Teams",
    icon: MessageSquare,
    gradient: "from-orange-500 to-orange-700",
    bgGradient: "from-orange-50 to-orange-100",
  },
  {
    name: "Just Better Flow",
    description: "No-code AI workflow builder",
    target: "Solopreneurs & Ops",
    icon: Zap,
    gradient: "from-yellow-500 to-yellow-700",
    bgGradient: "from-yellow-50 to-yellow-100",
  },
  {
    name: "Just Better Create",
    description: "AI studio for content, banners & videos",
    target: "Creators & Agencies",
    icon: Video,
    gradient: "from-pink-500 to-pink-700",
    bgGradient: "from-pink-50 to-pink-100",
  },
  {
    name: "Just Better Insight",
    description: "Unified reporting & dashboard",
    target: "Analysts & Managers",
    icon: BarChart3,
    gradient: "from-indigo-500 to-indigo-700",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
  {
    name: "Just Better Hire",
    description: "Smart hiring with AI scoring",
    target: "Recruiters & Founders",
    icon: UserCheck,
    gradient: "from-teal-500 to-teal-700",
    bgGradient: "from-teal-50 to-teal-100",
  },
  {
    name: "Just Better Invoice",
    description: "Billing & follow-ups for freelancers",
    target: "Freelancers",
    icon: Receipt,
    gradient: "from-red-500 to-red-700",
    bgGradient: "from-red-50 to-red-100",
  },
  {
    name: "Just Better Build",
    description: "Website/app builder using prompts",
    target: "Indie Hackers",
    icon: Code,
    gradient: "from-violet-500 to-violet-700",
    bgGradient: "from-violet-50 to-violet-100",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Product Suite
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From productivity to creativity, our AI-powered tools cover every
            aspect of your digital workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.name}
                className="group relative bg-white rounded-3xl p-6 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 hover:-translate-y-2 cursor-pointer animate-slide-up"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 group-hover:text-white/90 transition-colors duration-300">
                    {product.description}
                  </p>

                  <p className="text-xs text-muted-foreground/70 mb-4 group-hover:text-white/70 transition-colors duration-300">
                    {product.target}
                  </p>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between text-brand-primary hover:text-white hover:bg-white/20 border-0 group-hover:bg-white/10 transition-all duration-300 rounded-2xl"
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>

                {/* Floating accent */}
                <div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/40 rounded-2xl"
          >
            Request a Custom Solution
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
