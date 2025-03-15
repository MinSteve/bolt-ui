import React, { useState } from 'react';
import { Search, Star, Users, Filter, ChevronRight, BookOpen, Clock, Award, Sparkles, Check } from 'lucide-react';

// Course data structure
const courses = [
  {
    id: 1,
    title: "Full-Stack Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    students: "2.3k",
    rating: 4.8,
    instructor: "Alex Johnson",
    price: "$89.99",
    originalPrice: "$129.99",
    level: "Intermediate",
    duration: "12 weeks",
    description: "Learn to build complete web applications from front to back end. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
    topics: [
      "Frontend fundamentals with HTML5 and CSS3",
      "JavaScript programming and ES6+ features",
      "React components and state management",
      "Node.js and Express API development",
      "MongoDB database integration",
      "Authentication and authorization",
      "Deployment and DevOps basics"
    ],
    category: "Web Development",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$89.99",
        originalPrice: "$129.99",
        format: "Online",
        features: [
          "19 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$99.99",
        originalPrice: "$149.99",
        format: "Offline",
        featured: true,
        features: [
          "19 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "19 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    students: "1.8k",
    rating: 4.9,
    instructor: "Sarah Chen",
    price: "$94.99",
    originalPrice: "$149.99",
    level: "Advanced",
    duration: "10 weeks",
    description: "Master the basics of machine learning algorithms and implementations. Learn to build and deploy machine learning models for real-world applications.",
    topics: [
      "Introduction to machine learning concepts",
      "Supervised and unsupervised learning",
      "Neural networks and deep learning",
      "Natural language processing",
      "Computer vision applications",
      "Model deployment and scaling",
      "Ethical considerations in AI"
    ],
    category: "Data Science",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$94.99",
        originalPrice: "$149.99",
        format: "Online",
        features: [
          "15 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$119.99",
        originalPrice: "$179.99",
        format: "Offline",
        featured: true,
        features: [
          "15 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "15 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Cloud Architecture",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    students: "1.5k",
    rating: 4.7,
    instructor: "Michael Roberts",
    price: "$79.99",
    originalPrice: "$119.99",
    level: "Intermediate",
    duration: "8 weeks",
    description: "Design and implement scalable cloud infrastructure solutions. Learn AWS, Azure, and Google Cloud Platform services and best practices.",
    topics: [
      "Cloud computing fundamentals",
      "AWS core services and architecture",
      "Azure and Google Cloud comparison",
      "Infrastructure as Code with Terraform",
      "Containerization with Docker and Kubernetes",
      "Serverless architecture patterns",
      "Cloud security and compliance"
    ],
    category: "DevOps",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$79.99",
        originalPrice: "$119.99",
        format: "Online",
        features: [
          "12 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$99.99",
        originalPrice: "$139.99",
        format: "Offline",
        featured: true,
        features: [
          "12 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "12 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Mobile App Development with Flutter",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    students: "1.2k",
    rating: 4.6,
    instructor: "Emily Zhang",
    price: "$74.99",
    originalPrice: "$109.99",
    level: "Beginner",
    duration: "8 weeks",
    description: "Build cross-platform mobile applications with Flutter and Dart. Create beautiful, responsive UIs that work on both iOS and Android.",
    topics: [
      "Dart programming language basics",
      "Flutter widgets and UI components",
      "State management in Flutter",
      "Navigation and routing",
      "Working with APIs and data",
      "Native device features integration",
      "Publishing to app stores"
    ],
    category: "Mobile Development",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$74.99",
        originalPrice: "$109.99",
        format: "Online",
        features: [
          "14 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$89.99",
        originalPrice: "$129.99",
        format: "Offline",
        featured: true,
        features: [
          "14 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "14 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Essentials",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    students: "1.7k",
    rating: 4.8,
    instructor: "David Wilson",
    price: "$99.99",
    originalPrice: "$159.99",
    level: "Intermediate",
    duration: "9 weeks",
    description: "Learn essential cybersecurity concepts and techniques to protect systems and networks from threats and vulnerabilities.",
    topics: [
      "Security fundamentals and principles",
      "Network security and protocols",
      "Threat detection and prevention",
      "Cryptography and secure communications",
      "Penetration testing basics",
      "Security policies and compliance",
      "Incident response and recovery"
    ],
    category: "Security",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$99.99",
        originalPrice: "$159.99",
        format: "Online",
        features: [
          "16 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$129.99",
        originalPrice: "$189.99",
        format: "Offline",
        featured: true,
        features: [
          "16 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "16 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "UI/UX Design Masterclass",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    students: "2.1k",
    rating: 4.9,
    instructor: "Jessica Park",
    price: "$84.99",
    originalPrice: "$139.99",
    level: "All Levels",
    duration: "10 weeks",
    description: "Master the art and science of user interface and user experience design. Create intuitive, beautiful digital products that users love.",
    topics: [
      "Design thinking and user-centered design",
      "User research and personas",
      "Wireframing and prototyping",
      "Visual design principles",
      "Interaction design patterns",
      "Usability testing and iteration",
      "Design systems and documentation"
    ],
    category: "Design",
    pricingPlans: [
      {
        id: "personal",
        name: "Personal",
        price: "$84.99",
        originalPrice: "$139.99",
        format: "Online",
        features: [
          "18 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: "$109.99",
        originalPrice: "$169.99",
        format: "Offline",
        featured: true,
        features: [
          "18 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "In-person mentor support",
          "Course completion certificate",
          "CV review support"
        ]
      },
      {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact us",
        format: "Custom",
        features: [
          "18 lessons",
          "Video recordings of each lesson",
          "Full course materials + source code",
          "Online mentor support + group chat",
          "Course completion certificate",
          "CV review support"
        ]
      }
    ]
  }
];

// Categories
const categories = [
  "All Categories",
  "Web Development",
  "Data Science",
  "Mobile Development",
  "DevOps",
  "Security",
  "Design"
];

// Level badge colors
const levelColors = {
  "Beginner": "bg-green-50 text-green-600 border border-green-200",
  "Intermediate": "bg-blue-50 text-blue-600 border border-blue-200",
  "Advanced": "bg-purple-50 text-purple-600 border border-purple-200",
  "All Levels": "bg-gray-50 text-gray-600 border border-gray-200"
};

const CoursePage: React.FC = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<string | null>(null);
  const [selectedPricingPlan, setSelectedPricingPlan] = useState<string | null>(null);

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle course selection
  const handleCourseSelect = (courseId: number) => {
    setSelectedCourse(courseId);
    setSelectedPricingPlan(null); // Reset pricing plan selection when changing courses
    window.scrollTo(0, 0);
  };

  // Handle price filter
  const handlePriceFilter = (price: string | null) => {
    setPriceFilter(price);
  };

  // Handle level filter
  const handleLevelFilter = (level: string | null) => {
    setLevelFilter(level);
  };

  // Toggle filters visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Handle pricing plan selection
  const handlePricingPlanSelect = (planId: string) => {
    setSelectedPricingPlan(planId);
  };

  // Handle enrollment
  const handleEnroll = (planId: string) => {
    alert(`You've selected the ${planId} plan. Proceeding to checkout...`);
  };

  // Get selected course details
  const courseDetails = selectedCourse 
    ? courses.find(course => course.id === selectedCourse) 
    : null;

  // Filter courses based on search query, category, price, and level
  const filteredCourses = courses.filter(course => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = selectedCategory === "All Categories" || 
      course.category === selectedCategory;
    
    // Price filter
    const matchesPrice = priceFilter === null || 
      (priceFilter === "under50" && parseFloat(course.price.replace("$", "")) < 50) ||
      (priceFilter === "50to100" && parseFloat(course.price.replace("$", "")) >= 50 && parseFloat(course.price.replace("$", "")) <= 100) ||
      (priceFilter === "over100" && parseFloat(course.price.replace("$", "")) > 100);
    
    // Level filter
    const matchesLevel = levelFilter === null || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Page Header */}
      <div className="bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 bg-blue-50 px-4 py-1 rounded-full">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Expert-Led Learning</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Courses & Learning Paths
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Advance your career with comprehensive courses taught by industry experts
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedCourse ? (
          // Course Details View
          <div>
            <button 
              onClick={() => setSelectedCourse(null)}
              className="text-blue-600 hover:text-blue-800 flex items-center mb-8 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to courses
            </button>

            {courseDetails && (
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                  {/* Course Info - Left Column */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                      <img 
                        src={courseDetails.image} 
                        alt={courseDetails.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[courseDetails.level as keyof typeof levelColors]}`}>
                            {courseDetails.level}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {courseDetails.duration}
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            {courseDetails.students} students
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            {courseDetails.rating}
                          </div>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{courseDetails.title}</h1>
                        <p className="text-xl text-gray-600 mb-6">{courseDetails.description}</p>
                        
                        <div className="flex items-center mb-8">
                          <img 
                            src="https://randomuser.me/api/portraits/men/32.jpg" 
                            alt={courseDetails.instructor} 
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <p className="text-sm text-gray-500">Instructor</p>
                            <p className="font-medium text-gray-900">{courseDetails.instructor}</p>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h2>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                            {courseDetails.topics.map((topic, index) => (
                              <li key={index} className="flex items-start">
                                <div className="bg-blue-50 p-1 rounded-full mr-3 mt-1">
                                  <svg className="h-3 w-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-600">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h2>
                          <div className="space-y-4">
                            {[1, 2, 3, 4].map((module) => (
                              <div key={module} className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors">
                                  <h3 className="font-medium text-gray-900">Module {module}: {["Introduction", "Core Concepts", "Advanced Techniques", "Projects & Applications"][module-1]}</h3>
                                  <ChevronRight className="h-5 w-5 text-gray-400" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Card - Right Column */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-gray-900 mr-2">{courseDetails.price}</span>
                        <span className="text-lg text-gray-500 line-through">{courseDetails.originalPrice}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-6">
                        <span className="text-green-600 font-medium">
                          {Math.round((1 - parseFloat(courseDetails.price.replace("$", "")) / parseFloat(courseDetails.originalPrice.replace("$", ""))) * 100)}% off
                        </span> • 3 days left at this price!
                      </p>
                      
                      <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors mb-4 font-medium">
                        Enroll Now
                      </button>
                      <button className="w-full bg-white border border-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-50 transition-colors mb-6 font-medium">
                        Add to Wishlist
                      </button>
                      
                      <div className="text-sm text-gray-500 space-y-4">
                        <div className="flex items-start">
                          <Award className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                          <p>Certificate of completion</p>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                          <p>Lifetime access to course materials</p>
                        </div>
                        <div className="flex items-start">
                          <BookOpen className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                          <p>40+ lessons with hands-on projects</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-100 mt-6 pt-6">
                        <h3 className="font-medium text-gray-900 mb-4">This course includes:</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            20+ hours of video content
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            15 coding exercises
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            5 real-world projects
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Discussion forum access
                          </li>
                          <li className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Downloadable resources
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Plans Section */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose Your Learning Plan</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {courseDetails.pricingPlans.map((plan) => (
                      <div 
                        key={plan.id} 
                        className={`bg-white rounded-lg overflow-hidden border transition-all ${
                          plan.featured 
                            ? 'border-cyan-400 shadow-lg relative transform hover:-translate-y-1' 
                            : plan.id === 'enterprise' 
                              ? 'border-gray-200 hover:border-gray-300' 
                              : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {plan.featured && (
                          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-center py-1 text-sm font-medium">
                            Most Popular
                          </div>
                        )}
                        <div className={`p-6 ${plan.featured ? 'pt-8' : ''}`}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h3>
                          <div className="mb-4">
                            {plan.id !== 'enterprise' ? (
                              <>
                                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                {plan.originalPrice && (
                                  <span className="text-gray-500 line-through ml-2">{plan.originalPrice}</span>
                                )}
                              </>
                            ) : (
                              <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-6">
                            {plan.id === 'personal' 
                              ? 'Learn online via Google Meet' 
                              : plan.id === 'premium' 
                                ? 'Learn in-person at our campus' 
                                : 'Custom learning solution for teams'}
                          </p>
                          
                          <button 
                            onClick={() => handleEnroll(plan.id)}
                            className={`w-full py-3 rounded-lg font-medium mb-6 ${
                              plan.featured 
                                ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-white hover:opacity-90' 
                                : plan.id === 'enterprise'
                                  ? 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-50'
                                  : 'bg-indigo-500 text-white hover:bg-indigo-600'
                            }`}
                          >
                            {plan.id === 'enterprise' ? 'Contact Us' : 'Enroll Now'}
                          </button>
                          
                          <p className="text-sm text-gray-500 text-center mb-6">
                            Benefits included
                          </p>
                          
                          <ul className="space-y-3">
                            {plan.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <div className={`p-1 rounded-full mr-3 mt-0.5 ${
                                  plan.featured 
                                    ? 'bg-cyan-50 text-cyan-600' 
                                    : plan.id === 'enterprise'
                                      ? 'bg-purple-50 text-purple-600'
                                      : 'bg-indigo-50 text-indigo-600'
                                }`}>
                                  <Check className="h-3 w-3" />
                                </div>
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Course List View
          <div>
            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
                <button
                  onClick={toggleFilters}
                  className="md:w-auto w-full bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </button>
              </div>

              {/* Filters Panel */}
              {showFilters && (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Category Filter */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category}
                            onClick={() => handleCategorySelect(category)}
                            className={`block px-3 py-2 rounded-lg text-sm w-full text-left ${
                              selectedCategory === category
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price Filter */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Price</h3>
                      <div className="space-y-2">
                        {[
                          { id: null, label: 'All Prices' },
                          { id: 'under50', label: 'Under $50' },
                          { id: '50to100', label: '$50 to $100' },
                          { id: 'over100', label: 'Over $100' }
                        ].map((option) => (
                          <button
                            key={option.id || 'all'}
                            onClick={() => handlePriceFilter(option.id)}
                            className={`block px-3 py-2 rounded-lg text-sm w-full text-left ${
                              priceFilter === option.id
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Level Filter */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Level</h3>
                      <div className="space-y-2">
                        {[
                          { id: null, label: 'All Levels' },
                          { id: 'Beginner', label: 'Beginner' },
                          { id: 'Intermediate', label: 'Intermediate' },
                          { id: 'Advanced', label: 'Advanced' }
                        ].map((option) => (
                          <button
                            key={option.id || 'all'}
                            onClick={() => handleLevelFilter(option.id)}
                            className={`block px-3 py-2 rounded-lg text-sm w-full text-left ${
                              levelFilter === option.id
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div 
                    key={course.id} 
                    onClick={() => handleCourseSelect(course.id)}
                    className="bg-white rounded-lg overflow-hidden hover:translate-y-[-4px] transition-all duration-300 cursor-pointer border border-gray-100 hover:shadow-md"
                  >
                    <div className="relative">
                      <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                      <div className={`absolute top-3 left-3 ${levelColors[course.level as keyof typeof levelColors]} px-2 py-1 rounded-full text-xs font-medium`}>
                        {course.level}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors">{course.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-blue-600" />
                          {course.students} students
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          {course.rating}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-gray-900">{course.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                        </div>
                        <span className="text-sm text-gray-500">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No courses found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
