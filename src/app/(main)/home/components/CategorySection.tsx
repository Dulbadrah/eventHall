import { Users, Calendar, Shield, Camera, MapPin, Play } from "lucide-react";

import { AnimatedSection } from "@/components/Animation";

export const CategorySection = () => {
  return (
    <AnimatedSection animation="slideUp" delay={200}>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
              Browse by Category
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect space for any occasion
            </p>
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
  );
};
