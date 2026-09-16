"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  Building2,
  Mail,
  User,
  Phone,
  Briefcase,
  FileText,
  DollarSign,
  ArrowRight,
} from "lucide-react";
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
    budget: "$10,000 - $25,000",
    message: "",
  });

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
      {/* Backdrop */}
      <div
        onClick={resetAndClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0e1526] border border-gray-800/90 rounded-3xl shadow-2xl shadow-emerald-500/10 overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col">
        {/* Glow Header */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-500" />
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Topbar */}
        <div className="p-6 pb-4 border-b border-gray-800/80 flex items-center justify-between shrink-0">
          <NaijaSoftLogo size="sm" />
          <button
            onClick={resetAndClose}
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h3 className="font-outfit text-2xl font-bold text-white">
                  Request Received Successfully!
                </h3>
                <p className="font-manrope text-sm text-gray-300 max-w-md mx-auto">
                  Thank you, <span className="text-emerald-400 font-semibold">{formData.name || "Partner"}</span>. Our engineering & executive team will review your inquiry from <span className="text-cyan-300">{formData.organization || "your company"}</span> and reach out within 24 hours.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 font-outfit font-bold text-sm hover:opacity-95 transition-all shadow-md"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Type Switcher */}
              <div className="flex bg-gray-900/90 p-1 rounded-xl border border-gray-800">
                <button
                  type="button"
                  onClick={() => setInquiryType("client")}
                  className={`flex-1 py-2 text-xs sm:text-sm font-outfit font-semibold rounded-lg transition-all ${
                    inquiryType === "client"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-950 shadow-md"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Build a Solution / Consultation
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
                  Investor Deck & Partnership
                </button>
              </div>

              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                  {inquiryType === "client"
                    ? "Let's Build Something Exceptional"
                    : "Partner with Naija Soft Innovations"}
                </h3>
                <p className="font-manrope text-xs sm:text-sm text-gray-400 mt-1">
                  {inquiryType === "client"
                    ? "Tell us about your project goals. We deliver custom software, automation, and fintech infrastructure."
                    : "Access our investor memorandum, traction deck, and strategic roadmap for African market expansion."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-manrope">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-emerald-400" /> Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Oluwaseun Adeleke"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-emerald-400" /> Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" /> Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Apex Ventures Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-cyan-400" /> WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> Focus Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      {inquiryType === "client" ? (
                        <>
                          <option value="Custom Enterprise Software">Custom Enterprise Software</option>
                          <option value="Fintech & Payment Engine">Fintech & Payment Engine</option>
                          <option value="AI & Process Automation">AI & Process Automation</option>
                          <option value="Mobile / Web App Engineering">Mobile / Web App Engineering</option>
                          <option value="Cloud Architecture & Security">Cloud Architecture & Security</option>
                        </>
                      ) : (
                        <>
                          <option value="Angel / Pre-Seed Investment">Angel / Pre-Seed Investment</option>
                          <option value="Institutional VC Syndicate">Institutional VC Syndicate</option>
                          <option value="Strategic Corporate Partnership">Strategic Corporate Partnership</option>
                          <option value="Pan-African Expansion Joint Venture">Pan-African Expansion Joint Venture</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />{" "}
                      {inquiryType === "client" ? "Estimated Budget" : "Investment Capacity"}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      {inquiryType === "client" ? (
                        <>
                          <option value="$5,000 - $15,000">$5,000 - $15,000 (MVP / Sprint)</option>
                          <option value="$15,000 - $50,000">$15,000 - $50,000 (Full Platform)</option>
                          <option value="$50,000+">$50,000+ (Enterprise Scale)</option>
                        </>
                      ) : (
                        <>
                          <option value="$50k - $250k">$50,000 - $250,000</option>
                          <option value="$250k - $1M">$250,000 - $1,000,000</option>
                          <option value="$1M+">$1,000,000+</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" /> Message / Specific Needs
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your requirements or strategic interest..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-900/90 border border-gray-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-gray-950 font-outfit font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
                  >
                    <span>{inquiryType === "client" ? "Submit Consultation Request" : "Request Investor Materials"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-gray-500 text-center mt-2">
                    🔒 Protected under strict NDA & privacy compliance. No spam ever.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
