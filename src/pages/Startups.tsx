import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Target,
  Zap,
  BarChart3
} from 'lucide-react'

const Startups = () => {
  const campaignSteps = [
    {
      step: 1,
      title: "AI Market Research",
      description: "Analyze your target market and competitors automatically",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Content Strategy",
      description: "Generate data-driven content strategies for your niche",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Script Generation",
      description: "Create compelling scripts for all your marketing content",
      icon: <Zap className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Video Production",
      description: "Transform scripts into professional videos with AI avatars",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 5,
      title: "Automated Publishing",
      description: "Schedule and publish across all platforms automatically",
      icon: <Clock className="h-6 w-6" />
    }
  ]

  const benefits = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save 20+ Hours Weekly",
      description: "Automate your entire content creation and distribution workflow"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Reduce Costs by 80%",
      description: "Replace expensive agencies and freelancers with AI-powered tools"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scale Content Production",
      description: "Create unlimited content variations for different audiences"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Manage multiple team members and campaigns from one dashboard"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Marketing Team{' '}
            <span className="gradient-text">in One Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Scale your startup's content marketing with AI. From competitor analysis to automated publishing, 
            CreatorPilot handles your entire content workflow so you can focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="gradient" size="xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Startups Choose CreatorPilot
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for fast-growing startups that need to scale their marketing without scaling their team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Builder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Step-by-Step Campaign Builder
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From market research to published content, our AI handles every step of your marketing campaign.
            </p>
          </div>

          <div className="space-y-8">
            {campaignSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {step.step}
                  </div>
                </div>
                <Card className="flex-1 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Story: LaunchVerse
            </h2>
            <p className="text-xl text-gray-600">
              How a B2B SaaS startup scaled their content marketing with CreatorPilot
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">LaunchVerse</h3>
                  <p className="text-purple-100">B2B SaaS Platform</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-purple-100 text-sm">
                      Small marketing team struggling to create consistent, high-quality content 
                      across multiple channels while focusing on product development.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">The Solution</h4>
                    <p className="text-purple-100 text-sm">
                      Implemented CreatorPilot's full suite: AI script generation, competitor analysis, 
                      automated video creation, and cross-platform scheduling.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h4 className="text-xl font-semibold mb-6">Results After 3 Months</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">20 Hours Saved Weekly</p>
                      <p className="text-sm text-gray-600">Automated content creation and scheduling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">300% Increase in Content Output</p>
                      <p className="text-sm text-gray-600">From 2 posts/week to 6 posts/week per platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">150% Growth in Engagement</p>
                      <p className="text-sm text-gray-600">AI-optimized content performed significantly better</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <p className="font-semibold">$8,000 Monthly Savings</p>
                      <p className="text-sm text-gray-600">Reduced agency and freelancer costs</p>
                    </div>
                  </div>
                </div>
                
                <blockquote className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-500">
                  <p className="text-sm italic text-gray-700">
                    "CreatorPilot transformed our marketing. We went from struggling to post consistently 
                    to having a content machine that runs itself. Our engagement rates have never been higher."
                  </p>
                  <footer className="mt-2 text-sm text-gray-600">
                    — Sarah Chen, CMO at LaunchVerse
                  </footer>
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features for Startups */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Startup Needs
            </h2>
            <p className="text-xl text-gray-600">
              Features designed specifically for fast-growing companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-purple-600" />
                  Team Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Role-based access control</li>
                  <li>• Collaborative content planning</li>
                  <li>• Approval workflows</li>
                  <li>• Team performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-purple-600" />
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• ROI tracking and reporting</li>
                  <li>• Content performance insights</li>
                  <li>• Competitor benchmarking</li>
                  <li>• Custom dashboard creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-purple-600" />
                  API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Connect with your existing tools</li>
                  <li>• Custom workflow automation</li>
                  <li>• Webhook support</li>
                  <li>• Developer-friendly documentation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Startup's Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of startups already using CreatorPilot to automate their content marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button variant="secondary" size="xl" className="bg-white text-purple-600 hover:bg-gray-100">
                Try Startup Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Startups