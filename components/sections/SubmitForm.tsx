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

export default function SubmitForm() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [formData, setFormData] = useState({
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

    // ─── SUCCESS STATE ───
    if (status === "success") {
        return (
            <div className="border border-swaqar-success/40 bg-swaqar-bg px-6 py-8 flex flex-col items-center gap-4 text-center max-w-lg mx-auto">
                <span className="text-swaqar-success text-2xl font-bold">✔</span>
                <h3 className="text-swaqar-text text-lg font-semibold">
                    Submission Received
                </h3>
                <p className="text-swaqar-muted text-sm leading-relaxed">
                    Your opportunity has entered SWAQAR's structured validation process.
                    Qualified submissions are reviewed within 5 business days.
                </p>
                <p className="text-swaqar-muted text-xs">
                    You will receive confirmation at the email provided.
                </p>
            </div>
        );
    }

    // ─── FORM STATE ───
    return (
        <div className="border border-swaqar-gold bg-swaqar-bg max-w-2xl mx-auto">
            {/* Form header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-swaqar-gold/30">
                <span className="text-[10px] tracking-[0.25em] text-swaqar-gold uppercase font-bold">
                    Trade Opportunity Intake
                </span>
                <span aria-hidden="true" className="block w-2 h-2 bg-swaqar-gold" />
            </div>

            <div className="px-6 py-8 flex flex-col gap-6">
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
                            className="bg-swaqar-bg border border-swaqar-gold/40 text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors appearance-none"
                        >
                            <option value="" disabled>
                                Select type
                            </option>
                            <option value="supplier">Verified Supplier</option>
                            <option value="buyer">Qualified Buyer</option>
                            <option value="investor">Strategic Investor</option>
                            <option value="partner">Institutional Partner</option>
                        </select>
                    </div>
                </div>

                {/* Row 3: Description */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="description"
                        className="text-swaqar-muted text-xs tracking-[0.15em] uppercase font-medium"
                    >
                        Trade Opportunity Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Briefly describe your trade opportunity, goods or services, volumes, and target markets."
                        className="bg-swaqar-bg border border-swaqar-gold/40 text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors resize-none placeholder:text-swaqar-muted/50"
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

                {/* Submit button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={status === "submitting"}
                        className="inline-flex items-center justify-center bg-swaqar-gold text-swaqar-bg font-semibold px-7 py-3.5 transition-opacity hover:opacity-90 focus-visible:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === "submitting" ? "Submitting..." : "Submit Opportunity"}
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
                    ▣ All submissions enter SWAQAR's structured validation process.
                    Qualified opportunities proceed to verification within 5 business days.
                </p>
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
                className="bg-swaqar-bg border border-swaqar-gold/40 text-swaqar-text text-sm px-4 py-3 focus:outline-none focus:border-swaqar-gold transition-colors placeholder:text-swaqar-muted/50"
            />
        </div>
    );
}