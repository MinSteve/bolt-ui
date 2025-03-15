import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Search, Filter, ChevronRight, Sparkles, ArrowLeft } from 'lucide-react';

// Event data structure with past and future events
const events = [
  // Future Events
  {
    id: 1,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    date: "March 15-16, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Virtual",
    attendees: 1250,
    price: "Free",
    description: "Join industry experts for two days of learning and networking. This virtual conference covers the latest trends in technology, featuring keynote speakers from leading tech companies.",
    speakers: [
      { name: "John Smith", role: "CTO at TechCorp", image: "https://randomuser.me/api/portraits/men/41.jpg" },
      { name: "Emily Chen", role: "AI Research Lead", image: "https://randomuser.me/api/portraits/women/33.jpg" },
      { name: "Michael Johnson", role: "Senior Developer Advocate", image: "https://randomuser.me/api/portraits/men/32.jpg" }
    ],
    agenda: [
      { time: "9:00 AM", title: "Opening Keynote", speaker: "John Smith" },
      { time: "10:30 AM", title: "Future of AI in Software Development", speaker: "Emily Chen" },
      { time: "1:00 PM", title: "Building Scalable Cloud Solutions", speaker: "Michael Johnson" },
      { time: "3:00 PM", title: "Panel Discussion: Tech Trends 2024", speaker: "All Speakers" }
    ],
    category: "Conference",
    isPast: false
  },
  {
    id: 2,
    title: "Web Development Workshop",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    date: "March 20, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "San Francisco, CA",
    attendees: 75,
    price: "$49.99",
    description: "Hands-on workshop covering modern web development techniques. Learn to build responsive, accessible websites using the latest frameworks and tools.",
    speakers: [
      { name: "Sarah Wilson", role: "Frontend Specialist", image: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "David Park", role: "UX Designer", image: "https://randomuser.me/api/portraits/men/36.jpg" }
    ],
    agenda: [
      { time: "10:00 AM", title: "Modern CSS Techniques", speaker: "Sarah Wilson" },
      { time: "11:30 AM", title: "Responsive Design Principles", speaker: "David Park" },
      { time: "1:00 PM", title: "JavaScript Framework Comparison", speaker: "Sarah Wilson" },
      { time: "2:00 PM", title: "Hands-on Project", speaker: "All Instructors" }
    ],
    category: "Workshop",
    isPast: false
  },
  {
    id: 3,
    title: "Data Science Summit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    date: "April 5-6, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Chicago, IL",
    attendees: 850,
    price: "$129.99",
    description: "Explore the latest advancements in data science, machine learning, and analytics. Connect with data professionals and learn from industry leaders.",
    speakers: [
      { name: "Robert Chen", role: "Data Science Director", image: "https://randomuser.me/api/portraits/men/22.jpg" },
      { name: "Lisa Johnson", role: "ML Engineer", image: "https://randomuser.me/api/portraits/women/28.jpg" },
      { name: "James Wilson", role: "Analytics Lead", image: "https://randomuser.me/api/portraits/men/45.jpg" }
    ],
    agenda: [
      { time: "9:00 AM", title: "Opening Remarks", speaker: "Robert Chen" },
      { time: "10:00 AM", title: "Practical Machine Learning", speaker: "Lisa Johnson" },
      { time: "1:00 PM", title: "Big Data Processing Techniques", speaker: "James Wilson" },
      { time: "3:30 PM", title: "Industry Applications Panel", speaker: "All Speakers" }
    ],
    category: "Conference",
    isPast: false
  },
  {
    id: 4,
    title: "Mobile App Development Bootcamp",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "April 15-17, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Austin, TX",
    attendees: 60,
    price: "$299.99",
    description: "Intensive three-day bootcamp focused on mobile app development. Build a complete app from scratch using React Native or Flutter.",
    speakers: [
      { name: "Alex Rodriguez", role: "Mobile Developer", image: "https://randomuser.me/api/portraits/men/67.jpg" },
      { name: "Priya Patel", role: "UX/UI Specialist", image: "https://randomuser.me/api/portraits/women/63.jpg" }
    ],
    agenda: [
      { time: "9:00 AM", title: "Mobile Development Fundamentals", speaker: "Alex Rodriguez" },
      { time: "11:00 AM", title: "UI/UX for Mobile Apps", speaker: "Priya Patel" },
      { time: "1:00 PM", title: "State Management", speaker: "Alex Rodriguez" },
      { time: "2:30 PM", title: "Hands-on Project Work", speaker: "All Instructors" }
    ],
    category: "Bootcamp",
    isPast: false
  },
  
  // Past Events
  {
    id: 5,
    title: "DevOps Meetup",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    date: "January 22, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "Seattle, WA",
    attendees: 120,
    price: "Free",
    description: "Evening meetup for DevOps professionals and enthusiasts. Share experiences, discuss challenges, and network with peers.",
    speakers: [
      { name: "Thomas Lee", role: "DevOps Engineer", image: "https://randomuser.me/api/portraits/men/52.jpg" },
      { name: "Emma Davis", role: "SRE Lead", image: "https://randomuser.me/api/portraits/women/24.jpg" }
    ],
    agenda: [
      { time: "6:00 PM", title: "Networking & Refreshments", speaker: "" },
      { time: "6:30 PM", title: "CI/CD Pipeline Optimization", speaker: "Thomas Lee" },
      { time: "7:30 PM", title: "Kubernetes Best Practices", speaker: "Emma Davis" },
      { time: "8:30 PM", title: "Open Discussion", speaker: "All Attendees" }
    ],
    category: "Meetup",
    isPast: true
  },
  {
    id: 6,
    title: "Cybersecurity Conference",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    date: "February 10-12, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "Washington, DC",
    attendees: 950,
    price: "$199.99",
    description: "Comprehensive cybersecurity conference covering threat intelligence, security operations, and compliance. Features hands-on labs and certification workshops.",
    speakers: [
      { name: "Daniel Brown", role: "Security Researcher", image: "https://randomuser.me/api/portraits/men/81.jpg" },
      { name: "Sophia Martinez", role: "CISO", image: "https://randomuser.me/api/portraits/women/74.jpg" },
      { name: "Kevin Zhang", role: "Ethical Hacker", image: "https://randomuser.me/api/portraits/men/94.jpg" }
    ],
    agenda: [
      { time: "8:30 AM", title: "Keynote: Evolving Threat Landscape", speaker: "Sophia Martinez" },
      { time: "10:00 AM", title: "Zero Trust Architecture", speaker: "Daniel Brown" },
      { time: "1:00 PM", title: "Live Hacking Demonstration", speaker: "Kevin Zhang" },
      { time: "3:00 PM", title: "Security Compliance Panel", speaker: "All Speakers" }
    ],
    category: "Conference",
    isPast: true
  },
  {
    id: 7,
    title: "Frontend Development Webinar",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    date: "January 15, 2024",
    time: "11:00 AM - 12:30 PM",
    location: "Virtual",
    attendees: 430,
    price: "Free",
    description: "Learn about the latest frontend development trends and techniques in this free webinar. Perfect for developers looking to stay current with modern web technologies.",
    speakers: [
      { name: "Rachel Kim", role: "Frontend Architect", image: "https://randomuser.me/api/portraits/women/54.jpg" }
    ],
    agenda: [
      { time: "11:00 AM", title: "Modern Frontend Architecture", speaker: "Rachel Kim" },
      { time: "11:45 AM", title: "Q&A Session", speaker: "Rachel Kim" }
    ],
    category: "Webinar",
    isPast: true
  },
  {
    id: 8,
    title: "AI in Healthcare Workshop",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    date: "February 5, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Boston, MA",
    attendees: 85,
    price: "$149.99",
    description: "Explore the applications of artificial intelligence in healthcare. This workshop covers machine learning models for diagnosis, predictive analytics, and patient care optimization.",
    speakers: [
      { name: "Dr. Jennifer Lee", role: "AI Healthcare Researcher", image: "https://randomuser.me/api/portraits/women/65.jpg" },
      { name: "Mark Wilson", role: "Medical Data Scientist", image: "https://randomuser.me/api/portraits/men/42.jpg" }
    ],
    agenda: [
      { time: "9:00 AM", title: "AI in Medical Diagnosis", speaker: "Dr. Jennifer Lee" },
      { time: "11:00 AM", title: "Healthcare Data Processing", speaker: "Mark Wilson" },
      { time: "1:00 PM", title: "Ethical Considerations", speaker: "Dr. Jennifer Lee" },
      { time: "2:30 PM", title: "Hands-on Workshop", speaker: "All Instructors" }
    ],
    category: "Workshop",
    isPast: true
  }
];

// Event type badge colors
const eventTypeColors = {
  "Conference": "bg-blue-50 text-blue-600 border border-blue-200",
  "Workshop": "bg-green-50 text-green-600 border border-green-200",
  "Bootcamp": "bg-purple-50 text-purple-600 border border-purple-200",
  "Meetup": "bg-yellow-50 text-yellow-600 border border-yellow-200",
  "Webinar": "bg-gray-50 text-gray-600 border border-gray-200"
};

const EventPage: React.FC = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [locationFilter, setLocationFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<'future' | 'past'>('future');

  // Handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle event selection
  const handleEventSelect = (eventId: number) => {
    setSelectedEvent(eventId);
    window.scrollTo(0, 0);
  };

  // Handle location filter
  const handleLocationFilter = (location: string | null) => {
    setLocationFilter(location);
  };

  // Handle price filter
  const handlePriceFilter = (price: string | null) => {
    setPriceFilter(price);
  };

  // Toggle filters visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
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

  // Get selected event details
  const eventDetails = selectedEvent 
    ? events.find(event => event.id === selectedEvent) 
    : null;

  // Filter events based on search query, location, price, and past/future status
  const filteredEvents = events.filter(event => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Past/Future filter
    const matchesTimeframe = (activeTab === 'future' && !event.isPast) || 
                             (activeTab === 'past' && event.isPast);
    
    // Location filter
    const matchesLocation = locationFilter === null || 
      (locationFilter === "virtual" && event.location === "Virtual") ||
      (locationFilter === "in-person" && event.location !== "Virtual");
    
    // Price filter
    const matchesPrice = priceFilter === null || 
      (priceFilter === "free" && event.price === "Free") ||
      (priceFilter === "paid" && event.price !== "Free");
    
    return matchesSearch && matchesTimeframe && matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Page Header */}
      <div className="bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 bg-blue-50 px-4 py-1 rounded-full">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Connect & Learn</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Events & Meetups
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Discover upcoming tech events, conferences, and workshops to expand your network and knowledge
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedEvent ? (
          // Event Details View
          <div>
            <button 
              onClick={() => setSelectedEvent(null)}
              className="text-blue-600 hover:text-blue-800 flex items-center mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to events
            </button>

            {eventDetails && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Event Info - Left Column */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
                    <img 
                      src={eventDetails.image} 
                      alt={eventDetails.title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${eventTypeColors[eventDetails.category as keyof typeof eventTypeColors]}`}>
                          {eventDetails.category}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {eventDetails.date}
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          {eventDetails.attendees} attendees
                        </div>
                      </div>

                      <h1 className="text-3xl font-bold text-gray-900 mb-4">{eventDetails.title}</h1>
                      <p className="text-xl text-gray-600 mb-6">{eventDetails.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-start">
                          <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Date & Time</p>
                            <p className="text-gray-600">{eventDetails.date}</p>
                            <p className="text-gray-600">{eventDetails.time}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-gray-900">Location</p>
                            <p className="text-gray-600">{eventDetails.location}</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-8 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Speakers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {eventDetails.speakers.map((speaker, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                              <img 
                                src={speaker.image} 
                                alt={speaker.name} 
                                className="w-20 h-20 rounded-full mb-3"
                              />
                              <h3 className="font-medium text-gray-900">{speaker.name}</h3>
                              <p className="text-sm text-gray-500">{speaker.role}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Event Agenda</h2>
                        <div className="space-y-6">
                          {eventDetails.agenda.map((item, index) => (
                            <div key={index} className="flex">
                              <div className="mr-4 flex-shrink-0">
                                <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">
                                  {item.time}
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium text-gray-900">{item.title}</h3>
                                {item.speaker && (
                                  <p className="text-sm text-gray-500">Speaker: {item.speaker}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration Card - Right Column */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold text-gray-900 mr-2">
                          {eventDetails.price === "Free" ? "Free" : eventDetails.price}
                        </span>
                        {eventDetails.price !== "Free" && (
                          <span className="text-sm text-gray-500">per person</span>
                        )}
                      </div>
                    </div>
                    
                    {!eventDetails.isPast ? (
                      <button 
                        onClick={() => handleEventRegistration(eventDetails.id)}
                        className={`w-full py-3 rounded-lg font-medium mb-4 ${
                          registeredEvents.includes(eventDetails.id)
                            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                        } transition-colors`}
                      >
                        {registeredEvents.includes(eventDetails.id) ? 'Cancel Registration' : 'Register Now'}
                      </button>
                    ) : (
                      <div className="w-full py-3 rounded-lg font-medium mb-4 bg-gray-100 text-gray-500 text-center">
                        This event has ended
                      </div>
                    )}
                    
                    <div className="text-sm text-gray-500 space-y-4">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">Date & Time</p>
                          <p>{eventDetails.date}</p>
                          <p>{eventDetails.time}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">Location</p>
                          <p>{eventDetails.location}</p>
                          {eventDetails.location !== "Virtual" && (
                            <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View on map</a>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-700">Attendees</p>
                          <p>{eventDetails.attendees} people attending</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 mt-6 pt-6">
                      <h3 className="font-medium text-gray-900 mb-4">Share this event</h3>
                      <div className="flex space-x-4">
                        {['twitter', 'facebook', 'linkedin', 'email'].map((platform) => (
                          <a 
                            key={platform}
                            href="#"
                            className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
                          >
                            <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          // Event List View
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
                    placeholder="Search events..."
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Location Filter */}
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Location</h3>
                      <div className="space-y-2">
                        {[
                          { id: null, label: 'All Locations' },
                          { id: 'virtual', label: 'Virtual Events' },
                          { id: 'in-person', label: 'In-Person Events' }
                        ].map((option) => (
                          <button
                            key={option.id || 'all'}
                            onClick={() => handleLocationFilter(option.id)}
                            className={`block px-3 py-2 rounded-lg text-sm w-full text-left ${
                              locationFilter === option.id
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            {option.label}
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
                          { id: 'free', label: 'Free Events' },
                          { id: 'paid', label: 'Paid Events' }
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
                  </div>
                </div>
              )}

              {/* Past/Future Tabs */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab('future')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'future'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                    activeTab === 'past'
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>

            {/* Event Grid */}
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <div 
                    key={event.id} 
                    className="bg-white rounded-lg overflow-hidden hover:translate-y-[-4px] transition-all duration-300 border border-gray-100 hover:shadow-md"
                  >
                    <div 
                      className="relative cursor-pointer"
                      onClick={() => handleEventSelect(event.id)}
                    >
                      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                      <div className={`absolute top-3 left-3 ${eventTypeColors[event.category as keyof typeof eventTypeColors]} px-2 py-1 rounded-full text-xs font-medium`}>
                        {event.category}
                      </div>
                      {event.price === "Free" && (
                        <div className="absolute top-3 right-3 bg-green-50 text-green-600 border border-green-200 px-2 py-1 rounded-full text-xs font-medium">
                          Free
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div 
                        className="cursor-pointer"
                        onClick={() => handleEventSelect(event.id)}
                      >
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors">{event.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{event.description}</p>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2 text-blue-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                          {event.location}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attending
                        </div>
                        {!event.isPast ? (
                          <button 
                            onClick={() => handleEventRegistration(event.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              registeredEvents.includes(event.id)
                                ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                          >
                            {registeredEvents.includes(event.id) ? 'Registered' : 'Register'}
                          </button>
                        ) : (
                          <span className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 text-gray-500">
                            Event Ended
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg border border-gray-200">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventPage;
