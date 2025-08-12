export const ArtistGrid = () => {       
  return (
     <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-5 gap-1 md:gap-2 p-2 md:p-4">
          {[
            { name: "AMC", image: "/asian-female-rapper.png" },
           
          ]
            
            .map((artist, index) => (
              <div key={index} className="relative group cursor-pointer">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-12 md:h-20 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute bottom-1 left-1 text-xs font-semibold text-white drop-shadow-lg">
                  {artist.name}
                </div>
              </div>
            ))}
        </div>
  );
}