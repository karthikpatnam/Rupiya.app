import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, Users, TrendingUp, BookOpen, 
  CheckCircle, ArrowRight, Truck, CreditCard
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Training Programs",
    description: "Train your members on regenerative agriculture and carbon credit generation",
    details: [
      "On-ground training sessions",
      "Digital learning modules",
      "Field demonstration plots",
      "Ongoing expert support"
    ]
  },
  {
    icon: TrendingUp,
    title: "Carbon Credit Revenue Access",
    description: "Generate additional income stream for your organization and members",
    details: [
      "₹800 per carbon credit to farmers",
      "FPO commission on facilitation",
      "Transparent revenue sharing",
      "Verified by Carboneg Europe"
    ]
  },
  {
    icon: Truck,
    title: "Buy-Back & Supply Chain",
    description: "Direct procurement and supply chain solutions",
    details: [
      "Farm gate collection",
      "Premium pricing for quality",
      "Bulk procurement contracts",
      "Logistics support"
    ]
  },
  {
    icon: CreditCard,
    title: "Financial Support",
    description: "Access to credit and financial services for your members",
    details: [
      "Input credit facilities",
      "Working capital loans",
      "Insurance partnerships",
      "Digital payment integration"
    ]
  }
];

const steps = [
  {
    step: "1",
    title: "Partnership Agreement",
    description: "Sign MoU with rupiya.app outlining collaboration terms"
  },
  {
    step: "2",
    title: "Member Onboarding",
    description: "Register your farmer members on our platform"
  },
  {
    step: "3",
    title: "Training & Capacity Building",
    description: "Comprehensive training for FPO staff and farmers"
  },
  {
    step: "4",
    title: "Implementation Support",
    description: "Technical assistance during the farming season"
  },
  {
    step: "5",
    title: "Monitoring & Verification",
    description: "Satellite-based tracking and carbon credit verification"
  },
  {
    step: "6",
    title: "Revenue Distribution",
    description: "Timely payment of carbon credits and produce sale"
  }
];

export default function ForFPOs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-6">
                <Building2 className="w-3 h-3 mr-1" /> For FPOs
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Empower Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Farmer Members
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Partner with rupiya.app to provide your members with training, technology, carbon credit income, and guaranteed buy-back—strengthening your FPO's impact and revenue.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Free training programs for members",
                  "Access to carbon credit revenue streams",
                  "Supply chain and procurement support",
                  "Digital tools and technology platform"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Partner With Us <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800"
                alt="FPO meeting"
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
              How rupiya.app Empowers Your FPO
            </h2>
            <p className="text-xl text-gray-600">
              Complete support ecosystem for FPO growth and member prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {benefit.description}
                  </p>

                  <div className="space-y-2">
                    {benefit.details.map((detail, didx) => (
                      <div key={didx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple 6-step process to start collaborating
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
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

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Commitment to FPOs
            </h2>
            <p className="text-xl text-blue-100">
              Building a network of empowered farmer producer organizations across India
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "FPO Partnerships Target" },
              { value: "50,000+", label: "Farmers to Impact" },
              { value: "5,00,000", label: "Hectares Coverage" },
              { value: "₹800", label: "Per Carbon Credit" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with rupiya.app?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's work together to empower your farmer members and build sustainable agriculture
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Partnership Meeting <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
              Download Partnership Deck
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
