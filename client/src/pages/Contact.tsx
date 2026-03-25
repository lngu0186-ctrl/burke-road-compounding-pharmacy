import { useState } from "react";
import { Link } from "wouter";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    enquiryType: "general", message: ""
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent! We'll get back to you within 1 business day.");
      setSubmitted(true);
    },
    onError: (err) => {
      toast.error("Failed to send message. Please call us directly on (03) 9889 8622.");
      console.error(err);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(form);
  };

  return (
    <div className="bg-[#f9fafb]">
      {/* Header */}
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact Us
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            We're here to help. Reach out by phone, WhatsApp, or the form below.
          </p>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl font-bold text-[#1a4d2e] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in touch
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 text-sm">
                    Shop 3/1 Burke Road<br />
                    Camberwell VIC 3124
                  </p>
                  <a
                    href="https://maps.google.com/?q=Burke+Road+Compounding+Pharmacy+Camberwell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2d6a4f] text-sm hover:underline mt-1 inline-block"
                  >
                    Get directions →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:0398898622" className="text-gray-600 text-sm hover:text-[#1a4d2e]">
                    (03) 9889 8622
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/61398898622"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#1a4d2e]"
                  >
                    Send prescription or message via WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:info@burkeroadpharmacy.com.au"
                    className="text-gray-600 text-sm hover:text-[#1a4d2e]"
                  >
                    info@burkeroadpharmacy.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0f7f4] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#1a4d2e]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Trading Hours</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between gap-8">
                      <span>Monday – Friday</span>
                      <span className="font-medium text-gray-800">9:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span className="font-medium text-gray-800">9:00am – 1:00pm</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.4!2d145.0620!3d-37.8260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad641c7f2b5a5b5%3A0x0!2sBurke%20Road%20Compounding%20Pharmacy!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Burke Road Pharmacy Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2
              className="text-2xl font-bold text-[#1a4d2e] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Send us a message
            </h2>

            {submitted ? (
              <div className="bg-[#f0f7f4] border border-[#2d6a4f]/30 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3
                  className="text-xl font-bold text-[#1a4d2e] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-600 text-sm">
                  Thank you for contacting us. We'll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#2d6a4f] text-sm underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-border space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="firstName" required className="mt-1" value={form.firstName} onChange={e => setForm(f => ({...f, firstName: e.target.value}))} />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input id="lastName" required className="mt-1" value={form.lastName} onChange={e => setForm(f => ({...f, lastName: e.target.value}))} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" type="email" required className="mt-1" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" className="mt-1" value={form.phone} onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
                </div>

                <div>
                  <Label htmlFor="enquiryType" className="text-sm font-medium text-gray-700">
                    Enquiry Type
                  </Label>
                  <Select value={form.enquiryType} onValueChange={val => setForm(f => ({...f, enquiryType: val}))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Enquiry</SelectItem>
                      <SelectItem value="compounding">Compounding Question</SelectItem>
                      <SelectItem value="prescription">Prescription Enquiry</SelectItem>
                      <SelectItem value="delivery">Delivery / Shipping</SelectItem>
                      <SelectItem value="practitioner">Practitioner Enquiry</SelectItem>
                      <SelectItem value="feedback">Feedback / Compliment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="mt-1"
                    value={form.message}
                    onChange={e => setForm(f => ({...f, message: e.target.value}))}
                  />
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-amber-800 text-xs">
                    ⚠️ For urgent medical matters, please call us directly on (03) 9889 8622
                    or contact your nearest emergency department.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white py-3"
                >
                  {submitMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
