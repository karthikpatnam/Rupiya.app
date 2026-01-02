import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Sprout, Leaf, TrendingUp, Users, Building2, 
  ArrowRight, CheckCircle, Droplets, Cloud, 
  ShieldCheck, CreditCard, LineChart, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Cloud,
    title: "Satellite Soil Testing",
    description: "AI-powered soil analysis from space for precise farming decisions"
  },
  {
    icon: LineChart,
    title: "Crop Monitoring",
    description: "Real-time satellite tracking and complete traceability of your crops"
  },
  {
    icon: Users,
    title: "Agronomical Advisory",
    description: "Expert guidance through software and on-ground specialists"
  },
  {
    icon: Droplets,
    title: "35 Residue-Free Inputs",
    description: "Complete range of certified agricultural inputs for healthy farming"
  },
  {
    icon: ShieldCheck,
    title: "Parametric Insurance",
    description: "Coverage for rain, humidity, temperature, and wildlife damage"
  },
  {
    icon: CreditCard,
    title: "Farm Credit Support",
    description: "Easy access to credit and financial assistance for farmers"
  },
  {
    icon: Truck,
    title: "Buy-Back Guarantee",
    description: "Direct purchase from farm gate, eliminating middlemen"
  }
];

const audiences = [
  {
    title: "For Farmers",
    description: "Increase yield, reduce costs, earn ₹800 per carbon credit",
    icon: Users,
    href: createPageUrl("ForFarmers"),
    color: "from-emerald-500 to-green-600",
    benefits: ["Higher income", "Quality inputs", "Expert support"]
  },
  {
    title: "For FPOs",
    description: "Empower your organization with training and revenue access",
    icon: Building2,
    href: createPageUrl("ForFPOs"),
    color: "from-blue-500 to-cyan-600",
    benefits: ["Training programs", "Carbon revenue", "Supply chain"]
  },
  {
    title: "For Buyers",
    description: "Quality consistency, traceability, and certified procurement",
    icon: Building2,
    href: createPageUrl("ForBuyers"),
    color: "from-purple-500 to-pink-600",
    benefits: ["Traceability", "Certifications", "Quality control"]
  },
  {
    title: "For Investors",
    description: "Join India's climate-positive agricultural transformation",
    icon: TrendingUp,
    href: createPageUrl("ForInvestors"),
    color: "from-orange-500 to-red-600",
    benefits: ["Impact metrics", "Growth potential", "ESG alignment"]
  }
];

const stats = [
  { value: "5,00,000", label: "Hectares Target", suffix: "ha" },
  { value: "50,000+", label: "Farmers to Onboard", suffix: "" },
  { value: "₹800", label: "Per Carbon Credit", suffix: "" },
  { value: "3", label: "Year Commitment", suffix: "yrs" }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 -right-20 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
                🌱 India's Climate-Positive Agriculture Platform
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building India's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                  Agricultural Future
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                From residue-free farming to carbon credit generation and complete financial inclusivity—empowering 50,000+ farmers across 5,00,000 hectares.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl("ForFarmers")}>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200">
                    Start Farming <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to={createPageUrl("CarbonCredits")}>
                  <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    Learn About Carbon Credits
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
                  alt="Indian farmer in field"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-semibold mb-2">Partnership with Carboneg Europe</p>
                  <p className="text-sm text-white/90">Exclusive collaboration for carbon credit generation</p>
                </div>
              </div>
              
              {/* Floating card */}
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-0 w-64">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-emerald-600">₹800</p>
                      <p className="text-xs text-gray-600">Extra income per credit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-4">
              Complete Agricultural Ecosystem
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              7 Integrated Services for Farmers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From satellite technology to farm gate buy-back—everything a farmer needs in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("ResidueFree")}>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                Explore All Services <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Carbon Credits Highlight */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white hover:bg-white/20 border-white/30 mb-6">
                <Leaf className="w-3 h-3 mr-1" /> Carbon Credit Generation
              </Badge>
              
              <h2 className="text-4xl font-bold mb-6">
                Earn ₹800 for Every Carbon Credit Through Regenerative Agriculture
              </h2>
              
              <p className="text-lg text-emerald-100 mb-8 leading-relaxed">
                Transform your farming practice into a climate solution. Our partnership with Carboneg Europe enables farmers to generate verified carbon credits while increasing soil health and crop yields.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Increase soil organic carbon naturally",
                  "Get verified carbon credits from your farm",
                  "Receive ₹800 additional income per credit",
                  "5,00,000 hectares across 50,000+ farmers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-50">{item}</span>
                  </div>
                ))}
              </div>

              <Link to={createPageUrl("CarbonCredits")}>
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                  Learn How It Works <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800"
                  alt="Regenerative agriculture"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-emerald-600">3 Years</p>
                    <p className="text-sm text-gray-600">Commitment Period</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Exclusive partnership with Carboneg (Europe) for carbon credit verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Cards */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions for Every Stakeholder
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a farmer, FPO, buyer, or investor—we have a solution designed for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, idx) => (
              <Link key={idx} to={audience.href}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden h-full cursor-pointer">
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${audience.color}`} />
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <audience.icon className="w-7 h-7 text-white" />
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {audience.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {audience.description}
                      </p>

                      <div className="space-y-2">
                        {audience.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Inclusivity Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
              Coming Soon
            </Badge>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Rural Financial Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Beyond farming—rupiya.app is building a comprehensive financial platform for rural India with recharge, digital gold, insurance, credit, and more.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Recharge & Bills", "Digital Gold", "Travel Booking", "Insurance", "Credit Access"].map((service, idx) => (
                <Badge key={idx} variant="outline" className="bg-white border-blue-200 text-blue-700 px-4 py-2">
                  {service}
                </Badge>
              ))}
            </div>

            <Button size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
              Stay Updated
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Indian Agriculture?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 50,000+ farmers in building a climate-positive, financially inclusive future
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
