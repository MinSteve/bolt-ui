import React, { useState } from 'react';
import { BookOpen, ChevronRight, Monitor, Terminal, Smartphone, Database, Code, Search, Sparkles, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Tutorial data structure with more detailed content and images
const tutorialCategories = [
  {
    id: 'web-dev',
    name: "Web Development",
    icon: Monitor,
    description: "Learn modern web development techniques and frameworks",
    tutorials: [
      { 
        id: 'web-1',
        title: "Getting Started with React", 
        description: "Learn the fundamentals of React through practical examples",
        level: "Beginner",
        duration: "2 hours",
        author: "Sarah Johnson",
        content: "This tutorial covers React basics including components, props, state, and hooks. You'll build a simple application to understand core concepts.",
        featured: false,
        isNew: true,
        image: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
      },
      { 
        id: 'web-2',
        title: "Advanced TypeScript Patterns", 
        description: "Master TypeScript with advanced design patterns",
        level: "Advanced",
        duration: "3 hours",
        author: "Michael Chen",
        content: "Explore advanced TypeScript features like generics, utility types, and decorators. Learn how to structure large-scale applications with TypeScript.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
      },
      { 
        id: 'web-3',
        title: "Modern CSS Techniques", 
        description: "Explore modern CSS features and best practices",
        level: "Intermediate",
        duration: "1.5 hours",
        author: "Emma Rodriguez",
        content: "Discover CSS Grid, Flexbox, custom properties, and other modern CSS features to create responsive and maintainable layouts.",
        featured: false,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
      }
    ]
  },
  {
    id: 'linux',
    name: "Linux",
    icon: Terminal,
    description: "Master Linux operating system and command line tools",
    tutorials: [
      { 
        id: 'linux-1',
        title: "Linux Command Line Basics", 
        description: "Master essential Linux commands and shell scripting",
        level: "Beginner",
        duration: "2.5 hours",
        author: "David Miller",
        content: "Learn fundamental Linux commands for file management, process control, and system administration. Includes practical exercises for beginners.",
        featured: false,
        isNew: true,
        image: "https://cdn-icons-png.flaticon.com/512/6124/6124995.png"
      },
      { 
        id: 'linux-2',
        title: "System Administration", 
        description: "Learn Linux system administration and maintenance",
        level: "Intermediate",
        duration: "4 hours",
        author: "Priya Patel",
        content: "Understand user management, service configuration, networking, and security in Linux environments. Includes hands-on system administration tasks.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/2333/2333187.png"
      },
      { 
        id: 'linux-3',
        title: "Docker on Linux", 
        description: "Deploy applications using Docker on Linux",
        level: "Intermediate",
        duration: "3 hours",
        author: "James Wilson",
        content: "Set up Docker on Linux, create custom images, manage containers, and implement multi-container applications with Docker Compose.",
        featured: false,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5969/5969059.png"
      },
      { 
        id: 'linux-4',
        title: "Linux Security Fundamentals", 
        description: "Secure your Linux systems against common threats",
        level: "Advanced",
        duration: "3.5 hours",
        author: "Alexandra Kim",
        content: "Learn about Linux security mechanisms, firewall configuration, intrusion detection, and security best practices for production environments.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/2716/2716652.png"
      }
    ]
  },
  {
    id: 'android',
    name: "Android",
    icon: Smartphone,
    description: "Build mobile applications for the Android platform",
    tutorials: [
      { 
        id: 'android-1',
        title: "Android App Development", 
        description: "Build your first Android app from scratch",
        level: "Beginner",
        duration: "4 hours",
        author: "Robert Zhang",
        content: "Start your Android development journey by creating a simple app. Learn about activities, layouts, and the Android lifecycle.",
        featured: false,
        isNew: true,
        image: "https://cdn-icons-png.flaticon.com/512/270/270780.png"
      },
      { 
        id: 'android-2',
        title: "Kotlin Fundamentals", 
        description: "Learn Kotlin for Android development",
        level: "Beginner",
        duration: "2.5 hours",
        author: "Sophia Garcia",
        content: "Master Kotlin syntax, functions, classes, and coroutines. Understand how Kotlin improves Android development compared to Java.",
        featured: false,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"
      },
      { 
        id: 'android-3',
        title: "Material Design Implementation", 
        description: "Implement Material Design in Android apps",
        level: "Intermediate",
        duration: "3 hours",
        author: "Thomas Brown",
        content: "Apply Material Design principles to create beautiful, intuitive Android applications with modern UI components and animations.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/1040/1040254.png"
      },
      { 
        id: 'android-4',
        title: "Android Architecture Components", 
        description: "Build robust Android apps with Architecture Components",
        level: "Advanced",
        duration: "3.5 hours",
        author: "Olivia Martinez",
        content: "Implement ViewModel, LiveData, Room, and Navigation components to create scalable, maintainable Android applications.",
        featured: false,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/2115/2115955.png"
      },
      { 
        id: 'android-5',
        title: "Android Testing Strategies", 
        description: "Comprehensive testing for Android applications",
        level: "Advanced",
        duration: "2.5 hours",
        author: "Daniel Lee",
        content: "Learn unit testing, UI testing, and integration testing for Android apps using JUnit, Espresso, and Mockito frameworks.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/2621/2621040.png"
      }
    ]
  },
  {
    id: 'backend',
    name: "Backend",
    icon: Database,
    description: "Develop server-side applications and APIs",
    tutorials: [
      { 
        id: 'backend-1',
        title: "Node.js API Development", 
        description: "Create RESTful APIs with Node.js and Express",
        level: "Intermediate",
        duration: "3 hours",
        author: "Jennifer Taylor",
        content: "Build scalable REST APIs with Node.js and Express. Learn request handling, middleware, authentication, and database integration.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
      },
      { 
        id: 'backend-2',
        title: "Database Design", 
        description: "Learn database design principles and implementation",
        level: "Intermediate",
        duration: "2.5 hours",
        author: "Carlos Mendez",
        content: "Master relational database concepts, normalization, indexing strategies, and query optimization for efficient data storage and retrieval.",
        featured: false,
        isNew: true,
        image: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
      },
      { 
        id: 'backend-3',
        title: "Microservices Architecture", 
        description: "Build scalable microservices applications",
        level: "Advanced",
        duration: "4 hours",
        author: "Natalie Wong",
        content: "Design and implement microservices architecture with service discovery, API gateways, and inter-service communication patterns.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637099.png"
      }
    ]
  },
  {
    id: 'devops',
    name: "DevOps",
    icon: Code,
    description: "Automate development and deployment processes",
    tutorials: [
      { 
        id: 'devops-1',
        title: "CI/CD Pipeline Implementation", 
        description: "Set up continuous integration and deployment workflows",
        level: "Intermediate",
        duration: "3 hours",
        author: "Ryan Johnson",
        content: "Create automated CI/CD pipelines using GitHub Actions, Jenkins, or GitLab CI to streamline your development workflow.",
        featured: false,
        isNew: true,
        image: "https://cdn-icons-png.flaticon.com/512/8637/8637599.png"
      },
      { 
        id: 'devops-2',
        title: "Infrastructure as Code with Terraform", 
        description: "Manage infrastructure using code",
        level: "Intermediate",
        duration: "3.5 hours",
        author: "Lisa Thompson",
        content: "Learn to define, provision, and manage infrastructure using Terraform. Create reusable modules and manage state effectively.",
        featured: true,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5136/5136897.png"
      },
      { 
        id: 'devops-3',
        title: "Kubernetes Fundamentals", 
        description: "Orchestrate containerized applications with Kubernetes",
        level: "Advanced",
        duration: "4 hours",
        author: "Ahmed Hassan",
        content: "Deploy, scale, and manage containerized applications with Kubernetes. Learn about pods, services, deployments, and StatefulSets.",
        featured: false,
        isNew: false,
        image: "https://cdn-icons-png.flaticon.com/512/5969/5969555.png"
      }
    ]
  }
];

// Level badge colors using soft colors
const levelColors = {
  "Beginner": "bg-green-100 text-green-700",
  "Intermediate": "bg-blue-100 text-blue-700",
  "Advanced": "bg-purple-100 text-purple-700"
};

const TutorialPage: React.FC = () => {
  const navigate = useNavigate();
  
  // State management
  const [selectedCategory, setSelectedCategory] = useState(tutorialCategories[0].id);
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Get selected category and tutorials
  const category = tutorialCategories.find(cat => cat.id === selectedCategory) || tutorialCategories[0];
  const CategoryIcon = category.icon || BookOpen;
  
  // Get selected tutorial details
  const tutorialDetails = selectedTutorial 
    ? category.tutorials.find(tut => tut.id === selectedTutorial) 
    : null;

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedTutorial(null); // Reset selected tutorial when changing category
  };

  // Handle tutorial selection
  const handleTutorialSelect = (tutorialId: string) => {
    setSelectedTutorial(tutorialId);
  };

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle start learning button click
  const handleStartLearning = () => {
    if (selectedTutorial) {
      navigate(`/article/${selectedTutorial}`);
    }
  };

  // Handle learn more button click
  const handleLearnMore = (tutorialId: string) => {
    setSelectedTutorial(tutorialId);
  };

  // Filter tutorials based on search query
  const filteredTutorials = searchQuery 
    ? category.tutorials.filter(tutorial => 
        tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : category.tutorials;

  // Group tutorials by featured/new status
  const newTutorials = filteredTutorials.filter(tutorial => tutorial.isNew);
  const featuredTutorials = filteredTutorials.filter(tutorial => tutorial.featured);
  const regularTutorials = filteredTutorials.filter(tutorial => !tutorial.isNew && !tutorial.featured);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Page Header - Android Show */}
      <div className="bg-lime-300 relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side - #TheAndroidShow */}
            <div className="bg-white rounded-full py-6 px-12 shadow-md">
              <h1 className="text-4xl font-bold text-gray-900">
                <span className="text-green-600">#</span>TheAndroidShow
              </h1>
            </div>
            
            {/* Center - Watch button */}
            <div className="order-3 md:order-2">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-medium text-lg">
                Watch the show now!
              </button>
            </div>
            
            {/* Right side - Curious what we covered */}
            <div className="bg-white rounded-2xl p-6 shadow-md max-w-md order-2 md:order-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Curious what we covered?
              </h2>
              <p className="text-gray-700 mb-6">
                In our winter episode, we showed a big update to Gemini in Android Studio and shared some news for games developers ahead of GDC later this month. Plus we unpacked the latest Android hardware devices from our partners coming out of Mobile World Congress and recapped all of the latest in Android XR. Check it out!
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors text-sm font-medium">
                  Watch the show
                </button>
                <button className="bg-white text-gray-800 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab-based Category Navigation */}
        <div className="mb-10">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto hide-scrollbar">
              {tutorialCategories.map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                      isActive
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`h-5 w-5 mr-2 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content Area */}
          <div className="w-full">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-50 p-3 rounded-lg mr-3">
                  <CategoryIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={`Search ${category.name} tutorials...`}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* Tutorial Content */}
            {selectedTutorial ? (
              // Tutorial Details View
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-8">
                  <button 
                    onClick={() => setSelectedTutorial(null)}
                    className="text-blue-600 hover:text-blue-800 flex items-center mb-6 group"
                  >
                    <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to tutorials
                  </button>
                  
                  {tutorialDetails && (
                    <>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">{tutorialDetails.title}</h1>
                      <p className="text-xl text-gray-600 mb-6">{tutorialDetails.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-8">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[tutorialDetails.level as keyof typeof levelColors]}`}>
                          {tutorialDetails.level}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {tutorialDetails.duration}
                        </div>
                        <div className="text-gray-500">
                          By {tutorialDetails.author}
                        </div>
                      </div>
                      
                      <div className="prose max-w-none">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Overview</h2>
                          <p className="text-gray-600 mb-0">{tutorialDetails.content}</p>
                        </div>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
                        <ul className="list-none space-y-3 text-gray-600 mb-6">
                          {['Understanding core concepts and principles', 
                            'Practical implementation techniques', 
                            'Best practices and common patterns', 
                            'Troubleshooting and debugging strategies'].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                                <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                        
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
                        <p className="text-gray-600 mb-6">
                          Basic understanding of programming concepts. Familiarity with related technologies is helpful but not required.
                        </p>
                      </div>
                      
                      <div className="mt-8">
                        <button 
                          onClick={handleStartLearning}
                          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center group"
                        >
                          Start Learning
                          <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              // New Tutorial List View with cards
              <div className="space-y-12">
                {/* New Tutorials Section */}
                {newTutorials.length > 0 && (
                  <div>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">NEW</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {newTutorials.map((tutorial) => (
                        <div 
                          key={tutorial.id}
                          className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-6"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                            <p className="text-gray-600 mb-4">{tutorial.description}</p>
                            <div className="flex items-center gap-4 mb-6">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                                {tutorial.level}
                              </span>
                              <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                              <button
                                onClick={() => handleLearnMore(tutorial.id)}
                                className="border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                Learn more
                              </button>
                              <div className="flex items-center">
                                <img 
                                  src={tutorial.image} 
                                  alt={tutorial.title}
                                  className="w-16 h-16 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Featured Tutorials Section */}
                {featuredTutorials.length > 0 && (
                  <div>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">FEATURED</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {featuredTutorials.map((tutorial) => (
                        <div 
                          key={tutorial.id}
                          className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-6"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                            <p className="text-gray-600 mb-4">{tutorial.description}</p>
                            <div className="flex items-center gap-4 mb-6">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                                {tutorial.level}
                              </span>
                              <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                              <button
                                onClick={() => handleLearnMore(tutorial.id)}
                                className="border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                Learn more
                              </button>
                              <div className="flex items-center">
                                <img 
                                  src={tutorial.image} 
                                  alt={tutorial.title}
                                  className="w-16 h-16 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Tutorials Section */}
                {regularTutorials.length > 0 && (
                  <div>
                    <div className="mb-6">
                      <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">MORE TUTORIALS</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularTutorials.map((tutorial) => (
                        <div 
                          key={tutorial.id}
                          className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow p-6"
                        >
                          <div className="flex flex-col h-full">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tutorial.title}</h3>
                            <p className="text-gray-600 mb-4">{tutorial.description}</p>
                            <div className="flex items-center gap-4 mb-6">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[tutorial.level as keyof typeof levelColors]}`}>
                                {tutorial.level}
                              </span>
                              <span className="text-gray-500 text-sm">{tutorial.duration}</span>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                              <button
                                onClick={() => handleLearnMore(tutorial.id)}
                                className="border border-gray-300 rounded-full px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                              >
                                Learn more
                              </button>
                              <div className="flex items-center">
                                <img 
                                  src={tutorial.image} 
                                  alt={tutorial.title}
                                  className="w-16 h-16 object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Results */}
                {filteredTutorials.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No tutorials found</h3>
                    <p className="text-gray-500">Try adjusting your search query</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
