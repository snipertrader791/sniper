import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award } from "lucide-react";
import teamImage from "@/assets/teamImage.jpg";   

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "We focus on delivering accurate, actionable trading signals with precise entry and exit points."
    },
    {
      icon: Users,
      title: "Education",
      description: "We believe in empowering traders through comprehensive education and mentorship programs."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to excellence drives us to continuously improve our trading strategies."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We help our students achieve consistent growth through disciplined trading approaches."
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-text">SniperTrader</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded on the principle of precision trading, SniperTrader has been guiding traders 
            to success in gold markets for over a decade.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img 
              src={teamImage}
              alt="Professional Trading Team"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To become the world's leading platform for gold trading education and mentorship, 
                empowering traders with the knowledge and tools needed to achieve financial independence 
                through disciplined and strategic trading approaches.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                We provide professional trading mentorship, real-time market signals, and comprehensive 
                education to help both novice and experienced traders master the art of gold trading. 
                Our mission is to democratize access to professional trading knowledge and create a 
                community of successful, disciplined traders.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our approach to trading education and mentorship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="trading-card text-center h-full">
                <CardContent className="p-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 chart-glow" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-muted/20 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              10+ Years of Market Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              Our team has navigated through multiple market cycles, from the 2008 financial crisis 
              to the recent global economic uncertainties. This extensive experience has given us 
              deep insights into gold market behavior, risk management, and the psychology of trading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Successful Trades</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Students Mentored</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Expertise */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Our dedication to helping traders succeed sets us apart in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Technical Analysis Mastery</h3>
              <p className="text-muted-foreground">
                Our team specializes in advanced technical analysis techniques, including chart pattern 
                recognition, support and resistance identification, and momentum indicators specifically 
                tailored for gold trading.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Risk Management Excellence</h3>
              <p className="text-muted-foreground">
                We emphasize proper risk management strategies that help preserve capital while 
                maximizing profit potential. Our students learn to trade with discipline and 
                emotional control.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Market Psychology Understanding</h3>
              <p className="text-muted-foreground">
                Years of experience have taught us the importance of market psychology and sentiment 
                analysis. We help our students understand the emotional aspects of trading and 
                develop mental resilience.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Continuous Learning Approach</h3>
              <p className="text-muted-foreground">
                Markets evolve, and so do we. Our team continuously studies market trends, updates 
                strategies, and adapts to changing market conditions to ensure our students receive 
                the most current and effective trading education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;