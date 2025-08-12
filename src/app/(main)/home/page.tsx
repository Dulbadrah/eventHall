import { Search, ChevronDown, Star, Users, Calendar, Shield, Camera, MapPin, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"


import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { AnimatedSection } from "@/components/Animation"

export default function HomePage() {
  return (
      <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:px-8 animate-fade-in">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold font-serif hover:scale-105 transition-transform duration-300">
            PEERSPACE
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white text-sm">
          <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
            Browse Spaces
          </a>
          <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
            List Your Space
          </a>
          <a href="#" className="hover:opacity-80 transition-all duration-300 hover:scale-105">
            Log In
          </a>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg"
          >
            Sign Up
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" className="md:hidden text-white hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen hero-bg flex flex-col">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4 lg:px-8">
          {/* Search Form */}
          <div className="w-full max-w-4xl mb-16 animate-slide-up-delayed">
            <div className="bg-white rounded-lg shadow-2xl p-6 lg:p-8 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                {/* What are you planning */}
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                    What are you planning?
                  </label>
                  <Select>
                    <SelectTrigger className="w-full h-12 text-base hover:border-gray-400 transition-all duration-300 focus:scale-[1.02]">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="photoshoot">Photoshoot</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="production">Production</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                    Location
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="Ulaanbaatar, mn"
                      className="h-12 text-base pr-10 hover:border-gray-400 transition-all duration-300 focus:scale-[1.02]"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-gray-600 transition-colors duration-300" />
                  </div>
                </div>

                {/* When */}
                <div className="space-y-2 group">
                  <label className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors duration-300">
                    When
                  </label>
                  <div className="relative">
                    <Input
                      placeholder="Anytime"
                      className="h-12 text-base pr-10 hover:border-gray-400 transition-all duration-300 focus:scale-[1.02]"
                    />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-gray-600 transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <div className="mt-6 flex justify-end">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 h-12 text-base font-medium flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                  Search
                  <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="text-center text-white max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold font-serif leading-tight hover:scale-105 transition-transform duration-500">
              Find a space.
              <br />
              Fulfill your vision.
            </h1>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      </section>

      {/* Featured Spaces Section */}
      <AnimatedSection animation="slideUp">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
                Featured Spaces
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover unique venues perfect for your next event, meeting, or creative project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Space 1 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/modern-glass-conference.png"
                    alt="Modern Conference Room"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                    Meeting Room
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-sm text-gray-500">(127 reviews)</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-black transition-colors duration-300">
                    Modern Glass Conference Room
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Downtown Manhattan • Seats 12</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                      $85/hour
                    </span>
                    <Button size="sm" className="hover:scale-105 transition-all duration-300 hover:shadow-md">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Space 2 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/bright-photo-studio.png"
                    alt="Photography Studio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                    Photo Studio
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-gray-500">(89 reviews)</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-black transition-colors duration-300">
                    Bright Photography Studio
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Brooklyn • 1,200 sq ft</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                      $120/hour
                    </span>
                    <Button size="sm" className="hover:scale-105 transition-all duration-300 hover:shadow-md">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Space 3 */}
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/elegant-event-space.png"
                    alt="Event Space"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-sm font-medium group-hover:scale-105 transition-transform duration-300">
                    Event Space
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">5.0</span>
                    <span className="text-sm text-gray-500">(45 reviews)</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-black transition-colors duration-300">
                    Elegant Event Hall
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">Midtown • Capacity 150</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                      $200/hour
                    </span>
                    <Button size="sm" className="hover:scale-105 transition-all duration-300 hover:shadow-md">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300 hover:shadow-lg hover:bg-gray-50 bg-transparent"
              >
                View All Spaces
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Categories Section */}
      <AnimatedSection animation="slideUp" delay={200}>
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600">Find the perfect space for any occasion</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Users, label: "Meetings", count: "2,500+" },
                { icon: Camera, label: "Photo Shoots", count: "1,800+" },
                { icon: Calendar, label: "Events", count: "3,200+" },
                { icon: Play, label: "Productions", count: "950+" },
                { icon: Shield, label: "Workshops", count: "1,200+" },
                { icon: MapPin, label: "Pop-ups", count: "800+" },
              ].map((category, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    <category.icon className="w-8 h-8 text-gray-700 group-hover:text-black group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300">
                    {category.label}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                    {category.count} spaces
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection animation="slideUp" delay={300}>
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">Book your perfect space in three simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  number: "1",
                  title: "Search & Discover",
                  description:
                    "Browse thousands of unique spaces in your area. Filter by type, size, amenities, and price to find exactly what you need.",
                },
                {
                  number: "2",
                  title: "Book Instantly",
                  description:
                    "Check availability and book your space instantly. Secure payment processing and instant confirmation for peace of mind.",
                },
                {
                  number: "3",
                  title: "Create & Connect",
                  description:
                    "Show up and bring your vision to life. Our hosts provide everything you need for a successful event or project.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-500">
                  <div className="bg-black text-white rounded-full w-12 h-12 mx-auto mb-6 flex items-center justify-center text-xl font-bold group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-black transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection animation="scaleIn" delay={400}>
        <section className="py-16 lg:py-24 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10K+", label: "Unique Spaces" },
                { number: "500K+", label: "Happy Customers" },
                { number: "50+", label: "Cities Worldwide" },
                { number: "4.9", label: "Average Rating" },
              ].map((stat, index) => (
                <div key={index} className="group hover:scale-110 transition-all duration-500 cursor-default">
                  <div className="text-4xl lg:text-5xl font-bold font-serif mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection animation="slideUp" delay={500}>
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
                What Our Users Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Peerspace made finding the perfect venue for our product launch so easy. The booking process was seamless and the space exceeded our expectations.",
                  name: "Sarah Chen",
                  role: "Marketing Director",
                },
                {
                  text: "As a photographer, I've used Peerspace dozens of times. The variety of spaces and responsive hosts make every shoot a success.",
                  name: "Marcus Johnson",
                  role: "Photographer",
                },
                {
                  text: "Hosting our team retreat was stress-free thanks to Peerspace. The venue was perfect and the host was incredibly accommodating.",
                  name: "Emily Rodriguez",
                  role: "HR Manager",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 group"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                      <div>
                        <div className="font-semibold group-hover:text-black transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="slideUp" delay={600}>
        <section className="py-16 lg:py-24 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6 hover:scale-105 transition-transform duration-300">
              Ready to Find Your Perfect Space?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators, entrepreneurs, and event planners who trust Peerspace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                Browse Spaces
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                List Your Space
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4 group">
              <div className="text-xl font-bold font-serif group-hover:scale-105 transition-transform duration-300">
                PEERSPACE
              </div>
              <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                The world's largest marketplace for hourly venue rentals. Find unique spaces for meetings, events,
                productions, and more.
              </p>
              <div className="flex space-x-4">
                {[...Array(4)].map((_, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Browse */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">Browse</h3>
              <ul className="space-y-2 text-sm">
                {["Meeting Rooms", "Event Spaces", "Photo Studios", "Film Locations", "Workshops", "Pop-up Retail"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Host */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">Host</h3>
              <ul className="space-y-2 text-sm">
                {["List Your Space", "Host Resources", "Host Community", "Insurance", "Safety"].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">Support</h3>
              <ul className="space-y-2 text-sm">
                {["Help Center", "Contact Us", "Trust & Safety", "Cancellation Policy", "Community Guidelines"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"].map((item, index) => (
                <a key={index} href="#" className="hover:text-white transition-all duration-300 hover:scale-105">
                  {item}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © 2024 Peerspace, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
