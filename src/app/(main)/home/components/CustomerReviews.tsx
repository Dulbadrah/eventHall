import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/Animation";

export const CustomerReviews = () => {
  return (
    <AnimatedSection animation="slideUp" delay={500}>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-sans text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
              Хэрэглэгчдийн сэтгэгдэл
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
  );
};
