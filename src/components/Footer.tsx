
'use client'
import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Email Contact */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="h-5 w-5 text-blue-400" />
            <a 
              href="mailto:contact@webuilderpro.com" 
              className="text-lg font-medium hover:text-blue-400 transition-colors"
            >
              divin.giddaluru@kindkaid.org
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-sm text-white/70"
          >
            <span>© 2025 WebBuilder Pro. Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for aspiring developers</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer