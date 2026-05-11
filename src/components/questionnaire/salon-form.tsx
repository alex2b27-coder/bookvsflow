"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Loader2, ArrowRight, ArrowLeft } from "lucide-react"

interface FormData {
  salonName: string
  ownerName: string
  phone: string
  email: string
  city: string
  businessType: string
  numberOfStaff: string
  numberOfServices: string
  currentBookingSystem: string
  useOnlineBooking: string
  needOnlinePayments: boolean
  needFinancialReports: boolean
  preferredContact: string
  additionalComments: string
}

const businessTypes = [
  { value: "salon", label: "Beauty Salon" },
  { value: "barbershop", label: "Barbershop" },
  { value: "nail-studio", label: "Nail Studio" },
  { value: "lash-brow", label: "Lash & Brow Studio" },
  { value: "massage", label: "Massage Studio" },
  { value: "solo", label: "Solo Professional" },
]

const staffOptions = [
  { value: "1", label: "Just me" },
  { value: "2-3", label: "2-3 people" },
  { value: "4-6", label: "4-6 people" },
  { value: "7-10", label: "7-10 people" },
  { value: "10+", label: "More than 10" },
]

const serviceOptions = [
  { value: "1-5", label: "1-5 services" },
  { value: "6-10", label: "6-10 services" },
  { value: "11-20", label: "11-20 services" },
  { value: "20+", label: "More than 20" },
]

const contactMethods = [
  { value: "telegram", label: "Telegram" },
  { value: "whatsapp", label: "WhatsApp" },
  { value: "email", label: "Email" },
  { value: "call", label: "Phone Call" },
]

export function SalonQuestionnaireForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    salonName: "",
    ownerName: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    numberOfStaff: "",
    numberOfServices: "",
    currentBookingSystem: "",
    useOnlineBooking: "",
    needOnlinePayments: false,
    needFinancialReports: false,
    preferredContact: "",
    additionalComments: "",
  })

  const totalSteps = 3

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const canProceedStep1 = formData.salonName && formData.ownerName && formData.phone && formData.email && formData.city
  const canProceedStep2 = formData.businessType && formData.numberOfStaff && formData.numberOfServices
  const canSubmit = formData.preferredContact

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-foreground mb-4">
          Thank you!
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          We received your request. We will contact you shortly and activate your BookVSFlow trial.
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm font-medium text-foreground">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Card className="p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salonName">Salon Name *</Label>
                    <Input
                      id="salonName"
                      placeholder="e.g., Bella Beauty Studio"
                      value={formData.salonName}
                      onChange={(e) => updateFormData("salonName", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner / Admin Name *</Label>
                    <Input
                      id="ownerName"
                      placeholder="e.g., Maria Johnson"
                      value={formData.ownerName}
                      onChange={(e) => updateFormData("ownerName", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="hello@salon.com"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="e.g., New York"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedStep1}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">Business Details</h2>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label>Business Type *</Label>
                  <Select value={formData.businessType} onValueChange={(value) => updateFormData("businessType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Number of Staff *</Label>
                    <Select value={formData.numberOfStaff} onValueChange={(value) => updateFormData("numberOfStaff", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {staffOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Number of Services *</Label>
                    <Select value={formData.numberOfServices} onValueChange={(value) => updateFormData("numberOfServices", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentSystem">Current Booking System (if any)</Label>
                  <Input
                    id="currentSystem"
                    placeholder="e.g., Pen & paper, Google Calendar, Fresha, etc."
                    value={formData.currentBookingSystem}
                    onChange={(e) => updateFormData("currentBookingSystem", e.target.value)}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Do you currently use online booking?</Label>
                  <RadioGroup
                    value={formData.useOnlineBooking}
                    onValueChange={(value) => updateFormData("useOnlineBooking", value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="online-yes" />
                      <Label htmlFor="online-yes" className="font-normal">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="online-no" />
                      <Label htmlFor="online-no" className="font-normal">No</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setCurrentStep(3)}
                  disabled={!canProceedStep2}
                >
                  Continue
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">Preferences & Features</h2>
              
              <div className="space-y-5">
                <div className="space-y-3">
                  <Label>What features are you interested in?</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="payments"
                        checked={formData.needOnlinePayments}
                        onCheckedChange={(checked) => updateFormData("needOnlinePayments", !!checked)}
                      />
                      <Label htmlFor="payments" className="font-normal">
                        Online payments & deposits
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="reports"
                        checked={formData.needFinancialReports}
                        onCheckedChange={(checked) => updateFormData("needFinancialReports", !!checked)}
                      />
                      <Label htmlFor="reports" className="font-normal">
                        Daily financial reports
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Preferred Contact Method *</Label>
                  <RadioGroup
                    value={formData.preferredContact}
                    onValueChange={(value) => updateFormData("preferredContact", value)}
                    className="grid sm:grid-cols-2 gap-3"
                  >
                    {contactMethods.map((method) => (
                      <div key={method.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={method.value} id={`contact-${method.value}`} />
                        <Label htmlFor={`contact-${method.value}`} className="font-normal">
                          {method.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments (optional)</Label>
                  <Textarea
                    id="comments"
                    placeholder="Anything else you'd like us to know?"
                    rows={4}
                    value={formData.additionalComments}
                    onChange={(e) => updateFormData("additionalComments", e.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={!canSubmit || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  )
}
