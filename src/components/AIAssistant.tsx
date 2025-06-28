import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
  AlertCircle,
  Download,
  Upload
} from 'lucide-react'

interface Conversation {
  conversation_id: string
  conversation_url: string
  status: string
}

interface VideoGeneration {
  video_id: string
  status: string
  download_url?: string
}

const AIAssistant = () => {
  // Hardcoded API keys
  const TAVUS_API_KEY = '2f263fcb5fa44c7ca8ed76d789cdb756'
  const ELEVENLABS_API_KEY = 'sk_a8ed6d3d1a8d8a1c3fa2014be425a6c7da7570f5086470bc'
  
  const [conversation, setConversation] = useState<Conversation | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [connectionError, setConnectionError] = useState('')
  const [transcript, setTranscript] = useState([
    { speaker: 'Charlie', message: "Hi there! I'm Charlie, your AI creator assistant. What would you like help with today?" }
  ])
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null)
  const [audioChunks, setAudioChunks] = useState<Blob[]>([])
  
  // Video generation states
  const [scriptInput, setScriptInput] = useState('')
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState<VideoGeneration | null>(null)
  const [videoError, setVideoError] = useState('')
  
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const [usePopup, setUsePopup] = useState(false)

  // Auto-scroll transcript to bottom
  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight
    }
  }, [transcript])

  // Initialize speech recognition for real-time transcription
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
      const recognition = new SpeechRecognition()
      
      recognition.continuous = true
      recognition.interimResults = true
      recognition.lang = 'en-US'
      
      recognition.onresult = (event) => {
        let finalTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript
          }
        }
        
        if (finalTranscript) {
          setTranscript(prev => [...prev, {
            speaker: 'You',
            message: finalTranscript
          }])
          
          // Process with ElevenLabs for response (mock for now)
          processWithElevenLabs(finalTranscript)
        }
      }
      
      if (isRecording) {
        recognition.start()
      } else {
        recognition.stop()
      }
      
      return () => recognition.stop()
    }
  }, [isRecording])

  const processWithElevenLabs = async (text: string) => {
    try {
      // Mock AI response for now - in production, you'd process the speech with your AI
      const responses = [
        "I understand you want help with that. Let me assist you!",
        "Great idea! I can definitely help you with that task.",
        "That's an interesting request. Let me work on that for you.",
        "Perfect! I'll get started on that right away.",
        "Excellent! I have some great suggestions for that."
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      // Add AI response to transcript
      setTimeout(() => {
        setTranscript(prev => [...prev, {
          speaker: 'Charlie',
          message: randomResponse
        }])
      }, 1000)
      
      // Generate speech with ElevenLabs
      await generateSpeech(randomResponse)
      
    } catch (error) {
      console.error('Error processing with ElevenLabs:', error)
    }
  }

  const generateSpeech = async (text: string) => {
    try {
      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5
          }
        })
      })

      if (response.ok) {
        const audioBlob = await response.blob()
        const audioUrl = URL.createObjectURL(audioBlob)
        const audio = new Audio(audioUrl)
        audio.play()
      }
    } catch (error) {
      console.error('Error generating speech:', error)
    }
  }

  const createConversation = async () => {
    setIsLoading(true)
    setConnectionError('')
    
    try {
      const response = await fetch('https://tavusapi.com/v2/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': TAVUS_API_KEY
        },
        body: JSON.stringify({
          persona_id: 'pd43ffef',
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
      
      setTranscript(prev => [...prev, {
        speaker: 'System',
        message: 'Connected to Charlie! You can now start your conversation.'
      }])
    } catch (error) {
      console.error('Error creating conversation:', error)
      
      if (error instanceof Error && error.message.includes('User has reached maximum concurrent conversations')) {
        setConnectionError('You already have an active conversation. Please end it using the phone icon before starting a new one.')
      } else {
        setConnectionError(error instanceof Error ? error.message : 'Failed to create conversation')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const endConversation = async () => {
    if (!conversation) return

    try {
      await fetch(`https://tavusapi.com/v2/conversations/${conversation.conversation_id}/end`, {
        method: 'POST',
        headers: {
          'x-api-key': TAVUS_API_KEY
        }
      })
      
      setConversation(null)
      setIsConnected(false)
      setConnectionError('')
      setIsRecording(false)
      setTranscript([
        { speaker: 'Charlie', message: "Hi there! I'm Charlie, your AI creator assistant. What would you like help with today?" }
      ])
    } catch (error) {
      console.error('Error ending conversation:', error)
    }
  }

  const generateVideo = async () => {
    if (!scriptInput.trim()) {
      setVideoError('Please enter a script first')
      return
    }

    setIsGeneratingVideo(true)
    setVideoError('')
    
    try {
      const response = await fetch('https://tavusapi.com/v2/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': TAVUS_API_KEY
        },
        body: JSON.stringify({
          replica_id: 'rb17cf590e15',
          script: scriptInput
        })
      })

      if (!response.ok) {
        const errorData = await response.text()
        throw new Error(`HTTP error! status: ${response.status} - ${errorData}`)
      }

      const data = await response.json()
      setGeneratedVideo(data)
      
      setTranscript(prev => [...prev, {
        speaker: 'System',
        message: `Video generation started! Video ID: ${data.video_id}`
      }])
      
      // Poll for video completion
      pollVideoStatus(data.video_id)
      
    } catch (error) {
      console.error('Error generating video:', error)
      setVideoError(error instanceof Error ? error.message : 'Failed to generate video')
    } finally {
      setIsGeneratingVideo(false)
    }
  }

  const pollVideoStatus = async (videoId: string) => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`https://tavusapi.com/v2/videos/${videoId}`, {
          headers: {
            'x-api-key': TAVUS_API_KEY
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          setGeneratedVideo(data)
          
          if (data.status === 'completed') {
            setTranscript(prev => [...prev, {
              speaker: 'System',
              message: 'Video generation completed! You can now download your video.'
            }])
          } else if (data.status === 'failed') {
            setVideoError('Video generation failed')
          } else {
            // Continue polling
            setTimeout(checkStatus, 5000)
          }
        }
      } catch (error) {
        console.error('Error checking video status:', error)
      }
    }
    
    checkStatus()
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
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

        {/* Quick Start Button (when not connected) */}
        {!isConnected && (
          <Card className="max-w-md mx-auto mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">Connect to Charlie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-green-500 mr-2" />
                  <p className="text-sm text-green-700">API keys are pre-configured for demo</p>
                </div>
              </div>
              
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
                disabled={isLoading}
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
                        onClick={toggleRecording}
                        className={`text-white hover:bg-white/20 ${isRecording ? 'bg-red-500/20' : ''}`}
                      >
                        {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
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
                    
                    {isRecording && (
                      <div className="mt-2 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          <span className="text-xs">Recording & Transcribing...</span>
                        </div>
                      </div>
                    )}
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
                    {isRecording && (
                      <div className="ml-auto flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-500">Live</span>
                      </div>
                    )}
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

              {/* Video Generation */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>🎬 Generate Video with Script</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Enter your script here..."
                    value={scriptInput}
                    onChange={(e) => setScriptInput(e.target.value)}
                    className="min-h-[100px]"
                  />
                  
                  {videoError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-700">{videoError}</p>
                    </div>
                  )}
                  
                  <Button
                    onClick={generateVideo}
                    disabled={isGeneratingVideo || !scriptInput.trim()}
                    className="w-full gradient-bg text-white"
                  >
                    {isGeneratingVideo ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Video...
                      </>
                    ) : (
                      <>
                        <Video className="mr-2 h-4 w-4" />
                        Generate Video
                      </>
                    )}
                  </Button>
                  
                  {generatedVideo && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-green-800">
                            Video Status: {generatedVideo.status}
                          </p>
                          <p className="text-xs text-green-600">
                            Video ID: {generatedVideo.video_id}
                          </p>
                        </div>
                        {generatedVideo.download_url && (
                          <Button
                            size="sm"
                            onClick={() => window.open(generatedVideo.download_url, '_blank')}
                            className="bg-green-600 hover:bg-green-700 text-white"
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
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
            </div>
          </div>
        )}

        {/* Features Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What Charlie Can Help You With</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Zap className="h-8 w-8 text-purple-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Real-time Transcription</h4>
              <p className="text-sm text-gray-600">Powered by ElevenLabs for natural speech processing</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Video className="h-8 w-8 text-blue-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">AI Video Generation</h4>
              <p className="text-sm text-gray-600">Create professional videos from scripts using Tavus</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <BarChart3 className="h-8 w-8 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Automated Workflow</h4>
              <p className="text-sm text-gray-600">Streamline your entire content creation process</p>
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
                <li>Click "Start Conversation" to connect (API keys are pre-configured)</li>
                <li>Click the microphone button to enable real-time transcription</li>
                <li>Use the script generator to create videos with Tavus AI</li>
                <li>Try the Quick Actions for common creator tasks</li>
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