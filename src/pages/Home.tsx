import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import AIAssistant from '@/components/AIAssistant'
import { 
  PenTool, 
  Mic, 
  Video, 
  Calendar, 
  BarChart3, 
  DollarSign,
  ArrowRight,
  Play,
  Star,
  CheckCircle
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "✍️ AI Script Generator",
      description: "Generate engaging scripts for any platform with AI-powered content creation"
    },
    {
      icon: <Mic className="h-8 w-8" />,
      title: "🎙️ Voiceovers by ElevenLabs",
      description: "Transform your scripts into natural-sounding voiceovers with premium AI voices"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "🎬 Video Avatar (Tavus Integration)",
      description: "Create personalized video content with AI avatars that look and sound like you"
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "📅 Campaign Scheduler",
      description: "Plan and schedule your content across multiple platforms automatically"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "📊 Competitor Analysis via Pica",
      description: "Get insights on competitor strategies and trending content in your niche"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "💸 Monetization with RevenueCat",
      description: "Implement paywalls and subscription models to monetize your content"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "CreatorPilot saved me 15 hours a week. The AI scripts are incredibly natural and the voice generation is mind-blowing!"
    },
    {
      name: "Marcus Rodriguez",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "We went from spending $5k/month on content creation to $500. The ROI is incredible and the quality is even better."
    },
    {
      name: "Emily Johnson",
      role: "Marketing Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      content: "The competitor analysis feature helped us identify content gaps and increase our engagement by 300%."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Your AI Content Team{' '}
                <span className="gradient-text">in One App</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Script, speak, edit, schedule, monetize — all with AI. 
                Create professional content in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button variant="gradient" size="xl" className="w-full sm:w-auto">
                    Start for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-2xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop
                  poster="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop"
                >
                  <source src="/api/placeholder/800/450" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">AI Creating Content...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <AIAssistant />

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to create amazing content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ideation to monetization, CreatorPilot provides all the tools you need to succeed as a content creator.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Founder Use Case */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Perfect for Solo Creators
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Generate Ideas Instantly</h4>
                    <p className="text-gray-600">AI analyzes trending topics and suggests content ideas tailored to your niche.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Create Professional Videos</h4>
                    <p className="text-gray-600">Transform scripts into engaging videos with AI avatars and voiceovers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Automate Distribution</h4>
                    <p className="text-gray-600">Schedule and publish content across all your social media platforms.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Startup Campaign Workflow */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Startup Campaign Workflow
              </h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">1</div>
                    <span>Analyze competitors with Pica AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">2</div>
                    <span>Generate campaign scripts with AI</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">3</div>
                    <span>Create videos with Tavus avatars</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">4</div>
                    <span>Store and manage in Supabase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold">5</div>
                    <span>Schedule and publish automatically</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by creators worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of creators who've transformed their content workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start creating content in minutes — no editing skills needed.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of creators who've already transformed their content workflow with AI.
          </p>
          <Link to="/signup">
            <Button variant="secondary" size="xl" className="bg-white text-purple-600 hover:bg-gray-100">
              Try CreatorPilot Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home