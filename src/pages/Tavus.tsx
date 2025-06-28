import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Video, 
  Upload, 
  Settings, 
  Play,
  Download,
  Share2,
  Zap,
  Clock,
  Users,
  ArrowRight
} from 'lucide-react'

const Tavus = () => {
  const [scriptInput, setScriptInput] = useState('')
  const [selectedAvatar, setSelectedAvatar] = useState('avatar1')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState(null)

  const avatars = [
    {
      id: 'avatar1',
      name: 'Professional Sarah',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      description: 'Perfect for business and professional content'
    },
    {
      id: 'avatar2',
      name: 'Friendly Marcus',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      description: 'Great for casual and educational content'
    },
    {
      id: 'avatar3',
      name: 'Creative Emma',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      description: 'Ideal for creative and lifestyle content'
    },
    {
      id: 'custom',
      name: 'Your Custom Avatar',
      image: null,
      description: 'Upload your own video to create a personalized avatar'
    }
  ]

  const handleGenerateVideo = async () => {
    if (!scriptInput.trim()) return
    
    setIsGenerating(true)
    
    // Simulate API call to Tavus
    setTimeout(() => {
      setGeneratedVideo({
        id: 'generated-video-1',
        thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop',
        duration: '2:34',
        status: 'completed'
      })
      setIsGenerating(false)
    }, 3000)
  }

  const sampleScripts = [
    {
      title: "Product Launch",
      content: "Hey everyone! I'm excited to introduce our latest product that's going to revolutionize how you manage your daily tasks. This innovative solution combines AI technology with user-friendly design to help you stay organized and productive. Let me show you what makes it special..."
    },
    {
      title: "Educational Content",
      content: "Welcome to today's lesson on digital marketing fundamentals. In this video, we'll explore the key strategies that successful businesses use to reach their target audience online. By the end of this session, you'll understand how to create compelling content that drives engagement..."
    },
    {
      title: "Personal Message",
      content: "Hi there! I wanted to personally thank you for being part of our community. Your support means everything to us, and I'm excited to share some upcoming features that I think you'll love. We've been working hard to improve your experience..."
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Create Videos with <span className="gradient-text">AI Avatars</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your scripts into professional videos using Tavus AI avatars. 
              No cameras, no editing, just type your script and watch the magic happen.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Generate in minutes</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                <span>Multiple avatars</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>Professional quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Generator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="mr-2 h-5 w-5" />
                    Script Input
                  </CardTitle>
                  <CardDescription>
                    Enter your script or choose from our sample templates
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Script</label>
                    <textarea
                      className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your script here... (max 500 words)"
                      value={scriptInput}
                      onChange={(e) => setScriptInput(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-500">
                        {scriptInput.length}/2000 characters
                      </span>
                      <span className="text-sm text-gray-500">
                        Est. video length: {Math.ceil(scriptInput.split(' ').length / 150)} min
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sample Scripts</label>
                    <div className="grid grid-cols-1 gap-2">
                      {sampleScripts.map((script, index) => (
                        <button
                          key={index}
                          onClick={() => setScriptInput(script.content)}
                          className="text-left p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
                        >
                          <h4 className="font-medium text-sm">{script.title}</h4>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {script.content.substring(0, 100)}...
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Choose Avatar
                  </CardTitle>
                  <CardDescription>
                    Select an AI avatar to present your content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {avatars.map((avatar) => (
                      <div
                        key={avatar.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedAvatar === avatar.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedAvatar(avatar.id)}
                      >
                        <div className="text-center">
                          {avatar.image ? (
                            <img
                              src={avatar.image}
                              alt={avatar.name}
                              className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <Upload className="h-6 w-6 text-gray-400" />
                            </div>
                          )}
                          <h4 className="font-medium text-sm">{avatar.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">{avatar.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleGenerateVideo}
                disabled={!scriptInput.trim() || isGenerating}
                className="w-full gradient-bg text-white hover:opacity-90"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating Video...
                  </>
                ) : (
                  <>
                    <Video className="mr-2 h-5 w-5" />
                    Generate Avatar Video
                  </>
                )}
              </Button>
            </div>

            {/* Preview Section */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    Video Preview
                  </CardTitle>
                  <CardDescription>
                    Your generated video will appear here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                        <p className="text-gray-600">Generating your video...</p>
                        <p className="text-sm text-gray-500 mt-2">This usually takes 2-3 minutes</p>
                      </div>
                    </div>
                  ) : generatedVideo ? (
                    <div className="space-y-4">
                      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                        <img
                          src={generatedVideo.thumbnail}
                          alt="Generated video"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="h-8 w-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                          {generatedVideo.duration}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Video className="h-12 w-12 mx-auto mb-4" />
                        <p>Your generated video will appear here</p>
                        <p className="text-sm mt-2">Enter a script and click generate to start</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Tips Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader>
                  <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Keep scripts between 100-500 words for best results</li>
                    <li>• Use natural, conversational language</li>
                    <li>• Include pauses with commas and periods</li>
                    <li>• Avoid complex technical jargon</li>
                    <li>• Test different avatars for your audience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powered by Tavus Technology
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading AI avatar technology for professional video creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate professional videos in minutes, not hours. Our AI processes your script and creates videos at unprecedented speed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle>Realistic Avatars</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our AI avatars are incredibly lifelike with natural expressions, gestures, and speech patterns that engage your audience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <Settings className="h-6 w-6" />
                </div>
                <CardTitle>Fully Customizable</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Customize everything from avatar appearance to voice tone, background, and branding to match your unique style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Seamless Integration with CreatorPilot
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This Tavus integration is part of the complete CreatorPilot suite. 
            Generate scripts with AI, create videos with avatars, and distribute across all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl">
              Explore Full Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              View Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tavus