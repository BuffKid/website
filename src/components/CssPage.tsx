'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Play, Copy, RotateCcw, Palette, Layout, Zap, Layers, Grid, Sparkles } from 'lucide-react'

const CSSPage = () => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Styling Demo</title>
    <style>
        /* Your CSS goes here */
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .card {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Beautiful CSS Styling</h1>
        <div class="card">
            <h3>Card Component</h3>
            <p>This card has a glass morphism effect with hover animations.</p>
            <button class="button">Click Me!</button>
        </div>
        <div class="card">
            <h3>Another Card</h3>
            <p>CSS makes everything beautiful with colors, animations, and layouts.</p>
            <button class="button">Learn More</button>
        </div>
    </div>
</body>
</html>`)

  const [activeExample, setActiveExample] = useState('styling')

  const examples = {
    styling: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Styling Demo</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .card {
            background: rgba(255, 255, 255, 0.2);
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Beautiful CSS Styling</h1>
        <div class="card">
            <h3>Card Component</h3>
            <p>This card has a glass morphism effect with hover animations.</p>
            <button class="button">Click Me!</button>
        </div>
        <div class="card">
            <h3>Another Card</h3>
            <p>CSS makes everything beautiful with colors, animations, and layouts.</p>
            <button class="button">Learn More</button>
        </div>
    </div>
</body>
</html>`,

    flexbox: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Flexbox Layout</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #667eea, #764ba2);
            padding: 20px;
        }
        
        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            margin: 20px 0;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .flex-item {
            background: linear-gradient(45deg, #3b82f6, #1d4ed8);
            color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            flex: 1;
            margin: 0 10px;
            transition: transform 0.3s ease;
        }
        
        .flex-item:hover {
            transform: translateY(-5px);
        }
        
        .flex-item:first-child {
            margin-left: 0;
        }
        
        .flex-item:last-child {
            margin-right: 0;
        }
        
        .vertical-flex {
            display: flex;
            flex-direction: column;
            height: 300px;
            justify-content: space-around;
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            margin: 20px 0;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .vertical-item {
            background: linear-gradient(45deg, #10b981, #059669);
            color: white;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .vertical-item:hover {
            transform: scale(1.05);
        }
        
        h1 {
            text-align: center;
            color: white;
            font-size: 2.5em;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <h1>Flexbox Magic</h1>
    
    <div class="flex-container">
        <div class="flex-item">Flexible Item 1</div>
        <div class="flex-item">Flexible Item 2</div>
        <div class="flex-item">Flexible Item 3</div>
    </div>
    
    <div class="vertical-flex">
        <div class="vertical-item">Vertical Flex Item 1</div>
        <div class="vertical-item">Vertical Flex Item 2</div>
        <div class="vertical-item">Vertical Flex Item 3</div>
    </div>
</body>
</html>`,

    animations: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Animations</title>
    <style>
        body {
            margin: 0;
            padding: 40px;
            background: radial-gradient(circle, #667eea, #764ba2);
            font-family: Arial, sans-serif;
            min-height: 100vh;
        }
        
        h1 {
            text-align: center;
            color: white;
            font-size: 3em;
            margin-bottom: 40px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .animation-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 30px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .animation-item {
            text-align: center;
        }
        
        .bounce-box {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            border-radius: 15px;
            animation: bounce 2s infinite;
            margin-bottom: 15px;
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        
        .spin-box {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            border-radius: 50%;
            animation: spin 3s linear infinite;
            margin-bottom: 15px;
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        .pulse-box {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #feca57, #ff9ff3);
            border-radius: 15px;
            animation: pulse 1.5s ease-in-out infinite;
            margin-bottom: 15px;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        .slide-box {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #a8edea, #fed6e3);
            border-radius: 15px;
            animation: slide 3s ease-in-out infinite;
            margin-bottom: 15px;
        }
        
        @keyframes slide {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(50px); }
        }
        
        .label {
            color: white;
            font-weight: bold;
            font-size: 1.1em;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <h1>CSS Animation Gallery</h1>
    <div class="animation-container">
        <div class="animation-item">
            <div class="bounce-box"></div>
            <div class="label">Bounce</div>
        </div>
        <div class="animation-item">
            <div class="spin-box"></div>
            <div class="label">Spin</div>
        </div>
        <div class="animation-item">
            <div class="pulse-box"></div>
            <div class="label">Pulse</div>
        </div>
        <div class="animation-item">
            <div class="slide-box"></div>
            <div class="label">Slide</div>
        </div>
    </div>
</body>
</html>`
  }

  const concepts = [
    {
      icon: Palette,
      title: "Colors & Typography",
      description: "Master color theory, gradients, typography, and visual hierarchy to create stunning designs.",
      topics: ["Color Properties", "Linear & Radial Gradients", "Font Families & Web Fonts", "Text Styling & Effects", "Color Variables"]
    },
    {
      icon: Layout,
      title: "Layout Systems",
      description: "Learn modern layout techniques with Flexbox, CSS Grid, and positioning for responsive designs.",
      topics: ["Flexbox Layout", "CSS Grid System", "Positioning & Z-index", "Float & Clear", "Display Properties"]
    },
    {
      icon: Zap,
      title: "Animations & Transitions",
      description: "Bring your designs to life with smooth animations, transitions, and interactive effects.",
      topics: ["CSS Transitions", "Keyframe Animations", "Transform Properties", "Timing Functions", "Animation Controls"]
    },
    {
      icon: Layers,
      title: "Box Model & Spacing",
      description: "Understand the CSS box model, margins, padding, borders, and element sizing fundamentals.",
      topics: ["Box Model Concept", "Margin & Padding", "Border Properties", "Width & Height", "Box Sizing"]
    },
    {
      icon: Grid,
      title: "Responsive Design",
      description: "Create layouts that adapt to all devices using media queries and fluid design principles.",
      topics: ["Media Queries", "Viewport Units", "Flexible Images", "Mobile-First Design", "Breakpoint Strategy"]
    },
    {
      icon: Sparkles,
      title: "Advanced Effects",
      description: "Explore cutting-edge CSS features like filters, backdrop effects, and modern properties.",
      topics: ["CSS Filters & Effects", "Backdrop Filter", "Clip Path & Masks", "CSS Custom Properties", "Modern CSS Features"]
    }
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const resetCode = () => {
    setCode(examples[activeExample])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900 dark:to-blue-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
              Styling Level
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                CSS Mastery
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Cascading Style Sheets (CSS) is the language that brings websites to life. Learn to create beautiful, 
              responsive designs with modern layouts, animations, and visual effects that captivate users.
            </p>
          </motion.div>

          {/* Concepts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {concepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="p-6 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                      <concept.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {concept.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {concept.description}
                  </p>
                  <div className="space-y-2">
                    {concept.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{topic}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive IDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4">
                <h2 className="text-2xl font-bold text-white mb-2">CSS Playground</h2>
                <p className="text-purple-100">Write CSS code and see the visual magic happen instantly</p>
              </div>

              <div className="p-4">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Code Editor */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">CSS Editor</h3>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(code)}
                        >
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={resetCode}
                        >
                          <RotateCcw className="w-4 h-4 mr-1" />
                          Reset
                        </Button>
                      </div>
                    </div>
                    
                    <ScrollArea className="h-[380px] rounded-md border border-none">
                      <Textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="font-mono text-sm bg-slate-900 text-green-400 border-none resize-none focus:ring-0 h-full w-full"
                        placeholder="Write your code here..."
                      />
                    </ScrollArea>
                  </div>

                  {/* Live Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Live Preview</h3>
                      <Badge variant="secondary">
                        <Play className="w-3 h-3 mr-1" />
                        Live
                      </Badge>
                    </div>
                    
                    <ScrollArea className="h-[400px] rounded-md border border-none">
                      <Card className="bg-white border-2 border-dashed border-slate-300 h-full">
                        <div className="p-4">
                          <iframe
                            srcDoc={code}
                            className="w-full h-[300px]"
                            title="CSS Preview"
                            sandbox="allow-same-origin"
                          />
                        </div>
                      </Card>
                    </ScrollArea>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800"
                >
                  <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">🎨 CSS Pro Tips:</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
                    <li>• Use CSS custom properties (variables) for consistent theming</li>
                    <li>• Mobile-first approach: start with mobile styles, then add desktop</li>
                    <li>• Use flexbox for 1D layouts and CSS Grid for 2D layouts</li>
                    <li>• Add transitions to make your designs feel smooth and polished</li>
                  </ul>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Learning Path */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Your CSS Learning Journey</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Selectors & Properties</h3>
                  <p className="text-purple-100">Master CSS selectors, properties, and values for styling elements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Layout & Positioning</h3>
                  <p className="text-purple-100">Learn Flexbox, Grid, and positioning for complex layouts</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Styling</h3>
                  <p className="text-purple-100">Create animations, effects, and responsive designs</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-white text-purple-600 hover:bg-purple-50" onClick={() => redirect("/js")}>
                  Next: Learn JavaScript →
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CSSPage