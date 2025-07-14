import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  Lock,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote:
      "Just Better AI completely transformed how our team collaborates. We've seen a 40% increase in productivity since switching from our old tools.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "TechFlow Inc",
    avatar: "SC",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The seamless integration between all Just Better tools is incredible. Our entire workflow is now automated, and we've cut our admin time by 60%.",
    author: "Marcus Rodriguez",
    role: "Startup Founder",
    company: "InnovateLab",
    avatar: "MR",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As a freelancer, Just Better Invoice has been a game-changer. I get paid 3x faster with their automated follow-ups.",
    author: "Elena Kowalski",
    role: "Designer",
    company: "Freelancer",
    avatar: "EK",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Just Better Study helped me ace my exams with AI-powered scheduling. The smart reminders and progress tracking are phenomenal.",
    author: "David Park",
    role: "Medical Student",
    company: "Johns Hopkins",
    avatar: "DP",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The insights from Just Better Analytics have helped us identify new revenue streams worth $50K annually. ROI was immediate.",
    author: "Lisa Thompson",
    role: "Data Analyst",
    company: "GrowthCorp",
    avatar: "LT",
    rating: 5,
  },
];

const partners = [
  { name: "TechFlow", logo: "TF" },
  { name: "InnovateLab", logo: "IL" },
  { name: "GrowthCorp", logo: "GC" },
  { name: "NextGen", logo: "NG" },
  { name: "FutureStack", logo: "FS" },
  { name: "CloudWave", logo: "CW" },
];

const securityFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "GDPR & CCPA compliant",
  },
  {
    icon: Globe,
    title: "Global Privacy",
    description: "End-to-end encryption",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join the growing community of professionals, students, and teams who
            have transformed their productivity with Just Better.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 border border-border/50 shadow-xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-full transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              {/* Quote */}
              <div className="text-center mb-8">
                <div className="text-6xl text-brand-primary/20 font-serif mb-4">
                  "
                </div>
                <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ),
                )}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].role} at{" "}
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/5"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-brand-primary/20 hover:border-brand-primary/40 hover:bg-brand-primary/5"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-brand-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <p className="text-center text-muted-foreground mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-2xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-300 cursor-pointer"
              >
                <span className="font-bold text-lg">{partner.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Trust Badges */}
        <div className="bg-gradient-to-r from-surface-elevated to-white rounded-3xl p-8 border border-border/50">
          <div className="grid md:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 text-center md:text-left"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
