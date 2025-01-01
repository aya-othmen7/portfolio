function Skills() {
  return (
    <section id="skills" className="bg-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-purple-800 mb-6">Skills</h2>
        
        {/* Programming Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6  text-[#061148] text-shadow">Programming Languages</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillCard name="Java" logo="Java.bmp" proficiency="0%" color="blue-500" />
            <SkillCard name="JavaScript" logo="js.png" proficiency="85%" color="yellow-500" />
            <SkillCard name="Python" logo="python-logo.jpg" proficiency="80%" color="green-500" />
            <SkillCard name="C/C++" logo="C++.png" proficiency="75%" color="red-500" />
           </div>
        </div>
        {/* Web Development */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6  text-[#061148] text-shadow">Web Development</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillCard name="React.js" logo="logo512.png" proficiency="0%" color="blue-500" />
            <SkillCard name="Node.js" logo="Node.js.png" proficiency="85%" color="green-500" />
            <SkillCard name="Chart.js" logo="Chart.js.png" proficiency="90%" color="blue-400" />
            <SkillCard name="MongoDB" logo="mongodb.png" proficiency="80%" color="orange-500" />
            <SkillCard name="MySQL" logo="mysql.png" proficiency="75%" color="purple-500" />
            <SkillCard name="Spring Boot" logo="spring-boot-logo.png" proficiency="70%" color="gray-500" />
            <SkillCard name="XAMPP" logo="XAMPP.png" proficiency="70%" color="teal-500" />
            <SkillCard name="HTML" logo="HTML5.png" proficiency="95%" color="red-400" />
            <SkillCard name="CSS" logo="css.png" proficiency="90%" color="blue-400" />
        
          </div>
        </div>

        {/* IoT and Embedded Systems */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6  text-[#061148] text-shadow">IoT and Embedded Systems</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillCard name="ESP32" logo="esp32.png" proficiency="85%" color="teal-500" />
            <SkillCard name="Arduino Uno" logo="Arduino.png" proficiency="80%" color="blue-400" />
            <SkillCard name="PIC 16F877A" logo="pic.png" proficiency="75%" color="green-600" />
            <SkillCard name="MQTT" logo="mqqt.png" proficiency="80%" color="purple-500" />
            <SkillCard name="CoAP" logo="coap.png" proficiency="75%" color="orange-500" />
            <SkillCard name="Ubidots" logo="ubidots.jpg" proficiency="70%" color="blue-700" />
            <SkillCard name="Blynk" logo="blynk.png" proficiency="70%" color="lime-500" />
            <SkillCard name="Workwi" logo="workwi.png" proficiency="70%" color="indigo-500" />
          </div>
        </div>

        {/* Tools */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6  text-[#061148] text-shadow">Tools</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <SkillCard name="Proteus" logo="Proteus.png" proficiency="80%" color="yellow-600" />
            <SkillCard name="MPLAB X IDE" logo="mplab.png" proficiency="75%" color="blue-800" />
            <SkillCard name="Arduino" logo="Arduino.png" proficiency="85%" color="blue-400" />
            <SkillCard name="LabView" logo="labview.webp" proficiency="80%" color="green-600" />
            <SkillCard name="Visual Studio Code" logo="vsc-logo.png" proficiency="80%" color="indigo-500" />
            <SkillCard name="Android Studio" logo="Android_Studio.png" proficiency="75%" color="lime-600" />
            <SkillCard name="Eclipse IDE" logo="eclipse.png" proficiency="70%" color="purple-600" />
          </div>
        </div>

        {/* Project Management */}
        <div>
          <h3 className="text-2xl font-semibold mb-6  text-[#061148] text-shadow">Project Management</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <Skill name="Agile Methodologies" proficiency="80%" color="yellow-600" />
            <Skill name="Team Coordination"  proficiency="75%" color="blue-800" />
            <Skill name="Innovation"  proficiency="85%" color="blue-400" />
            <Skill name="Leadership"  proficiency="80%" color="green-600" />
          </div>
    
        </div>
      </div>
    </section>
  );
}

function Skill({ name, proficiency, color }) {
  return (
    <div className="w-48 text-center">
      <h3 className="text-xl font-semibold">{name}</h3>
      <div
        className={`h-2 bg-${color} mt-2 rounded-full`}
        style={{ width: proficiency }}
      ></div>
    </div>
  );
}
function SkillCard({ name, logo, proficiency, color }) {
  return (
    <div className="w-48 text-center">
      <img src={logo} alt={name} className="mx-auto w-16 h-16 mb-2" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <div
        className={`h-2 bg-${color} mt-2 rounded-full`}
        style={{ width: proficiency }}
      ></div>
    </div>
  );
}

export default Skills;
