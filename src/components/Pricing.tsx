import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for individual creators",
      icon: Zap,
      features: [
        "5 thumbnail tests per month",
        "AI simulation testing",
        "Basic analytics dashboard",
        "YouTube & TikTok support",
        "Email support"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month", 
      description: "For serious content creators",
      icon: Crown,
      popular: true,
      features: [
        "25 thumbnail tests per month",
        "AI + Real ad testing",
        "Advanced analytics & insights",
        "All platforms (YouTube, TikTok, Reels)",
        "Priority support",
        "Custom recommendations",
        "$200 in ad credits included"
      ],
      cta: "Upgrade to Pro"
    },
    {
      name: "Agency",
      price: "$299",
      period: "/month",
      description: "For agencies and teams",
      icon: Rocket,
      features: [
        "Unlimited thumbnail tests",
        "White-label reporting",
        "Team collaboration tools",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "$500 in ad credits included"
      ],
      cta: "Contact Sales"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your testing needs. All plans include AI simulation. 
            Pay-per-test pricing available for ad budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-primary scale-105' : 'border hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need more tests? Pay-per-test pricing starts at $2 per test with your own ad budget.
          </p>
          <Button variant="ghost">
            View detailed pricing →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;