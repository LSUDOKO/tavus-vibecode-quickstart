import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  PenTool, 
  Mic, 
  Video, 
  Calendar, 
  BarChart3, 
  DollarSign,
  ExternalLink,
  Play,
  Settings,
  Zap
} from 'lucide-react'

const Features = () => {
  const [scriptInput, setScriptInput] = useState('')
  const [generatedScript, setGeneratedScript] = useState('')

  const features = [
    {
      id: 'script-generator',
      icon: <PenTool className="h-8 w-8" />,
      title: "AI Script Generator",
      description: "Generate engaging scripts for any platform with AI-powered content creation",
      details: "Our advanced AI analyzes your topic, audience, and platform to create compelling scripts that drive engagement. Perfect for YouTube, TikTok, Instagram, and more.",
      demo: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Enter your topic:</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows={3}
              placeholder="e.g., How to start a successful online business"
              value={scriptInput}
              onChange={(e) => setScriptInput(e.target.value)}
            />
          </div>
          <Button 
            onClick={() => setGeneratedScript("Hook: Did you know 90% of online businesses fail in their first year? But what if I told you there's a proven formula to beat those odds?\n\nIntro: Hey everyone, I'm [Your Name], and today I'm sharing the exact 5-step framework that helped me build a 6-figure online business...\n\n[Continue with engaging content structure]")}
            className="w-full"
          >
            Generate Script with AI
          </Button>
          {generatedScript && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Generated Script:</h4>
              <p className="text-sm text-gray-700 whitespace-pre-line">{generatedScript}</p>
            </div>
          )}
        </div>
      )
    },
    {
      id: 'voice-generator',
      icon: <Mic className="h-8 w-8" />,
      title: "ElevenLabs Voice Generator",
      description: "Transform your scripts into natural-sounding voiceovers with premium AI voices",
      details: "Powered by ElevenLabs' cutting-edge voice synthesis technology. Choose from hundreds of voices or clone your own voice for consistent branding.",
      demo: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Voice Options:</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">Professional Male</Button>
              <Button variant="outline" size="sm">Friendly Female</Button>
              <Button variant="outline" size="sm">Energetic Young</Button>
              <Button variant="outline" size="sm">Custom Voice</Button>
            </div>
          </div>
          <Button className="w-full">
            <Play className="mr-2 h-4 w-4" />
            Generate Voiceover
          </Button>
          <a 
            href="https://elevenlabs.io/docs" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            View ElevenLabs API Documentation
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      )
    },
    {
      id: 'video-creator',
      icon: <Video className="h-8 w-8" />,
      title: "Tavus Video Creator",
      description: "Create personalized video content with AI avatars that look and sound like you",
      details: "Integrate with Tavus to create realistic AI avatars. Perfect for personalized marketing, education content, and scalable video production.",
      demo: (
        <div className="space-y-4">
          <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Video className="h-12 w-12 mx-auto mb-2 text-purple-600" />
              <p className="text-sm text-gray-600">AI Avatar Video Preview</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm">Upload Script</Button>
            <Button variant="outline" size="sm">Choose Avatar</Button>
          </div>
          <Button className="w-full">Generate Avatar Video</Button>
        </div>
      )
    },
    {
      id: 'pica-automation',
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Pica Automation Panel",
      description: "Get insights on competitor strategies and trending content in your niche",
      details: "Automated competitor analysis, trend detection, and content performance insights powered by Pica AI agents.",
      demo: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Latest Analysis:</h4>
            <ul className="text-sm space-y-1">
              <li>• Competitor posted 3 videos this week</li>
              <li>• Trending hashtag: #ContentCreator2024</li>
              <li>• Best posting time: 2-4 PM EST</li>
              <li>• Engagement up 25% on tutorial content</li>
            </ul>
          </div>
          <Button className="w-full">
            <Zap className="mr-2 h-4 w-4" />
            Run Analysis
          </Button>
        </div>
      )
    },
    {
      id: 'campaign-scheduler',
      icon: <Calendar className="h-8 w-8" />,
      title: "Campaign Scheduler",
      description: "Plan and schedule your content across multiple platforms automatically",
      details: "Visual content calendar with drag-and-drop scheduling, cross-platform publishing, and automated posting.",
      demo: (
        <div className="space-y-4">
          <div className="grid grid-cols-7 gap-1 text-xs">
            <div className="text-center font-semibold">Mon</div>
            <div className="text-center font-semibold">Tue</div>
            <div className="text-center font-semibold">Wed</div>
            <div className="text-center font-semibold">Thu</div>
            <div className="text-center font-semibold">Fri</div>
            <div className="text-center font-semibold">Sat</div>
            <div className="text-center font-semibold">Sun</div>
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-16 border rounded p-1">
                {i === 1 && <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded">Video Post</div>}
                {i === 3 && <div className="bg-pink-100 text-pink-800 text-xs p-1 rounded">Story</div>}
                {i === 5 && <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded">Reel</div>}
              </div>
            ))}
          </div>
          <Button className="w-full">Schedule New Content</Button>
        </div>
      )
    },
    {
      id: 'monetization',
      icon: <DollarSign className="h-8 w-8" />,
      title: "Monetization via RevenueCat",
      description: "Implement paywalls and subscription models to monetize your content",
      details: "Integrated subscription management, paywall optimization, and revenue analytics powered by RevenueCat.",
      demo: (
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-2">Premium Features</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Unlimited AI Scripts</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PRO</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Advanced Analytics</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PRO</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Priority Support</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">PRO</span>
              </div>
            </div>
            <Button className="w-full mt-4" variant="gradient">
              Upgrade to Pro - ₹499/month
            </Button>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for <span className="gradient-text">Content Creators</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and monetize your content with the power of AI.
          </p>
        </div>

        <Tabs defaultValue="script-generator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {features.map((feature) => (
              <TabsTrigger key={feature.id} value={feature.id} className="text-xs">
                {feature.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{feature.details}</p>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Benefits:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• Save hours of manual work</li>
                          <li>• Professional quality output</li>
                          <li>• Seamless integration</li>
                          <li>• Scalable for any content volume</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="mr-2 h-5 w-5" />
                        Interactive Demo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {feature.demo}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does the AI script generation work?</AccordionTrigger>
              <AccordionContent>
                Our AI analyzes your topic, target audience, and platform requirements to generate engaging scripts. It uses advanced language models trained on successful content patterns to ensure your scripts are optimized for engagement and conversion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I use my own voice with ElevenLabs integration?</AccordionTrigger>
              <AccordionContent>
                Yes! You can clone your own voice using ElevenLabs' voice cloning technology. Simply upload a few minutes of your voice samples, and the AI will create a custom voice model that sounds just like you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How accurate is the competitor analysis?</AccordionTrigger>
              <AccordionContent>
                Our Pica AI agents continuously monitor competitor content, engagement metrics, and trending topics in your niche. The analysis is updated in real-time and provides actionable insights to help you stay ahead of the competition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What platforms can I schedule content to?</AccordionTrigger>
              <AccordionContent>
                CreatorPilot supports scheduling to all major platforms including YouTube, Instagram, TikTok, Twitter, LinkedIn, and Facebook. You can manage all your content from one central dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default Features