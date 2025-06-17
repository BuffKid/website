'use client'

import { useState } from 'react'
import { redirect } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Play, Copy, RotateCcw, Globe, FileText, Image, Link, List, Table, Code } from 'lucide-react'

const HTMLPage = () => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is your first paragraph.</p>
    <a href="#section1">Click me!</a>
    
    <div id="section1">
        <h2>Section 1</h2>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>
</body>
</html>`)

  const [activeExample, setActiveExample] = useState('basic')

  const examples = {
    basic: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is your first paragraph.</p>
    <a href="#section1">Click me!</a>
    
    <div id="section1">
        <h2>Section 1</h2>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>
</body>
</html>`,
    
    forms: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Forms</title>
</head>
<body>
    <h1>Contact Form</h1>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        
        <input type="submit" value="Send Message">
    </form>
</body>
</html>`,

    semantic: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <section id="home">
                <h1>Welcome to My Blog</h1>
                <p>This is the main content area.</p>
            </section>
            
            <section id="about">
                <h2>About Me</h2>
                <p>I'm learning HTML!</p>
            </section>
        </article>
        
        <aside>
            <h3>Recent Posts</h3>
            <ul>
                <li>Learning HTML Basics</li>
                <li>Understanding Semantic Elements</li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>© 2025 My Website</p>
    </footer>
</body>
</html>`
  }

  const concepts = [
    {
      icon: Globe,
      title: "HTML Structure",
      description: "Learn the basic structure of HTML documents, DOCTYPE declarations, and document hierarchy.",
      topics: ["DOCTYPE Declaration", "HTML Element", "Head & Body", "Meta Tags", "Title Element"]
    },
    {
      icon: FileText,
      title: "Text Elements",
      description: "Master headings, paragraphs, and text formatting elements for content structure.",
      topics: ["Headings (h1-h6)", "Paragraphs", "Strong & Em", "Line Breaks", "Preformatted Text"]
    },
    {
      icon: Link,
      title: "Links & Navigation",
      description: "Create links, anchors, and navigation structures for connected web experiences.",
      topics: ["Anchor Tags", "Relative vs Absolute URLs", "Internal Links", "Email Links", "Download Links"]
    },
    {
      icon: Image,
      title: "Media Elements",
      description: "Embed images, videos, and audio content with proper accessibility considerations.",
      topics: ["Images & Alt Text", "Figure & Figcaption", "Video Elements", "Audio Elements", "Responsive Images"]
    },
    {
      icon: List,
      title: "Lists & Tables",
      description: "Structure data with ordered lists, unordered lists, and HTML tables.",
      topics: ["Unordered Lists", "Ordered Lists", "Description Lists", "Table Structure", "Table Headers"]
    },
    {
      icon: Code,
      title: "Forms & Input",
      description: "Build interactive forms with various input types and validation.",
      topics: ["Form Elements", "Input Types", "Labels & Fieldsets", "Form Validation", "Form Attributes"]
    }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const resetCode = () => {
    setCode(examples[activeExample as keyof typeof examples])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
              Foundation Level
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                HTML Mastery
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              HyperText Markup Language (HTML) is the backbone of every website. Learn to structure content, 
              create semantic markup, and build accessible web pages from the ground up.
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
                    <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
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
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
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
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                <h2 className="text-2xl font-bold text-white mb-2">HTML Playground</h2>
                <p className="text-orange-100">Write HTML code and see the results instantly</p>
              </div>

              <div className="p-4">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Code Editor */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">HTML Editor</h3>
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
                            title="HTML Preview"
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
                  className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800"
                >
                  <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">💡 Quick Tips:</h4>
                  <ul className="text-sm text-orange-700 dark:text-orange-400 space-y-1">
                    <li>• Always include the DOCTYPE declaration at the top</li>
                    <li>• Use semantic HTML elements for better accessibility</li>
                    <li>• Remember to close all your tags properly</li>
                    <li>• Use proper indentation to make your code readable</li>
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
            <Card className="p-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Your HTML Learning Journey</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Structure & Syntax</h3>
                  <p className="text-orange-100">Learn HTML document structure, tags, and proper syntax</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Elements & Attributes</h3>
                  <p className="text-orange-100">Master common HTML elements and their attributes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Semantic HTML</h3>
                  <p className="text-orange-100">Build accessible, meaningful markup with semantic elements</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-white text-orange-600 hover:bg-orange-50" onClick={() => redirect('/css')}>
                  Next: Learn CSS →
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HTMLPage