import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Sprout, TrendingUp, Users, CheckCircle, ArrowRight,
  Wheat, Droplets, Shield, CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const crops = [
  { name: "Wheat", icon: "🌾" },
  { name: "Rice", icon: "🌾" },
  { name: "Cotton", icon: "🌸" },
  { name: "Sugarcane", icon: "🎋" },
  { name: "Vegetables", icon: "🥬" },
  { name: "Pulses", icon: "🫘" }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Income",
    description: "15-20% yield increase + ₹800 per carbon credit + premium pricing",
    highlight: "₹800/credit"
  },
  {
    icon: Droplets,
    title: "Lower Input Costs",
    description: "Reduce fertilizer and pesticide costs by 30% over 3 years",
    highlight: "30% savings"
  },
  {
    icon: Sprout,
    title: "Better Soil Health",
    description: "Improved water retention, organic carbon, and long-term fertility",
    highlight: "Healthier soil"
  },
  {
    icon: Shield,
    title: "Risk Protection",
    description: "Parametric insurance covering climate risks and crop damage",
    highlight: "Full coverage"
  }
];

const steps = [
  {
    step: "1",
    title: "Register Your Farm",
    description: "Sign up on rupiya.app with your land details and Aadhar"
  },
  {
    step: "2",
    title: "Get Satellite Soil Test",
    description: "We analyze your soil from space—no physical samples needed"
  },
  {
    step: "3",
    title: "Receive Training",
    description: "Learn regenerative farming practices from our experts"
  },
  {
    step: "4",
    title: "Get Inputs & Advisory",
    description: "Receive residue-free inputs and daily recommendations"
  },
  {
    step: "5",
    title: "Farm & Monitor",
    description: "We track your crop health via satellite throughout the season"
  },
  {
    step: "6",
    title: "Harvest & Sell",
    description: "We buy directly from your farm gate at premium prices"
  },
  {
    step: "7",
    title: "Earn Carbon Credits",
    description: "Get ₹800 for each verified carbon credit generated"
  }
];

export default function ForFarmers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6">
                <Sprout className="w-3 h-3 mr-1" /> For Farmers
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Farm Better.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  Earn More.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Increase your yield by 15-20%, reduce costs by 30%, and earn ₹800 extra for every carbon credit—all while making your soil healthier.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Complete support from soil testing to final sale",
                  "₹800 additional income per carbon credit",
                  "Free training on residue-free farming",
                  "Parametric insurance for climate risks"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Register Now <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=800"
                alt="Indian farmer"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Supported Crops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Crops We Support
            </h2>
            <p className="text-lg text-gray-600">
              Starting with major crops, expanding to more varieties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {crops.map((crop, idx) => (
              <Card key={idx} className="border-2 hover:border-emerald-500 transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{crop.icon}</div>
                  <p className="font-semibold text-gray-900">{crop.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Farmers Choose rupiya.app
            </h2>
            <p className="text-xl text-gray-600">
              Real benefits that increase your income and reduce your risks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <Badge className="bg-emerald-100 text-emerald-700 mb-2">
                        {benefit.highlight}
                      </Badge>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Simple 7-step journey from registration to earning carbon credits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, idx) => (
              <Card key={idx} className="relative border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Income Calculator */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Calculate Your Potential Income
            </h2>
            <p className="text-xl text-emerald-100">
              See how much more you can earn with rupiya.app
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <p className="text-emerald-200 mb-2">Traditional Farming</p>
                  <p className="text-4xl font-bold">₹40,000</p>
                  <p className="text-sm text-emerald-200 mt-1">per hectare</p>
                </div>
                <div className="flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-emerald-300" />
                </div>
                <div className="text-center">
                  <p className="text-emerald-200 mb-2">With rupiya.app</p>
                  <p className="text-4xl font-bold">₹55,000+</p>
                  <p className="text-sm text-emerald-200 mt-1">per hectare</p>
                </div>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-center text-emerald-100 mb-4">Breakdown:</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">15-20% yield increase</span>
                    <span className="font-semibold">+₹6,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Premium pricing</span>
                    <span className="font-semibold">+₹4,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Carbon credits (approx 6 per ha)</span>
                    <span className="font-semibold">+₹4,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Reduced input costs</span>
                    <span className="font-semibold">+₹3,000</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Increase Your Farm Income?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 50,000+ farmers already transforming their farms with rupiya.app
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Register Your Farm <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
