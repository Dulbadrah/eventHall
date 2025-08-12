"use client";

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Calendar from "../../../../components/ui/Calendar";
import { useState } from "react";

export const SearchEvent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  }).filter((_, i) => i % 3 !== 0);
  return (
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
                  {/* <div className="min-h-screen bg-gray-50 py-8">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                      <Calendar
                        selectedDate={selectedDate}
                        onDateSelect={setSelectedDate}
                        availableDates={availableDates}
                      />
                    </div>
                  </div> */}
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
          <h1 className="text-3xl lg:text-4xl font-bold font-sans leading-tight hover:scale-105 transition-transform duration-500">
            Бодож байгаа бүхнээ бодит болго.
            <br />
            Танд тохирох орон зайгаа эндээс ол!
          </h1>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
};
