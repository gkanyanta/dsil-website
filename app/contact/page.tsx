"use client";

import { useState, FormEvent } from "react";
import HeroBanner from "@/components/HeroBanner";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Full name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Enter a valid email address";
    if (!form.get("message")) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <HeroBanner
        title="Contact Us"
        subtitle="Get in touch for a free consultation and quote"
      />

      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white border-l-4 border-red p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircleIcon className="w-16 h-16 text-green-600 mb-4" />
                <h3 className="font-oswald text-navy text-2xl font-bold mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting DSIL. We will get back to you
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-oswald text-sm uppercase tracking-wider bg-red text-white px-6 py-2 rounded-sm hover:bg-red/90 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-oswald text-navy text-2xl font-bold uppercase tracking-wider mb-6">
                  Send Us a <span className="text-red">Message</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      className={`w-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40 ${
                        errors.name ? "border-red" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      name="company"
                      type="text"
                      className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      className={`w-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40 ${
                        errors.email ? "border-red" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required
                    </label>
                    <select
                      name="service"
                      className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical">
                        Electrical Construction
                      </option>
                      <option value="solar">Solar PV Systems</option>
                      <option value="supply">Equipment Supply</option>
                      <option value="civil">Civil Works</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className={`w-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red/40 resize-none ${
                        errors.message ? "border-red" : "border-gray-300"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full font-oswald text-sm uppercase tracking-wider bg-red text-white px-6 py-3 rounded-sm hover:bg-red/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-red p-8 space-y-6">
              <h3 className="font-oswald text-navy text-2xl font-bold uppercase tracking-wider">
                Contact <span className="text-red">Details</span>
              </h3>
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-navy">Address</p>
                  <p className="text-gray-600 text-sm">
                    Plot 12426, Minsundu, Ndola, Zambia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-navy">Phone</p>
                  <p className="text-gray-600 text-sm">
                    <a href="tel:+260972817912" className="hover:text-red">
                      +260 972 817 912
                    </a>
                    <br />
                    <a href="tel:+260967727201" className="hover:text-red">
                      +260 967 727 201
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <p className="text-gray-600 text-sm">
                    <a
                      href="mailto:info@divinesuccesszm.com"
                      className="hover:text-red"
                    >
                      info@divinesuccesszm.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white border-l-4 border-red overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61982.37234522!2d28.596789!3d-12.9587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x196ce23a3d6a8be1%3A0xdd94f5fb37ad3b8d!2sNdola%2C%20Zambia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DSIL Location — Ndola, Zambia"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
