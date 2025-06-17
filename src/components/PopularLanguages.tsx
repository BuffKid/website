'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
Globe,
Palette,
Zap,
Code,
Layers,
Database,
Terminal,
Server,
Coffee,
Gem,
Table,
HardDrive,
Users,
Briefcase,
TrendingUp,
Star,
CheckCircle,
ArrowRight,
Rocket
} from "lucide-react";


const PopularLanguagesPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('html')

  const languages = [
    {
        id: 'html',
        name: 'HTML',
        tagline: 'The Foundation of the Web',
        icon: Globe,
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
        difficulty: 'Beginner',
        difficultyLevel: 20,
        usage: '100%',
        usageLevel: 100,
        description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
        features: [
        'Semantic markup for accessibility',
        'Forms for user input',
        'Multimedia support',
        'Page linking and navigation',
        'SEO-friendly structure'
        ],
        jobs: '500,000+',
        salary: '$45,000 - $75,000',
        companies: ['Google', 'Facebook', 'Netflix', 'Amazon', 'Microsoft'],
        learningPath: [
        'HTML structure and syntax',
        'Text formatting and lists',
        'Links, images, multimedia',
        'Forms and input elements',
        'Semantic HTML5'
        ]
    },
    {
        id: 'css',
        name: 'CSS',
        tagline: 'Style & Design Magic',
        icon: Palette,
        gradient: 'from-blue-500 to-purple-500',
        bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
        difficulty: 'Beginner to Intermediate',
        difficultyLevel: 40,
        usage: '95%',
        usageLevel: 95,
        description: 'CSS controls the presentation and layout of web pages.',
        features: [
        'Responsive design',
        'Animations and transitions',
        'Custom properties (CSS variables)',
        'Advanced selectors',
        'Modern layouts (Flexbox, Grid)'
        ],
        jobs: '450,000+',
        salary: '$50,000 - $85,000',
        companies: ['Adobe', 'Figma', 'Shopify', 'Airbnb', 'Stripe'],
        learningPath: [
        'CSS syntax and selectors',
        'Box model and positioning',
        'Flexbox and CSS Grid',
        'Responsive design',
        'Animations and advanced styles'
        ]
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        tagline: 'The Language of Interactivity',
        icon: Zap,
        gradient: 'from-yellow-500 to-orange-500',
        bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
        difficulty: 'Intermediate',
        difficultyLevel: 60,
        usage: '98%',
        usageLevel: 98,
        description: 'JavaScript powers dynamic web pages and modern web apps.',
        features: [
        'Dynamic DOM manipulation',
        'Async programming (async/await)',
        'Modern ES6+ features',
        'Frontend frameworks',
        'Server-side development with Node.js'
        ],
        jobs: '800,000+',
        salary: '$65,000 - $120,000',
        companies: ['Meta', 'Netflix', 'Uber', 'Twitter', 'LinkedIn'],
        learningPath: [
        'JS syntax and functions',
        'DOM manipulation',
        'Async programming',
        'ES6+ features',
        'Frameworks like React'
        ]
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        tagline: 'JavaScript with Superpowers',
        icon: Code,
        gradient: 'from-blue-600 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
        difficulty: 'Intermediate to Advanced',
        difficultyLevel: 75,
        usage: '85%',
        usageLevel: 85,
        description: 'TypeScript adds static typing to JavaScript, making it safer and more maintainable.',
        features: [
        'Static type checking',
        'Better IDE support',
        'Compile-time error detection',
        'OOP features',
        'Type safety in large projects'
        ],
        jobs: '300,000+',
        salary: '$75,000 - $140,000',
        companies: ['Microsoft', 'Slack', 'Asana', 'Notion', 'Discord'],
        learningPath: [
        'TypeScript basics',
        'Types and interfaces',
        'Generics',
        'Working with JS codebases',
        'TypeScript in frameworks'
        ]
    },
    {
        id: 'react',
        name: 'React',
        tagline: 'Build User Interfaces',
        icon: Layers,
        gradient: 'from-cyan-500 to-blue-500',
        bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
        difficulty: 'Intermediate',
        difficultyLevel: 65,
        usage: '80%',
        usageLevel: 80,
        description: 'React is a JavaScript library for building modern, component-based UIs.',
        features: [
        'Component architecture',
        'Virtual DOM',
        'Hooks for state management',
        'SSR support',
        'Large ecosystem'
        ],
        jobs: '400,000+',
        salary: '$70,000 - $130,000',
        companies: ['Facebook', 'Airbnb', 'Instagram', 'WhatsApp', 'Dropbox'],
        learningPath: [
        'JSX and components',
        'Props and state',
        'React Hooks',
        'Context API',
        'React optimization'
        ]
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        tagline: 'JavaScript Everywhere',
        icon: Database,
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
        difficulty: 'Intermediate',
        difficultyLevel: 70,
        usage: '75%',
        usageLevel: 75,
        description: 'Node.js lets you run JavaScript on the server for full-stack development.',
        features: [
        'Server-side JavaScript',
        'NPM ecosystem',
        'Asynchronous architecture',
        'Real-time apps',
        'Microservices'
        ],
        jobs: '350,000+',
        salary: '$75,000 - $125,000',
        companies: ['Netflix', 'Uber', 'PayPal', 'NASA', 'Trello'],
        learningPath: [
        'Node.js basics',
        'Express.js',
        'File system & HTTP servers',
        'Database integration',
        'Authentication & deployment'
        ]
    },
    {
        id: 'python',
        name: 'Python',
        tagline: 'The Swiss Army Knife of Coding',
        icon: Terminal,
        gradient: 'from-yellow-400 to-green-400',
        bgGradient: 'from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20',
        difficulty: 'Beginner to Advanced',
        difficultyLevel: 50,
        usage: '85%',
        usageLevel: 85,
        description: 'Python is a versatile, easy-to-read language used in web development, data science, and automation.',
        features: [
        'Simple syntax',
        'Huge libraries',
        'Django/Flask for web',
        'AI and data science',
        'Cross-industry use'
        ],
        jobs: '900,000+',
        salary: '$70,000 - $150,000',
        companies: ['Google', 'Instagram', 'Spotify', 'Reddit', 'Dropbox'],
        learningPath: [
        'Python basics',
        'Django/Flask',
        'Web APIs',
        'Data handling',
        'Advanced libraries'
        ]
    },
    {
        id: 'php',
        name: 'PHP',
        tagline: 'Powering Traditional Web',
        icon: Server,
        gradient: 'from-indigo-500 to-violet-500',
        bgGradient: 'from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20',
        difficulty: 'Beginner to Intermediate',
        difficultyLevel: 40,
        usage: '70%',
        usageLevel: 70,
        description: 'PHP is a server-side scripting language used to build dynamic websites and CMS platforms.',
        features: [
        'Server-side scripting',
        'CMS integration (WordPress)',
        'Simple deployment',
        'Huge community support',
        'Fast development cycles'
        ],
        jobs: '300,000+',
        salary: '$50,000 - $100,000',
        companies: ['Facebook (legacy)', 'Wikipedia', 'WordPress', 'Slack', 'Tumblr'],
        learningPath: [
        'PHP basics',
        'Forms and sessions',
        'Database (MySQL) integration',
        'CMS platforms',
        'Building full web apps'
        ]
    },
    {
        id: 'java',
        name: 'Java',
        tagline: 'Scalable Enterprise Power',
        icon: Coffee,
        gradient: 'from-red-500 to-yellow-500',
        bgGradient: 'from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20',
        difficulty: 'Intermediate to Advanced',
        difficultyLevel: 70,
        usage: '60%',
        usageLevel: 60,
        description: 'Java is a powerful, object-oriented language used for enterprise systems and Android apps.',
        features: [
        'Cross-platform (JVM)',
        'Strong typing',
        'Enterprise-level frameworks',
        'Large scalability',
        'Widely used in finance/healthcare'
        ],
        jobs: '500,000+',
        salary: '$80,000 - $140,000',
        companies: ['Amazon', 'LinkedIn', 'Twitter', 'Google', 'Oracle'],
        learningPath: [
        'Java basics',
        'OOP principles',
        'Spring framework',
        'Database integration',
        'Concurrency and performance'
        ]
    },
    {
        id: 'ruby',
        name: 'Ruby',
        tagline: 'Elegant and Productive',
        icon: Gem,
        gradient: 'from-pink-500 to-rose-500',
        bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20',
        difficulty: 'Intermediate',
        difficultyLevel: 55,
        usage: '40%',
        usageLevel: 40,
        description: 'Ruby is known for its elegant syntax and productivity, especially with the Ruby on Rails framework.',
        features: [
        'Clean syntax',
        'Rapid development',
        'Great for startups',
        'Ruby on Rails ecosystem',
        'Active community'
        ],
        jobs: '150,000+',
        salary: '$75,000 - $125,000',
        companies: ['Shopify', 'GitHub', 'Basecamp', 'Hulu', 'Twitch'],
        learningPath: [
        'Ruby basics',
        'Rails framework',
        'Database integration',
        'MVC patterns',
        'APIs and testing'
        ]
    },
    {
        id: 'sql',
        name: 'SQL',
        tagline: 'The Language of Databases',
        icon: Table,
        gradient: 'from-sky-500 to-blue-500',
        bgGradient: 'from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20',
        difficulty: 'Beginner to Intermediate',
        difficultyLevel: 40,
        usage: '90%',
        usageLevel: 90,
        description: 'SQL is the standard language for querying and managing relational databases.',
        features: [
        'Query large datasets',
        'Data manipulation',
        'Join operations',
        'Transaction management',
        'Widely used in analytics'
        ],
        jobs: '700,000+',
        salary: '$60,000 - $110,000',
        companies: ['Microsoft', 'Google', 'Amazon', 'Facebook', 'Oracle'],
        learningPath: [
        'Basic queries',
        'Joins and subqueries',
        'Data manipulation (CRUD)',
        'Indexing and optimization',
        'Stored procedures'
        ]
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        tagline: 'NoSQL for Modern Apps',
        icon: HardDrive,
        gradient: 'from-green-500 to-teal-500',
        bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
        difficulty: 'Intermediate',
        difficultyLevel: 60,
        usage: '50%',
        usageLevel: 50,
        description: 'MongoDB is a NoSQL database known for flexibility and scalability, commonly used in modern web stacks.',
        features: [
        'Document-based storage',
        'Flexible schemas',
        'Scalable and fast',
        'JSON-like data format',
        'Great with Node.js'
        ],
        jobs: '250,000+',
        salary: '$70,000 - $130,000',
        companies: ['Uber', 'eBay', 'Forbes', 'Adobe', 'Squarespace'],
        learningPath: [
        'MongoDB basics',
        'CRUD operations',
        'Indexing and aggregation',
        'Mongoose with Node.js',
        'Scaling and sharding'
        ]
    }
  ];

  const currentLanguage = languages.find(lang => lang.id === selectedLanguage)

  const stats = [
    {
      icon: Users,
      label: 'Active Developers',
      value: '15M+',
      description: 'Web developers worldwide'
    },
    {
      icon: Briefcase,
      label: 'Job Openings',
      value: '2.5M+',
      description: 'Web development positions'
    },
    {
      icon: TrendingUp,
      label: 'Growth Rate',
      value: '22%',
      description: 'Annual job growth'
    },
    {
      icon: Star,
      label: 'Satisfaction',
      value: '85%',
      description: 'Developer satisfaction rate'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Popular Web Languages
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Master the essential languages and technologies that power the modern web. From markup and styling 
              to interactive programming and full-stack development.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 text-center bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mb-4">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Language Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {languages.map((language, index) => (
              <motion.div
                key={language.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedLanguage(language.id)}
                className="cursor-pointer"
              >
                <Card className={`p-6 h-full transition-all duration-300 ${
                  selectedLanguage === language.id 
                    ? 'ring-2 ring-indigo-500 shadow-lg' 
                    : 'hover:shadow-lg'
                } bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${language.gradient} rounded-lg`}>
                      <language.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {language.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {language.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Difficulty</span>
                        <span className="font-medium">{language.difficulty}</span>
                      </div>
                      <Progress value={language.difficultyLevel} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Market Usage</span>
                        <span className="font-medium">{language.usage}</span>
                      </div>
                      <Progress value={language.usageLevel} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Jobs Available</span>
                      <span className="font-bold text-green-600">{language.jobs}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Language View */}
          {currentLanguage && (
            <motion.div
              key={selectedLanguage}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Card className={`overflow-hidden bg-gradient-to-br ${currentLanguage.bgGradient}`}>
                <div className={`bg-gradient-to-r ${currentLanguage.gradient} p-6`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <currentLanguage.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{currentLanguage.name}</h2>
                      <p className="text-xl text-white/80">{currentLanguage.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                    {currentLanguage.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {currentLanguage.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Career Info */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Career Prospects</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Salary Range</div>
                          <div className="font-bold text-green-600">{currentLanguage.salary}</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Available Jobs</div>
                          <div className="font-bold text-blue-600">{currentLanguage.jobs}</div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Path */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Learning Path</h3>
                      <ol className="space-y-2">
                        {currentLanguage.learningPath.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                              {index + 1}
                            </div>
                            <span className="text-slate-700 dark:text-slate-300">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Used by Top Companies</h3>
                    <div className="flex flex-wrap gap-3">
                      {currentLanguage.companies.map((company, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Learning Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Start Your Web Development Journey</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Start with HTML & CSS</h3>
                    <p className="text-indigo-100">Build solid foundations with markup and styling for your websites.</p>
                    </div>

                    <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Add JavaScript & Backend</h3>
                    <p className="text-indigo-100">Bring your websites to life with interactivity and server-side logic using languages like JavaScript, Python, PHP, or Java.</p>
                    </div>

                    <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Master Frameworks</h3>
                    <p className="text-indigo-100">Build scalable applications with modern frontend and backend frameworks like React, Node.js, Django, Laravel, and Spring.</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 justify-items-center">

                    <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Manage Databases</h3>
                    <p className="text-indigo-100">Store and organize data using SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB.</p>
                    </div>

                    <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Rocket className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Advance to Full-Stack</h3>
                    <p className="text-indigo-100">Combine frontend, backend, and databases to build full-stack applications and launch complete products.</p>
                </div>
              </div>
              <div className="text-center">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50" onClick={() => redirect('/popular-frameworks')}>
                  Learn about Frameworks <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PopularLanguagesPage