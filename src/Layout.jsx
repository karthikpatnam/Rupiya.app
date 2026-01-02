import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, Sprout, Leaf, Users, Building2, TrendingUp, 
  Menu, X, ChevronDown, Phone, Mail, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: createPageUrl("Home"), icon: Home },
  { name: "Residue-Free Farming", href: createPageUrl("ResidueFree"), icon: Sprout },
  { name: "Carbon Credits", href: createPageUrl("CarbonCredits"), icon: Leaf },
];

const audienceLinks = [
  { name: "For Farmers", href: createPageUrl("ForFarmers"), icon: Users },
  { name: "For FPOs", href: createPageUrl("ForFPOs"), icon: Building2 },
  { name: "For Buyers", href: createPageUrl("ForBuyers"), icon: Building2 },
  { name: "For Investors", href: createPageUrl("ForInvestors"), icon: TrendingUp },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">rupiya.app</h1>
                <p className="text-xs text-emerald-600">Farming. Carbon. Future.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === item.href
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Solutions <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {audienceLinks.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link to={item.href} className="flex items-center gap-2 cursor-pointer">
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t">
                <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Solutions</p>
                {audienceLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">rupiya.app</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                India's largest platform for residue-free farming, carbon credits, and farmer financial inclusivity.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                {audienceLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm hover:text-emerald-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to={createPageUrl("ResidueFree")} className="text-sm hover:text-emerald-400 transition-colors">Residue-Free Farming</Link></li>
                <li><Link to={createPageUrl("CarbonCredits")} className="text-sm hover:text-emerald-400 transition-colors">Carbon Credits</Link></li>
                <li className="text-sm text-gray-500">Parametric Insurance</li>
                <li className="text-sm text-gray-500">Farm Credit</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 mt-0.5 text-emerald-500" />
                  <span>contact@rupiya.app</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 mt-0.5 text-emerald-500" />
                  <span>+91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-emerald-500" />
                  <span>India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2024 rupiya.app. Building India's climate-positive agricultural future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
