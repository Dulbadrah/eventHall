import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/Animation";

export const EventCard = () => {
  return (
    <AnimatedSection animation="slideUp">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Featured Space 1 */}
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 group">
            <div className="relative h-48 overflow-hidden">
              <img
                src="meetingR.webp"
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
                Modern Conference Room
              </h3>
              <p className="text-gray-600 text-sm mb-3">Shangrila Ballroom</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg group-hover:scale-105 transition-transform duration-300">
                  $45/hour
                </span>
                <Button
                  size="sm"
                  className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                >
                  Захиалах
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </AnimatedSection>
  );
};
