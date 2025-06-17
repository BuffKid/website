'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Play, Copy, RotateCcw, Code, Zap, Database, Globe, Settings, Activity } from 'lucide-react'

const JavaScriptPage = () => {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Interactive Demo</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 18px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .output {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: monospace;
            font-size: 16px;
            min-height: 50px;
        }
        
        input {
            padding: 10px;
            border: none;
            border-radius: 5px;
            margin: 10px;
            font-size: 16px;
        }
        
        .counter {
            font-size: 2em;
            margin: 20px 0;
            color: #ffd700;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JavaScript in Action!</h1>
        
        <div class="counter" id="counter">Count: 0</div>
        <button class="button" onclick="incrementCounter()">Increment</button>
        <button class="button" onclick="decrementCounter()">Decrement</button>
        <button class="button" onclick="resetCounter()">Reset</button>
        
        <hr style="margin: 30px 0; border: 1px solid rgba(255,255,255,0.3);">
        
        <input type="text" id="nameInput" placeholder="Enter your name">
        <button class="button" onclick="greetUser()">Greet Me!</button>
        
        <div class="output" id="output">Click a button to see JavaScript magic!</div>
        
        <button class="button" onclick="showDateTime()">Show Date/Time</button>
        <button class="button" onclick="generateRandomColor()">Random Color</button>
        <button class="button" onclick="calculateFactorial()">Calculate 5!</button>
    </div>

    <script>
        let count = 0;
        
        function incrementCounter() {
            count++;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function decrementCounter() {
            count--;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function resetCounter() {
            count = 0;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function greetUser() {
            const name = document.getElementById('nameInput').value;
            const output = document.getElementById('output');
            if (name) {
                output.innerHTML = '👋 Hello, ' + name + '! Welcome to JavaScript!';
            } else {
                output.innerHTML = '⚠️ Please enter your name first!';
            }
        }
        
        function showDateTime() {
            const now = new Date();
            const output = document.getElementById('output');
            output.innerHTML = '📅 Current date and time:<br>' + now.toLocaleString();
        }
        
        function generateRandomColor() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = 'linear-gradient(135deg, ' + randomColor + ', #764ba2)';
            document.getElementById('output').innerHTML = '🎨 Background changed to: ' + randomColor;
        }
        
        function calculateFactorial() {
            function factorial(n) {
                if (n <= 1) return 1;
                return n * factorial(n - 1);
            }
            const result = factorial(5);
            document.getElementById('output').innerHTML = '🧮 Factorial of 5 is: ' + result;
        }
    </script>
</body>
</html>`)

  const [activeExample, setActiveExample] = useState('interactive')

  const examples = {
    interactive: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Interactive Demo</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
        }
        
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 18px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .output {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: monospace;
            font-size: 16px;
            min-height: 50px;
        }
        
        input {
            padding: 10px;
            border: none;
            border-radius: 5px;
            margin: 10px;
            font-size: 16px;
        }
        
        .counter {
            font-size: 2em;
            margin: 20px 0;
            color: #ffd700;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>JavaScript in Action!</h1>
        
        <div class="counter" id="counter">Count: 0</div>
        <button class="button" onclick="incrementCounter()">Increment</button>
        <button class="button" onclick="decrementCounter()">Decrement</button>
        <button class="button" onclick="resetCounter()">Reset</button>
        
        <hr style="margin: 30px 0; border: 1px solid rgba(255,255,255,0.3);">
        
        <input type="text" id="nameInput" placeholder="Enter your name">
        <button class="button" onclick="greetUser()">Greet Me!</button>
        
        <div class="output" id="output">Click a button to see JavaScript magic!</div>
        
        <button class="button" onclick="showDateTime()">Show Date/Time</button>
        <button class="button" onclick="generateRandomColor()">Random Color</button>
        <button class="button" onclick="calculateFactorial()">Calculate 5!</button>
    </div>

    <script>
        let count = 0;
        
        function incrementCounter() {
            count++;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function decrementCounter() {
            count--;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function resetCounter() {
            count = 0;
            document.getElementById('counter').textContent = 'Count: ' + count;
        }
        
        function greetUser() {
            const name = document.getElementById('nameInput').value;
            const output = document.getElementById('output');
            if (name) {
                output.innerHTML = '👋 Hello, ' + name + '! Welcome to JavaScript!';
            } else {
                output.innerHTML = '⚠️ Please enter your name first!';
            }
        }
        
        function showDateTime() {
            const now = new Date();
            const output = document.getElementById('output');
            output.innerHTML = '📅 Current date and time:<br>' + now.toLocaleString();
        }
        
        function generateRandomColor() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = 'linear-gradient(135deg, ' + randomColor + ', #764ba2)';
            document.getElementById('output').innerHTML = '🎨 Background changed to: ' + randomColor;
        }
        
        function calculateFactorial() {
            function factorial(n) {
                if (n <= 1) return 1;
                return n * factorial(n - 1);
            }
            const result = factorial(5);
            document.getElementById('output').innerHTML = '🧮 Factorial of 5 is: ' + result;
        }
    </script>
</body>
</html>`,

    arrays: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Arrays & Objects</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            font-family: Arial, sans-serif;
            color: white;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .button {
            background: linear-gradient(45deg, #3b82f6, #1d4ed8);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .output {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: monospace;
            font-size: 14px;
            min-height: 100px;
            white-space: pre-wrap;
        }
        
        input {
            padding: 10px;
            border: none;
            border-radius: 5px;
            margin: 5px;
            font-size: 16px;
        }
        
        h1 { text-align: center; font-size: 2.5em; margin-bottom: 30px; }
        h2 { color: #ffd700; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Arrays & Objects Playground</h1>
        
        <h2>🔢 Array Operations</h2>
        <input type="text" id="arrayInput" placeholder="Enter items separated by commas">
        <button class="button" onclick="createArray()">Create Array</button>
        <button class="button" onclick="sortArray()">Sort Array</button>
        <button class="button" onclick="reverseArray()">Reverse Array</button>
        <button class="button" onclick="shuffleArray()">Shuffle Array</button>
        
        <h2>👤 Person Object Demo</h2>
        <input type="text" id="nameInput" placeholder="Name">
        <input type="number" id="ageInput" placeholder="Age">
        <input type="text" id="cityInput" placeholder="City">
        <button class="button" onclick="createPerson()">Create Person</button>
        <button class="button" onclick="showPersonInfo()">Show Info</button>
        
        <div class="output" id="output">Ready to explore arrays and objects!</div>
    </div>

    <script>
        let currentArray = [];
        let currentPerson = {};
        
        function createArray() {
            const input = document.getElementById('arrayInput').value;
            if (input) {
                currentArray = input.split(',').map(item => item.trim());
                updateOutput('Array created: [' + currentArray.join(', ') + ']');
            } else {
                currentArray = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
                updateOutput('Sample array created: [' + currentArray.join(', ') + ']');
            }
        }
        
        function sortArray() {
            if (currentArray.length === 0) {
                updateOutput('Please create an array first!');
                return;
            }
            currentArray.sort();
            updateOutput('Sorted array: [' + currentArray.join(', ') + ']');
        }
        
        function reverseArray() {
            if (currentArray.length === 0) {
                updateOutput('Please create an array first!');
                return;
            }
            currentArray.reverse();
            updateOutput('Reversed array: [' + currentArray.join(', ') + ']');
        }
        
        function shuffleArray() {
            if (currentArray.length === 0) {
                updateOutput('Please create an array first!');
                return;
            }
            for (let i = currentArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [currentArray[i], currentArray[j]] = [currentArray[j], currentArray[i]];
            }
            updateOutput('Shuffled array: [' + currentArray.join(', ') + ']');
        }
        
        function createPerson() {
            const name = document.getElementById('nameInput').value;
            const age = document.getElementById('ageInput').value;
            const city = document.getElementById('cityInput').value;
            
            if (name && age && city) {
                currentPerson = {
                    name: name,
                    age: parseInt(age),
                    city: city,
                    greet: function() {
                        return 'Hello, I am ' + this.name + ' from ' + this.city;
                    }
                };
                updateOutput('Person object created successfully!\\nName: ' + name + '\\nAge: ' + age + '\\nCity: ' + city);
            } else {
                updateOutput('Please fill in all fields to create a person object.');
            }
        }
        
        function showPersonInfo() {
            if (Object.keys(currentPerson).length === 0) {
                updateOutput('Please create a person object first!');
                return;
            }
            
            const info = 'Person Details:\\n' +
                        'Name: ' + currentPerson.name + '\\n' +
                        'Age: ' + currentPerson.age + '\\n' +
                        'City: ' + currentPerson.city + '\\n' +
                        'Greeting: ' + currentPerson.greet();
            
            updateOutput(info);
        }
        
        function updateOutput(message) {
            document.getElementById('output').textContent = message;
        }
    </script>
</body>
</html>`,

    async: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Async JavaScript Demo</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: radial-gradient(circle, #667eea, #764ba2);
            font-family: Arial, sans-serif;
            color: white;
        }
        
        .container {
            max-width: 700px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .button {
            background: linear-gradient(45deg, #10b981, #059669);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            font-size: 16px;
            margin: 10px;
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        .button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
        
        .output {
            background: rgba(0, 0, 0, 0.3);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            font-family: monospace;
            font-size: 14px;
            min-height: 150px;
            white-space: pre-wrap;
        }
        
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255,255,255,.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        h1 { text-align: center; font-size: 2.5em; margin-bottom: 30px; }
        h2 { color: #ffd700; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Async JavaScript Magic</h1>
        
        <h2>⏰ Promises & Timers</h2>
        <button class="button" onclick="startCountdown()">Start Countdown</button>
        <button class="button" onclick="fetchJoke()">Fetch Random Joke</button>
        <button class="button" onclick="simulateApiCall()">Simulate API Call</button>
        <button class="button" onclick="chainPromises()">Chain Promises</button>
        
        <div class="output" id="output">Click a button to see async operations in action!</div>
        
        <h2>🎲 Random Number Generator</h2>
        <button class="button" id="generateBtn" onclick="generateRandomNumbers()">Generate Numbers</button>
    </div>

    <script>
        let isGenerating = false;
        
        function startCountdown() {
            updateOutput('Starting countdown...');
            let count = 5;
            
            const interval = setInterval(() => {
                updateOutput('Countdown: ' + count);
                count--;
                
                if (count < 0) {
                    clearInterval(interval);
                    updateOutput('Countdown: 0\\n🎉 Countdown finished!');
                }
            }, 1000);
        }
        
        async function fetchJoke() {
            updateOutput('🔄 Fetching a joke for you...');
            
            try {
                // Simulate fetching a joke (since we can't make real API calls in this demo)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const jokes = [
                    'Why do programmers prefer dark mode? Because light attracts bugs!',
                    'How many programmers does it take to change a light bulb? None, that is a hardware problem.',
                    'Why do Java developers wear glasses? Because they cannot C#!',
                    'What is a programmer\\'s favorite hangout place? Foo Bar!',
                    'Why did the programmer quit his job? He did not get arrays!'
                ];
                
                const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
                updateOutput('😂 Here\\'s your joke:\\n\\n' + randomJoke);
                
            } catch (error) {
                updateOutput('❌ Failed to fetch joke: ' + error.message);
            }
        }
        
        async function simulateApiCall() {
            updateOutput('📡 Making API call...');
            
            const loadingInterval = setInterval(() => {
                const current = document.getElementById('output').textContent;
                if (current.includes('📡 Making API call')) {
                    document.getElementById('output').innerHTML = current + ' <span class="loading"></span>';
                }
            }, 500);
            
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                clearInterval(loadingInterval);
                
                const mockData = {
                    id: Math.floor(Math.random() * 1000),
                    name: 'Sample User',
                    email: 'user@example.com',
                    timestamp: new Date().toISOString()
                };
                
                updateOutput('✅ API Response received:\\n\\n' + JSON.stringify(mockData, null, 2));
                
            } catch (error) {
                clearInterval(loadingInterval);
                updateOutput('❌ API call failed: ' + error.message);
            }
        }
        
        async function chainPromises() {
            updateOutput('🔗 Chaining promises...');
            
            try {
                const step1 = await new Promise(resolve => {
                    setTimeout(() => {
                        updateOutput('Step 1: Initializing...');
                        resolve('Step 1 complete');
                    }, 800);
                });
                
                const step2 = await new Promise(resolve => {
                    setTimeout(() => {
                        updateOutput('Step 1: Initializing...\\nStep 2: Processing data...');
                        resolve('Step 2 complete');
                    }, 800);
                });
                
                const step3 = await new Promise(resolve => {
                    setTimeout(() => {
                        updateOutput('Step 1: Initializing...\\nStep 2: Processing data...\\nStep 3: Finalizing...');
                        resolve('Step 3 complete');
                    }, 800);
                });
                
                updateOutput('Step 1: Initializing... ✅\\nStep 2: Processing data... ✅\\nStep 3: Finalizing... ✅\\n\\n🎉 All promises completed successfully!');
                
            } catch (error) {
                updateOutput('❌ Promise chain failed: ' + error.message);
            }
        }
        
        async function generateRandomNumbers() {
            if (isGenerating) return;
            
            isGenerating = true;
            const btn = document.getElementById('generateBtn');
            btn.disabled = true;
            btn.textContent = 'Generating...';
            
            updateOutput('🎲 Generating random numbers...');
            
            const numbers = [];
            
            for (let i = 0; i < 5; i++) {
                await new Promise(resolve => setTimeout(resolve, 600));
                const randomNum = Math.floor(Math.random() * 100) + 1;
                numbers.push(randomNum);
                updateOutput('🎲 Generated numbers: [' + numbers.join(', ') + ']');
            }
            
            updateOutput('🎲 Generated numbers: [' + numbers.join(', ') + ']\\n\\n📊 Sum: ' + numbers.reduce((a, b) => a + b, 0) + '\\n📊 Average: ' + (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2));
            
            isGenerating = false;
            btn.disabled = false;
            btn.textContent = 'Generate Numbers';
        }
        
        function updateOutput(message) {
            document.getElementById('output').innerHTML = message;
        }
    </script>
</body>
</html>`
  }

  const concepts = [
    {
      icon: Code,
      title: "Variables & Functions",
      description: "Master JavaScript fundamentals including variables, data types, functions, and scope management.",
      topics: ["Variables (let, const, var)", "Data Types & Type Conversion", "Functions & Arrow Functions", "Scope & Closures", "Hoisting Concepts"]
    },
    {
      icon: Zap,
      title: "DOM Manipulation",
      description: "Learn to interact with HTML elements, handle events, and create dynamic user interfaces.",
      topics: ["Document Object Model", "Element Selection & Modification", "Event Handling", "Creating Dynamic Content", "Form Validation"]
    },
    {
      icon: Database,
      title: "Arrays & Objects",
      description: "Work with complex data structures, array methods, and object-oriented programming concepts.",
      topics: ["Array Methods & Iteration", "Object Properties & Methods", "Destructuring Assignment", "Spread & Rest Operators", "JSON Data Handling"]
    },
    {
      icon: Globe,
      title: "Async Programming",
      description: "Handle asynchronous operations with promises, async/await, and modern JavaScript patterns.",
      topics: ["Promises & Promise Chains", "Async/Await Syntax", "Fetch API & AJAX", "Error Handling", "Callback Functions"]
    },
    {
      icon: Settings,
      title: "ES6+ Features",
      description: "Explore modern JavaScript features including modules, classes, and advanced syntax.",
      topics: ["ES6 Modules", "Classes & Inheritance", "Template Literals", "Map & Set Collections", "Generators & Iterators"]
    },
    {
      icon: Activity,
      title: "Error Handling",
      description: "Learn debugging techniques, error handling patterns, and best practices for robust code.",
      topics: ["Try/Catch Blocks", "Error Types & Messages", "Debugging Techniques", "Console Methods", "Testing Strategies"]
    }
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  const resetCode = () => {
    setCode(examples[activeExample])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
              Programming Level
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                JavaScript Mastery
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              JavaScript is the programming language that powers the modern web. Learn to create interactive websites, 
              handle user events, manipulate data, and build dynamic applications that respond to user actions.
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
                    <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg">
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
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
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
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-4">
                <h2 className="text-2xl font-bold text-white mb-2">JavaScript Playground</h2>
                <p className="text-yellow-100">Write JavaScript code and watch it come alive with interactivity</p>
              </div>

              <div className="p-4">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Code Editor */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">JS Editor</h3>
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
                            title="JS Preview"
                            sandbox="allow-same-origin allow-scripts"
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
                  className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
                >
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">🚀 JavaScript Pro Tips:</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
                    <li>• Use const for values that won't change, let for variables that will</li>
                    <li>• Always handle errors with try/catch blocks in async operations</li>
                    <li>• Use array methods like map(), filter(), and reduce() for cleaner code</li>
                    <li>• Modern browsers support ES6+ features - embrace arrow functions and destructuring</li>
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
            <Card className="p-8 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Your JavaScript Learning Journey</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Basics & Syntax</h3>
                  <p className="text-yellow-100">Learn variables, functions, conditionals, and loops</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">DOM & Events</h3>
                  <p className="text-yellow-100">Master DOM manipulation and user interaction handling</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Concepts</h3>
                  <p className="text-yellow-100">Explore async programming, APIs, and modern frameworks</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-white text-yellow-600 hover:bg-yellow-50" onClick={() => redirect('/popular-languages')}>
                  Next: Popular Languages →
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default JavaScriptPage