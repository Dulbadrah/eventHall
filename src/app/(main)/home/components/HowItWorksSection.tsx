import { AnimatedSection } from "@/components/Animation";

export const HowItWorksSection = () => {
  return (
    <AnimatedSection animation="slideUp" delay={300}>
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
              Захиалга өгөх нь маш энгийн
            </h2>
            <p className="text-lg text-gray-600">
              Танд тохирсон талбайг гурван хялбар алхмаар захиалахад л
              хангалттай.
            </p>
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
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-500"
              >
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
  );
};
