import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>

        {/* Floating elements */}
        <div className="absolute top-10 right-1/4 w-4 h-4 bg-white/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-white/40 rounded-full animate-bounce delay-1100"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Free forever for individuals</span>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Get started with Just Better
            </h2>

            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who've transformed their
              productivity. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-brand-primary hover:bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl text-lg px-8 py-6 group font-semibold"
              >
                Try Now - It's Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm rounded-2xl text-lg px-8 py-6 group"
              >
                <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Request Business Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Setup in under 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <span>No technical knowledge required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-600"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Secondary CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For Individuals */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                For Individuals
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Start with our free forever plan. Perfect for personal
                productivity, studying, and freelance work.
              </p>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li>• Up to 3 tools included</li>
                <li>• 1GB storage per tool</li>
                <li>• Community support</li>
                <li>• Basic AI features</li>
              </ul>
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-white/10 border border-white/30 hover:border-white/50 rounded-2xl"
              >
                Get Started Free
              </Button>
            </div>

            {/* For Teams */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">For Teams</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Scale your team's productivity with advanced features, unlimited
                storage, and priority support.
              </p>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li>• All tools included</li>
                <li>• Unlimited storage</li>
                <li>• Advanced AI features</li>
                <li>• Priority support</li>
              </ul>
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-white/10 border border-white/30 hover:border-white/50 rounded-2xl"
              >
                Start 14-Day Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
