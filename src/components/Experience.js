function Experience() {
  return (
    <section id="experience" className="py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-800 mb-6">Experience</h2>
        <div className="space-y-6">
          {/* Web Development Intern */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-[#061148] text-shadow">
              Web Development Intern
            </h3>
            <p className="text-lg text-gray-700 italic">
              <b>Tunisian Chemical Group - Di-Ammonium Phosphate Factory</b> (2024)
            </p>
            <ul className="text-center text-gray-600 mt-4 space-y-2  pl-6">
              <li className="transition-all duration-300 transform hover:translate-x-2 hover:text-purple-700">
              Development of a web application for production monitoring using React.js, Node.js, and MongoDB
              </li>
              <li className="transition-all duration-300 transform hover:translate-x-2 hover:text-purple-700">
              Implementation of WebSocket for improved communication and REST APIs for efficient data retrieval.
              </li>
            </ul>
          </div>

          {/* Automation Intern */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-2xl font-bold text-[#061148] text-shadow">
              Automation Intern
            </h3>
            <p className="text-lg text-gray-700 italic">
              <b>Tunisian Chemical Group - Phosphoric Acid Factory </b>(2023)
            </p>
            <ul className="text-center text-gray-600 mt-4 space-y-2  pl-6">
              <li className="transition-all duration-300 transform hover:translate-x-2 hover:text-purple-700">
              Analysis and upgrade of the automation solution for the flocculating station of the phosphoric unit U2600, using RSLogix500, RSLinx, and RSView32.
              </li>
              <li className="transition-all duration-300 transform hover:translate-x-2 hover:text-purple-700">
              Optimization of control processes using GRAFCET and Ladder Logic
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
