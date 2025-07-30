"use client";
import { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/Card";
import {
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Rocket,
  Heart,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWaitlistSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // For waitlist - just show success message, don't redirect
    setIsSubmitted(true);
    console.log("Waitlist signup:", { name, email });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
                <Rocket className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">
                  Coming Soon
                </span>
              </div>
              <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">
                  1,200+ on waitlist
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
              AI-Powered Marketing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                That Actually Works
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-600">
              Create high-converting landing pages, email campaigns, and
              marketing funnels in minutes. No technical skills required - just
              describe your business and let our AI do the rest.
            </p>

            {/* Waitlist Form */}
            <div id="waitlist-form" className="max-w-md mx-auto mb-12">
              {!isSubmitted ? (
                <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-center flex items-center justify-center space-x-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="text-gray-900">Join the Waitlist</span>
                    </CardTitle>
                    <p className="text-sm text-center text-gray-600">
                      Be the first to experience AI-powered marketing automation
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleWaitlistSignup} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your name"
                          required
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                          className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-blue-500"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full text-white font-semibold py-3"
                        style={{ backgroundColor: "#2C2E66" }}
                      >
                        Join the Waitlist
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                    <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Free forever plan</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Early access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-green-100">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">
                        You&apos;re on the list! 🎉
                      </h3>
                      <p className="text-sm text-gray-600">
                        Thank you for joining our waitlist. We&apos;ll notify
                        you as soon as Aqwaya is ready for early access.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Beta users report 300% increase in conversions</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>$50K+ in sales generated during testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span>Featured in TechCrunch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
