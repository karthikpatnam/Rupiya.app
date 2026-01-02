import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Satellite, Eye, Users, Droplets, Shield, 
  CreditCard, Truck, ArrowRight, CheckCircle,
  Sprout, LineChart, Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Satellite,
    title: "Satellite-Based Soil Testing",
    description: "AI-powered analysis of soil composition from space",
    details: [
      "NPK levels and micronutrient analysis",
      "Soil moisture and pH mapping",
      "Historical soil health trends",
      "Precision fertilizer recommendations"
    ],
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800"
  },
  {
    icon: Eye,
    title: "AI Crop Monitoring & Traceability",
    description: "Real-time satellite tracking of your crops",
    details: [
      "Weekly crop health assessments",
      "Pest and disease early detection",
      "Growth stage monitoring",
      "Complete supply chain traceability"
    ],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800"
  },
  {
    icon: Users,
    title: "Agronomical Advisory",
    description: "Expert guidance through software + on-ground specialists",
    details: [
      "Mobile app for daily recommendations",
      "Field visits by agronomy experts",
      "Crop-specific best practices",
      "24/7 helpline support"
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
  },
  {
    icon: Droplets,
    title: "35 Residue-Free Agriculture Inputs",
    description: "Complete range of certified, chemical-free inputs",
    details: [
      "Organic fertilizers and bio-stimulants",
      "Natural pest control solutions",
      "Soil conditioners and amendments",
      "Certified residue-free guarantee"
    ],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800"
  },
  {
    icon: Shield,
    title: "Parametric Insurance",
    description: "Comprehensive climate risk coverage",
    details: [
      "Excess rainfall protection",
      "High/low humidity coverage",
      "Temperature shock insurance",
      "Wildlife damage compensation"
    ],
    image: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800"
  },
  {
    icon: CreditCard,
    title: "Farm Credit Support",
    description: "Easy access to financial assistance",
    details: [
      "Low-interest agricultural loans",
      "Input credit facilities",
      "Flexible repayment options",
      "Digital approval process"
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800"
  },
  {
    icon: Truck,
    title: "Buy-Back from Farm Gate",
    description: "Direct procurement eliminating middlemen",
    details: [
      "Guaranteed minimum support price",
      "Quality-based premium pricing",
      "Farm gate collection service",
      "Direct payment to farmers"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800"
  }
];

const process = [
  { step: "1", title: "Registration", description: "Sign up and add your farm details" },
  { step: "2", title: "Soil Testing", description: "Satellite analysis of your soil" },
  { step: "3", title: "Get Inputs", description: "Receive residue-free inputs" },
  { step: "4", title: "Advisory", description: "Follow expert recommendations" },
  { step: "5", title: "Monitoring", description: "Track crop growth via satellite" },
  { step: "6", title: "Harvest", description: "We buy your produce directly" }
];

export default function ResidueFree() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 mb-6">
              <Sprout className="w-3 h-3 mr-1" /> Complete Agricultural Solution
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Residue-Free Farming
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From satellite technology to farm gate buy-back—7 integrated services that transform traditional farming into sustainable, profitable agriculture
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to={createPageUrl("ForFarmers")}>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Get Started <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                Watch Demo Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              7 Services. 1 Platform. Complete Solution.
            </h2>
            <p className="text-xl text-gray-600">
              Everything a farmer needs from soil testing to final sale
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <service.icon className="w-4 h-4" />
                    Service {idx + 1}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.details.map((detail, didx) => (
                      <div key={didx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple 6-step process from registration to harvest
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, idx) => (
              <Card key={idx} className="relative border-0 shadow-lg hover:shadow-xl transition-all">
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
                  
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6">
                      <ArrowRight className="w-6 h-6 text-emerald-400" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Residue-Free Farming?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Higher Yields",
                    description: "15-20% increase in crop productivity with optimized inputs"
                  },
                  {
                    title: "Lower Costs",
                    description: "Reduce input costs by 30% through precision agriculture"
                  },
                  {
                    title: "Better Soil Health",
                    description: "Improve soil organic carbon and long-term sustainability"
                  },
                  {
                    title: "Premium Prices",
                    description: "Get quality-based pricing and guaranteed buy-back"
                  },
                  {
                    title: "Risk Protection",
                    description: "Comprehensive insurance against climate risks"
                  },
                  {
                    title: "Expert Support",
                    description: "24/7 access to agronomists and field specialists"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800"
                alt="Healthy crops"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of farmers already benefiting from residue-free farming
          </p>
          <Link to={createPageUrl("ForFarmers")}>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Start Your Journey <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
