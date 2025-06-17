'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Rocket,
  Globe,
  Cloud,
  GitBranch,
  CheckCircle,
  ArrowRight,
  Upload,
  Server,
  Layers,
  Zap,
  Users,
  TrendingUp,
  Star,
  LucideIcon
} from "lucide-react";

// Define the interface for a deployment tool
interface DeployTool {
  id: string;
  name: string;
  tagline: string;
  category: string;
  icon: LucideIcon;
  gradient: string;
  bgGradient: string;
  difficulty: string;
  difficultyLevel: number;
  popularity: string;
  popularityLevel: number;
  description: string;
  features: string[];
  jobs: string;
  salary: string;
  companies: string[];
  learningPath: string[];
}

// Define the interface for a stat
interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
}

const DeployingPage = () => {
  const [selectedTool, setSelectedTool] = useState<string>('vercel')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const deployTools: DeployTool[] = [
    {
      id: 'vercel',
      name: 'Vercel',
      tagline: 'Platform for Frontend Developers',
      category: 'Deployment Platform',
      icon: Rocket,
      gradient: 'from-black to-gray-800',
      bgGradient: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 45,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Vercel is a cloud platform for static sites and serverless functions, offering seamless deployment and scaling.',
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
      category: 'Deployment Platform',
      icon: Globe,
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
      difficulty: 'Beginner',
      difficultyLevel: 40,
      popularity: '80%',
      popularityLevel: 80,
      description: 'Netlify automates deployment of modern web projects with continuous deployment from Git.',
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
      description: 'AWS offers a comprehensive set of cloud services for deploying and scaling applications globally.',
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
      description: 'GitHub Actions automates software workflows with CI/CD, enabling seamless build, test, and deployment.',
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
      id: 'heroku',
      name: 'Heroku',
      tagline: 'Cloud Platform as a Service',
      category: 'Deployment Platform',
      icon: Server,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 50,
      popularity: '75%',
      popularityLevel: 75,
      description: 'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.',
      features: [
        'Easy app deployment',
        'Automatic scaling',
        'Add-on ecosystem',
        'Database integration',
        'Git-based deployment'
      ],
      jobs: '100,000+',
      salary: '$70,000 - $130,000',
      companies: ['Heroku', 'Salesforce', 'Postmates', 'Duolingo', 'Robinhood'],
      learningPath: [
        'Heroku CLI setup',
        'Git integration',
        'App deployment basics',
        'Add-ons and services',
        'Scaling and monitoring'
      ]
    }
  ];

  const currentTool: DeployTool | undefined = deployTools.find(tool => tool.id === selectedTool)

  const stats: Stat[] = [
    {
      icon: Rocket,
      label: 'Deployment Platforms',
      value: '200+',
      description: 'Available deployment tools'
    },
    {
      icon: Users,
      label: 'Developers',
      value: '30M+',
      description: 'Using deployment tools'
    },
    {
      icon: TrendingUp,
      label: 'Deployment Speed',
      value: '10x',
      description: 'Faster than manual deployment'
    },
    {
      icon: Star,
      label: 'Uptime',
      value: '99.9%',
      description: 'Average platform reliability'
    }
  ]

  const categories: string[] = ['All', 'Deployment Platform', 'Cloud Platform', 'CI/CD']

  const filteredTools: DeployTool[] = selectedCategory === 'All' 
    ? deployTools 
    : deployTools.filter(tool => tool.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
              Deployment Tools & Platforms
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Deploy & Scale
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore powerful tools and platforms for deploying and scaling your applications with ease, from serverless solutions to robust cloud infrastructure.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mb-4">
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
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white" 
                  : "hover:bg-pink-50 dark:hover:bg-pink-900/20"
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
                    ? 'ring-2 ring-pink-500 shadow-lg' 
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
                            <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
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

          {/* Deployment Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Modern Deployment Pipeline</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GitBranch className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Integrate</h3>
                  <p className="text-pink-100">Automate builds and tests with CI/CD tools like GitHub Actions.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Deploy</h3>
                  <p className="text-pink-100">Push code to platforms like Vercel or Netlify for instant deployment.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Scale</h3>
                  <p className="text-pink-100">Leverage cloud platforms like AWS for scalable infrastructure.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Optimize</h3>
                  <p className="text-pink-100">Monitor and optimize performance with analytics and monitoring tools.</p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-white text-pink-600 hover:bg-pink-50" onClick={() => redirect('/html')}>
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DeployingPage