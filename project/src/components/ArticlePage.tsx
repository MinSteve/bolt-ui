import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Monitor, Terminal, Smartphone, Database, Code, ChevronRight } from 'lucide-react';

// Sample article content
const articleContent = `
# Getting Started with React

React is a JavaScript library for building user interfaces. It's maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## Why React?

React allows developers to create large web applications that can change data, without reloading the page. The main purpose of React is to be fast, scalable, and simple. It works only on user interfaces in the application. This corresponds to the view in the MVC template.

## Setting Up Your Environment

Before you start building React applications, you need to set up your development environment. Here's how:

1. Install Node.js and npm
2. Create a new React app using Create React App
3. Start the development server

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

## Understanding Components

Components are the building blocks of any React application. A component is a JavaScript class or function that optionally accepts inputs and returns a React element that describes how a section of the UI should appear.

### Functional Components

\`\`\`jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
\`\`\`

### Class Components

\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
\`\`\`

## State and Props

React components have two types of data: props and state.

### Props

Props (short for properties) are read-only components. They are immutable and are passed from parent to child components.

### State

State is mutable and can be changed over time. It is private and fully controlled by the component.

\`\`\`jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
\`\`\`

## Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

\`\`\`jsx
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Conclusion

React is a powerful library for building user interfaces. With its component-based architecture, it makes it easy to build and maintain complex UIs. As you continue your journey with React, you'll discover more advanced features and patterns that will help you build even more sophisticated applications.
`;

// Related tutorials data
const relatedTutorials = [
  {
    id: 'web-1',
    title: "Getting Started with React",
    description: "Learn the fundamentals of React through practical examples",
    level: "Beginner",
    duration: "2 hours",
    image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
  },
  {
    id: 'web-2',
    title: "Advanced TypeScript Patterns",
    description: "Master TypeScript with advanced design patterns",
    level: "Advanced",
    duration: "3 hours",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
  },
  {
    id: 'web-3',
    title: "Modern CSS Techniques",
    description: "Explore modern CSS features and best practices",
    level: "Intermediate",
    duration: "1.5 hours",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
  }
];

// Level badge colors
const levelColors = {
  "Beginner": "bg-green-100 text-green-700",
  "Intermediate": "bg-blue-100 text-blue-700",
  "Advanced": "bg-purple-100 text-purple-700"
};

// Function to parse markdown headings for table of contents
const extractHeadings = (markdown: string) => {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    
    headings.push({
      level,
      text,
      id
    });
  }

  return headings;
};

// Function to convert markdown to HTML (very basic implementation)
const markdownToHtml = (markdown: string) => {
  let html = markdown
    // Headers
    .replace(/^# (.*$)/gm, '<h1 id="$1" class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h1>')
    .replace(/^## (.*$)/gm, '<h2 id="$1" class="text-2xl font-bold mt-6 mb-3 text-gray-900">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 id="$1" class="text-xl font-bold mt-5 mb-2 text-gray-900">$1</h3>')
    
    // Bold
    .replace(/\*\*(.*)\*\*/gm, '<strong>$1</strong>')
    
    // Italic
    .replace(/\*(.*)\*/gm, '<em>$1</em>')
    
    // Code blocks
    .replace(/```([a-z]*)\n([\s\S]*?)```/gm, '<pre class="bg-gray-50 p-4 rounded-lg overflow-x-auto mb-4"><code class="language-$1">$2</code></pre>')
    
    // Inline code
    .replace(/`([^`]+)`/gm, '<code class="bg-gray-100 px-1 py-0.5 rounded text-pink-600">$1</code>')
    
    // Lists
    .replace(/^\d+\.\s+(.*$)/gm, '<li class="ml-6 mb-2">$1</li>')
    .replace(/<\/li>\n<li/g, '</li><li')
    .replace(/(<li.*<\/li>)/gm, '<ol class="list-decimal mb-4">$1</ol>')
    
    // Paragraphs
    .replace(/^(?!<[a-z])(.*$)/gm, '<p class="mb-4 text-gray-700">$1</p>')
    
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '');
  
  return html;
};

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  // Find the current tutorial based on articleId
  const currentTutorial = relatedTutorials.find(tutorial => tutorial.id === articleId) || relatedTutorials[0];
  
  // Extract headings for table of contents
  const headings = extractHeadings(articleContent);

  // Handle scroll to update active heading
  useEffect(() => {
    const handleScroll = () => {
      const headingElements = document.querySelectorAll('h1, h2, h3');
      
      for (let i = 0; i < headingElements.length; i++) {
        const element = headingElements[i];
        const rect = element.getBoundingClientRect();
        
        if (rect.top >= 0 && rect.top <= 200) {
          setActiveHeading(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click on table of contents item
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
      setActiveHeading(id);
    }
  };

  // Handle back button click
  const handleBack = () => {
    navigate('/tutorials');
  };

  // Handle related tutorial click
  const handleTutorialClick = (tutorialId: string) => {
    navigate(`/article/${tutorialId}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Article Header */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button 
            onClick={handleBack}
            className="text-blue-600 hover:text-blue-800 flex items-center mb-6 group"
          >
            <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to tutorials
          </button>
          
          <div className="flex items-center mb-2">
            <div className="bg-blue-50 p-2 rounded-lg mr-3">
              <Monitor className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">Web Development</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {currentTutorial.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 max-w-3xl">
            {currentTutorial.description}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[currentTutorial.level as keyof typeof levelColors]}`}>
              {currentTutorial.level}
            </div>
            <div className="flex items-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {currentTutorial.duration}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar - Related Tutorials */}
          <div className="lg:w-1/4 order-2 lg:order-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Related Tutorials</h3>
              <div className="space-y-4">
                {relatedTutorials.map((tutorial) => (
                  <div 
                    key={tutorial.id}
                    onClick={() => handleTutorialClick(tutorial.id)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      tutorial.id === articleId 
                        ? 'border-blue-200 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <img 
                        src={tutorial.image} 
                        alt={tutorial.title}
                        className="w-10 h-10 object-contain mr-3"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900">{tutorial.title}</h4>
                        <div className="flex items-center mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                            {tutorial.level}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">{tutorial.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Article Content */}
          <div className="lg:w-2/4 order-1 lg:order-2">
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: markdownToHtml(articleContent) }} />
            </div>
          </div>
          
          {/* Right Sidebar - Table of Contents */}
          <div className="lg:w-1/4 order-3">
            <div className="sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {headings.map((heading, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer ${
                      heading.level === 1 ? '' : 'ml-' + (heading.level * 2)
                    }`}
                  >
                    <a
                      onClick={() => scrollToHeading(heading.id)}
                      className={`block py-1 text-sm transition-colors ${
                        activeHeading === heading.id
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-600 hover:text-blue-600'
                      }`}
                    >
                      {heading.text}
                    </a>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
