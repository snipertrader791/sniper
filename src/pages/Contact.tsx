import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    // optional honeypot for bots
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // honeypot check
    if (formData.company) {
      // silently drop bot submissions
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env variables missing.");
      toast({
        title: "Configuration error",
        description:
          "Email service is not configured. Please set VITE_EMAILJS_* env variables.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // These property names must match your EmailJS template variable names
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        message: formData.message,
        site: window.location.hostname,
        reply_to: formData.email, // helps 'Reply-To' in many mail clients
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ fullName: "", email: "", message: "", company: "" });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Sending failed",
        description:
          err?.text || "We couldn't send your message right now. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@snipertrader.online",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 3350270938",
      description: "Call us during business hours",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bader Commercial, Phase V, DHA, Karachi",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Fri 9AM-6PM PST",
      description: "We're here to help",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="hero-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your trading journey? Have questions about our mentorship program?
            We're here to help you succeed in gold trading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form + WhatsApp card */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card className="trading-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                  <Send className="h-6 w-6 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <Label htmlFor="fullName" className="text-base font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your trading goals, experience level, or any questions you have..."
                      rows={6}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gold-glow"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* WhatsApp Channel Card */}
            <Card className="trading-card">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                  Join Our Free WhatsApp Channel
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Get free signals, analysis, and mentorship tips directly on WhatsApp.
                  Start improving your gold trading today with expert guidance at no cost.
                </p>
                <Button
                  size="sm"
                  className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 rounded-lg"
                  asChild
                >
                  <a
                    href="https://chat.whatsapp.com/your-invite-link-here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.33 4.98l-1.42 5.17 5.28-1.38a9.95 9.95 0 004.77 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.14h-.01a8.13 8.13 0 01-4.15-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.15 8.15 0 01-1.25-4.41c0-4.49 3.65-8.14 8.15-8.14 2.18 0 4.24.85 5.78 2.39a8.14 8.14 0 01-5.72 13.04z" />
                    </svg>
                    Join Free WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Info / SLA / FAQ */}
          <div className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <info.icon className="h-6 w-6 text-primary chart-glow flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">{info.title}</h3>
                      <p className="text-primary font-medium">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="trading-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Quick Response Guarantee</h3>
                <p className="text-muted-foreground mb-4">
                  We understand that timing is crucial in trading. That's why we guarantee
                  a response to all inquiries within 24 hours during business days.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">General inquiries: Within 4 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">Mentorship questions: Within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-sm">Technical support: Within 1 hour</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="trading-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Do you offer free consultations?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer a 30-minute free consultation to discuss your trading goals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">What's included in the mentorship?</h4>
                    <p className="text-sm text-muted-foreground">
                      1-on-1 sessions, real-time signals, market analysis, and ongoing support.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">How do I get started?</h4>
                    <p className="text-sm text-muted-foreground">
                      Simply fill out the form and we'll schedule an introductory call.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
