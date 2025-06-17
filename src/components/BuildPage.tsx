'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Hammer,
  Wrench,
  Cog,
  Zap,
  Package,
  Cloud,
  GitBranch,
  Server,
  Terminal,
  Layers,
  Shield,
  Rocket,
  Database,
  Globe,
  Code,
  Smartphone,
  Monitor,
  Users,
  Briefcase,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Upload,
  Settings
} from "lucide-react";

const BuildingPage = () => {
  const [selectedTool, setSelectedTool] = useState('webpack')

  const buildTools = [
    {
      id: 'webpack',
      name: 'Webpack',
      tagline: 'Static Module Bundler for Modern JavaScript',
      category: 'Build Tool',
      icon: Package,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      difficulty: 'Advanced',
      difficultyLevel: 80,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Webpack is a static module bundler for modern JavaScript applications. It builds a dependency graph and bundles modules into optimized assets.',
      features: [
        'Module bundling and code splitting',
        'Hot module replacement (HMR)',
        'Asset optimization and minification',
        'Plugin ecosystem',
        'Development server with live reload'
      ],
      jobs: '320,000+',
      salary: '$75,000 - $135,000',
      companies: ['Facebook', 'Netflix', 'Airbnb', 'Instagram', 'Microsoft'],
      learningPath: [
        'JavaScript ES6+ modules',
        'Webpack configuration basics',
        'Loaders and plugins',
        'Code splitting and optimization',
        'Advanced webpack patterns'
      ]
    },
    {
      id: 'vite',
      name: 'Vite',
      tagline: 'Next Generation Frontend Build Tool',
      category: 'Build Tool',
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 60,
      popularity: '90%',
      popularityLevel: 90,
      description: 'Vite is a build tool that provides a faster and leaner development experience for modern web projects with instant server start.',
      features: [
        'Lightning fast cold server start',
        'Instant hot module replacement',
        'Rich plugin ecosystem',
        'Optimized build with Rollup',
        'TypeScript support out of the box'
      ],
      jobs: '180,000+',
      salary: '$70,000 - $130,000',
      companies: ['Vue.js', 'Nuxt', 'SvelteKit', 'Solid', 'Qwik'],
      learningPath: [
        'Modern JavaScript fundamentals',
        'Vite project setup',
        'Plugin configuration',
        'Build optimization',
        'Framework integration'
      ]
    },
    {
      id: 'docker',
      name: 'Docker',
      tagline: 'Containerization Platform',
      category: 'DevOps',
      icon: Layers,
      gradient: 'from-blue-600 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      difficulty: 'Intermediate to Advanced',
      difficultyLevel: 75,
      popularity: '95%',
      popularityLevel: 95,
      description: 'Docker is a containerization platform that packages applications with their dependencies into lightweight, portable containers.',
      features: [
        'Application containerization',
        'Consistent environments',
        'Microservices architecture',
        'Container orchestration',
        'Multi-platform deployment'
      ],
      jobs: '450,000+',
      salary: '$85,000 - $150,000',
      companies: ['Google', 'Amazon', 'Microsoft', 'Netflix', 'Uber'],
      learningPath: [
        'Containerization concepts',
        'Dockerfile creation',
        'Docker Compose',
        'Container orchestration',
        'Production deployment'
      ]
    },
    {
      id: 'github-actions',
      name: 'GitHub Actions',
      tagline: 'Automate Your Workflow',
      category: 'CI/CD',
      icon: GitBranch,
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 65,
      popularity: '88%',
      popularityLevel: 88,
      description: 'GitHub Actions makes it easy to automate all your software workflows with CI/CD, building, testing, and deploying code.',
      features: [
        'Automated workflows',
        'Continuous integration/deployment',
        'Matrix builds and testing',
        'Marketplace of actions',
        'Event-driven automation'
      ],
      jobs: '280,000+',
      salary: '$80,000 - $140,000',
      companies: ['GitHub', 'Microsoft', 'Shopify', 'Spotify', 'Stripe'],
      learningPath: [
        'YAML workflow syntax',
        'Basic CI/CD concepts',
        'Action creation and usage',
        'Deployment strategies',
        'Advanced workflow patterns'
      ]
    },
    {
      id: 'vercel',
      name: 'Vercel',
      tagline: 'Platform for Frontend Developers',
      category: 'Deployment',
      icon: Rocket,
      gradient: 'from-black to-gray-800',
      bgGradient: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 45,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Vercel is a cloud platform for static sites and serverless functions that fits perfectly with your workflow.',
      features: [
        'Instant global deployment',
        'Automatic HTTPS and CDN',
        'Preview deployments',
        'Serverless functions',
        'Analytics and monitoring'
      ],
      jobs: '150,000+',
      salary: '$75,000 - $125,000',
      companies: ['Vercel', 'Next.js', 'TikTok', 'Hulu', 'Twitch'],
      learningPath: [
        'Git and version control',
        'Static site deployment',
        'Custom domains setup',
        'Serverless functions',
        'Performance optimization'
      ]
    },
    {
      id: 'netlify',
      name: 'Netlify',
      tagline: 'Fastest Way to Build the Fastest Sites',
      category: 'Deployment',
      icon: Globe,
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
      difficulty: 'Beginner',
      difficultyLevel: 40,
      popularity: '80%',
      popularityLevel: 80,
      description: 'Netlify is a platform that automates the deployment of modern web projects with continuous deployment from Git.',
      features: [
        'Continuous deployment',
        'Form handling',
        'Edge functions',
        'A/B testing',
        'Identity management'
      ],
      jobs: '120,000+',
      salary: '$70,000 - $120,000',
      companies: ['Netlify', 'Gatsby', 'Nuxt', 'Gridsome', 'Eleventy'],
      learningPath: [
        'Static site generators',
        'Git-based deployment',
        'Custom build commands',
        'Netlify functions',
        'JAMstack architecture'
      ]
    },
    {
      id: 'aws',
      name: 'AWS',
      tagline: 'Amazon Web Services Cloud Platform',
      category: 'Cloud Platform',
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      difficulty: 'Advanced',
      difficultyLevel: 85,
      popularity: '92%',
      popularityLevel: 92,
      description: 'Amazon Web Services provides a comprehensive set of cloud computing services including computing power, storage, and databases.',
      features: [
        'Scalable cloud infrastructure',
        'Global availability zones',
        'Comprehensive service catalog',
        'Pay-as-you-use pricing',
        'Enterprise-grade security'
      ],
      jobs: '600,000+',
      salary: '$90,000 - $160,000',
      companies: ['Amazon', 'Netflix', 'Airbnb', 'NASA', 'Samsung'],
      learningPath: [
        'Cloud computing fundamentals',
        'Core AWS services',
        'Infrastructure as Code',
        'Security and compliance',
        'Architecture best practices'
      ]
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      tagline: 'Container Orchestration Platform',
      category: 'DevOps',
      icon: Settings,
      gradient: 'from-blue-500 to-purple-500',
      bgGradient: 'from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
      difficulty: 'Advanced',
      difficultyLevel: 90,
      popularity: '75%',
      popularityLevel: 75,
      description: 'Kubernetes is an open-source container orchestration platform that automates deployment, scaling, and management of applications.',
      features: [
        'Container orchestration',
        'Automatic scaling',
        'Service discovery',
        'Rolling updates',
        'Self-healing infrastructure'
      ],
      jobs: '380,000+',
      salary: '$95,000 - $170,000',
      companies: ['Google', 'Red Hat', 'IBM', 'Microsoft', 'VMware'],
      learningPath: [
        'Container fundamentals',
        'Kubernetes architecture',
        'Pod and service management',
        'Helm chart deployment',
        'Production cluster management'
      ]
    },
    {
      id: 'jest',
      name: 'Jest',
      tagline: 'JavaScript Testing Framework',
      category: 'Testing',
      icon: Shield,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 55,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase with zero configuration.',
      features: [
        'Zero configuration setup',
        'Snapshot testing',
        'Built-in code coverage',
        'Mocking capabilities',
        'Parallel test execution'
      ],
      jobs: '250,000+',
      salary: '$70,000 - $125,000',
      companies: ['Facebook', 'Airbnb', 'Twitter', 'Spotify', 'Uber'],
      learningPath: [
        'Testing fundamentals',
        'Unit testing with Jest',
        'Mocking and spies',
        'Integration testing',
        'Test-driven development'
      ]
    },
    {
      id: 'cypress',
      name: 'Cypress',
      tagline: 'End-to-End Testing Framework',
      category: 'Testing',
      icon: Monitor,
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 60,
      popularity: '78%',
      popularityLevel: 78,
      description: 'Cypress is a next generation front-end testing tool built for the modern web with time-travel debugging.',
      features: [
        'Real browser testing',
        'Time-travel debugging',
        'Automatic waiting',
        'Network traffic control',
        'Visual testing'
      ],
      jobs: '150,000+',
      salary: '$75,000 - $130,000',
      companies: ['Cypress.io', 'Disney', 'NASA', 'Sony', 'DHL'],
      learningPath: [
        'E2E testing concepts',
        'Cypress installation and setup',
        'Writing test scenarios',
        'API testing',
        'CI/CD integration'
      ]
    },
    {
      id: 'firebase',
      name: 'Firebase',
      tagline: 'Google\'s App Development Platform',
      category: 'Backend Service',
      icon: Database,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 50,
      popularity: '80%',
      popularityLevel: 80,
      description: 'Firebase is Google\'s app development platform with tools for building, improving, and growing your app.',
      features: [
        'Real-time database',
        'User authentication',
        'Cloud functions',
        'Hosting and storage',
        'Analytics and monitoring'
      ],
      jobs: '200,000+',
      salary: '$70,000 - $125,000',
      companies: ['Google', 'Spotify', 'Trivago', 'The New York Times', 'Alibaba'],
      learningPath: [
        'Firebase project setup',
        'Authentication implementation',
        'Firestore database',
        'Cloud functions',
        'Deployment and hosting'
      ]
    },
    {
      id: 'npm',
      name: 'npm',
      tagline: 'Package Manager for JavaScript',
      category: 'Package Manager',
      icon: Package,
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      difficulty: 'Beginner',
      difficultyLevel: 35,
      popularity: '95%',
      popularityLevel: 95,
      description: 'npm is the package manager for JavaScript and the world\'s largest software registry with over 2 million packages.',
      features: [
        'Package installation and management',
        'Dependency resolution',
        'Version control',
        'Script running',
        'Private registry support'
      ],
      jobs: '400,000+',
      salary: '$60,000 - $110,000',
      companies: ['npm Inc.', 'GitHub', 'Microsoft', 'Node.js', 'Facebook'],
      learningPath: [
        'Package.json understanding',
        'Installing and updating packages',
        'Semantic versioning',
        'Publishing packages',
        'Advanced npm features'
      ]
    }
  ];

  const currentTool = buildTools.find(tool => tool.id === selectedTool)

  const stats = [
    {
      icon: Hammer,
      label: 'Build Tools',
      value: '500+',
      description: 'Available build tools'
    },
    {
      icon: Users,
      label: 'Developers',
      value: '50M+',
      description: 'Using modern build tools'
    },
    {
      icon: TrendingUp,
      label: 'Productivity',
      value: '5x',
      description: 'Faster development cycles'
    },
    {
      icon: Star,
      label: 'Deployment Speed',
      value: '10x',
      description: 'Faster than traditional methods'
    }
  ]

  const categories = ['All', 'Build Tool', 'DevOps', 'CI/CD', 'Deployment', 'Cloud Platform', 'Testing', 'Backend Service', 'Package Manager']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTools = selectedCategory === 'All' 
    ? buildTools 
    : buildTools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
              Development & Deployment Tools
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Build & Deploy Tools
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover the essential tools that power modern web development. From build systems and CI/CD 
              pipelines to cloud platforms and testing frameworks that streamline your workflow.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mb-4">
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

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white" 
                  : "hover:bg-teal-50 dark:hover:bg-teal-900/20"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Tool Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedTool(tool.id)}
                className="cursor-pointer"
              >
                <Card className={`p-6 h-full transition-all duration-300 ${
                  selectedTool === tool.id 
                    ? 'ring-2 ring-teal-500 shadow-lg' 
                    : 'hover:shadow-lg'
                } bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${tool.gradient} rounded-lg`}>
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {tool.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Difficulty</span>
                        <span className="font-medium">{tool.difficulty}</span>
                      </div>
                      <Progress value={tool.difficultyLevel} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Popularity</span>
                        <span className="font-medium">{tool.popularity}</span>
                      </div>
                      <Progress value={tool.popularityLevel} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Jobs Available</span>
                      <span className="font-bold text-green-600">{tool.jobs}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Tool View */}
          {currentTool && (
            <motion.div
              key={selectedTool}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Card className={`overflow-hidden bg-gradient-to-br ${currentTool.bgGradient}`}>
                <div className={`bg-gradient-to-r ${currentTool.gradient} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-white/20 text-white border-0">
                      {currentTool.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <currentTool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{currentTool.name}</h2>
                      <p className="text-xl text-white/80">{currentTool.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                    {currentTool.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {currentTool.features.map((feature, index) => (
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
                          <div className="font-bold text-green-600">{currentTool.salary}</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Available Jobs</div>
                          <div className="font-bold text-blue-600">{currentTool.jobs}</div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Path */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Learning Path</h3>
                      <ol className="space-y-2">
                        {currentTool.learningPath.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
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
                      {currentTool.companies.map((company, index) => (
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

          {/* Development Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Modern Development Pipeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Develop</h3>
                  <p className="text-teal-100">Write code with modern build tools like Vite or Webpack for fast development.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Test</h3>
                  <p className="text-teal-100">Ensure code quality with Jest and Cypress for comprehensive testing.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Deploy</h3>
                  <p className="text-teal-100">Automated deployment with CI/CD pipelines and cloud platforms.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scale</h3>
                  <p className="text-teal-100">Scale your applications with container orchestration and cloud services.</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-white text-teal-600 hover:bg-teal-50" onClick={() => redirect('deploying')}>
                  Start Deploying <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BuildingPage