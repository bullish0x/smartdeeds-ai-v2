"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KYCPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    idType: "",
    idNumber: "",
    dateOfBirth: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mockup - no actual submission
    setSubmitted(true);
    setTimeout(() => {
      alert("This is a mockup. KYC verification would be processed here.");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
            Quick Identity Check (KYC)
          </h1>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Before Launch, you’ll complete a quick identity check (KYC). It’s
              a simple step for invite‑only programs and helps keep members and
              the project safe.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
              What you’ll need
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Full legal name</li>
              <li>Date of birth</li>
              <li>
                Government-issued identification (passport, driver&apos;s
                license, or national ID)
              </li>
              <li>
                Proof of address (utility bill, bank statement, or government
                document)
              </li>
              <li>Contact information</li>
            </ul>

            <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
              Privacy & safety
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We only use your info to verify it’s really you. It’s encrypted in
              transit and at rest, and only shared if required by law or with
              your consent.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Identity Check Form
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-block w-16 h-16 border-4 border-yellowish border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Sending your details...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-black dark:text-white mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="OTHER">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="idType"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      ID Type *
                    </label>
                    <select
                      id="idType"
                      name="idType"
                      required
                      value={formData.idType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    >
                      <option value="">Select ID type</option>
                      <option value="passport">Passport</option>
                      <option value="drivers-license">
                        Driver&apos;s License
                      </option>
                      <option value="national-id">National ID</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="idNumber"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      ID Number *
                    </label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      required
                      value={formData.idNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      ZIP/Postal Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-yellowish focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-yellowish dark:bg-yellowish/20 p-4 rounded-lg">
                  <p className="text-sm text-black dark:text-white">
                    <strong>Note:</strong> This is a mockup form. In a
                    production environment, you would also need to upload
                    documents (ID copy, proof of address) for verification.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
