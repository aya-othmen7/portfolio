function Education() {
  return (
    <section id="education" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-800 mb-6">
          Education
        </h2>
        <div className="space-y-6">
          {/* Industrial Computer Engineering Tab */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="enetcom.png" // Replace with the actual ENET'COM logo URL
                alt="ENET'COM Logo"
                className="w-16 h-16 object-cover"
              />
              <h3 className="text-2xl font-bold text-[#061148] text-shadow">
                Industrial Computer Engineering
              </h3>
            </div>
            <p className="text-lg text-gray-600">National School of Electronics and Telecommunications <b>ENET’COM</b> </p>
            <p className="text-lg text-gray-600 mt-2">Sfax, Tunisia</p>
            <p className="text-lg text-gray-600 mt-2">2022 - Present</p>
          </div>

          {/* MP Preparatory Classes Tab */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="ipeigb.jpg" // Replace with the actual ISSAT Gabes logo URL
                alt="ISSAT Gabes Logo"
                className="w-16 h-16 object-cover"
              />
              <h3 className="text-2xl font-bold text-[#061148] text-shadow">
                MP Preparatory Classes
              </h3>
            </div>
            <p className="text-lg text-gray-600">
               Preparatory Institute for Engineering Studies of Gabes <b>IPEIGb</b>
            </p>
            <p className="text-lg text-gray-600 mt-2">Gabes, Tunisia</p>
            <p className="text-lg text-gray-600 mt-2">2020 - 2022</p>
          </div>

          {/* Mathematics Baccalaureate Tab */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="bolbeb.jpg" // Replace with the actual BOLBEBA School logo URL
                alt="BOLBEBA School Logo"
                className="w-16 h-16 object-cover"
              />
              <h3 className="text-2xl font-bold text-[#061148] text-shadow">
                Mathematics Baccalaureate
              </h3>
            </div>
            <p className="text-lg text-gray-600"><b>BOLBEBA</b> School</p>
            <p className="text-lg text-gray-600 mt-2">Gabes, Tunisia</p>
            <p className="text-lg text-gray-600 mt-2">2016 - 2020</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
