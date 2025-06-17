'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Layers,
  Zap,
  Shield,
  Rocket,
  Database,
  Globe,
  Code,
  Server,
  Layout,
  Smartphone,
  Cloud,
  Package,
  Users,
  Briefcase,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

const PopularFrameworksPage = () => {
  const [selectedFramework, setSelectedFramework] = useState('react')

  const frameworks = [
    {
      id: 'react',
      name: 'React',
      tagline: 'A JavaScript Library for Building UIs',
      category: 'Frontend',
      icon: Layers,
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 65,
      popularity: '95%',
      popularityLevel: 95,
      description: 'React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast, interactive user experience.',
      features: [
        'Virtual DOM for optimal performance',
        'Component-based architecture',
        'Hooks for state management',
        'Large ecosystem and community',
        'JSX syntax for intuitive development'
      ],
      jobs: '400,000+',
      salary: '$70,000 - $130,000',
      companies: ['Facebook', 'Netflix', 'Airbnb', 'Instagram', 'Dropbox'],
      learningPath: [
        'JavaScript ES6+ fundamentals',
        'JSX and component basics',
        'State management with hooks',
        'React Router for navigation',
        'Advanced patterns and optimization'
      ]
    },
    {
      id: 'vue',
      name: 'Vue.js',
      tagline: 'The Progressive JavaScript Framework',
      category: 'Frontend',
      icon: Zap,
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 50,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Vue.js is a progressive framework for building user interfaces. It\'s designed to be incrementally adoptable and easy to integrate.',
      features: [
        'Gentle learning curve',
        'Template-based syntax',
        'Reactive data binding',
        'Component composition',
        'Excellent documentation'
      ],
      jobs: '180,000+',
      salary: '$65,000 - $120,000',
      companies: ['GitLab', 'Adobe', 'BMW', 'Nintendo', 'Louis Vuitton'],
      learningPath: [
        'Vue.js basics and templates',
        'Components and props',
        'Vue Router and Vuex',
        'Composition API',
        'Vue 3 advanced features'
      ]
    },
    {
      id: 'angular',
      name: 'Angular',
      tagline: 'Platform for Building Mobile & Desktop Apps',
      category: 'Frontend',
      icon: Shield,
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      difficulty: 'Advanced',
      difficultyLevel: 80,
      popularity: '75%',
      popularityLevel: 75,
      description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
      features: [
        'Full-featured framework',
        'TypeScript by default',
        'Dependency injection',
        'Two-way data binding',
        'Powerful CLI tools'
      ],
      jobs: '220,000+',
      salary: '$75,000 - $135,000',
      companies: ['Google', 'Microsoft', 'Deutsche Bank', 'Samsung', 'UPS'],
      learningPath: [
        'TypeScript fundamentals',
        'Angular CLI and components',
        'Services and dependency injection',
        'Routing and forms',
        'Advanced Angular concepts'
      ]
    },
    {
      id: 'nextjs',
      name: 'Next.js',
      tagline: 'The React Framework for Production',
      category: 'Full-Stack',
      icon: Rocket,
      gradient: 'from-slate-700 to-slate-900',
      bgGradient: 'from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20',
      difficulty: 'Intermediate to Advanced',
      difficultyLevel: 70,
      popularity: '90%',
      popularityLevel: 90,
      description: 'Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.',
      features: [
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'API routes built-in',
        'Automatic code splitting',
        'Image optimization'
      ],
      jobs: '150,000+',
      salary: '$80,000 - $140,000',
      companies: ['Vercel', 'TikTok', 'Twitch', 'Hulu', 'Notion'],
      learningPath: [
        'React fundamentals',
        'Next.js routing and pages',
        'SSR and SSG concepts',
        'API routes and data fetching',
        'Deployment and optimization'
      ]
    },
    {
      id: 'django',
      name: 'Django',
      tagline: 'The Web Framework for Perfectionists',
      category: 'Backend',
      icon: Database,
      gradient: 'from-green-600 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 65,
      popularity: '80%',
      popularityLevel: 80,
      description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
      features: [
        'Batteries included approach',
        'Admin interface out of the box',
        'ORM for database operations',
        'Built-in security features',
        'Scalable architecture'
      ],
      jobs: '200,000+',
      salary: '$75,000 - $130,000',
      companies: ['Instagram', 'Spotify', 'YouTube', 'Dropbox', 'Pinterest'],
      learningPath: [
        'Python programming basics',
        'Django models and views',
        'Templates and forms',
        'User authentication',
        'REST APIs with Django REST framework'
      ]
    },
    {
      id: 'express',
      name: 'Express.js',
      tagline: 'Fast, Unopinionated Web Framework',
      category: 'Backend',
      icon: Server,
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 55,
      popularity: '85%',
      popularityLevel: 85,
      description: 'Express.js is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.',
      features: [
        'Lightweight and fast',
        'Middleware ecosystem',
        'RESTful API development',
        'Template engine support',
        'Large community'
      ],
      jobs: '300,000+',
      salary: '$70,000 - $125,000',
      companies: ['Uber', 'Accenture', 'IBM', 'Fox Sports', 'WhatsApp'],
      learningPath: [
        'Node.js fundamentals',
        'Express basics and routing',
        'Middleware and error handling',
        'Database integration',
        'Authentication and security'
      ]
    },
    {
      id: 'laravel',
      name: 'Laravel',
      tagline: 'The PHP Framework for Web Artisans',
      category: 'Backend',
      icon: Globe,
      gradient: 'from-red-600 to-orange-600',
      bgGradient: 'from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 60,
      popularity: '70%',
      popularityLevel: 70,
      description: 'Laravel is a web application framework with expressive, elegant syntax designed to make development enjoyable and creative.',
      features: [
        'Eloquent ORM',
        'Artisan command line',
        'Blade templating engine',
        'Built-in authentication',
        'Queue management'
      ],
      jobs: '120,000+',
      salary: '$60,000 - $110,000',
      companies: ['9GAG', 'Pfizer', 'About.com', 'Alison', 'Crowdcube'],
      learningPath: [
        'PHP fundamentals',
        'Laravel basics and MVC',
        'Eloquent ORM and migrations',
        'Authentication and authorization',
        'Advanced Laravel features'
      ]
    },
    {
      id: 'spring',
      name: 'Spring Boot',
      tagline: 'Java Framework for Enterprise Applications',
      category: 'Backend',
      icon: Code,
      gradient: 'from-green-500 to-blue-500',
      bgGradient: 'from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20',
      difficulty: 'Advanced',
      difficultyLevel: 75,
      popularity: '65%',
      popularityLevel: 65,
      description: 'Spring Boot makes it easy to create stand-alone, production-grade Spring-based applications with minimal configuration.',
      features: [
        'Auto-configuration',
        'Embedded servers',
        'Production-ready features',
        'Microservices support',
        'Strong ecosystem'
      ],
      jobs: '250,000+',
      salary: '$85,000 - $145,000',
      companies: ['Netflix', 'Amazon', 'Google', 'Microsoft', 'LinkedIn'],
      learningPath: [
        'Java fundamentals',
        'Spring core concepts',
        'Spring Boot basics',
        'Data persistence with JPA',
        'Microservices architecture'
      ]
    },
    {
      id: 'flutter',
      name: 'Flutter',
      tagline: 'UI Toolkit for Multi-Platform Apps',
      category: 'Mobile',
      icon: Smartphone,
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 65,
      popularity: '75%',
      popularityLevel: 75,
      description: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop.',
      features: [
        'Single codebase for multiple platforms',
        'Hot reload for fast development',
        'Rich widget library',
        'High performance',
        'Growing ecosystem'
      ],
      jobs: '100,000+',
      salary: '$70,000 - $125,000',
      companies: ['Google', 'Alibaba', 'BMW', 'Square', 'eBay'],
      learningPath: [
        'Dart programming language',
        'Flutter widgets and layouts',
        'State management',
        'Navigation and routing',
        'Platform-specific features'
      ]
    },
    {
      id: 'reactnative',
      name: 'React Native',
      tagline: 'Learn Once, Write Anywhere',
      category: 'Mobile',
      icon: Layout,
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      difficulty: 'Intermediate',
      difficultyLevel: 70,
      popularity: '80%',
      popularityLevel: 80,
      description: 'React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI.',
      features: [
        'Cross-platform development',
        'Native performance',
        'Code sharing with web',
        'Hot reloading',
        'Large community'
      ],
      jobs: '130,000+',
      salary: '$75,000 - $130,000',
      companies: ['Facebook', 'Instagram', 'Airbnb', 'Tesla', 'Walmart'],
      learningPath: [
        'React fundamentals',
        'React Native components',
        'Navigation libraries',
        'Native modules',
        'App deployment'
      ]
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      tagline: 'Utility-First CSS Framework',
      category: 'CSS Framework',
      icon: Sparkles,
      gradient: 'from-teal-500 to-blue-500',
      bgGradient: 'from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20',
      difficulty: 'Beginner to Intermediate',
      difficultyLevel: 40,
      popularity: '90%',
      popularityLevel: 90,
      description: 'Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.',
      features: [
        'Utility-first approach',
        'Responsive design made easy',
        'Customizable design system',
        'Small production builds',
        'Component-friendly'
      ],
      jobs: '200,000+',
      salary: '$55,000 - $100,000',
      companies: ['Netflix', 'Shopify', 'OpenAI', 'GitHub', 'Algolia'],
      learningPath: [
        'CSS fundamentals',
        'Utility classes concept',
        'Responsive design with Tailwind',
        'Custom configuration',
        'Component patterns'
      ]
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      tagline: 'The World\'s Most Popular CSS Framework',
      category: 'CSS Framework',
      icon: Package,
      gradient: 'from-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20',
      difficulty: 'Beginner',
      difficultyLevel: 30,
      popularity: '75%',
      popularityLevel: 75,
      description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
      features: [
        'Pre-built components',
        'Responsive grid system',
        'Extensive documentation',
        'Browser compatibility',
        'Large community'
      ],
      jobs: '180,000+',
      salary: '$50,000 - $90,000',
      companies: ['Twitter', 'LinkedIn', 'Spotify', 'Lyft', 'Vogue'],
      learningPath: [
        'HTML and CSS basics',
        'Bootstrap grid system',
        'Components and utilities',
        'Customization with Sass',
        'JavaScript components'
      ]
    }
  ];

  const currentFramework = frameworks.find(fw => fw.id === selectedFramework)

  const stats = [
    {
      icon: Users,
      label: 'Framework Users',
      value: '25M+',
      description: 'Developers using frameworks'
    },
    {
      icon: Briefcase,
      label: 'Framework Jobs',
      value: '1.8M+',
      description: 'Framework-specific positions'
    },
    {
      icon: TrendingUp,
      label: 'Adoption Rate',
      value: '78%',
      description: 'Projects using frameworks'
    },
    {
      icon: Star,
      label: 'Productivity Boost',
      value: '3x',
      description: 'Faster development time'
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'Mobile', 'CSS Framework']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredFrameworks = selectedCategory === 'All' 
    ? frameworks 
    : frameworks.filter(fw => fw.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-900/20 dark:to-cyan-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
              Web Development Frameworks
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">
                Popular Web Frameworks
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Discover the most powerful frameworks and libraries that accelerate web development. 
              From frontend UI libraries to full-stack solutions and mobile app frameworks.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mb-4">
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
                  ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white" 
                  : "hover:bg-violet-50 dark:hover:bg-violet-900/20"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Framework Selection Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filteredFrameworks.map((framework, index) => (
              <motion.div
                key={framework.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedFramework(framework.id)}
                className="cursor-pointer"
              >
                <Card className={`p-6 h-full transition-all duration-300 ${
                  selectedFramework === framework.id 
                    ? 'ring-2 ring-violet-500 shadow-lg' 
                    : 'hover:shadow-lg'
                } bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {framework.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 bg-gradient-to-br ${framework.gradient} rounded-lg`}>
                      <framework.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {framework.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {framework.tagline}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Difficulty</span>
                        <span className="font-medium">{framework.difficulty}</span>
                      </div>
                      <Progress value={framework.difficultyLevel} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-600 dark:text-slate-300">Popularity</span>
                        <span className="font-medium">{framework.popularity}</span>
                      </div>
                      <Progress value={framework.popularityLevel} className="h-2" />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 dark:text-slate-300">Jobs Available</span>
                      <span className="font-bold text-green-600">{framework.jobs}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Framework View */}
          {currentFramework && (
            <motion.div
              key={selectedFramework}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <Card className={`overflow-hidden bg-gradient-to-br ${currentFramework.bgGradient}`}>
                <div className={`bg-gradient-to-r ${currentFramework.gradient} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-white/20 text-white border-0">
                      {currentFramework.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <currentFramework.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{currentFramework.name}</h2>
                      <p className="text-xl text-white/80">{currentFramework.tagline}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                    {currentFramework.description}
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Key Features</h3>
                      <ul className="space-y-2">
                        {currentFramework.features.map((feature, index) => (
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
                          <div className="font-bold text-green-600">{currentFramework.salary}</div>
                        </div>
                        <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                          <div className="text-sm text-slate-600 dark:text-slate-400">Available Jobs</div>
                          <div className="font-bold text-blue-600">{currentFramework.jobs}</div>
                        </div>
                      </div>
                    </div>

                    {/* Learning Path */}
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Learning Path</h3>
                      <ol className="space-y-2">
                        {currentFramework.learningPath.map((step, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
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
                      {currentFramework.companies.map((company, index) => (
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

          {/* Framework Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-violet-600 to-cyan-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Master Modern Web Frameworks</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Frontend</h3>
                  <p className="text-violet-100">Start with React, Vue, or Angular to build interactive user interfaces.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Build Your Backend</h3>
                  <p className="text-violet-100">Master Node.js, Django, or Spring Boot to create robust server-side applications.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Go Full-Stack</h3>
                  <p className="text-violet-100">Combine frontend and backend with Next.js or similar full-stack frameworks.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expand to Mobile</h3>
                  <p className="text-violet-100">Build cross-platform mobile apps with React Native or Flutter.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Style with Confidence</h3>
                  <p className="text-violet-100">Create beautiful UIs with modern CSS frameworks like Tailwind CSS or Bootstrap.</p>
                </div>
              </div>
              <div className="text-center">
                <Button className="bg-white text-violet-600 hover:bg-violet-50" onClick={() => redirect("/building")}>
                  Start Building <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PopularFrameworksPage