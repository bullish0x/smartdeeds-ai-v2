"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, FileCheck, Lock, Loader2 } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/motion'
import { cn } from '@/lib/ui'

export default function KYCPage() {
  const router = useRouter()
  const kycEnabled = process.env.NEXT_PUBLIC_KYC_ENABLED === 'true'

  // Redirect to /kyc/start if KYC feature is enabled
  useEffect(() => {
    if (kycEnabled) {
      router.push('/kyc/start')
    }
  }, [kycEnabled, router])

  // If KYC is enabled, return null while redirecting
  if (kycEnabled) {
    return null
  }
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
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-yellowish" />
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10">
                Secure Verification
              </Badge>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Quick Identity Check <span className="text-yellowish">(KYC)</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Before Launch, you'll complete a quick identity check (KYC). It's
              a simple step for invite‑only programs and helps keep members and
              the project safe.
            </motion.p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-zinc-950 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <FileCheck className="w-5 h-5 text-yellowish" />
                  What you'll need
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-yellowish mt-1">•</span>
                    Full legal name
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellowish mt-1">•</span>
                    Date of birth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellowish mt-1">•</span>
                    Government-issued identification (passport, driver's license, or national ID)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellowish mt-1">•</span>
                    Proof of address (utility bill, bank statement, or government document)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellowish mt-1">•</span>
                    Contact information
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Lock className="w-5 h-5 text-yellowish" />
                  Privacy & safety
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  We only use your info to verify it's really you. It's encrypted in
                  transit and at rest, and only shared if required by law or with
                  your consent.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Form Card */}
          <Card className="bg-zinc-950 border-white/10">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Identity Check Form</CardTitle>
              <CardDescription className="text-gray-400">
                Please provide accurate information for verification purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-12">
                  <Loader2 className="w-16 h-16 text-yellowish animate-spin mx-auto mb-4" />
                  <p className="text-lg text-gray-300">
                    Sending your details...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-white">
                        First Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="John"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-white">
                        Last Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="Doe"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone Number <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth" className="text-white">
                        Date of Birth <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-white">
                        Country <span className="text-red-400">*</span>
                      </Label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white ring-offset-black placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

                    <div className="space-y-2">
                      <Label htmlFor="idType" className="text-white">
                        ID Type <span className="text-red-400">*</span>
                      </Label>
                      <select
                        id="idType"
                        name="idType"
                        required
                        value={formData.idType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-white/20 bg-black px-3 py-2 text-sm text-white ring-offset-black placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowish focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select ID type</option>
                        <option value="passport">Passport</option>
                        <option value="drivers-license">Driver's License</option>
                        <option value="national-id">National ID</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="idNumber" className="text-white">
                        ID Number <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        required
                        value={formData.idNumber}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="ABC123456"
                      />
                    </div>
                  </div>

                  {/* Address Information */}
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-white">
                      Address <span className="text-red-400">*</span>
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-black border-white/20 text-white resize-none"
                      placeholder="123 Main Street, Apt 4B"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-white">
                        City <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="Los Angeles"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-white">
                        ZIP/Postal Code <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        required
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="bg-black border-white/20 text-white"
                        placeholder="90001"
                      />
                    </div>
                  </div>

                  {/* Note Alert */}
                  <Alert className="bg-yellowish/10 border-yellowish/30">
                    <AlertDescription className="text-white text-sm">
                      <strong className="text-yellowish">Note:</strong> This is a mockup form. In a
                      production environment, you would also need to upload
                      documents (ID copy, proof of address) for verification.
                    </AlertDescription>
                  </Alert>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="yellowish"
                    size="lg"
                    className="w-full"
                  >
                    Submit Identity Check
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
