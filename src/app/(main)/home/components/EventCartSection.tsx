import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/Animation";
import { EventCard } from "@/components/EventCard";
// import { useContext, useState } from "react";

export const EventCartSection = () => {
  // const [eventHall, setEventHall]= useState<EventHall[]>([])

  // const {event} useContext= EventProvider

  return (
    <AnimatedSection animation="slideUp">
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-gray-900 mb-4 hover:scale-105 transition-transform duration-300">
              Хүссэн Арга Хэмжээнд Тань Зориулсан Онцгой Танхимууд
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Бүтээлч санаа, чухал уулзалт, төрөл бүрийн арга хэмжээнд тохирсон
              онцгой орон зайг танд санал болгож байна.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {eventHall?.map((hall) => ( */}
            <EventCard />
            {/* ))} */}
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
  );
};
