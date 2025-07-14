import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-subtle via-white to-accent/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-brand-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Everything you need,{" "}
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                Just Better
              </span>
              .
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Unified tools for life, work, and learning—powered by AI.
              Transform your productivity with our seamless ecosystem of
              intelligent applications.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl text-lg px-8 py-6 group"
              >
                Explore Tools
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-brand-primary/20 text-brand-primary hover:bg-brand-primary/5 hover:border-brand-primary/40 rounded-2xl text-lg px-8 py-6 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                See Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Free forever for individuals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <span>No credit card required</span>
              </div>
            </div>
          </div>

          {/* Right side - Animated Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-surface-elevated rounded-3xl shadow-2xl overflow-hidden border border-border/50">
              {/* Mock browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-surface-subtle border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-4 flex-1 bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground">
                  justbetter.app
                </div>
              </div>

              {/* Mock app interface */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-lg"></div>
                    <div>
                      <div className="w-20 h-3 bg-muted rounded animate-pulse"></div>
                      <div className="w-16 h-2 bg-muted/50 rounded mt-1 animate-pulse delay-100"></div>
                    </div>
                  </div>
                  <div className="w-6 h-6 bg-muted rounded animate-pulse delay-200"></div>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`bg-white/60 rounded-2xl p-4 border border-border/30 hover:shadow-lg transition-all duration-300 animate-fade-in ${
                        i === 1
                          ? "delay-200"
                          : i === 2
                            ? "delay-400"
                            : i === 3
                              ? "delay-600"
                              : "delay-800"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl mb-3 ${
                          i === 1
                            ? "bg-gradient-to-r from-purple-400 to-purple-600"
                            : i === 2
                              ? "bg-gradient-to-r from-blue-400 to-blue-600"
                              : i === 3
                                ? "bg-gradient-to-r from-green-400 to-green-600"
                                : "bg-gradient-to-r from-orange-400 to-orange-600"
                        }`}
                      ></div>
                      <div className="w-full h-3 bg-muted rounded animate-pulse"></div>
                      <div className="w-3/4 h-2 bg-muted/50 rounded mt-2 animate-pulse delay-75"></div>
                    </div>
                  ))}
                </div>

                {/* Bottom action */}
                <div className="flex items-center justify-between pt-4">
                  <div className="w-32 h-8 bg-gradient-to-r from-brand-primary/20 to-brand-secondary/20 rounded-xl animate-pulse"></div>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-muted rounded animate-pulse"></div>
                    <div className="w-6 h-6 bg-muted rounded animate-pulse delay-100"></div>
                  </div>
                </div>
              </div>

              {/* Floating connection indicators */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-ping delay-1000"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-brand-accent/20 rounded-full animate-bounce delay-500"></div>
            <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-brand-primary/20 rounded-full animate-bounce delay-1500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
