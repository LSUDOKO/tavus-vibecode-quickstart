import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Check, 
  X, 
  Star,
  ArrowRight,
  Zap,
  Crown,
  Building
} from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      icon: <Zap className="h-6 w-6" />,
      features: [
        { name: "AI Scripts", included: true },
        { name: "Basic Templates", included: true },
        { name: "5 Scripts per month", included: true },
        { name: "Community Support", included: true },
        { name: "Video via Tavus", included: false },
        { name: "Voice via ElevenLabs", included: false },
        { name: "Scheduling & Pica", included: false },
        { name: "Team Access", included: false },
        { name: "Custom Branding", included: false },
        { name: "Priority Support", included: false }
      ],
      cta: "Start for Free",
      popular: false
    },
    {
      name: "Creator",
      price: "₹499",
      period: "per month",
      description: "For individual content creators",
      icon: <Star className="h-6 w-6" />,
      features: [
        { name: "AI Scripts", included: true },
        { name: "Unlimited Scripts", included: true },
        { name: "Video via Tavus", included: true },
        { name: "Voice via ElevenLabs", included: true },
        { name: "Scheduling & Pica", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Premium Templates", included: true },
        { name: "Email Support", included: true },
        { name: "Team Access", included: false },
        { name: "Custom Branding", included: false }
      ],
      cta: "Start Creator Plan",
      popular: true
    },
    {
      name: "Startup",
      price: "₹1,499",
      period: "per month",
      description: "For growing startups and small teams",
      icon: <Building className="h-6 w-6" />,
      features: [
        { name: "Everything in Creator", included: true },
        { name: "Team Access (3 users)", included: true },
        { name: "Advanced Competitor Analysis", included: true },
        { name: "Custom Workflows", included: true },
        { name: "API Access", included: true },
        { name: "Priority Support", included: true },
        { name: "White-label Options", included: true },
        { name: "Advanced Integrations", included: true },
        { name: "Custom Branding", included: false },
        { name: "Dedicated Account Manager", included: false }
      ],
      cta: "Start Startup Plan",
      popular: false
    },
    {
      name: "Agency",
      price: "₹2,999",
      period: "per month",
      description: "For agencies and large teams",
      icon: <Crown className="h-6 w-6" />,
      features: [
        { name: "Everything in Startup", included: true },
        { name: "Team Access (10 users)", included: true },
        { name: "Custom Branding", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "Custom Integrations", included: true },
        { name: "SLA Guarantee", included: true },
        { name: "Advanced Security", included: true },
        { name: "Training & Onboarding", included: true },
        { name: "Custom AI Models", included: true },
        { name: "Enterprise Support", included: true }
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens to my content if I cancel?",
      answer: "You can export all your content and data before canceling. We provide a 30-day grace period to download your content after cancellation."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund, no questions asked."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. You only pay the monthly subscription fee, and you can start using all features immediately."
    },
    {
      question: "Can I use my own AI API keys?",
      answer: "Yes, on Startup and Agency plans, you can connect your own API keys for ElevenLabs, OpenAI, and other services to reduce costs."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your content creation needs. Start free, upgrade anytime.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="text-sm text-gray-500">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full shadow left-1 top-1 transition-transform"></div>
            </div>
            <span className="text-sm text-gray-500">
              Annual 
              <span className="ml-1 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-lg ${
                  plan.popular 
                    ? 'ring-2 ring-purple-500 scale-105 z-10' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${
                    plan.popular ? 'gradient-bg text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {plan.icon}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "₹0" && (
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="h-4 w-4 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'gradient-bg text-white hover:opacity-90' 
                        : 'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              See exactly what's included in each plan
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Free</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Creator</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Startup</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">AI Script Generation</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Scripts per month</td>
                    <td className="px-6 py-4 text-center text-sm">5</td>
                    <td className="px-6 py-4 text-center text-sm">Unlimited</td>
                    <td className="px-6 py-4 text-center text-sm">Unlimited</td>
                    <td className="px-6 py-4 text-center text-sm">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Video Generation (Tavus)</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Voice Generation (ElevenLabs)</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Team Members</td>
                    <td className="px-6 py-4 text-center text-sm">1</td>
                    <td className="px-6 py-4 text-center text-sm">1</td>
                    <td className="px-6 py-4 text-center text-sm">3</td>
                    <td className="px-6 py-4 text-center text-sm">10</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Custom Branding</td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><X className="h-5 w-5 text-gray-300 mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Plan?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            For enterprise customers with specific requirements, we offer custom solutions 
            tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl">
              Contact Sales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start with our free plan and upgrade as you grow. No credit card required.
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="xl" className="bg-white text-purple-600 hover:bg-gray-100">
              Start for Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing