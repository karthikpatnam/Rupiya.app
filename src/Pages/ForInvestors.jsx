import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, CheckCircle, ArrowRight, Target,
  Users, Leaf, BarChart, Globe
} from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Massive Market Opportunity",
    description: "India's agricultural sector is worth $400B+ with growing demand for sustainable farming",
    stats: ["₹400B+ market", "160M+ farmers", "Growing ESG focus"]
  },
  {
    icon: Leaf,
    title: "Climate-Positive Impact",
    description: "Carbon credit generation + regenerative agriculture addressing critical climate goals",
    stats: ["5,00,000 hectares", "50,000+ farmers", "Verified carbon credits"]
  },
  {
    icon: Users,
    title: "Strong Unit Economics",
    description: "Multiple revenue streams: inputs, advisory, carbon credits, and supply chain",
    stats: ["4 revenue streams", "B2B + B2C model", "Scalable platform"]
  },
  {
    icon: Globe,
    title: "Strategic Partnerships",
    description: "Exclusive collaboration with Carboneg Europe for international carbon markets",
    stats: ["Carboneg partnership", "FPO network", "Institutional buyers"]
  }
];

const metrics = [
  { label: "Target Farmers", value: "50,000+", change: "+25% YoY" },
  { label: "Target Hectares", value: "5,00,000", change: "3 year plan" },
  { label: "Carbon Credits/Year", value: "2M+", change: "At scale" },
  { label: "Revenue Streams", value: "4", change: "Diversified" }
];

const traction = [
  { milestone: "Platform Development", status: "Completed", date: "2024 Q1" },
  { milestone: "Carboneg Partnership", status: "Signed", date: "2024 Q2" },
  { milestone: "Pilot Farmers Onboarding", status: "In Progress", date: "2024 Q3" },
  { milestone: "First Carbon Credits", status: "Expected", date: "2025 Q1" },
  { milestone: "Scale to 10,000 Farmers", status: "Planned", date: "2025 Q4" },
  { milestone: "Pan-India Expansion", status: "Roadmap", date: "2026+" }
];

export default function ForInvestors() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-6">
                <TrendingUp className="w-3 h-3 mr-1" /> For Investors
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Invest in India's
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  AgriTech Revolution
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the transformation of Indian agriculture through technology, sustainability, and financial inclusion—addressing a $400B+ market with strong ESG alignment.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Massive addressable market with proven unit economics",
                  "Climate-positive impact with verified carbon credits",
                  "Strategic partnerships and growing traction",
                  "Multiple revenue streams and scalable model"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Request Investor Deck <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800"
                alt="Growth"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Strong fundamentals driving sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6">
                    <highlight.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {highlight.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {highlight.stats.map((stat, sidx) => (
                      <Badge key={sidx} variant="outline" className="bg-orange-50 border-orange-200 text-orange-700">
                        {stat}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Target Metrics at Scale
            </h2>
            <p className="text-xl text-gray-600">
              3-year growth trajectory
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</p>
                  <p className="text-gray-900 font-medium mb-1">{metric.label}</p>
                  <Badge variant="outline" className="bg-orange-50 border-orange-200 text-orange-700 text-xs">
                    {metric.change}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Traction & Roadmap
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones achieved and planned
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {traction.map((item, idx) => (
                <Card key={idx} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          item.status === "Completed" ? "bg-green-100" :
                          item.status === "Signed" ? "bg-blue-100" :
                          item.status === "In Progress" ? "bg-orange-100" :
                          "bg-gray-100"
                        }`}>
                          {item.status === "Completed" || item.status === "Signed" ? (
                            <CheckCircle className={`w-6 h-6 ${
                              item.status === "Completed" ? "text-green-600" : "text-blue-600"
                            }`} />
                          ) : (
                            <div className={`w-3 h-3 rounded-full ${
                              item.status === "In Progress" ? "bg-orange-500" : "bg-gray-400"
                            }`} />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{item.milestone}</h3>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <Badge className={
                        item.status === "Completed" ? "bg-green-100 text-green-700" :
                        item.status === "Signed" ? "bg-blue-100 text-blue-700" :
                        item.status === "In Progress" ? "bg-orange-100 text-orange-700" :
                        "bg-gray-100 text-gray-700"
                      }>
                        {item.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESG Impact */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Strong ESG Alignment
            </h2>
            <p className="text-xl text-orange-100">
              Impact-driven business model addressing UN SDGs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Environmental",
                points: [
                  "Carbon sequestration",
                  "Soil health restoration",
                  "Reduced chemical use",
                  "Biodiversity increase"
                ]
              },
              {
                title: "Social",
                points: [
                  "50,000+ farmer livelihoods",
                  "₹800 extra per credit",
                  "Financial inclusion",
                  "Knowledge transfer"
                ]
              },
              {
                title: "Governance",
                points: [
                  "Verified carbon credits",
                  "Transparent platform",
                  "International standards",
                  "Stakeholder engagement"
                ]
              }
            ].map((pillar, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                  <div className="space-y-2">
                    {pillar.points.map((point, pidx) => (
                      <div key={pidx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-200 flex-shrink-0 mt-0.5" />
                        <span className="text-orange-50 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Us in Transforming Indian Agriculture
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how you can be part of this climate-positive agricultural revolution
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Schedule Investor Call <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-700 hover:bg-orange-50">
              Download Pitch Deck
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
