import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, GraduationCap, Search, ChevronRight, Star, Users, Trophy, Brain, Monitor, Terminal, Smartphone, Code, Database, Sparkles, Zap, Rocket, Github, Home, Users as UsersIcon } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import TutorialPage from './components/TutorialPage';
import CoursePage from './components/CoursePage';
import EventPage from './components/EventPage';
import ArticlePage from './components/ArticlePage';

// Tutorial data structure
const tutorialCategories = [
  {
    name: "Web Development",
    icon: Monitor,
    tutorials: [
      { title: "Getting Started with React", description: "Learn the fundamentals of React through practical examples" },
      { title: "Advanced TypeScript Patterns", description: "Master TypeScript with advanced design patterns" },
      { title: "Modern CSS Techniques", description: "Explore modern CSS features and best practices" }
    ]
  },
  {
    name: "Linux",
    icon: Terminal,
    tutorials: [
      { title: "Linux Command Line Basics", description: "Master essential Linux commands and shell scripting" },
      { title: "System Administration", description: "Learn Linux system administration and maintenance" },
      { title: "Docker on Linux", description: "Deploy applications using Docker on Linux" }
    ]
  },
  {
    name: "Android",
    icon: Smartphone,
    tutorials: [
      { title: "Android App Development", description: "Build your first Android app from scratch" },
      { title: "Kotlin Fundamentals", description: "Learn Kotlin for Android development" },
      { title: "Material Design Implementation", description: "Implement Material Design in Android apps" }
    ]
  },
  {
    name: "Backend",
    icon: Database,
    tutorials: [
      { title: "Node.js API Development", description: "Create RESTful APIs with Node.js and Express" },
      { title: "Database Design", description: "Learn database design principles and implementation" },
      { title: "Microservices Architecture", description: "Build scalable microservices applications" }
    ]
  }
];

// Open Source Projects data (now representing tutorial articles)
const openSourceArticles = [
  {
    name: "Transformers",
    stars: "141,252",
    color: "#FF6B00",
    description: "State-of-the-art ML for PyTorch, TensorFlow, JAX",
    gridArea: "transformers",
    category: "web-dev",
    articleId: "web-1"
  },
  {
    name: "Diffusers",
    stars: "28,031",
    color: "#8A3FFC",
    description: "State-of-the-art Diffusion models in PyTorch",
    gridArea: "diffusers",
    category: "web-dev",
    articleId: "web-2"
  },
  {
    name: "Safetensors",
    stars: "3,164",
    color: "#8A3FFC",
    description: "Safe way to store/distribute neural network weights",
    gridArea: "safetensors",
    category: "web-dev",
    articleId: "web-3"
  },
  {
    name: "Hub Python Library",
    stars: "2,430",
    color: "#8A3FFC",
    description: "Python client to interact with the Hugging Face Hub",
    gridArea: "hub",
    category: "backend",
    articleId: "backend-1"
  },
  {
    name: "Tokenizers",
    stars: "9,475",
    color: "#42BE65",
    description: "Fast tokenizers optimized for research & production",
    gridArea: "tokenizers",
    category: "linux",
    articleId: "linux-1"
  },
  {
    name: "TRL",
    stars: "12,509",
    color: "#1192E8",
    description: "Train transformers LMs with reinforcement learning",
    gridArea: "trl",
    category: "linux",
    articleId: "linux-2"
  },
  {
    name: "Transformers.js",
    stars: "13,206",
    color: "#FF6B00",
    description: "State-of-the-art ML running directly in your browser",
    gridArea: "transformersjs",
    category: "android",
    articleId: "android-1"
  },
  {
    name: "smolagents",
    stars: "14,802",
    color: "#FF832B",
    description: "Smol library to build great agents in Python",
    gridArea: "smolagents",
    category: "android",
    articleId: "android-2"
  }
];

// Course data
const courseCategories = [
  {
    title: "Development Paths",
    description: "Master the skills needed to become a professional developer",
    courses: [
      "Full-Stack Development",
      "Frontend Mastery",
      "Backend Engineering",
      "Mobile App Development",
      "API Design & Integration"
    ]
  },
  {
    title: "Data & AI",
    description: "Learn to work with data and build intelligent systems",
    courses: [
      "Machine Learning Fundamentals",
      "Data Science Essentials",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision"
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Build and deploy scalable applications in the cloud",
    courses: [
      "Cloud Architecture",
      "DevOps Engineering",
      "Kubernetes Mastery",
      "Serverless Applications",
      "CI/CD Pipelines"
    ]
  },
  {
    title: "Specialized Skills",
    description: "Develop expertise in high-demand technical areas",
    courses: [
      "Cybersecurity Essentials",
      "Blockchain Development",
      "UI/UX Design",
      "Game Development",
      "IoT Solutions"
    ]
  }
];

// Featured courses for other sections
const featuredCourses = [
  {
    id: 1,
    title: "Full-Stack Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    students: "2.3k",
    rating: 4.8,
    description: "Learn to build complete web applications from front to back end."
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    students: "1.8k",
    rating: 4.9,
    description: "Master the basics of machine learning algorithms and implementations."
  },
  {
    id: 3,
    title: "Cloud Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    students: "1.5k",
    rating: 4.7,
    description: "Design and implement scalable cloud infrastructure solutions."
  }
];

// Event data
const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "March 15-16, 2024",
    type: "Virtual",
    description: "Join industry experts for two days of learning and networking"
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "March 20, 2024",
    type: "In-Person",
    description: "Hands-on workshop covering modern web development techniques"
  }
];

// Navigation items with icons
const navigationItems = [
  { name: 'Home', icon: Home, path: '/' },
  { name: 'Tutorials', icon: BookOpen, path: '/tutorials' },
  { name: 'Courses', icon: GraduationCap, path: '/courses' },
  { name: 'Events', icon: Calendar, path: '/events' },
  { name: 'Community', icon: UsersIcon, path: '/community' }
];

// Main App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/tutorials" element={<MainContent initialPage="tutorials" />} />
        <Route path="/courses" element={<MainContent initialPage="courses" />} />
        <Route path="/events" element={<MainContent initialPage="events" />} />
        <Route path="/community" element={<MainContent initialPage="community" />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

// Main content component with navigation
function MainContent({ initialPage = 'home' }: { initialPage?: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State management
  const [selectedCategory, setSelectedCategory] = useState(tutorialCategories[0].name);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<'home' | 'tutorials' | 'courses' | 'events' | 'community'>(initialPage as any);
  const [selectedCourseCategory, setSelectedCourseCategory] = useState(0);

  // Update current page based on location
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setCurrentPage('home');
    else if (path === '/tutorials') setCurrentPage('tutorials');
    else if (path === '/courses') setCurrentPage('courses');
    else if (path === '/events') setCurrentPage('events');
    else if (path === '/community') setCurrentPage('community');
  }, [location]);

  // Get selected tutorials based on category
  const selectedTutorials = tutorialCategories.find(cat => cat.name === selectedCategory)?.tutorials || [];
  const CategoryIcon = tutorialCategories.find(cat => cat.name === selectedCategory)?.icon || BookOpen;

  // Handle category selection
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus the search input when opened
      setTimeout(() => {
        const searchInput = document.getElementById('search-input');
        if (searchInput) searchInput.focus();
      }, 100);
    }
  };

  // Handle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle course selection
  const handleCourseClick = (courseId: number) => {
    setSelectedCourse(courseId);
    alert(`You selected the course: ${featuredCourses.find(course => course.id === courseId)?.title}`);
  };

  // Handle course category selection
  const handleCourseCategorySelect = (index: number) => {
    setSelectedCourseCategory(index);
  };

  // Handle event registration
  const handleEventRegistration = (eventId: number) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
      alert("You've unregistered from this event.");
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert("You've successfully registered for this event!");
    }
  };

  // Handle sign in
  const handleSignIn = () => {
    alert("Sign in functionality would open a modal or redirect to login page.");
  };

  // Handle get started
  const handleGetStarted = () => {
    alert("This would typically redirect to a registration or onboarding flow.");
  };

  // Navigation functions
  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu when navigating
  };

  // Handle project card click
  const handleProjectCardClick = (articleId: string) => {
    navigate(`/article/${articleId}`);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (isSearchOpen && searchContainer && !searchContainer.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  // Filter tutorials based on search query
  const filteredTutorials = searchQuery 
    ? tutorialCategories.flatMap(cat => 
        cat.tutorials.filter(tutorial => 
          tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(tutorial => ({ ...tutorial, category: cat.name }))
      )
    : [];

  // Common Navigation Component
  const Navigation = () => (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigateTo('/')}>
            <Sparkles className="h-6 w-6 text-blue-600" />
            <span className="ml-2 text-xl font-medium text-gray-900">EduTech</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const isActive = 
                (item.path === '/' && currentPage === 'home') || 
                (item.path === '/tutorials' && currentPage === 'tutorials') ||
                (item.path === '/courses' && currentPage === 'courses') ||
                (item.path === '/events' && currentPage === 'events') ||
                (item.path === '/community' && currentPage === 'community');
              
              const Icon = item.icon;
              return (
                <a 
                  key={item.path}
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.path);
                  }}
                  className={`flex items-center space-x-1 transition-colors ${
                    isActive 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span>{item.name}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></div>
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <div id="search-container" className="relative">
              <button 
                onClick={toggleSearch} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              {isSearchOpen && (
                <div className="absolute right-0 top-10 w-72 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Search tutorials..."
                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery && (
                    <div className="mt-2 max-h-60 overflow-y-auto">
                      {filteredTutorials.length > 0 ? (
                        filteredTutorials.map((tutorial, idx) => (
                          <div key={idx} className="p-2 hover:bg-gray-50 rounded cursor-pointer">
                            <p className="font-medium text-gray-800">{tutorial.title}</p>
                            <p className="text-xs text-gray-500">{(tutorial as any).category}</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500 p-2">No results found</p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button 
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="px-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = 
                (item.path === '/' && currentPage === 'home') || 
                (item.path === '/tutorials' && currentPage === 'tutorials') ||
                (item.path === '/courses' && currentPage === 'courses') ||
                (item.path === '/events' && currentPage === 'events') ||
                (item.path === '/community' && currentPage === 'community');
              
              const Icon = item.icon;
              return (
                <a 
                  key={item.path}
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.path);
                  }}
                  className={`flex items-center space-x-2 py-2 ${
                    isActive 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );

  // Common Footer Component
  const Footer = () => (
    <footer className="bg-gray-50 text-gray-600 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-xl font-medium text-gray-900">EduTech</span>
            </div>
            <p className="text-gray-500">Empowering the next generation of tech innovators</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.path);
                    }}
                    className="text-gray-500 hover:text-blue-600 transition-colors flex items-center space-x-1"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">Career Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-500">support@edutech.com</li>
              <li className="text-gray-500">+1 (555) 123-4567</li>
              <li className="mt-4">
                <button 
                  onClick={() => alert("This would open a contact form")}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2024 EduTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  // Render the appropriate page based on currentPage state
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navigation />
      
      {currentPage === 'home' ? (
        // Home Page Content
        <>
          {/* Hero Section */}
          <div className="relative overflow-hidden bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
              <div className="text-center">
                <div className="inline-block mb-6">
                  <div className="flex items-center justify-center space-x-2 bg-blue-50 px-4 py-1 rounded-full">
                    <Zap className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-600">Transforming Tech Education</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                  Unlock Your Digital Potential
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Access cutting-edge learning resources and join our vibrant tech community
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center group"
                  >
                    Begin Your Journey <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Courses - New Design */}
          <section id="courses" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 space-y-4 md:space-y-0">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Learning Paths</h2>
                  <p className="text-gray-600 max-w-2xl">
                    Explore our comprehensive course collections designed to help you master new skills
                  </p>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/courses');
                  }} 
                  className="text-blue-600 hover:text-blue-800 flex items-center group self-start md:self-auto"
                >
                  View all courses <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Course Category Content - Fixed UI with Background Image */}
              <div className="mb-8">
                <div className="course-section-bg rounded-xl overflow-hidden relative py-12 px-8 h-64">
                  <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {courseCategories[selectedCourseCategory].title}
                        </h3>
                        <p className="text-gray-300 mb-8">
                          {courseCategories[selectedCourseCategory].description}
                        </p>
                        <button 
                          onClick={() => navigateTo('/courses')}
                          className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                        >
                          Getting started
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Blocks - Using CSS Classes for Positioning */}
                  <div className="course-block course-block-1" onClick={() => navigateTo('/courses')}>
                    Full-Stack Development
                  </div>
                  <div className="course-block course-block-2" onClick={() => navigateTo('/courses')}>
                    Frontend Mastery
                  </div>
                  <div className="course-block course-block-3" onClick={() => navigateTo('/courses')}>
                    Backend Engineering
                  </div>
                  <div className="course-block course-block-4" onClick={() => navigateTo('/courses')}>
                    Mobile App Development
                  </div>
                  <div className="course-block course-block-5" onClick={() => navigateTo('/courses')}>
                    API Design & Integration
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Open Source Projects - New Design replacing Latest Tutorials */}
          <section id="open-source" className="py-16 open-source-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="flex justify-center mb-4">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Open Source</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We are building the foundation of ML tooling with the community.
                </p>
              </div>
              
              {/* Open Source Projects Grid - Non-row arrangement */}
              <div className="open-source-grid">
                {openSourceArticles.map((article, index) => (
                  <div 
                    key={index} 
                    className={`open-source-card ${article.gridArea} cursor-pointer`}
                    onClick={() => handleProjectCardClick(article.articleId)}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: article.color }}></div>
                          <h3 className="text-xl font-semibold text-gray-900">{article.name}</h3>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                          {article.stars}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-auto">{article.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section id="events" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
                <a 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo('/events');
                  }} 
                  className="text-blue-600 hover:text-blue-800 flex items-center group"
                >
                  View calendar <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 hover:translate-y-[-4px]">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
                        <Calendar className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <span className="mr-4">{event.date}</span>
                          <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                            {event.type}
                          </span>
                        </div>
                        <button 
                          onClick={() => handleEventRegistration(event.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            registeredEvents.includes(event.id)
                              ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          }`}
                        >
                          {registeredEvents.includes(event.id) ? 'Cancel Registration' : 'Register Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center">
                <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Ready to accelerate your tech career?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of learners who are building their future with EduTech
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={handleGetStarted}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                  <button 
                    onClick={() => alert("This would open a contact form")}
                    className="bg-white border border-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : currentPage === 'tutorials' ? (
        // Tutorials Page
        <TutorialPage />
      ) : currentPage === 'courses' ? (
        // Courses Page
        <CoursePage />
      ) : currentPage === 'events' ? (
        // Events Page
        <EventPage />
      ) : (
        // Community Page (placeholder)
        <div className="min-h-screen bg-white text-gray-800">
          <div className="bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
              <div className="inline-block mb-6">
                <div className="flex items-center justify-center space-x-2 bg-blue-50 px-4 py-1 rounded-full">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">Connect & Share</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Community
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                Join our vibrant community of developers, share knowledge, and grow together
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center py-16">
              <UsersIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Page Coming Soon</h2>
              <p className="text-gray-600 max-w-lg mx-auto">
                We're working on building an amazing community platform for you. Check back soon!
              </p>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
