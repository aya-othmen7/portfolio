function About() {
  return (
    <section id="about" className="bg-gradient-to-t py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-800 mb-6">
          About Me
        </h2>
        <div className="flex justify-center items-center space-x-12">
          <img
            src="Capture.PNG"
            alt="Aya Othmen"
            className="rounded-full w-64 h-64 object-cover border-4 border-gray-300 shadow-lg shadow-gray-800 hover:shadow-2xl hover:shadow-gray-700 transition-all duration-300"
          />
          <div className="max-w-lg text-left space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
            I’m <b>Aya Othmen</b>, a dedicated Engineer and Developer passionate about creating innovative solutions that merge technology with real-world needs. I specialize in web development, embedded systems, and industrial automation, constantly exploring new ways to enhance efficiency and functionality. </p>
            <p className="text-xl text-gray-600 leading-relaxed">
            With hands-on experience in React.js, Node.js, and MongoDB, I enjoy building intuitive, user-focused web applications. I’m also deeply intrigued by embedded programming and IoT systems, which inspire me to keep learning and evolving in this fast-paced tech world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
