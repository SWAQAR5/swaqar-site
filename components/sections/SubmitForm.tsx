"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// SUBMIT FORM — Formspree-powered
//
// Setup: replace FORMSPREE_ENDPOINT with your actual endpoint.
// Instructions in comments below.
//
// Formspree sends to both:
//   opportunities@swaqar.com
//   partnerships@swaqar.com
// ─────────────────────────────────────────────────────────────

// STEP 1: Go to https://formspree.io and create a free account
// STEP 2: Create a new form → set it to forward to your emails
// STEP 3: Replace "YOUR_FORM_ID" below with the ID from Formspree
// Example: "https://formspree.io/f/xrgvkpzw"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjgjlrrj";


type FormStatus = "idle" | "submitting" | "success" | "error";

const CONTACT_DETAILS = [
    {
        icon: "✦",
        label: "Headquarters",
        value: "Jeddah, Kingdom of Saudi Arabia",
    },
    {
        icon: "→",
        label: "Engagement Type",
        value: "Institutional counterparts only. No retail engagement accepted.",
    },
    {
        icon: "⊕",
        label: "Current Stage",
        value: "Phase I — Foundation. Not yet operationally active.",
    },
    {
        icon: "⚖",
        label: "Legal Position",
        value: "Subject to counsel-validated legal and regulatory review in all applicable jurisdictions.",
    },
] as const;

export default function SubmitForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [formData, setFormData] = useState({
        legalEntityName: "",
        jurisdiction: "",
        name: "",
        organization: "",
        email: "",
        type: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({
                    legalEntityName: "",
                    jurisdiction: "",
                    name: "",
                    organization: "",
                    email: "",
                    type: "",
                    description: "",
                });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-start">
            {/* LEFT COLUMN */}
            {status === "success" ? (
                <div className="border border-swaqar-success/40 bg-white px-6 py-8 flex flex-col items-center gap-4 text-center max-w-lg mx-auto">
                    <span className="text-swaqar-success text-2xl font-bold">✔</span>
                    <h3 className="text-swaqar-heading text-lg font-semibold">
                        Submission Received
                    </h3>
                    <p className="text-swaqar-muted text-sm leading-relaxed">
                        Your inquiry has been received. SWAQAR Group will review and respond
                        through the appropriate institutional channel.
                    </p>
                    <p className="text-swaqar-muted text-xs">
                        You will receive confirmation at the email provided.
                    </p>
                </div>
            ) : (
                <div className="border border-swaqar-gold bg-swaqar-surface max-w-2xl mx-auto">
                    {/* Phase 1 notice */}
                    <div className="border border-swaqar-border bg-swaqar-surface p-5 mb-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold flex items-center gap-2 mb-3">
                            <span className="inline-block w-2 h-2 rounded-full bg-swaqar-gold"></span>
                            Phase 1 — Foundation Stage
                        </p>
                        <p className="font-mono text-xs text-swaqar-muted leading-relaxed">
                            SWAQAR Group is currently in Phase 1 — Foundation Stage and is not yet operationally active. All corridor activation is subject to completion of the Four-Gate Model and Supreme Council mandate. Submission of this form does not initiate an engagement, create a commitment on the part of SWAQAR Group, or constitute any form of agreement.
                        </p>
                    </div>

                    {/* Form header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-swaqar-gold/30">
                        <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                            Institutional Inquiry
                        </span>
                        <span aria-hidden="true" className="block w-2 h-2 bg-swaqar-gold" />
                    </div>

                    <div className="px-6 py-8 flex flex-col gap-6">
                        {/* Row 0: Legal Entity Name + Jurisdiction of Incorporation */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                label="Legal Entity Name"
                                name="legalEntityName"
                                type="text"
                                value={formData.legalEntityName}
                                onChange={handleChange}
                                placeholder="Full registered legal name"
                                required
                            />
                            <FormField
                                label="Jurisdiction of Incorporation"
                                name="jurisdiction"
                                type="text"
                                value={formData.jurisdiction}
                                onChange={handleChange}
                                placeholder="Country or jurisdiction of incorporation"
                                required
                            />
                        </div>

                        {/* Row 1: Name + Organization */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                label="Full Name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                            <FormField
                                label="Organization"
                                name="organization"
                                type="text"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="Company or institution"
                                required
                            />
                        </div>

                        {/* Row 2: Email + Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@organization.com"
                                required
                            />
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="type"
                                    className="text-swaqar-muted text-xs tracking-[0.15em] uppercase font-medium"
                                >
                                    Participation Type
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                    className="bg-white border border-swaqar-border text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors appearance-none"
                                >
                                    <option value="" disabled>
                                        Select type
                                    </option>
                                    <option value="government">Government & Regulatory Body</option>
                                    <option value="banking">Banking & Financial Institution</option>
                                    <option value="inspection">Inspection & Verification Firm</option>
                                    <option value="legal">Legal & Compliance Partner</option>
                                    <option value="corridor">Corridor & Trade Counterparty</option>
                                    <option value="investor">Investor & Capital Partner</option>
                                    <option value="general">General Institutional Inquiry</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 3: Description */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="description"
                                className="text-swaqar-muted text-xs tracking-[0.15em] uppercase font-medium"
                            >
                                Nature of Inquiry
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Please describe the nature of your institutional inquiry and your organisation's area of interest."
                                className="bg-white border border-swaqar-border text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors resize-none placeholder:text-swaqar-muted/50"
                            />
                        </div>

                        {/* Error state */}
                        {status === "error" && (
                            <div className="flex items-center gap-3 border border-swaqar-error/40 px-4 py-3">
                                <span
                                    aria-hidden="true"
                                    className="text-swaqar-error font-bold flex-shrink-0"
                                >
                                    ✖
                                </span>
                                <p className="text-swaqar-error text-sm">
                                    Submission failed. Please try again or email{" "}
                                    <a
                                        href="mailto:opportunities@swaqar.com"
                                        className="underline hover:no-underline"
                                    >
                                        opportunities@swaqar.com
                                    </a>{" "}
                                    directly.
                                </p>
                            </div>
                        )}

                        {/* Submission notice */}
                        <p className="font-mono text-xs text-swaqar-muted leading-relaxed mt-4 mb-4 p-4 border border-swaqar-border bg-swaqar-surface">
                            All inquiries are reviewed against SWAQAR&#39;s counterparty eligibility criteria before any response is issued. Submission does not initiate an engagement, create contractual obligation, or constitute regulated advice of any kind. SWAQAR engages institutional counterparts only.
                        </p>

                        {/* Submit button */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={status === "submitting"}
                                className="inline-flex items-center justify-center bg-swaqar-gold text-swaqar-navy font-semibold px-7 py-3.5 transition-opacity hover:opacity-90 focus-visible:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Submitting..." : "Submit Institutional Inquiry"}
                            </button>
                            <a
                                href="mailto:partnerships@swaqar.com?subject=Partnership%20Discussion%20Request"
                                className="inline-flex items-center justify-center border border-swaqar-text/60 text-swaqar-text font-medium px-7 py-3.5 transition-colors hover:border-swaqar-gold hover:text-swaqar-gold"
                            >
                                Request Discussion
                            </a>
                        </div>

                        {/* Expectation line */}
                        <p className="text-swaqar-muted text-xs leading-relaxed border-t border-swaqar-gold/20 pt-4">
                            ▣ All inquiries are reviewed under SWAQAR's governance process.
                            Response timelines vary by inquiry type.
                        </p>
                    </div>
                </div>
            )}

            {/* RIGHT COLUMN */}
            <div>
                <h3 className="font-serif text-3xl text-swaqar-heading font-semibold leading-snug mb-4">
                    Engage SWAQAR
                    <br />
                    at institutional standard.
                </h3>
                <p className="text-sm text-swaqar-muted leading-relaxed mb-9">
                    SWAQAR Group operates under strict counterparty verification and
                    engagement protocols. Institutional engagement is not transactional
                    — it begins with verification, proceeds through the Four-Gate
                    Model, and is governed at every stage by the Supreme Council
                    mandate.
                </p>

                <div className="flex flex-col gap-4">
                    {CONTACT_DETAILS.map((detail) => (
                        <div key={detail.label} className="flex items-start gap-3">
                            <div className="w-8 h-8 flex-shrink-0 bg-swaqar-gold/8 border border-swaqar-border flex items-center justify-center font-mono text-xs text-swaqar-gold">
                                {detail.icon}
                            </div>
                            <div>
                                <p className="font-mono text-xs uppercase tracking-widest text-swaqar-gold mb-0.5">
                                    {detail.label}
                                </p>
                                <p className="text-sm text-swaqar-muted/80">
                                    {detail.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────
// Sub-component: Form field
// ─────────────────────────────────────────────────────────────
type FormFieldProps = {
    label: string;
    name: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
};

function FormField({
    label,
    name,
    type,
    value,
    onChange,
    placeholder,
    required,
}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={name}
                className="text-swaqar-muted text-xs tracking-[0.15em] uppercase font-medium"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="bg-white border border-swaqar-border text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors placeholder:text-swaqar-muted/50"
            />
        </div>
    );
}
