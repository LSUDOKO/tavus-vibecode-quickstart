import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Video, 
  Mic, 
  MicOff, 
  VideoOff,
  Phone,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Loader2,
  MessageCircle,
  Zap,
  Calendar,
  RotateCcw,
  BarChart3,
  Mic2,
  ExternalLink,
  AlertCircle
} from 'lucide-react'

interface Conversation {
  conversation_id: string
  conversation_url: string
  status: string
}

const AIAssistant = () => {
  const [apiKey, setApiKey] = useState('')
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionError, setConnectionError] = useState('')
  const [transcript, setTranscript] = useState([
    { speaker: 'Charlie', message: "Hi there! I'm Charlie, your AI creator assistant. What would you like help with today?" }
  ])
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const [usePopup, setUsePopup] = useState(false)

  // Auto-scroll transcript to bottom
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight
    }
  }, [transcript])

  const createConversation = async () => {
    if (!apiKey.trim()) {
      alert('Please enter your Tavus API key')
      return
    }

    setIsLoading(true)
    setConnectionError('')
    
    try {
      const response = await fetch('https://tavusapi.com/v2/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey
        },
        body: JSON.stringify({
          persona_id: 'pd43ffef', // Default persona ID
          custom_greeting: "Hi! I'm Charlie, your AI creator assistant. I can help you generate scripts, plan campaigns, analyze content, and automate your creative workflow. What would you like to work on today?",
          conversational_context: "You are Charlie, an AI assistant specialized in helping content creators and startups with their creative workflow. You can help with script generation, campaign planning, content analysis, voiceover creation, and automation tasks. Be friendly, helpful, and focus on practical solutions for content creation challenges."
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`HTTP error! status: ${response.status} - ${errorData}`)
      }

      const data = await response.json()
      setConversation(data)
      setIsConnected(true)
      
      // Add system message to transcript
      setTranscript(prev => [...prev, {
        speaker: 'System',
        message: 'Connected to Charlie! You can now start your conversation.'
      }])
    } catch (error) {
      console.error('Error creating conversation:', error)
      setConnectionError(error instanceof Error ? error.message : 'Failed to create conversation')
    } finally {
      setIsLoading(false)
    }
  }

  const endConversation = async () => {
    if (!conversation || !apiKey) return

    try {
      await fetch(`https://tavusapi.com/v2/conversations/${conversation.conversation_id}/end`, {
        method: 'POST',
        headers: {
          'x-api-key': apiKey
        }
      })
      
      setConversation(null)
      setIsConnected(false)
      setConnectionError('')
      setTranscript([
        { speaker: 'Charlie', message: "Hi there! I'm Charlie, your AI creator assistant. What would you like help with today?" }
      ])
    } catch (error) {
      console.error('Error ending conversation:', error)
    }
  }

  const openInNewWindow = () => {
    if (conversation?.conversation_url) {
      window.open(conversation.conversation_url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes')
    }
  }

  const handleAutomationAction = (action: string) => {
    const responses = {
      'Generate Script': "I'll help you create an engaging script! What's your topic and target audience?",
      'Plan 7-day Campaign': "Great idea! Let me create a comprehensive 7-day content strategy for you. What's your niche?",
      'Repurpose Last Video': "I can help transform your latest video into multiple content formats. What platforms are you targeting?",
      'Analyze Comments': "I'll analyze your recent comments for insights and engagement opportunities. Which video should I review?",
      'Add Voiceover': "Perfect! I can generate natural-sounding voiceovers using ElevenLabs. Do you have a script ready?"
    }

    setTranscript(prev => [...prev, 
      { speaker: 'You', message: action },
      { speaker: 'Charlie', message: responses[action as keyof typeof responses] || "I'm ready to help with that!" }
    ])
  }

  const automationButtons = [
    { icon: <Zap className="h-4 w-4" />, label: 'Generate Script', color: 'bg-purple-500' },
    { icon: <Calendar className="h-4 w-4" />, label: 'Plan 7-day Campaign', color: 'bg-blue-500' },
    { icon: <RotateCcw className="h-4 w-4" />, label: 'Repurpose Last Video', color: 'bg-green-500' },
    { icon: <BarChart3 className="h-4 w-4" />, label: 'Analyze Comments', color: 'bg-orange-500' },
    { icon: <Mic2 className="h-4 w-4" />, label: 'Add Voiceover', color: 'bg-pink-500' }
  ]

  return (
    <section id="ai-assistant" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧠 Meet Charlie - Your <span className="gradient-text">AI Creator Assistant</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a real conversation with your AI assistant. Get instant help with scripts, campaigns, 
            content analysis, and creative automation.
          </p>
        </div>

        {/* API Key Input (when not connected) */}
        {!isConnected && (
          <Card className="max-w-md mx-auto mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Connect to Charlie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Enter your Tavus API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="font-mono"
              />
              <p className="text-sm text-gray-600 text-center">
                Don't have a key?{' '}
                <a 
                  href="https://platform.tavus.io/api-keys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  Get one here
                </a>
              </p>
              
              {connectionError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <p className="text-sm text-red-700">{connectionError}</p>
                  </div>
                </div>
              )}
              
              <Button 
                onClick={createConversation}
                disabled={isLoading || !apiKey.trim()}
                className="w-full gradient-bg text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Video className="mr-2 h-4 w-4" />
                    Start Conversation
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Main AI Assistant Interface */}
        {isConnected && conversation && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Panel - AI Avatar (40%) */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="flex items-center justify-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Charlie – Your Creator Assistant</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Tavus Video Embed with Fallback */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900">
                    <iframe
                      ref={iframeRef}
                      src={conversation.conversation_url}
                      allow="camera; microphone; fullscreen; display-capture; autoplay"
                      className="w-full h-full"
                      style={{ border: 'none' }}
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                      onError={() => setUsePopup(true)}
                    />
                    
                    {/* Fallback overlay if iframe fails */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-semibold mb-2">Charlie is Ready!</h3>
                        <p className="text-sm opacity-80 mb-4">
                          Due to browser security, the video chat needs to open in a new window.
                        </p>
                        <Button 
                          onClick={openInNewWindow}
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Open Video Chat
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="p-4 bg-gray-900 text-white">
                    <div className="flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setIsVideoOff(!isVideoOff)}
                        className="text-white hover:bg-white/20"
                      >
                        {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={openInNewWindow}
                        className="text-blue-400 hover:bg-blue-500/20"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={endConversation}
                        className="text-red-400 hover:bg-red-500/20"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Transcript & Controls (60%) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Real-time Transcript */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Live Conversation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    ref={transcriptRef}
                    className="h-64 overflow-y-auto bg-gray-50 rounded-lg p-4 space-y-3 font-mono text-sm"
                  >
                    {transcript.map((entry, index) => (
                      <div key={index} className={`flex ${entry.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-3 py-2 rounded-lg ${
                          entry.speaker === 'You' 
                            ? 'bg-purple-500 text-white' 
                            : entry.speaker === 'System'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-white border border-gray-200'
                        }`}>
                          <div className="text-xs opacity-70 mb-1">{entry.speaker}</div>
                          <div>{entry.message}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Automation Button Grid */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {automationButtons.map((button, index) => (
                      <Button
                        key={index}
                        onClick={() => handleAutomationAction(button.label)}
                        className={`${button.color} text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105`}
                        size="sm"
                      >
                        {button.icon}
                        <span className="ml-2 text-xs">{button.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Latest Video Preview */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>🎥 Your Latest Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Video className="h-12 w-12 mx-auto mb-2" />
                      <p className="text-sm">Your generated content will appear here</p>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Play className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Repurpose
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Features Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What Charlie Can Help You With</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Instant Script Generation</h4>
              <p className="text-sm text-gray-600">Get AI-powered scripts for any platform in seconds</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Calendar className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Campaign Planning</h4>
              <p className="text-sm text-gray-600">Plan weeks of content with strategic scheduling</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <BarChart3 className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Performance Analysis</h4>
              <p className="text-sm text-gray-600">Get insights on your content performance and audience</p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">How to Use Charlie</h4>
              <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                <li>Enter your Tavus API key to connect</li>
                <li>Click "Start Conversation" to create a new session</li>
                <li>If the video doesn't load, click "Open Video Chat" to use a popup window</li>
                <li>Use the Quick Actions buttons for common tasks</li>
                <li>Always end the conversation when done to save credits</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAssistant