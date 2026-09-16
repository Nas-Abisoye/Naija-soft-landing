"use client";

import React, { useState } from "react";
import { NaijaSoftLogo } from "@/components/NaijaSoftLogo";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"client" | "investor">("client");
  const [selectedSolutionTab, setSelectedSolutionTab] = useState<number>(0);
  const [testimonialCategory, setTestimonialCategory] = useState<string>("all");
  const [activeSpotlightId, setActiveSpotlightId] = useState<string>("quickcredit");
  const [investorTab, setInvestorTab] = useState<"financials" | "engineering" | "corridors">("financials");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // On-page form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<"client" | "investor">("client");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Fintech & Payment Systems",
    budget: "$15,000 - $50,000",
    message: "",
  });

  const handleOpenModal = (type: "client" | "investor" = "client") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleOnPageFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSubscribed(false), 5000);
    }
  };

  // 6 Enhanced Architectural & Engineering Pillars
  const valuePillars = [
    {
      title: "Contextual Engineering: Built for Africa, Scaled Globally",
      description:
        "We engineer specifically for the African infrastructure reality — low-bandwidth resilience, offline-first syncing, and multi-switch payment failovers while maintaining global SOC-2 and ISO architectural standards.",
      tag: "Contextual Architecture",
      num: "01",
      highlights: [
        "Offline-first local SQLite caching & background sync",
        "Multi-gateway routing with automatic transaction failovers",
        "Low-bandwidth asset compression for mobile field agents",
      ],
    },
    {
      title: "8-Week Production Cadence: Agile Sprints, Zero Delay",
      description:
        "We replace protracted development purgatory with high-velocity 14-day production sprints. You receive working staging environments, continuous telemetry, and automated regression testing from Day 1.",
      tag: "Rapid Delivery",
      num: "02",
      highlights: [
        "Bi-weekly milestone releases with staging access",
        "Continuous CI/CD deployment pipelines",
        "Clear technical roadmaps with milestone-based sign-offs",
      ],
    },
    {
      title: "Bank-Grade Infrastructure & Zero-Trust Security",
      description:
        "From high-throughput fintech ledgers to patient medical records, every platform features zero-trust network boundaries, immutable audit logs, and full compliance with NDPR, GDPR, and PCI-DSS standards.",
      tag: "Zero-Trust Security",
      num: "03",
      highlights: [
        "PCI-DSS Level 1 & NDPR compliant data storage",
        "Cryptographically signed immutable financial audit logs",
        "Automated KYC/AML verification & fraud pattern filters",
      ],
    },
    {
      title: "Automation-First Workflow & AI Engineering",
      description:
        "Eliminate administrative bottlenecks. We deploy intelligent document extractors, automated customer fulfillment pipelines, and real-time reconciliation bots that cut manual operational overhead by 50%+.",
      tag: "Operational Efficiency",
      num: "04",
      highlights: [
        "Intelligent document parsing & optical character extraction",
        "Automated WhatsApp & multi-channel commerce bots",
        "Sub-second ERP, CRM & bank account reconciliation",
      ],
    },
    {
      title: "Direct Principal Architect Collaboration",
      description:
        "No junior handoffs or opaque outsourcing layers. You partner directly with senior engineering directors and principal cloud architects who have built and scaled multi-million dollar platforms across Africa.",
      tag: "Principal Advisory",
      num: "05",
      highlights: [
        "Direct access to principal architects & tech directors",
        "System design blueprints & code audit documentation",
        "Collaborative architecture reviews & sprint retrospectives",
      ],
    },
    {
      title: "Full-Lifecycle Retainers & Proactive Cloud Scaling",
      description:
        "We ensure your application thrives long after launch. Our continuous DevOps retainers provide 24/7 cloud telemetry, database query optimization, security vulnerability scans, and 99.99% uptime guarantees.",
      tag: "Enterprise SLA",
      num: "06",
      highlights: [
        "24/7 automated telemetry monitoring & anomaly alerts",
        "Database indexing & high-concurrency query optimization",
        "Guaranteed 99.99% multi-region cloud SLA availability",
      ],
    },
  ];

  // Core Solutions Matrix
  const solutions = [
    {
      id: "fintech",
      name: "Fintech & Payment Engines",
      badge: "Financial Infrastructure",
      headline: "Scalable transaction processing, automated payouts, and compliant ledger engines.",
      description:
        "We engineer high-throughput fintech platforms, automated reconciliations, digital wallets, and custom lending algorithms capable of millions of transactions monthly.",
      features: [
        "Sub-second settlement & multi-currency routing",
        "PCI-DSS compliant zero-trust architectures",
        "Automated KYC/AML verification workflows",
        "Integration with leading African & global switches",
      ],
      metrics: "$50M+ processed monthly with 99.99% uptime",
    },
    {
      id: "automation",
      name: "AI & Process Automation",
      badge: "Operational Efficiency",
      headline: "Eliminate repetitive manual bottlenecks with custom AI pipelines and bots.",
      description:
        "Transform administrative overhead into seamless digital pipelines. We deploy intelligent document extraction, automated customer fulfillment, and predictive workflows.",
      features: [
        "End-to-end business workflow automation",
        "50% average reduction in operational overhead",
        "Real-time ERP, CRM, and accounting synchronization",
        "Custom AI copilots for internal operations",
      ],
      metrics: "50% boost in organizational productivity",
    },
    {
      id: "enterprise",
      name: "Enterprise Cloud & Custom Software",
      badge: "Custom Engineering",
      headline: "Tailor-made software architectures built to outlast market shifts.",
      description:
        "From complex multi-tenant SaaS dashboards to bespoke internal operational tooling, we architect scalable web platforms engineered for longevity and speed.",
      features: [
        "Scalable microservices & event-driven design",
        "Real-time telemetry and operational dashboards",
        "Multi-cloud deployment (AWS, GCP, DigitalOcean)",
        "End-to-end type safety & automated testing",
      ],
      metrics: "Sub-100ms API response times across Africa",
    },
    {
      id: "growth",
      name: "Modern Web & Commerce Platforms",
      badge: "Digital Experience",
      headline: "High-conversion web platforms engineered for instant customer trust.",
      description:
        "Transform your brand presence with lightning-fast, beautifully designed web applications that turn visitors into enterprise contracts and high-value consumers.",
      features: [
        "Ultra-responsive Next.js & React architectures",
        "Dynamic preorders & international payment rails",
        "SEO optimization & Core Web Vitals perfection",
        "Integrated analytics and conversion funnels",
      ],
      metrics: "2.4x increase in inbound client conversions",
    },
  ];

  // 4 Flagship Production Platforms with verified live deployments
  const flagshipProjects = [
    {
      id: "tryb-fusyon",
      title: "Tryb Fusyon",
      domain: "tryb-fusyon.vercel.app",
      category: "Haute Couture & Fashion Atelier",
      headline: "Digital Atelier, Runway Catalog & International Preorders",
      description:
        "A luxury fashion platform built for global runway showcases, bespoke bespoke measurement intake, and automated cross-border preorder fulfillment.",
      impact: "2.4x Inbound Runway Orders",
      impactDetail: "Global Preorder Engine Active",
      url: "https://tryb-fusyon.vercel.app/",
      image: "/projects/tryb-fusyon.jpg",
      tags: ["Next.js", "Tailwind CSS", "Global Commerce", "Bespoke Preorders"],
      accentColor: "border-amber-500/20 hover:border-amber-400/50",
      badgeBg: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      dotColor: "bg-amber-400",
      glowBg: "from-amber-500/10 to-transparent",
    },
    {
      id: "opti-craft",
      title: "Opti Craft",
      domain: "opti-craft-dashboard.vercel.app",
      category: "Enterprise SaaS & Telemetry",
      headline: "Telemetry Dashboard, Analytics & Infrastructure Operations",
      description:
        "An enterprise operational cockpit providing real-time multi-tenant telemetry, server health metrics, automated billing, and resource monitoring.",
      impact: "Sub-100ms Latency Across Nodes",
      impactDetail: "Multi-Tenant Cloud Operations",
      url: "https://opti-craft-dashboard.vercel.app/",
      image: "/projects/opti-craft.jpg",
      tags: ["React", "Analytics Engine", "Telemetry", "Enterprise SaaS"],
      accentColor: "border-cyan-500/20 hover:border-cyan-400/50",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      dotColor: "bg-cyan-400",
      glowBg: "from-cyan-500/10 to-transparent",
    },
    {
      id: "care-link",
      title: "Care Link",
      domain: "carelinkapp.co",
      category: "Hospital Platform & HealthTech Network",
      headline: "On-Demand Nurse Booking, Clinical Triage & Patient Portals",
      description:
        "A secure healthcare platform connecting patients with verified home healthcare nurses, featuring real-time clinical triage and NDPR-compliant patient records.",
      impact: "15-Min Clinical Care Matching",
      impactDetail: "NDPR & HIPAA Compliant Data Rails",
      url: "https://carelinkapp.co",
      image: "/projects/care-link.jpg",
      tags: ["HealthTech", "Telehealth", "NDPR Compliant", "Care Dispatch"],
      accentColor: "border-teal-500/20 hover:border-teal-400/50",
      badgeBg: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      dotColor: "bg-teal-400",
      glowBg: "from-teal-500/10 to-transparent",
    },
    {
      id: "odunda-foods",
      title: "Odùndá Foods",
      domain: "odundafoodconcept.com",
      category: "Agri-Food Direct-to-Consumer",
      headline: "Farm-to-Door Commerce, Batch Tracking & WhatsApp Orders",
      description:
        "A direct-from-farm food commerce engine featuring 5-day traditional fermentation batch tracking, automated WhatsApp ordering pipelines, and 24-48hr Lagos delivery dispatch fulfillment.",
      impact: "100% Farm-Fresh Traceability",
      impactDetail: "Automated WhatsApp Order Engine",
      url: "https://www.odundafoodconcept.com/",
      image: "/projects/odunda-foods.jpg",
      tags: ["Agri-Food Commerce", "Supply Chain", "WhatsApp Ordering", "Batch Tracking"],
      accentColor: "border-emerald-500/20 hover:border-emerald-400/50",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      dotColor: "bg-emerald-400",
      glowBg: "from-emerald-500/10 to-transparent",
    },
  ];

  // Verified Executive & Client Endorsements
  const testimonials = [
    {
      id: "quickcredit",
      category: "fintech",
      sector: "Fintech & Credit Rails",
      quote:
        "In fintech lending, sub-second underwriting and zero ledger discrepancies are non-negotiable. Naijasoft engineered our entire credit evaluation and automated disbursement engine. We now disburse 200K+ loans monthly with bank-grade 99.99% reliability.",
      name: "Executive Leadership",
      role: "Chief Executive Officer",
      company: "QuickCredit NG",
      location: "Lagos & Abuja, Nigeria",
      statNumber: "200K+",
      statLabel: "Monthly Disbursed Loans",
      deliverable: "Sub-Second Credit Scoring · Bank-Grade Automated Disbursement Rails",
      timeline: "8-Week Core Sprint",
      verifiedMetrics: ["99.99% Core SLA", "Zero Ledger Variance", "Sub-1s Underwrite"],
      liveUrl: null,
      dotColor: "#06b6d4",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      avatarBg: "bg-gradient-to-br from-cyan-500/25 to-blue-700/40 text-cyan-200 border-cyan-500/40",
      initials: "QC",
    },
    {
      id: "tryb",
      category: "ecom",
      sector: "Haute Couture & E-Commerce",
      quote:
        "Naijasoft transformed our haute couture house into a high-speed digital atelier. The custom preorder engine and interactive Adire archives handled international runway traffic effortlessly. Our global consultation inquiries doubled in the first month.",
      name: "Creative Direction",
      role: "Founder & Creative Director",
      company: "Tryb Fusyon",
      location: "Victoria Island, Lagos",
      statNumber: "2.4x",
      statLabel: "Inbound Runway Orders",
      deliverable: "Bespoke Preorder Engine · High-Concurrency Runway Scaling",
      timeline: "6-Week Production Rollout",
      verifiedMetrics: ["2.4x Order Velocity", "Global FX Checkout", "Sub-80ms Load"],
      liveUrl: "https://tryb-fusyon.vercel.app/",
      dotColor: "#f59e0b",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      avatarBg: "bg-gradient-to-br from-amber-500/25 to-amber-700/40 text-amber-200 border-amber-500/40",
      initials: "TF",
    },
    {
      id: "carelink",
      category: "health",
      sector: "Hospital & HealthTech Platform",
      quote:
        "Building a healthcare network requires strict NDPR compliance and absolute platform stability. Naijasoft delivered an on-demand verified clinician network that connects Nigerian families with home care nurses in under 15 minutes.",
      name: "Clinical Directorate",
      role: "Chief Medical Officer & Co-Founder",
      company: "Care Link Nigeria",
      location: "Maitama, Abuja",
      statNumber: "15-Min",
      statLabel: "Clinical Triage Speed",
      deliverable: "Verified Clinician Network · NDPR & HIPAA Compliant Telehealth",
      timeline: "8-Week MVP & Live Sync",
      verifiedMetrics: ["15-Min Triage Time", "NDPR Certified", "100% Uptime"],
      liveUrl: "https://carelinkapp.co",
      dotColor: "#14b8a6",
      badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/30",
      avatarBg: "bg-gradient-to-br from-teal-500/25 to-emerald-700/40 text-teal-200 border-teal-500/40",
      initials: "CL",
    },
    {
      id: "odunda",
      category: "agri",
      sector: "Agri-Food Direct-to-Consumer",
      quote:
        "From Ogun State farmlands to Lagos doorsteps, Naijasoft built our batch-tracking food commerce engine and automated WhatsApp ordering pipelines. It eliminated logistics bottlenecks and brought our dispatch time down to under 24 hours.",
      name: "Commercial Directorate",
      role: "Managing Director",
      company: "Odùndá Foodconcept",
      location: "Ogun & Lagos, Nigeria",
      statNumber: "24hr",
      statLabel: "Dispatch Fulfillment",
      deliverable: "Automated WhatsApp Commerce · Fermentation Batch Tracking Engine",
      timeline: "4-Week Rapid Sprint",
      verifiedMetrics: ["24hr Door Dispatch", "WhatsApp Bot Engine", "Zero Spoilage"],
      liveUrl: "https://www.odundafoodconcept.com/",
      dotColor: "#10b981",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      avatarBg: "bg-gradient-to-br from-emerald-500/25 to-teal-700/40 text-emerald-200 border-emerald-500/40",
      initials: "OF",
    },
    {
      id: "tradebridge",
      category: "trade",
      sector: "Cross-Border Settlements",
      quote:
        "Their multi-currency escrow architecture and customs documentation portal accelerated our international trade clearing times from 7 days down to under 4 hours across 5 African corridors. Truly Silicon Valley caliber engineering.",
      name: "Operations Directorate",
      role: "Chief Operating Officer",
      company: "TradeBridge Global",
      location: "Pan-African Trade Corridors",
      statNumber: "4hr",
      statLabel: "Customs Clearing (from 7 days)",
      deliverable: "Multi-Currency Escrow Rails · Automated Port Clearance Protocol",
      timeline: "10-Week Enterprise Rollout",
      verifiedMetrics: ["$12M+ Monthly Trade", "5 Corridors Active", "4hr Clearing"],
      liveUrl: null,
      dotColor: "#a855f7",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      avatarBg: "bg-gradient-to-br from-purple-500/25 to-indigo-700/40 text-purple-200 border-purple-500/40",
      initials: "TB",
    },
    {
      id: "farmconnect",
      category: "agri",
      sector: "Agritech Field Logistics",
      quote:
        "Naijasoft automated our entire field aggregation workflow across 14 rural collection hubs in 8 weeks flat. Field officer productivity shot up by 50% while paperwork reconciliation errors dropped to zero.",
      name: "Field Operations Directorate",
      role: "Head of Field Logistics",
      company: "FarmConnect Africa",
      location: "Nigeria & Ghana",
      statNumber: "14",
      statLabel: "Rural Aggregation Hubs",
      deliverable: "Offline-First Mobile Sync · Automated Field Collection System",
      timeline: "8-Week Field Cadence",
      verifiedMetrics: ["+50% Field Output", "0 Paperwork Errors", "Offline Caching"],
      liveUrl: null,
      dotColor: "#22c55e",
      badgeColor: "bg-green-500/10 text-green-300 border-green-500/30",
      avatarBg: "bg-gradient-to-br from-green-500/25 to-emerald-700/40 text-green-200 border-green-500/40",
      initials: "FC",
    },
  ];

  // Brand Marquee Logos with Industry Identifiers
  // Row 1 — scrolls left
  const marqueeRow1 = [
    { name: "Liberty Assured", tag: "Financial Services", dotColor: "#10b981" },
    { name: "Liberty Pay", tag: "Payments & Settlements", dotColor: "#06b6d4" },
    { name: "Tryb Fusyon", tag: "Fashion House", dotColor: "#f59e0b" },
    { name: "Odunda Foods", tag: "Food & Agriculture", dotColor: "#10b981" },
    { name: "Opti Craft", tag: "Product Engineering", dotColor: "#6366f1" },
    { name: "Care Link", tag: "Hospital Platform", dotColor: "#14b8a6" },
    { name: "QuickCredit NG", tag: "Digital Lending", dotColor: "#38bdf8" },
    { name: "TradeBridge Global", tag: "Cross-Border Trade", dotColor: "#a855f7" },
  ];
  // Row 2 — scrolls right
  const marqueeRow2 = [
    { name: "Care Link", tag: "HealthTech Network", dotColor: "#14b8a6" },
    { name: "Tryb Fusyon", tag: "Haute Couture Atelier", dotColor: "#f59e0b" },
    { name: "Odunda Foods", tag: "D2C Food Engine", dotColor: "#10b981" },
    { name: "Liberty Pay", tag: "Fintech Rails", dotColor: "#06b6d4" },
    { name: "Opti Craft", tag: "SaaS & Telemetry", dotColor: "#6366f1" },
    { name: "FarmConnect Africa", tag: "Agritech Logistics", dotColor: "#22c55e" },
    { name: "Afrinvest Labs", tag: "Venture Builder", dotColor: "#ec4899" },
    { name: "Liberty Assured", tag: "Enterprise Credit", dotColor: "#10b981" },
  ];

  return (
    <div className="min-h-screen bg-[#060a10] text-gray-100 relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-white">

      {/* ─── NAVIGATION (Pill style, EarthRise inspired) ─── */}
      <header className="absolute top-0 inset-x-0 z-40">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 h-[76px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="hover:opacity-80 transition-opacity shrink-0">
            <NaijaSoftLogo size="sm" />
          </a>

          {/* Center pill nav — EarthRise style */}
          <nav className="hidden lg:flex items-center bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-xl rounded-full px-2.5 py-1.5 gap-1 border border-white/10 transition-all shadow-2xl">
            {[
              { label: "Projects", href: "#projects", highlight: true },
              { label: "Solutions", href: "#solutions", highlight: false },
              { label: "Why Naijasoft", href: "#why-us", highlight: false },
              { label: "Testimonials", href: "#testimonials", highlight: false },
              { label: "Investors", href: "#investors", highlight: false },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-[13px] font-manrope font-medium transition-all ${
                  item.highlight
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenModal("client")}
              className="px-5 py-2.5 rounded-full bg-white text-gray-950 font-manrope font-bold text-[13px] hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10 shrink-0"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* ─── HERO SECTION (Full-bleed, EarthRise + Helios inspired) ─── */}
      <section className="relative min-h-[760px] lg:h-screen lg:max-h-[1050px] overflow-hidden flex flex-col justify-between pt-24 pb-10">

        {/* ── Background Photo ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* ── Multi-layer Overlays for Contrast & Atmosphere ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060a10]/95 via-[#060a10]/70 to-[#060a10]/35" />
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#060a10]/90 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#060a10] via-[#060a10]/80 to-transparent pointer-events-none" />

        {/* ── Main Content Block ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12 my-auto py-6">

          {/* Giant Headline — Helios/EarthRise mega-type */}
          <h1 className="font-outfit font-extrabold text-white tracking-[-0.03em] leading-[1.02] max-w-5xl">
            <span className="block text-[clamp(2.6rem,6.8vw,6.2rem)]">
              Engineering Digital
            </span>
            <span className="block text-[clamp(2.6rem,6.8vw,6.2rem)] text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200">
              Infrastructure
            </span>
            <span className="block text-[clamp(2.6rem,6.8vw,6.2rem)]">
              for Africa.
            </span>
          </h1>

          {/* Rich Editorial Sub-paragraph */}
          <p className="mt-6 font-manrope text-[15px] sm:text-[17px] text-white/80 leading-relaxed max-w-2xl font-light">
            We architect, build, and scale mission-critical fintech engines, high-throughput SaaS dashboards, hospital platforms, and automated venture applications powering Africa&apos;s leading brands.
          </p>

          {/* CTA Action Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => handleOpenModal("client")}
              className="px-6 py-3.5 rounded-full bg-white text-gray-950 font-manrope font-bold text-[13px] hover:bg-gray-100 transition-all shadow-xl hover:shadow-white/10"
            >
              Book Technical Consultation
            </button>
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-full bg-white/[0.12] hover:bg-white/[0.2] backdrop-blur-md text-white font-manrope font-semibold text-[13px] border border-white/20 transition-all flex items-center gap-2"
            >
              <span>Explore Live Projects</span>
              <span className="text-emerald-400">↓</span>
            </a>
            <button
              onClick={() => handleOpenModal("investor")}
              className="px-6 py-3.5 rounded-full bg-emerald-500 text-gray-950 font-manrope font-bold text-[13px] hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-1.5"
            >
              <span>Investor Deck</span>
              <span className="text-[11px]">↗</span>
            </button>
          </div>
        </div>

        {/* ── Bottom Section: Floating Stat Cards + Location Bar ── */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-12 mt-6">

          {/* Floating Stat Cards — 3 Helios style cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mb-6">
            {/* Card 1 */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
              <div className="flex items-center justify-between">
                <p className="font-outfit text-[1.85rem] sm:text-[2rem] font-extrabold text-gray-950 leading-none">150+</p>
                <div className="w-6 h-6 rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="text-white text-[10px]">↗</span>
                </div>
              </div>
              <p className="font-manrope text-[11px] text-gray-600 mt-1.5 leading-snug font-medium">
                Enterprise &amp; venture clients across Africa
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
              <div className="flex items-center justify-between">
                <p className="font-outfit text-[1.85rem] sm:text-[2rem] font-extrabold text-emerald-600 leading-none">$50M+</p>
                <div className="flex -space-x-1">
                  {["#059669", "#0891b2", "#6366f1"].map((c, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-full border border-white" style={{ background: c }} />
                  ))}
                </div>
              </div>
              <p className="font-manrope text-[11px] text-gray-600 mt-1.5 leading-snug font-medium">
                Processed monthly with zero downtime
              </p>
            </div>

            {/* Card 3 */}
            <div className="col-span-2 sm:col-span-1 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
              <div className="flex items-center justify-between">
                <p className="font-outfit text-[1.85rem] sm:text-[2rem] font-extrabold text-cyan-600 leading-none">99.99%</p>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <p className="font-manrope text-[11px] text-gray-600 mt-1.5 leading-snug font-medium">
                Production SLA &amp; sub-second latency
              </p>
            </div>
          </div>

          {/* Location & Status Strip — EarthRise bottom strip */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs font-manrope text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live Deployments across Nigeria, Ghana, Kenya, Rwanda &amp; South Africa</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-white/40 uppercase tracking-[0.2em] text-[10px]">
              <div className="w-px h-5 bg-white/20" />
              <span>Scroll to Explore</span>
              <span>↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT & VENTURE MARQUEE — infinite dual scroll */}
      <section className="relative z-10 py-14 overflow-hidden bg-[#060a10] border-y border-white/[0.08]">
        {/* Header Label */}
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 mb-8 text-center">
          <p className="font-manrope text-[11px] uppercase tracking-[0.28em] text-emerald-400 font-semibold mb-1">
            Trusted by Industry Leaders &amp; Disruptive African Brands
          </p>
          <p className="font-manrope text-[13px] text-white/40">
            From regulated financial institutions to next-generation healthcare and lifestyle platforms
          </p>
        </div>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#060a10] via-[#060a10]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#060a10] via-[#060a10]/80 to-transparent z-10" />

        {/* ── Row 1: scroll left ── */}
        <div className="relative flex mb-4 overflow-hidden">
          <div className="flex gap-4 animate-marquee-left whitespace-nowrap">
            {[...marqueeRow1, ...marqueeRow1].map((brand, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3.5 shrink-0 px-5 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-default group backdrop-blur-sm"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: brand.dotColor }}
                />
                <div className="flex flex-col text-left">
                  <span className="font-outfit font-bold text-[15px] text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {brand.name}
                  </span>
                  <span className="font-manrope text-[10px] text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-widest mt-0.5">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Row 2: scroll right ── */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 animate-marquee-right whitespace-nowrap">
            {[...marqueeRow2, ...marqueeRow2].map((brand, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3.5 shrink-0 px-5 py-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all cursor-default group backdrop-blur-sm"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0 shadow-sm"
                  style={{ backgroundColor: brand.dotColor }}
                />
                <div className="flex flex-col text-left">
                  <span className="font-outfit font-bold text-[15px] text-white/90 group-hover:text-white transition-colors tracking-tight">
                    {brand.name}
                  </span>
                  <span className="font-manrope text-[10px] text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-widest mt-0.5">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MEASURABLE RESULTS SECTION (Audited Engineering Benchmarks) */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Editorial Manifesto & Operational Status */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Audited Engineering Benchmarks</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Hard Metrics. <br />
              <span className="gradient-text">Zero Marketing Fluff.</span>
            </h2>

            <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              We build high-availability transaction engines, automated data pipelines, and mission-critical software. Every platform deployed by Naijasoft Innovations is monitored for sub-second response times, zero ledger discrepancy, and enterprise fault-tolerance under real-world African infrastructure conditions.
            </p>

            {/* Live Pan-African Corridor Telemetry */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-white/[0.06] pb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Pan-African Latency Monitor</span>
                </span>
                <span className="text-emerald-400 font-semibold">100% Uptime</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-gray-400 block">Lagos (NG)</span>
                  <span className="text-emerald-300 font-bold">12ms</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-gray-400 block">Accra (GH)</span>
                  <span className="text-cyan-300 font-bold">24ms</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-gray-400 block">Nairobi (KE)</span>
                  <span className="text-emerald-300 font-bold">32ms</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                  <span className="text-gray-400 block">Kigali (RW)</span>
                  <span className="text-cyan-300 font-bold">38ms</span>
                </div>
                <div className="p-2 rounded-lg bg-black/40 border border-white/[0.04] col-span-2 sm:col-span-2">
                  <span className="text-gray-400 block">Johannesburg (ZA)</span>
                  <span className="text-indigo-300 font-bold">42ms · Encrypted Mesh</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => handleOpenModal("client")}
                className="px-6 py-3.5 rounded-full bg-white text-gray-950 font-manrope font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2"
              >
                <span>Schedule Architecture Review</span>
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Right Column: 6 Refined Bento Benchmark Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Tile 1: Transaction Scale ($50M+) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Transaction Rails
                </span>
                <span className="text-xs font-mono text-gray-500">Monthly</span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                $50M+
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                Processed monthly with bank-grade sub-second settlement and zero ledger reconciliation discrepancy.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                {["NGN", "USD", "GHS", "KES", "ZAR"].map((curr) => (
                  <span key={curr} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                    {curr}
                  </span>
                ))}
              </div>
            </div>

            {/* Tile 2: High Availability (99.99%) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Cloud Availability
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live SLA
                </span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-cyan-400 tracking-tight">
                99.99%
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                Multi-zone decoupled cloud architecture on AWS &amp; GCP with automatic failover and offline data resilience.
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>Multi-Region Mesh</span>
                <span className="text-emerald-400">Zero Unplanned Downtime</span>
              </div>
            </div>

            {/* Tile 3: Sprint Velocity (8 Weeks) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/80 font-semibold px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10">
                  Delivery Velocity
                </span>
                <span className="text-xs font-mono text-gray-500">Average</span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                8 Wks
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                From initial architecture blueprint to live production release with staging access from Day 1.
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[10px] font-mono text-gray-400 flex items-center justify-between">
                <span>14-Day Sprint Cadence</span>
                <span className="text-white/70">Continuous CI/CD</span>
              </div>
            </div>

            {/* Tile 4: Operational Gain (+50%) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-emerald-500/30 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Productivity Boost
                </span>
                <span className="text-xs font-mono text-gray-500">Automated</span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-emerald-400 tracking-tight">
                +50%
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                Reduction in repetitive manual paperwork, automated invoice clearing, and automated customer dispatch.
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>Smart Bots &amp; Pipelines</span>
                <span className="text-emerald-400">Zero Manual Data Entry</span>
              </div>
            </div>

            {/* Tile 5: Enterprise Deployments (150+) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-teal-500/30 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-semibold px-2.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20">
                  Production Systems
                </span>
                <span className="text-xs font-mono text-gray-500">Pan-Africa</span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-teal-300 tracking-tight">
                150+
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                Powering regulated fintechs, healthcare networks, luxury e-commerce brands, and cross-border traders.
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>Fintech • Health • Retail</span>
                <span className="text-teal-300">Enterprise Grade</span>
              </div>
            </div>

            {/* Tile 6: Pan-African Footprint (05) */}
            <div className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-cyan-500/30 transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  Market Corridors
                </span>
                <span className="text-xs font-mono text-gray-500">Active</span>
              </div>
              <h3 className="font-outfit text-4xl sm:text-5xl font-extrabold text-cyan-400 tracking-tight">
                05
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-300 font-manrope leading-relaxed">
                Full multi-currency, regulatory compliance, and gateway integrations across NG, GH, KE, RW, and ZA.
              </p>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-gray-400 flex items-center justify-between">
                <span>Cross-Border Compliance</span>
                <span className="text-cyan-300">Multi-Switch Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "WHY NAIJASOFT INNOVATIONS?" (Engineering Pillars Manifesto) */}
      <section id="why-us" className="relative z-10 py-24 bg-[#080d1a]/95 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Our Engineering Methodology</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Why Fast-Growing African Ventures <br />
                <span className="gradient-text">Build With Naijasoft.</span>
              </h2>
              <p className="font-manrope text-base sm:text-lg text-gray-300 leading-relaxed font-light">
                Building software for emerging markets requires more than generic templates. It demands deep contextual engineering, resilient infrastructure, and rigorous execution standards.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 self-start lg:self-auto">
              <button
                onClick={() => handleOpenModal("client")}
                className="px-6 py-3.5 rounded-full bg-white text-gray-950 font-manrope font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* 6 Enhanced Architectural Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePillars.map((pillar, i) => (
              <div
                key={i}
                className="glass-panel rounded-3xl p-7 flex flex-col justify-between space-y-6 group hover:border-emerald-500/30 transition-all border border-white/[0.08] hover:shadow-xl hover:shadow-black/30"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-outfit text-[13px] font-extrabold text-emerald-400 font-mono tracking-widest">
                      {pillar.num}
                    </span>
                    <span className="text-[10px] font-manrope font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-outfit text-[1.15rem] font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-manrope text-[13px] text-gray-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    {pillar.highlights?.map((hl, hidx) => (
                      <div key={hidx} className="flex items-start gap-2 text-xs font-manrope text-gray-300">
                        <span className="text-emerald-400 shrink-0 mt-0.5 text-[11px]">✓</span>
                        <span className="leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal("client")}
                    className="text-xs font-manrope font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Discuss Requirements</span>
                    <span>→</span>
                  </button>
                  <span className="text-[10px] font-mono text-white/30">Verified Method</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CORE SOLUTIONS MATRIX (Interactive Capabilities) */}
      <section id="solutions" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-outfit font-semibold uppercase tracking-widest text-cyan-400">
            Engineered Capabilities
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Core Technology Solutions
          </h2>
          <p className="font-manrope text-sm sm:text-base text-gray-300">
            From zero-to-one product creation to enterprise-grade infrastructure migrations.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-gray-900/70 p-1.5 rounded-2xl border border-gray-800 max-w-2xl mx-auto">
          {solutions.map((sol, idx) => (
            <button
              key={sol.id}
              onClick={() => setSelectedSolutionTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-outfit font-semibold transition-all ${
                selectedSolutionTab === idx
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {sol.name}
            </button>
          ))}
        </div>

        {/* Active Solution Card Details */}
        <div className="glass-panel gradient-border rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {solutions[selectedSolutionTab].badge}
              </span>

              <h3 className="font-outfit text-2xl sm:text-4xl font-bold text-white leading-tight">
                {solutions[selectedSolutionTab].headline}
              </h3>

              <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed">
                {solutions[selectedSolutionTab].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {solutions[selectedSolutionTab].features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2.5 text-xs sm:text-sm font-manrope text-gray-200">
                    <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenModal("client")}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <span>Build This Solution</span>
                  <span>→</span>
                </button>
                <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {solutions[selectedSolutionTab].metrics}
                </div>
              </div>
            </div>

            {/* Visual Graphic Representation */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gray-950/80 border border-gray-800/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-800 text-xs font-mono text-gray-400">
                <span>Architecture Sandbox</span>
                <span className="text-emerald-400">Production Ready</span>
              </div>
              <div className="space-y-3 font-mono text-xs text-gray-300">
                <div className="p-3 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                  <span className="text-emerald-400">Engine API Router</span>
                  <span className="text-[10px] text-gray-500">Latency: 11ms</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                  <span className="text-cyan-400">Automated Ledger & DB</span>
                  <span className="text-[10px] text-gray-500">PostgreSQL + Redis</span>
                </div>
                <div className="p-3 rounded-lg bg-gray-900/90 border border-gray-800 flex items-center justify-between">
                  <span className="text-indigo-400">Event Stream Pipeline</span>
                  <span className="text-[10px] text-gray-500">Kafka & Webhooks</span>
                </div>
              </div>
              <p className="text-[11px] font-manrope text-gray-500 pt-2 text-center">
                Fully decoupled, horizontally scalable cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FLAGSHIP LIVE PROJECTS SHOWCASE */}
      <section id="projects" className="relative z-10 py-24 bg-[#080d19]/90 border-y border-white/[0.08]">
        <div id="case-studies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Flagship Releases &amp; Live Deployments</span>
              </div>
              <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Featured Projects <br />
                <span className="gradient-text">in Active Production</span>
              </h2>
              <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed">
                Explore real platforms engineered by Naijasoft Innovations — from luxury couture ateliers and high-throughput SaaS dashboards to hospital networks and direct-to-consumer food commerce engines.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 self-start lg:self-auto">
              <button
                onClick={() => handleOpenModal("client")}
                className="px-6 py-3 rounded-xl bg-white text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg shadow-white/5"
              >
                Initiate New Project
              </button>
            </div>
          </div>

          {/* 2x2 Flagship Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flagshipProjects.map((project) => (
              <div
                key={project.id}
                className={`group glass-panel rounded-3xl overflow-hidden border ${project.accentColor} transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-black/40`}
              >
                {/* ── Top Browser Window Header ── */}
                <div className="bg-black/40 border-b border-white/[0.06] px-5 py-3 flex items-center justify-between">
                  {/* macOS dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Domain pill */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-white/50 hover:text-white transition-colors bg-white/[0.04] px-3.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{project.domain}</span>
                    <span className="text-[10px] text-emerald-400">↗</span>
                  </a>

                  {/* Status Indicator */}
                  <span className="font-manrope text-[10px] uppercase tracking-wider text-emerald-400/90 font-semibold hidden sm:inline">
                    Live Platform
                  </span>
                </div>

                {/* ── Visual Preview Area ── */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d18] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Chip floating on image */}
                  <div className="absolute bottom-4 left-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-manrope font-semibold border ${project.badgeBg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${project.dotColor}`} />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* ── Content & Narrative ── */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-outfit text-base font-semibold text-gray-200 leading-snug">
                      {project.headline}
                    </p>

                    <p className="font-manrope text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact & Outcome Card */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="font-outfit text-sm sm:text-base font-bold text-emerald-400">
                        {project.impact}
                      </div>
                      <div className="font-manrope text-[11px] text-gray-500 mt-0.5">
                        {project.impactDetail}
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/40 uppercase tracking-widest hidden sm:inline">
                      Verified
                    </span>
                  </div>

                  {/* Tech Stack Tags & Launch Action */}
                  <div className="space-y-4 pt-2 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tidx) => (
                        <span
                          key={tidx}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.07]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-md group/btn"
                      >
                        <span>Launch Live Website</span>
                        <span className="text-xs transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">↗</span>
                      </a>

                      <span className="text-xs font-manrope text-white/40">
                        Production Release
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Sub-note */}
          <div className="mt-12 text-center">
            <p className="font-manrope text-xs text-white/40">
              Need a high-throughput platform engineered for your enterprise?{" "}
              <button
                onClick={() => handleOpenModal("client")}
                className="text-emerald-400 hover:text-emerald-300 font-semibold underline underline-offset-4 transition-colors"
              >
                Schedule an Architecture Discovery Call →
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED EXECUTIVE VOICES & CLIENT ENDORSEMENTS */}
      <section id="testimonials" className="relative z-10 py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Glow */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-emerald-500/10 via-cyan-500/5 to-transparent blur-3xl -z-10" />

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Audited Client Case Evidence</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Real Enterprises. Real Growth. <br />
              <span className="gradient-text">Audited African Impact.</span>
            </h2>
            <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              Verifiable outcomes and direct feedback from founders, C-suite executives, and technical leaders scaling mission-critical platforms on Naijasoft digital architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
            <button
              onClick={() => handleOpenModal("client")}
              className="px-6 py-3.5 rounded-full bg-white text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/10 flex items-center gap-2 group"
            >
              <span>Partner With Our Architects</span>
              <span className="text-xs transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Interactive Sector Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-white/[0.06]">
          {[
            { id: "all", label: "All Sectors (6)" },
            { id: "fintech", label: "Fintech & Credit Rails" },
            { id: "health", label: "Hospital & HealthTech" },
            { id: "ecom", label: "Haute Couture & E-Com" },
            { id: "agri", label: "Agri-Food & Field Logistics" },
            { id: "trade", label: "Cross-Border Trade" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTestimonialCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-manrope font-semibold transition-all ${
                testimonialCategory === tab.id
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                  : "bg-white/[0.02] text-gray-400 border border-white/[0.06] hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Spotlight Hero Testimonial */}
        {(() => {
          const activeTestimonial =
            testimonials.find((t) => t.id === activeSpotlightId) ||
            testimonials.find((t) => testimonialCategory === "all" || t.category === testimonialCategory) ||
            testimonials[0];

          return (
            <div className="relative rounded-3xl p-8 sm:p-12 mb-12 bg-gradient-to-br from-[#0c1526] via-[#080d19] to-[#050912] border border-white/[0.12] shadow-2xl overflow-hidden group">
              {/* Subtle watermark quote icon */}
              <div className="absolute right-8 -bottom-10 font-outfit text-[180px] font-black text-white/[0.03] select-none pointer-events-none leading-none">
                “
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Spotlight Quote & Highlighted Deliverable */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-manrope font-semibold border ${activeTestimonial.badgeColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeTestimonial.dotColor }} />
                      {activeTestimonial.sector}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                      ✓ Audited Production Rollout
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      {activeTestimonial.timeline}
                    </span>
                  </div>

                  <blockquote className="font-outfit text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed tracking-tight">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* 3-Column Quantified Telemetry Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                      <span className="font-outfit text-2xl font-extrabold text-emerald-400 block">
                        {activeTestimonial.statNumber}
                      </span>
                      <span className="font-manrope text-[11px] text-gray-400">
                        {activeTestimonial.statLabel}
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                      <span className="font-outfit text-2xl font-extrabold text-cyan-400 block">
                        {activeTestimonial.timeline.split(" ")[0]}
                      </span>
                      <span className="font-manrope text-[11px] text-gray-400">
                        Rapid Production Sprints
                      </span>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
                      <span className="font-outfit text-2xl font-extrabold text-teal-300 block">
                        99.99%
                      </span>
                      <span className="font-manrope text-[11px] text-gray-400">
                        Live Core Availability
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Author Identity Card */}
                <div className="lg:col-span-4 p-6 rounded-2xl bg-black/40 border border-white/[0.08] space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${activeTestimonial.avatarBg} border flex items-center justify-center font-outfit font-extrabold text-lg shrink-0 shadow-lg`}>
                      {activeTestimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-outfit text-base font-bold text-white truncate">
                        {activeTestimonial.name}
                      </h4>
                      <p className="font-manrope text-xs text-gray-400 truncate">
                        {activeTestimonial.role}
                      </p>
                      <p className="font-manrope text-xs font-semibold text-emerald-400 mt-0.5 truncate">
                        {activeTestimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] space-y-2 text-xs font-manrope">
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Deployment Location:</span>
                      <span className="text-white font-medium">{activeTestimonial.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-400">
                      <span>Core Deliverable:</span>
                      <span className="text-emerald-300 font-mono text-[11px] truncate max-w-[180px]">
                        {activeTestimonial.deliverable.split("·")[0]}
                      </span>
                    </div>
                  </div>

                  {activeTestimonial.liveUrl && (
                    <a
                      href={activeTestimonial.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-2 py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-outfit font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Explore Live Platform</span>
                      <span className="text-[11px]">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })()}

        {/* 6-Card Executive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials
            .filter((t) => testimonialCategory === "all" || t.category === testimonialCategory)
            .map((t) => {
              const isSelected = activeSpotlightId === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setActiveSpotlightId(t.id)}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 border transition-all cursor-pointer group ${
                    isSelected
                      ? "bg-white/[0.06] border-emerald-500/50 shadow-xl shadow-emerald-500/10"
                      : "bg-[#090f1d]/80 border-white/[0.07] hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Sector Tag & Metric Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-manrope font-semibold border ${t.badgeColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: t.dotColor }} />
                        {t.sector}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-emerald-400 font-bold border border-white/[0.06]">
                        {t.statNumber}
                      </span>
                    </div>

                    {/* Quote Body */}
                    <p className="font-manrope text-sm text-gray-200 leading-relaxed font-light">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Verified Deliverable Box */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/[0.05] text-xs font-mono text-emerald-300 flex items-center justify-between">
                      <span className="truncate">{t.deliverable}</span>
                      <span className="text-[10px] text-white/30 shrink-0 ml-2">Verified</span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-10 h-10 rounded-full ${t.avatarBg} border flex items-center justify-center font-outfit font-extrabold text-xs shrink-0 shadow-md`}>
                        {t.initials}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-outfit text-sm font-bold text-white truncate">{t.name}</h4>
                        <p className="font-manrope text-[11px] text-gray-400 truncate">{t.role}</p>
                        <p className="font-manrope text-[11px] text-emerald-400 font-medium truncate">
                          {t.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-manrope text-white/30 group-hover:text-emerald-400 transition-colors shrink-0 ml-2">
                      {isSelected ? "● Active" : "Spotlight →"}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Enterprise SLA & Delivery Guarantee Bar */}
        <div className="mt-14 p-6 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-manrope">
            <div className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-outfit text-sm">100% On-Time Cadence</strong>
                <p className="text-gray-400 text-[11px] mt-0.5">Bi-weekly milestone sprint releases with direct staging previews.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-base mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-outfit text-sm">NDPR &amp; SOC2 Standards</strong>
                <p className="text-gray-400 text-[11px] mt-0.5">Zero-trust cryptographic security &amp; immutable financial audit trails.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-teal-400 font-bold text-base mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-outfit text-sm">Sub-Second Latency</strong>
                <p className="text-gray-400 text-[11px] mt-0.5">Optimized edge routing across Lagos, Accra, Nairobi, Kigali &amp; Joburg.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-emerald-400 font-bold text-base mt-0.5">✓</span>
              <div>
                <strong className="text-white block font-outfit text-sm">Dedicated Lead Architect</strong>
                <p className="text-gray-400 text-[11px] mt-0.5">Direct C-level partnership with zero junior developer handoffs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTITUTIONAL INVESTORS & VENTURE HIGHLIGHTS */}
      <section id="investors" className="relative z-10 py-24 bg-[#080d1a]/95 border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Thesis & IP Moats */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Institutional Investors &amp; Venture Capital</span>
              </div>
              
              <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Architecting Africa&apos;s $45B+ <br />
                <span className="gradient-text">Software Economy</span>
              </h2>
              
              <p className="font-manrope text-sm sm:text-base text-gray-300 leading-relaxed font-light">
                Naijasoft Innovations builds the mission-critical digital infrastructure, fintech payment rails, and enterprise automation software powering African commercial expansion.
              </p>

              <div className="space-y-3.5 font-manrope text-sm text-gray-200">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
                  <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block font-outfit text-base">High-Margin Unit Economics:</strong>
                    <p className="text-xs text-gray-400 mt-1 font-light">Capital-efficient, cash-flow positive with recurring high-ticket enterprise SLA retainers and zero high-burn dependencies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
                  <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block font-outfit text-base">Contextual African Moats:</strong>
                    <p className="text-xs text-gray-400 mt-1 font-light">Resilient offline sync, multi-switch payment routers, and USSD/WhatsApp fallback pipelines built for African network realpolitik.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
                  <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                  <div>
                    <strong className="text-white block font-outfit text-base">Top 1% Engineering Density:</strong>
                    <p className="text-xs text-gray-400 mt-1 font-light">Senior in-house African systems architects and cloud engineers with zero outsourced dependencies.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenModal("investor")}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Request Investor Deck &amp; Data Room</span>
                  <span className="text-xs">↗</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Executive Telemetry Dashboard */}
            <div className="lg:col-span-6 glass-panel rounded-3xl p-8 border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div>
                  <h3 className="font-outfit text-xl font-bold text-white">Executive Traction Summary</h3>
                  <p className="font-manrope text-xs text-gray-400">Audited Financial &amp; Operational Metrics</p>
                </div>
                <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  Q3 2026 Live
                </span>
              </div>

              {/* Interactive Telemetry Tab Switcher */}
              <div className="flex bg-black/50 p-1 rounded-xl border border-white/[0.06]">
                {[
                  { id: "financials", label: "Financial Growth" },
                  { id: "engineering", label: "Engineering SLA" },
                  { id: "corridors", label: "Pan-African TAM" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setInvestorTab(tab.id as any)}
                    className={`flex-1 py-2 text-xs font-manrope font-semibold rounded-lg transition-all ${
                      investorTab === tab.id
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic 4-Card Bento Display */}
              {investorTab === "financials" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">YoY Enterprise Growth</span>
                    <p className="font-outfit text-3xl font-extrabold text-emerald-400">+185%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Compounded Enterprise ARR</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Net Revenue Retention</span>
                    <p className="font-outfit text-3xl font-extrabold text-cyan-400">138%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Zero Enterprise Churn</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Monthly GMV Run-Rate</span>
                    <p className="font-outfit text-3xl font-extrabold text-white">$50M+</p>
                    <p className="text-[10px] font-manrope text-gray-500">Processed Platform Volume</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Software Gross Margin</span>
                    <p className="font-outfit text-3xl font-extrabold text-teal-300">92%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Infrastructure Retainers</p>
                  </div>
                </div>
              )}

              {investorTab === "engineering" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Production Uptime SLA</span>
                    <p className="font-outfit text-3xl font-extrabold text-emerald-400">99.99%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Multi-Region Redundancy</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Regional Edge Latency</span>
                    <p className="font-outfit text-3xl font-extrabold text-cyan-400">12ms</p>
                    <p className="text-[10px] font-manrope text-gray-500">Optimized West African Nodes</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Financial Ledger Error</span>
                    <p className="font-outfit text-3xl font-extrabold text-white">0.00%</p>
                    <p className="text-[10px] font-manrope text-gray-500">1.2M+ Audited Transactions</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Talent Retention</span>
                    <p className="font-outfit text-3xl font-extrabold text-teal-300">96%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Top 1% African Engineers</p>
                  </div>
                </div>
              )}

              {investorTab === "corridors" && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Addressable Market</span>
                    <p className="font-outfit text-3xl font-extrabold text-emerald-400">$45B+</p>
                    <p className="text-[10px] font-manrope text-gray-500">African Digital Transformation</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Operating Corridors</span>
                    <p className="font-outfit text-3xl font-extrabold text-cyan-400">5</p>
                    <p className="text-[10px] font-manrope text-gray-500">NG, GH, KE, RW, ZA</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Underserved Enterprise</span>
                    <p className="font-outfit text-3xl font-extrabold text-white">65%</p>
                    <p className="text-[10px] font-manrope text-gray-500">Mid-Market Software Gap</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-1">
                    <span className="text-[11px] font-mono text-gray-400 uppercase">Quarterly Inbound Demand</span>
                    <p className="font-outfit text-3xl font-extrabold text-teal-300">2.4x</p>
                    <p className="text-[10px] font-manrope text-gray-500">Enterprise Deal Velocity</p>
                  </div>
                </div>
              )}

              {/* Data Room Access Box */}
              <div className="p-4 rounded-2xl bg-cyan-500/[0.06] border border-cyan-500/20 text-xs font-manrope text-gray-300 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-cyan-400 font-mono font-bold block text-[11px]">
                    🔒 ENCRYPTED DATA ROOM READY
                  </span>
                  <p className="text-gray-400 leading-relaxed text-[11px]">
                    Direct syndicate discussions are open for institutional venture funds, family offices, and strategic corporate VCs.
                  </p>
                </div>
                <button
                  onClick={() => handleOpenModal("investor")}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-outfit font-bold hover:bg-cyan-500/30 transition-all shrink-0 self-center"
                >
                  Access Room →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ON-PAGE INTERACTIVE CONSULTATION & INTEREST FORM */}
      <section id="contact" className="relative z-10 py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel gradient-border rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-outfit font-semibold uppercase tracking-widest text-emerald-400">
              Start a Conversation
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Build the Future of African Business
            </h2>
            <p className="font-manrope text-sm sm:text-base text-gray-300">
              Fill out the inquiry form below for a free technical consultation or strategic partnership session.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="font-outfit text-2xl font-bold text-white">
                Thank You, {formData.fullName || "Partner"}!
              </h3>
              <p className="font-manrope text-sm text-gray-300 max-w-md mx-auto">
                We have received your project details for <span className="text-emerald-400 font-semibold">{formData.company || "your enterprise"}</span>. One of our lead architects will contact you within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gray-800 text-gray-200 text-xs font-outfit font-semibold hover:bg-gray-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleOnPageFormSubmit} className="space-y-6 font-manrope">
              {/* Type selector */}
              <div className="flex bg-gray-900/90 p-1 rounded-xl border border-gray-800 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={() => setInquiryType("client")}
                  className={`flex-1 py-2 text-xs sm:text-sm font-outfit font-semibold rounded-lg transition-all ${
                    inquiryType === "client"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Custom Software / Tech Build
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("investor")}
                  className={`flex-1 py-2 text-xs sm:text-sm font-outfit font-semibold rounded-lg transition-all ${
                    inquiryType === "investor"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-950 shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Investor / Partnership
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Organization / Company Name *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. AfriCommerce Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Fintech & Payment Systems">Fintech & Payment Systems</option>
                    <option value="AI & Business Automation">AI & Business Automation</option>
                    <option value="Custom Enterprise Cloud Software">Custom Enterprise Cloud Software</option>
                    <option value="Agritech & Logistics Engine">Agritech & Logistics Engine</option>
                    <option value="Investor Relations">Investor Relations & Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Target Budget / Scope
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="$5,000 - $15,000">$5,000 - $15,000 (MVP / Quick Sprint)</option>
                    <option value="$15,000 - $50,000">$15,000 - $50,000 (Full Platform)</option>
                    <option value="$50,000+">$50,000+ (Enterprise Architecture)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Project Summary or Key Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a brief overview of what you'd like to build or discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-gray-950/80 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-gray-950 font-outfit font-bold text-base hover:opacity-95 transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Consultation Request</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 10. CALL TO ACTION (CTA) BANNER (Exact Figma Section) */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-[#090e1a] to-[#070b14] border-t border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-emerald-500/30 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
              Ready to Join Them and Build Smarter?
            </h2>

            <p className="font-manrope text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-normal">
              Let&apos;s create the future of African business together. Get in touch today for an in-depth architecture assessment.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => handleOpenModal("client")}
                className="px-8 py-4 rounded-2xl bg-white text-gray-950 font-outfit font-bold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2 group"
              >
                <span>Book a Free Consultation</span>
                <span className="text-emerald-600 font-bold transition-transform group-hover:translate-x-1">→</span>
              </button>

              <button
                onClick={() => handleOpenModal("investor")}
                className="px-7 py-4 rounded-2xl bg-gray-900/90 hover:bg-gray-800 text-gray-200 border border-gray-700 font-outfit font-semibold text-sm sm:text-base transition-all"
              >
                Request Investor Deck
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. OFFICIAL COMPREHENSIVE FOOTER (Figma Reference) */}
      <footer className="relative z-10 border-t border-gray-800/80 bg-[#050810] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800/80">
            {/* Brand Bio */}
            <div className="lg:col-span-2 space-y-4">
              <NaijaSoftLogo size="md" />
              <p className="font-manrope text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
                We are a Nigerian-born tech powerhouse providing scalable digital solutions for businesses across Africa. From automation to fintech infrastructure.
              </p>
              <div className="flex items-center gap-3 pt-2 text-gray-400">
                <span className="text-xs font-manrope">Follow Us:</span>
                <a href="#" className="hover:text-emerald-400 transition-colors text-xs font-mono">LinkedIn</a>
                <span className="text-gray-700">&bull;</span>
                <a href="#" className="hover:text-emerald-400 transition-colors text-xs font-mono">Twitter/X</a>
                <span className="text-gray-700">&bull;</span>
                <a href="#" className="hover:text-emerald-400 transition-colors text-xs font-mono">GitHub</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 font-manrope text-xs sm:text-sm">
              <h4 className="font-outfit font-bold text-white uppercase tracking-wider text-xs">
                Navigation
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Flagship Projects</a></li>
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Solutions Matrix</a></li>
                <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Naijasoft</a></li>
                <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
                <li><a href="#investors" className="hover:text-cyan-400 transition-colors">Investor Relations</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-3 font-manrope text-xs sm:text-sm">
              <h4 className="font-outfit font-bold text-white uppercase tracking-wider text-xs">
                Solutions
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Fintech Engines</a></li>
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">AI Automation</a></li>
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Enterprise Cloud</a></li>
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Agritech Logistics</a></li>
                <li><a href="#solutions" className="hover:text-emerald-400 transition-colors">Zero-Trust Security</a></li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-3">
              <h4 className="font-outfit font-bold text-white uppercase tracking-wider text-xs">
                Newsletter
              </h4>
              <p className="font-manrope text-xs text-gray-400">
                Subscribe for engineering insights and African tech industry updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-outfit font-bold text-xs rounded-xl transition-colors shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                {newsletterSubscribed && (
                  <p className="text-[11px] text-emerald-400 font-manrope">
                    ✓ Thank you for subscribing!
                  </p>
                )}
              </form>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-manrope text-gray-500">
            <p>&copy; {new Date().getFullYear()} Naijasoft Innovations. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Security Compliance</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lead Capture & Investor Modal Dialog */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultType={modalType}
      />
    </div>
  );
}
