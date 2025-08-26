import { Card, CardContent } from "@/components/ui/card";
import { Clock, TrendingUp, Calendar, Zap, Bot, Target } from "lucide-react";

const Types = () => {
  const tradingTypes = [
    {
      icon: Zap,
      title: "Scalping",
      timeframe: "Seconds to Minutes",
      description: "Quick trades that capitalize on small price movements. Requires intense focus and rapid decision-making.",
      features: ["High frequency trades", "Small profit margins", "Requires constant monitoring", "Best for experienced traders"],
      difficulty: "Expert"
    },
    {
      icon: Clock,
      title: "Day Trading",
      timeframe: "Minutes to Hours",
      description: "Positions opened and closed within the same trading day. No overnight exposure to market gaps.",
      features: ["No overnight risk", "Multiple opportunities daily", "Requires market hours availability", "Good for active traders"],
      difficulty: "Intermediate"
    },
    {
      icon: TrendingUp,
      title: "Swing Trading",
      timeframe: "Days to Weeks",
      description: "Captures medium-term price swings and trends. Balances time commitment with profit potential.",
      features: ["Less time intensive", "Captures larger moves", "Some overnight risk", "Suitable for working professionals"],
      difficulty: "Beginner"
    },
    {
      icon: Calendar,
      title: "Position Trading",
      timeframe: "Weeks to Months",
      description: "Long-term approach focusing on major trends and fundamental analysis. Patience is key.",
      features: ["Long-term perspective", "Less frequent trades", "Higher potential returns", "Requires strong fundamentals"],
      difficulty: "Beginner"
    },
    {
      icon: Bot,
      title: "Algorithmic Trading",
      timeframe: "Automated",
      description: "Computer programs execute trades based on pre-defined criteria. Removes emotional bias.",
      features: ["Emotion-free trading", "24/7 market monitoring", "Backtesting capabilities", "Requires programming knowledge"],
      difficulty: "Expert"
    },
    {
      icon: Target,
      title: "Arbitrage Trading",
      timeframe: "Instant",
      description: "Exploits price differences between markets or instruments. Low risk but requires significant capital.",
      features: ["Low risk strategy", "Quick execution required", "High capital requirements", "Narrow profit margins"],
      difficulty: "Expert"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-success";
      case "Intermediate": return "text-primary";
      case "Expert": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Understanding <span className="hero-text">Trading Types</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore different trading strategies and find the approach that best fits your lifestyle, 
            risk tolerance, and trading goals.
          </p>
        </div>

        {/* What is Trading Section */}
        <div className="bg-muted/20 rounded-lg p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What is Trading?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Trading is the practice of buying and selling financial instruments, such as gold, currencies, 
              stocks, or commodities, with the goal of generating profit from price movements. Unlike 
              investing, which typically involves holding assets for extended periods, trading focuses 
              on shorter-term price fluctuations.
            </p>
            <p>
              In gold trading specifically, traders analyze market conditions, economic factors, and 
              technical indicators to predict whether gold prices will rise or fall. Successful trading 
              requires a combination of market knowledge, risk management skills, emotional discipline, 
              and the right strategy for your circumstances.
            </p>
            <p>
              At SniperTrader, we specialize in gold trading education, providing our students with 
              the tools, knowledge, and mentorship needed to navigate the gold markets successfully. 
              Our 10+ years of experience have taught us that different trading styles suit different 
              personalities and lifestyles.
            </p>
          </div>
        </div>

        {/* Trading Types Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Types of Trading Strategies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tradingTypes.map((type, index) => (
              <Card key={index} className="trading-card h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <type.icon className="h-10 w-10 text-primary chart-glow flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{type.title}</h3>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full border ${getDifficultyColor(type.difficulty)}`}>
                          {type.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{type.timeframe}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="bg-gradient-to-r from-card to-muted/20 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Which Trading Style is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              The best trading style depends on your available time, risk tolerance, capital, and 
              personality. At SniperTrader, we help you identify the most suitable approach through 
              our personalized mentorship program.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">New to Trading?</h3>
                <p className="text-muted-foreground">
                  Start with swing or position trading to learn market dynamics without time pressure.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Working Professional?</h3>
                <p className="text-muted-foreground">
                  Swing trading offers the best balance between profit potential and time commitment.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Full-Time Trader?</h3>
                <p className="text-muted-foreground">
                  Day trading and scalping can provide more frequent opportunities and higher returns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;