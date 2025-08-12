import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 lg:px-8 animate-fade-in">
      <div className="flex items-center">
        <div className="text-white text-xl font-bold font-sans hover:scale-105 transition-transform duration-300">
          EventHive
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-white text-sm">
        <a
          href="#"
          className="hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          Хайлт хийх
        </a>
        <a
          href="#"
          className="hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          Эвентийн төрөл
        </a>
        <a
          href="#"
          className="hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          Нэвтрэх
        </a>
        <Button
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-lg"
        >
          Бүртгүүлэх
        </Button>
      </nav>

      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="md:hidden text-white hover:scale-110 transition-transform duration-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>
    </header>
  );
};
