export const SelectDay = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-4 bg-gray-800/30 overflow-x-auto">
      <div className="flex items-center gap-2 text-purple-400 whitespace-nowrap">
        <div className="w-2 h-2 bg-purple-400 rounded-full" />
        <span className="text-sm md:text-base">Бүх эвент хэмжээнүүд</span>
      </div>
      <div className="flex gap-4 md:gap-6 text-gray-400">
        <span className="hover:text-white cursor-pointer whitespace-nowrap text-sm md:text-base">
          Өнөөдөр
        </span>
        <span className="hover:text-white cursor-pointer whitespace-nowrap text-sm md:text-base">
          Маргааш
        </span>
        <span className="hover:text-white cursor-pointer whitespace-nowrap text-sm md:text-base">
          Амралтын өдөр
        </span>
        <span className="hover:text-white cursor-pointer whitespace-nowrap text-sm md:text-base">
          Энэ 7 хоногт
        </span>
      </div>
    </div>
  );
};
