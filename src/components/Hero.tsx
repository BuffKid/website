'use client'

import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Code, Palette, Zap, Globe, Rocket, Users } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const features = [
    { icon: Code, title: "Interactive Coding", desc: "Live code editor with instant preview" },
    { icon: Palette, title: "Beautiful Design", desc: "Learn modern CSS and styling techniques" },
    { icon: Zap, title: "Fast Learning", desc: "Quick, practical lessons that stick" },
    { icon: Rocket, title: "Deploy Ready", desc: "From code to live website" }
  ]

  const stats = [
    { number: "10K+", label: "Students" },
    { number: "50+", label: "Lessons" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 125 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              <Zap className="w-4 h-4 mr-2" />
              Learn. Build. Deploy. Repeat.
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Master Web Development
              </span>
              <br />
              <span className="text-slate-900 dark:text-white">
                From Zero to Hero
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Learn HTML, CSS, JavaScript and modern frameworks with our interactive coding environment. 
              Build real projects and deploy them live.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" onClick={() => redirect("/html")}>
                Start Learning Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Globe className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: `${index * 0.5}s` }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Code Preview */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-r from-slate-900 to-slate-800 border-0 shadow-2xl overflow-hidden">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-slate-400 text-sm ml-4">index.html</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold mb-4">Write Code</h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <div className="text-blue-400">&lt;div className=<span className="text-green-400">"hero"</span>&gt;</div>
                  <div className="text-white ml-4">&lt;h1&gt;Hello World!&lt;/h1&gt;</div>
                  <div className="text-white ml-4">&lt;p&gt;Welcome to coding&lt;/p&gt;</div>
                  <div className="text-blue-400">&lt;/div&gt;</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-white text-lg font-semibold mb-4">See Results</h3>
                <div className="bg-white rounded-lg p-4 min-h-[120px] flex flex-col justify-center">
                  <h1 className="text-2xl font-bold text-slate-900 mb-2">Hello World!</h1>
                  <p className="text-slate-600">Welcome to coding</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero