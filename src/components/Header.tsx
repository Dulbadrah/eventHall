import { Bell, Search, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div>
     <header className="flex items-center justify-between p-4 bg-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            haltwar <span className="text-purple-500">✕</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Хайх..."
              className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="sm" className="text-gray-300 hidden sm:inline-flex">
            Нэвтрэх & Бүртгүүлэх
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-300 hidden md:inline-flex">
            Эвент зарлах
          </Button>
          <Bell className="w-5 h-5 text-gray-400" />
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </header>
      <div className="md:hidden px-4 py-2 bg-gray-800/30">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Хайх..."
                  className="pl-10 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
            </div>
  );
}