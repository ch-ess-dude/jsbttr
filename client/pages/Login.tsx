import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Chrome,
  Apple,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { activeTab, formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 mb-8 group hover:scale-105 transition-transform duration-200"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">JB</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Just Better
            </span>
          </Link>

          {/* Tab Switcher */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 mb-8 border border-gray-700/50">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setActiveTab("login")}
                className={`py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "login"
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === "signup"
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {activeTab === "login"
                ? "Welcome back to productivity"
                : "Let's get you started"}
            </h1>
            <p className="text-gray-400">
              {activeTab === "login"
                ? "Sign in to continue your journey with Just Better"
                : "Create your account and transform your workflow"}
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <Button
              variant="outline"
              className="w-full bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 rounded-xl py-6 group"
            >
              <Chrome className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Continue with Google
            </Button>
            <Button
              variant="outline"
              className="w-full bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 rounded-xl py-6 group"
            >
              <Apple className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
              Continue with Apple
            </Button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700/50"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700/50"></div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-12 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {activeTab === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-colors duration-200"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
            )}

            {activeTab === "login" && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-800/50 border border-gray-700/50 rounded focus:ring-brand-primary/50"
                  />
                  <span className="text-sm text-gray-400">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-brand-primary hover:text-brand-secondary transition-colors duration-200"
                >
                  Forgot password?
                </a>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white rounded-xl py-6 text-lg font-medium group hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300"
            >
              {activeTab === "login" ? "Sign In" : "Create Account"}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </form>

          {/* Terms & Privacy */}
          {activeTab === "signup" && (
            <p className="text-center text-xs text-gray-400 mt-6">
              By creating an account, you agree to our{" "}
              <a
                href="#"
                className="text-brand-primary hover:text-brand-secondary transition-colors duration-200"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-brand-primary hover:text-brand-secondary transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </p>
          )}

          {/* Switch Mode */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              {activeTab === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() =>
                  setActiveTab(activeTab === "login" ? "signup" : "login")
                }
                className="text-brand-primary hover:text-brand-secondary transition-colors duration-200 font-medium"
              >
                {activeTab === "login" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,_rgba(120,119,198,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>

        <div className="relative z-10 text-center max-w-md">
          {/* Animated AI Elements */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
              <Sparkles className="w-16 h-16 text-white" />
            </div>

            {/* Floating particles */}
            <div className="absolute -top-4 -right-4 w-4 h-4 bg-brand-primary/40 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-secondary/40 rounded-full animate-ping delay-700"></div>
            <div className="absolute top-1/2 -right-8 w-3 h-3 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">
            {activeTab === "login"
              ? "Welcome Back!"
              : "Join the Productivity Revolution"}
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed">
            {activeTab === "login"
              ? "Your AI-powered workspace is waiting. Continue where you left off and boost your productivity."
              : "Join thousands of professionals who've transformed their workflow with AI-powered tools."}
          </p>

          {/* Features List */}
          <div className="space-y-3 text-left">
            {[
              "AI-powered automation",
              "Seamless team collaboration",
              "Advanced analytics & insights",
              "Enterprise-grade security",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-brand-primary/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-brand-secondary/10 rounded-full"></div>
      </div>
    </div>
  );
}
