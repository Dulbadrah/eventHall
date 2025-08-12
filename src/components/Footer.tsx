export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 group">
            <div className="text-xl font-bold font-sans group-hover:scale-105 transition-transform duration-300">
              EventHive
            </div>
            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              Та өөрийн хэрэгцээнд тохирсон өвөрмөц талбайг түрээслэн ашиглах
              боломжтой. Уулзалт, арга хэмжээ, продакшн зэрэг төрөл бүрийн
              зориулалтаар тохирох зайг олж ашиглаарай.
            </p>
            <div className="flex space-x-4">
              {[...Array(4)].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Browse */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Browse
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Meeting Rooms",
                "Event Spaces",
                "Photo Studios",
                "Film Locations",
                "Workshops",
                "Pop-up Retail",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Host */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Host
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "List Your Space",
                "Host Resources",
                "Host Community",
                "Insurance",
                "Safety",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "Help Center",
                "Contact Us",
                "Trust & Safety",
                "Cancellation Policy",
                "Community Guidelines",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
            {[
              "Terms of Service",
              "Privacy Policy",
              "Cookie Policy",
              "Accessibility",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-white transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
            © 2025 EventHive, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
