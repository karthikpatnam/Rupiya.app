import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, CheckCircle, ArrowRight, ShieldCheck,
  Eye, Award, Truck, BarChart
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Consistency",
    description: "Residue-free produce meeting international standards",
    points: [
      "Zero chemical residue guarantee",
      "Consistent quality parameters",
      "Regular quality audits",
      "Third-party certifications"
    ]
  },
  {
    icon: Eye,
    title: "Complete Traceability",
    description: "Farm-to-fork tracking using satellite technology",
    points: [
      "Satellite-based crop monitoring",
      "Digital farm records",
      "Supply chain transparency",
      "Batch-level traceability"
    ]
  },
  {
    icon: Award,
    title: "Certifications & Standards",
    description: "Multiple certifications for export and domestic markets",
    points: [
      "Residue-free certification",
      "Carbon credit verification",
      "Organic standards compliance",
      "Export-ready documentation"
    ]
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Consistent supply with farm gate to warehouse logistics",
    points: [
      "Guaranteed volumes",
      "Scheduled deliveries",
      "Cold chain infrastructure",
      "Quality-sorted grading"
    ]
  }
];

const crops = [
  { name: "Wheat", volume: "10,000+ MT", specs: "Protein >12%, Moisture <12%" },
  { name: "Rice", volume: "15,000+ MT", specs: "Milling 68-70%, Broken <5%" },
  { name: "Cotton", volume: "5,000+ MT", specs: "Fiber 28-30mm, Strength 28-30 g/tex" },
  { name: "Pulses", volume: "3,000+ MT", specs: "Protein >22%, Foreign matter <1%" },
  { name: "Vegetables", volume: "On demand", specs: "Grade A, Residue-free certified" },
  { name: "Sugarcane", volume: "50,000+ MT", specs: "Sucrose >10%, Purity >85%" }
];

const process = [
  {
    step: "1",
    title: "Requirement Discussion",
    description: "Share your crop requirements, volumes, and quality parameters"
  },
  {
    step: "2",
    title: "Contract Agreement",
    description: "Finalize pricing, delivery schedules, and quality standards"
  },
  {
    step: "3",
    title: "Farmer Onboarding",
    description: "We onboard farmers and begin production as per your specs"
  },
  {
    step: "4",
    title: "Crop Monitoring",
    description: "Real-time updates on crop health and expected harvest"
  },
  {
    step: "5",
    title: "Quality Assurance",
    description: "Pre-harvest and post-harvest quality testing"
  },
  {
    step: "6",
    title: "Delivery & Payment",
    description: "Farm gate pickup or warehouse delivery with documentation"
  }
];

export default function ForBuyers() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6">
                <Building2 className="w-3 h-3 mr-1" /> For Institutional Buyers
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Traceable, Quality,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Residue-Free Produce
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Source certified residue-free agricultural produce with complete traceability, consistent quality, and reliable supply—ideal for ITC, Reliance, Mother Dairy, and other institutional buyers.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Zero chemical residue guarantee",
                  "Satellite-based traceability",
                  "Multiple quality certifications",
                  "Consistent supply volumes"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Request Quotation <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800"
                alt="Quality produce"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Institutional Buyers Trust Us
            </h2>
            <p className="text-xl text-gray-600">
              Quality, traceability, and reliability at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>

                  <div className="space-y-2">
                    {benefit.points.map((point, pidx) => (
                      <div key={pidx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Crop Portfolio */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Crop Portfolio & Volumes
            </h2>
            <p className="text-xl text-gray-600">
              Current and projected supply capacity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crops.map((crop, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{crop.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Volume:</span>
                      <span className="font-semibold text-purple-600">{crop.volume}</span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">Specifications:</p>
                      <p className="text-sm text-gray-700 mt-1">{crop.specs}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procurement Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple 6-step process from inquiry to delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
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

      {/* Partnerships */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-xl text-purple-100">
              Building partnerships with India's top agricultural buyers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { label: "Quality Batches Delivered", value: "0+" },
              { label: "Institutional Partners", value: "Growing" },
              { label: "Traceability Score", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-purple-100">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-purple-100 mb-4">
              Currently in discussions with ITC, Reliance, Mother Dairy, and other major buyers
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Source Residue-Free Produce?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and build a reliable supply partnership
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Schedule Meeting <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
