import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Award, Users, BarChart3, Shield } from "lucide-react";
import heroImage from "@/assets/heroImage.jpg";
import goldImage from "@/assets/goldImage.jpg"
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Signals",
      description: "Get exact entry and exit points for gold trading with our proven signal system."
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Benefit from over a decade of professional trading expertise and market knowledge."
    },
    {
      icon: Users,
      title: "Personal Mentorship",
      description: "One-on-one guidance to help you master the art of profitable gold trading."
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Deep market insights and analysis to understand gold price movements."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Learn professional risk management techniques to protect your capital."
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of successful trades and satisfied mentorship students."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Master <span className="hero-text">Gold Trading</span>
            <br />with Expert Guidance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up">
            Professional mentorship program with 10+ years of market experience.
            Get precise signals and learn when gold will move up or down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-4 gold-glow">
                Start Your Journey
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View Our Results
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="hero-text">SniperTrader</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive trading education and real-time signals to help you succeed in gold trading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="trading-card h-full">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4 chart-glow" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Deep Market Understanding
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 10 years of professional trading experience, SniperTrader provides
                unparalleled insights into gold market movements. Our proven track record
                speaks for itself.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span>Real-time gold trading signals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span>Professional mentorship program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span>Comprehensive market analysis</span>
                </div>
              </div>
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img
                src={goldImage}
                alt="Gold Trading Analysis"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* WhatsApp Channel Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "rgba(11, 13, 17, 1)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
            Join Our Free WhatsApp Channel
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Get free signals, analysis, and mentorship tips directly on WhatsApp.
            Start improving your gold trading today with expert guidance at no cost.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-4 bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            asChild
          >
            <a
              href="https://whatsapp.com/channel/0029Vb6JvgCLY6d8HWBjWp44"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.47 1.33 4.98l-1.42 5.17 5.28-1.38a9.95 9.95 0 004.77 1.22h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm0 18.14h-.01a8.13 8.13 0 01-4.15-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.15 8.15 0 01-1.25-4.41c0-4.49 3.65-8.14 8.15-8.14 2.18 0 4.24.85 5.78 2.39a8.14 8.14 0 01-5.72 13.04z" />
              </svg>
              Join Free WhatsApp
            </a>
          </Button>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join our mentorship program and start receiving professional gold trading signals today.
          </p>
          <Button size="lg" className="text-lg px-8 py-4 gold-glow">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;