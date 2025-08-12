import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/Animation";

import { EventCartSection } from "./components/EventCartSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SearchEvent } from "./components/SearchEvent";
import { CategorySection } from "./components/CategorySection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { CustomerReviews } from "./components/CustomerReviews";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <SearchEvent />

      <EventCartSection />

      <CategorySection />

      <HowItWorksSection />
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
                <div
                  key={index}
                  className="group hover:scale-110 transition-all duration-500 cursor-default"
                >
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

      <CustomerReviews />
      {/* CTA Section ymr negen um orulah */}

      <Footer />
    </div>
  );
}
