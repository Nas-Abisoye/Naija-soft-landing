"use client";

import React, { useState, useEffect } from "react";
import { NaijaSoftLogo } from "./NaijaSoftLogo";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "client" | "investor";
}

export function ConsultationModal({
  isOpen,
  onClose,
  defaultType = "client",
}: ConsultationModalProps) {
  const [inquiryType, setInquiryType] = useState<"client" | "investor">(defaultType);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "Custom Enterprise Software",
    budget: "$15,000 - $50,000",
    message: "",
  });

  // Sync state whenever defaultType changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setInquiryType(defaultType);
    }
  }, [defaultType, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop with rich blur */}
      <div
        onClick={resetAndClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl bg-[#070c18] border border-white/[0.12] rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400" />
        <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Top Navigation Bar */}
        <div className="px-6 sm:px-8 py-5 border-b border-white/[0.08] flex items-center justify-between shrink-0 bg-white/[0.02]">
          <NaijaSoftLogo size="sm" />
          <button
            onClick={resetAndClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] text-white/70 hover:text-white flex items-center justify-center text-sm transition-all duration-200"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6">
          {isSubmitted ? (
            /* Submission Confirmation State */
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center justify-center mx-auto text-2xl font-bold shadow-lg shadow-emerald-500/20">
                ✓
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold">
                  Inquiry Dispatched to Senior Architecture Team
                </span>
                <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Thank You, {formData.name || "Partner"}!
                </h3>
                <p className="font-manrope text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  We have logged your specifications for{" "}
                  <span className="text-emerald-300 font-semibold">
                    {formData.organization || "your enterprise"}
                  </span>
                  . A principal engineering director will review your brief and schedule an architecture discovery call within 24 hours.
                </p>
              </div>

              {/* Summary Metadata Card */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left text-xs font-manrope space-y-2 text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Inquiry Type:</span>
                  <span className="text-white font-semibold">
                    {inquiryType === "client" ? "Technical Build / Custom Software" : "Investor Relations & Deck"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Focus Domain:</span>
                  <span className="text-cyan-300 font-mono text-[11px]">{formData.service}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 font-medium">Turnaround SLA:</span>
                  <span className="text-emerald-400 font-semibold">Within 24 Hours</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3.5 rounded-full bg-white text-gray-950 font-outfit font-bold text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-lg shadow-white/10"
                >
                  Return to Website →
                </button>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <div className="space-y-6">
              
              {/* Segmented Control Pill Switcher */}
              <div className="flex bg-black/50 p-1.5 rounded-2xl border border-white/[0.08]">
                <button
                  type="button"
                  onClick={() => setInquiryType("client")}
                  className={`flex-1 py-2.5 px-3 text-xs sm:text-[13px] font-manrope font-semibold rounded-xl transition-all duration-200 ${
                    inquiryType === "client"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 font-bold shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Build a Solution / Technical Build
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryType("investor")}
                  className={`flex-1 py-2.5 px-3 text-xs sm:text-[13px] font-manrope font-semibold rounded-xl transition-all duration-200 ${
                    inquiryType === "investor"
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-950 font-bold shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Investor Deck &amp; Syndicate
                </button>
              </div>

              {/* Editorial Header */}
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>
                    {inquiryType === "client" ? "Principal Architect Intake" : "Institutional VC & Syndicate Intake"}
                  </span>
                </div>
                <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {inquiryType === "client"
                    ? "Let's Build Something Exceptional"
                    : "Partner with Naijasoft Innovations"}
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  {inquiryType === "client"
                    ? "Tell us about your venture goals. We architect high-availability custom software, payment rails, and enterprise automation."
                    : "Access our confidential investor deck, audited financial traction telemetry, and Pan-African expansion roadmap."}
                </p>
              </div>

              {/* Form Body without icons on labels */}
              <form onSubmit={handleSubmit} className="space-y-4 font-manrope">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      Full Name <span className="text-emerald-400 font-mono">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      Work Email <span className="text-emerald-400 font-mono">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Company & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      Company / Organization <span className="text-emerald-400 font-mono">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Ventures Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      WhatsApp / Phone <span className="text-gray-500 font-normal font-mono text-[10px]">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 3: Focus Area & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      {inquiryType === "client" ? "Core Focus Area" : "Investment Structure"}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0a101f] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-200 cursor-pointer"
                    >
                      {inquiryType === "client" ? (
                        <>
                          <option value="Custom Enterprise Software" className="bg-[#0a101f] text-white">Custom Enterprise Software</option>
                          <option value="Fintech & Payment Rails" className="bg-[#0a101f] text-white">Fintech &amp; Payment Rails</option>
                          <option value="AI & Process Automation" className="bg-[#0a101f] text-white">AI &amp; Process Automation</option>
                          <option value="Healthcare & MedTech Platforms" className="bg-[#0a101f] text-white">Healthcare &amp; MedTech Platforms</option>
                          <option value="Agri-Food Supply Chain Commerce" className="bg-[#0a101f] text-white">Agri-Food Supply Chain Commerce</option>
                          <option value="Cloud Architecture & Security Audits" className="bg-[#0a101f] text-white">Cloud Architecture &amp; Security Audits</option>
                        </>
                      ) : (
                        <>
                          <option value="Institutional VC Syndicate" className="bg-[#0a101f] text-white">Institutional VC Syndicate</option>
                          <option value="Family Office / Strategic Angel" className="bg-[#0a101f] text-white">Family Office / Strategic Angel</option>
                          <option value="Corporate Venture Co-Investment" className="bg-[#0a101f] text-white">Corporate Venture Co-Investment</option>
                          <option value="Pan-African Expansion Joint Venture" className="bg-[#0a101f] text-white">Pan-African Expansion Joint Venture</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                      {inquiryType === "client" ? "Target Budget Tier" : "Investment Allocation"}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#0a101f] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-200 cursor-pointer"
                    >
                      {inquiryType === "client" ? (
                        <>
                          <option value="$10,000 - $25,000 (MVP Sprint)" className="bg-[#0a101f] text-white">$10,000 - $25,000 (Rapid MVP Sprint)</option>
                          <option value="$25,000 - $75,000 (Core Platform)" className="bg-[#0a101f] text-white">$25,000 - $75,000 (Core Platform)</option>
                          <option value="$75,000+ (Enterprise Scale)" className="bg-[#0a101f] text-white">$75,000+ (Enterprise Scale &amp; SLA)</option>
                        </>
                      ) : (
                        <>
                          <option value="$100k - $500k" className="bg-[#0a101f] text-white">$100,000 - $500,000</option>
                          <option value="$500k - $2M" className="bg-[#0a101f] text-white">$500,000 - $2,000,000</option>
                          <option value="$2M+" className="bg-[#0a101f] text-white">$2,000,000+</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Message / Specific Requirements */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-gray-300 mb-2">
                    Project Brief / Specific Requirements <span className="text-gray-500 font-normal font-mono text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your platform goals, current bottlenecks, or strategic interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.09] focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Action & Security Assurance */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-gray-950 font-outfit font-bold text-sm tracking-wide transition-all duration-200 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 flex items-center justify-center gap-2 group"
                  >
                    <span>
                      {inquiryType === "client" ? "Submit Technical Consultation Request" : "Request Investor Deck & Data Room"}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1 font-bold">→</span>
                  </button>

                  <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-manrope text-gray-400 text-center">
                    <span>Direct 24hr Lead Architect Review</span>
                    <span className="text-gray-600">•</span>
                    <span>Strict NDA Compliance</span>
                    <span className="text-gray-600">•</span>
                    <span>Zero Spam Policy</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

