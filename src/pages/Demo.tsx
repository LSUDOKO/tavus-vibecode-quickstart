import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react'

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(180) // 3 minutes

  const demoVideos = [
    {
      id: 'overview',
      title: 'Platform Overview',
      description: 'See how CreatorPilot transforms your content workflow',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
      duration: '3:24'
    },
    {
      id: 'ai-scripts',
      title: 'AI Script Generation',
      description: 'Watch AI create engaging scripts in seconds',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      duration: '2:15'
    },
    {
      id: 'video-creation',
      title: 'Video Creation with Tavus',
      description: 'Transform scripts into professional videos',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=225&fit=crop',
      duration: '4:12'
    },
    {
      id: 'scheduling',
      title: 'Content Scheduling',
      description: 'Automate your content distribution',
      thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
      duration: '2:45'
    }
  ]

  const comparisonData = [
    {
      metric: 'Time to Create Video',
      traditional: '4-6 hours',
      creatorpilot: '15 minutes',
      improvement: '95% faster'
    },
    {
      metric: 'Cost per Video',
      traditional: '₹5,000-15,000',
      creatorpilot: '₹50-200',
      improvement: '98% cheaper'
    },
    {
      metric: 'Scripts per Week',
      traditional: '2-3 scripts',
      creatorpilot: '20+ scripts',
      improvement: '800% more'
    },
    {
      metric: 'Quality Consistency',
      traditional: 'Variable',
      creatorpilot: 'Always High',
      improvement: '100% consistent'
    }
  ]

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See CreatorPilot <span className="gradient-text">in Action</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our AI-powered platform transforms content creation from hours to minutes.
            </p>
          </div>

          {/* Main Demo Video */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="relative aspect-video bg-black">
                {/* Video Player */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">CreatorPilot Demo</h3>
                    <p className="text-white/80">Full Platform Walkthrough</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    
                    <div className="flex-1">
                      <div className="w-full bg-white/20 rounded-full h-1">
                        <div 
                          className="bg-white h-1 rounded-full transition-all duration-300"
                          style={{ width: `${(currentTime / duration) * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    <span className="text-white text-sm">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Demos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Feature Demonstrations
            </h2>
            <p className="text-xl text-gray-600">
              Explore each feature with detailed video walkthroughs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoVideos.map((video) => (
              <Card key={video.id} className="border-0 shadow-lg card-hover cursor-pointer">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{video.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional vs AI-Powered Workflow
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic difference in time, cost, and efficiency
            </p>
          </div>

          <Tabs defaultValue="traditional" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="traditional" className="text-lg py-3">
                Traditional Workflow
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-lg py-3">
                CreatorPilot Workflow
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traditional">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-red-600">Traditional Content Creation</CardTitle>
                  <CardDescription>The old way of creating content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">1</div>
                      <div>
                        <h4 className="font-semibold">Brainstorm Ideas</h4>
                        <p className="text-gray-600 text-sm">2-3 hours of research and ideation</p>
                      </div>
                      <div className="ml-auto flex items-center text-red-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">3h</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">2</div>
                      <div>
                        <h4 className="font-semibold">Write Scripts</h4>
                        <p className="text-gray-600 text-sm">Manual writing and multiple revisions</p>
                      </div>
                      <div className="ml-auto flex items-center text-red-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">4h</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">3</div>
                      <div>
                        <h4 className="font-semibold">Record & Edit</h4>
                        <p className="text-gray-600 text-sm">Filming, editing, and post-production</p>
                      </div>
                      <div className="ml-auto flex items-center text-red-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">8h</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-semibold">4</div>
                      <div>
                        <h4 className="font-semibold">Manual Publishing</h4>
                        <p className="text-gray-600 text-sm">Upload to each platform individually</p>
                      </div>
                      <div className="ml-auto flex items-center text-red-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">2h</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total Time:</span>
                        <span className="text-red-600">17+ hours</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-600">CreatorPilot Workflow</CardTitle>
                  <CardDescription>AI-powered content creation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">1</div>
                      <div>
                        <h4 className="font-semibold">AI Idea Generation</h4>
                        <p className="text-gray-600 text-sm">AI analyzes trends and suggests topics</p>
                      </div>
                      <div className="ml-auto flex items-center text-green-600">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-sm">2min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">2</div>
                      <div>
                        <h4 className="font-semibold">AI Script Writing</h4>
                        <p className="text-gray-600 text-sm">Generate optimized scripts instantly</p>
                      </div>
                      <div className="ml-auto flex items-center text-green-600">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-sm">30sec</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">3</div>
                      <div>
                        <h4 className="font-semibold">AI Video Creation</h4>
                        <p className="text-gray-600 text-sm">Tavus generates professional videos</p>
                      </div>
                      <div className="ml-auto flex items-center text-green-600">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-sm">5min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold">4</div>
                      <div>
                        <h4 className="font-semibold">Auto-Publishing</h4>
                        <p className="text-gray-600 text-sm">Schedule across all platforms</p>
                      </div>
                      <div className="ml-auto flex items-center text-green-600">
                        <Zap className="h-4 w-4 mr-1" />
                        <span className="text-sm">1min</span>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Total Time:</span>
                        <span className="text-green-600">8 minutes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Metrics Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-xl text-gray-600">
              See the measurable impact of switching to AI-powered content creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisonData.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{item.metric}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Traditional</p>
                    <p className="text-lg font-semibold text-red-600">{item.traditional}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 mb-1">CreatorPilot</p>
                    <p className="text-lg font-semibold text-green-600">{item.creatorpilot}</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                    <p className="text-sm font-semibold gradient-text">{item.improvement}</p>
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
            Ready to Experience the Future of Content Creation?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your free trial today and see the difference AI can make for your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" className="bg-white text-purple-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
              Schedule Personal Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Demo