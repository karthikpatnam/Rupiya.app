import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Leaf, TrendingUp, CheckCircle, ArrowRight,
  Sprout, Cloud, Droplets, Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const carbonProcess = [
  {
    icon: Sprout,
    title: "Shift to Regenerative Farming",
    description: "Adopt practices like cover cropping, reduced tillage, and organic inputs",
    farmerView: "Farm naturally—no harmful chemicals, healthier soil"
  },
  {
    icon: Droplets,
    title: "Increase Soil Organic Carbon",
    description: "Soil captures and stores atmospheric CO₂ as organic matter",
    farmerView: "Your soil becomes richer, holds more water, needs less fertilizer"
  },
  {
    icon: Cloud,
    title: "Satellite Monitoring & Verification",
    description: "AI-powered monitoring tracks carbon sequestration over time",
    farmerView: "We track everything using satellites—no extra work for you"
  },
  {
    icon: TrendingUp,
    title: "Generate Verified Carbon Credits",
    description: "Each credit represents 1 tonne of CO₂ removed from atmosphere",
    farmerView: "Each credit = ₹800 extra income for you"
  }
];

const benefits = [
  {
    title: "For Farmers",
    points: [
      "₹800 additional income per verified carbon credit",
      "Improved soil health and water retention",
      "Lower input costs over time",
      "Premium prices for quality produce",
      "Expert training and support"
    ]
  },
  {
    title: "For the Planet",
    points: [
      "Remove CO₂ from atmosphere",
      "Restore degraded soils",
      "Increase biodiversity",
      "Reduce agricultural emissions",
      "Combat climate change"
    ]
  }
];

export default function CarbonCredits() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6">
                <Leaf className="w-3 h-3 mr-1" /> Climate-Positive Agriculture
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Carbon Credits
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  Explained Simply
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Earn ₹800 for every carbon credit while making your soil healthier. No complex science—just better farming that pays you more.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg mb-8">
                <p className="text-lg font-semibold text-emerald-900 mb-2">
                  What is a Carbon Credit?
                </p>
                <p className="text-emerald-800">
                  One carbon credit = removing 1 tonne of CO₂ from the atmosphere. When you farm using regenerative practices, your soil captures carbon—and we pay you ₹800 for each verified credit.
                </p>
              </div>

              <Link to={createPageUrl("ForFarmers")}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Start Earning Credits <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
                alt="Healthy soil"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Stat card */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-2xl border-0 w-64">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-emerald-600">₹800</p>
                      <p className="text-sm text-gray-600">Per carbon credit</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Partnership with Carboneg (Europe)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Carbon Credits Work
            </h2>
            <p className="text-xl text-gray-600">
              Technical accuracy meets farmer-friendly simplicity
            </p>
          </div>

          <div className="space-y-16">
            {carbonProcess.map((step, idx) => (
              <div 
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <step.icon className="w-4 h-4" />
                    Step {idx + 1}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Technical explanation */}
                  <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-lg mb-4">
                    <p className="text-sm font-semibold text-gray-500 mb-2">TECHNICAL VIEW</p>
                    <p className="text-gray-700">{step.description}</p>
                  </div>

                  {/* Farmer-friendly explanation */}
                  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                    <p className="text-sm font-semibold text-emerald-600 mb-2">FOR FARMERS</p>
                    <p className="text-emerald-900 font-medium">{step.farmerView}</p>
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl mx-auto lg:mx-0">
                      <step.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 blur-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Split */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600">
              Good for farmers, great for the planet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((section, idx) => (
              <Card key={idx} className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                      {idx === 0 ? <Sprout className="w-6 h-6 text-white" /> : <Leaf className="w-6 h-6 text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {section.points.map((point, pidx) => (
                      <div key={pidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership & Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
                Exclusive Partnership
              </Badge>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Carboneg Europe Partnership
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Our exclusive collaboration with Carboneg ensures every carbon credit is verified to international standards and generates real climate impact.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">5,00,000</p>
                  <p className="text-sm text-gray-700">Hectares Target</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">50,000+</p>
                  <p className="text-sm text-gray-700">Farmers to Onboard</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">3 Years</p>
                  <p className="text-sm text-gray-700">Commitment Period</p>
                </div>
                <div className="bg-emerald-50 p-6 rounded-xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">₹800</p>
                  <p className="text-sm text-gray-700">Per Credit to Farmer</p>
                </div>
              </div>

              <Link to={createPageUrl("ForFarmers")}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Join the Program <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800"
                alt="Partnership"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Complete Training & Support
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            We provide comprehensive training on regenerative agriculture practices, monitoring, and verification to ensure your success
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={createPageUrl("ForFarmers")}>
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Get Trained <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("ForFPOs")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                FPO Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
