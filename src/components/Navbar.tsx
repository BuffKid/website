'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Menu, X, Code, Laptop, Layers, Rocket, Globe, Zap } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    {
      title: 'Basics',
      items: [
        { name: 'HTML', href: '/html', icon: Globe, description: 'Structure and markup' },
        { name: 'CSS', href: '/css', icon: Zap, description: 'Styling and design' },
        { name: 'JavaScript', href: '/js', icon: Code, description: 'Interactive functionality' }
      ]
    },
    {
      title: 'Advanced',
      items: [
        { name: 'Popular Languages', href: '/popular-languages', icon: Laptop, description: 'Modern programming languages' },
        { name: 'Frameworks', href: '/popular-frameworks', icon: Layers, description: 'React, Vue, Angular & more' }
      ]
    },
    {
      title: 'Deploy',
      items: [
        { name: 'Building', href: '/building', icon: Rocket, description: 'Build and optimize' },
        { name: 'Deploying', href: '/deploying', icon: Globe, description: 'Go live with your site' }
      ]
    }
  ]

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WebBuilder Pro
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {menuItems.map((menu, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      {menu.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[415px]">
                        {menu.items.map((item, itemIndex) => (
                          <NavigationMenuLink key={itemIndex} asChild>
                            <Link
                              href={item.href}
                              className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center space-x-2">
                                <item.icon className="h-4 w-4 text-blue-600" />
                                <div className="text-sm font-medium leading-none group-hover:text-blue-600 transition-colors">
                                  {item.name}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => router.push('/html')}>
                Get Started
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="relative z-50"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden"
            >
              <ScrollArea className="h-[calc(100vh-4rem)] px-2 pt-2 pb-3 bg-background border-t">
                <div className="space-y-1">
                  {menuItems.map((menu, menuIndex) => (
                    <div key={menuIndex} className="space-y-2">
                      <div className="px-3 py-2 text-sm font-medium text-muted-foreground">
                        {menu.title}
                      </div>
                      {menu.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          custom={menuIndex * 3 + itemIndex}
                          variants={menuItemVariants}
                          initial="closed"
                          animate="open"
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <item.icon className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                  <motion.div
                    custom={10}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    className="pt-4"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" onClick={() => {router.push('/html'); setIsOpen(false);}}>
                      Get Started
                    </Button>
                  </motion.div>
                </div>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar