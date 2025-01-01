function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-800 mb-8">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Product Management Interface with Spring Boot */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Product Management Interface with Spring Boot
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Developed a product management interface using <b>Spring Boot</b> and <b>MySQL</b> for database management, enabling efficient product management and search functionality within a web-based environment.
            </p>
            <p className="text-sm text-gray-500">11/2024 - Sfax</p>
          </div>

          {/* Excel File Transfer and Processing Between Mobile, LabVIEW, and Google Drive */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Excel File Transfer and Processing Between Mobile, LabVIEW, and Google Drive
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Used the <b>GDrive</b> Library in <b>LabVIEW</b> to download/upload files from Google Drive and the Report Generation Toolkit with ActiveX to manipulate Excel files (add sheets, data, and charts).
            </p>
            <p className="text-sm text-gray-500">11/2024 - Sfax</p>
          </div>

          {/* Distributed Book Management System */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Distributed Book Management System
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Developed a distributed service for managing books using <b>Java RMI</b>, facilitating efficient data handling in a networked environment.
            </p>
            <p className="text-sm text-gray-500">05/2024 - Sfax</p>
          </div>

          {/* Task Management Web Application */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Task Management Web Application
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Created a web application for task management using<b> HTML</b>,<b> CSS</b>, <b>JavaScript</b>, <b>PHP</b>, and <b>MySQL</b>, emphasizing user experience and functionality.
            </p>
            <p className="text-sm text-gray-500">05/2024 - Sfax</p>
          </div>

          {/* Intelligent Cane for the Visually Impaired */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Intelligent Cane for the Visually Impaired
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Designed and developed an intelligent cane using <b>Arduino</b> and <b>GPS</b> technology to aid navigation for visually impaired individuals, integrating sensors to enhance user autonomy and safety.
            </p>
            <p className="text-sm text-gray-500">11/2023 – 04/2024 - Sfax</p>
          </div>

          {/* Creation of a Graphic Interface for Cargo Management */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Creation of a Graphic Interface for Cargo Management
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Created a graphic interface for cargo management using <b>Java</b> programming.
            </p>
            <p className="text-sm text-gray-500">12/2023 - Sfax</p>
          </div>

          {/* Temperature Control System Simulation */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-80 transform transition-all hover:scale-105 duration-300 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-[#061148] mb-4 hover:text-purple-700">
              Temperature Control System Simulation
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Simulated a temperature control system for an oven using <b>Proteus</b> and <b>MPLAB X IDE</b>, programming and testing with the <b>PIC 16F877A microcontroller</b>.
            </p>
            <p className="text-sm text-gray-500">05/2023 - Sfax</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
