import React from 'react';

const ExtracurricularActivities = () => {
  const activities = [
    {
      title: 'IEEE ENET\'COM Student Branch',
      role: 'Active Member (2022 – Present)',
      description: 'Contributed to organizing workshops and events that bridged technical knowledge with hands-on experiences, helping fellow students enhance their engineering skills.'
    },
    {
      title: 'IEEE PES ENET\'COM Chapter',
      role: 'Secretary (2023 – 2024)',
      description: 'Coordinated team meetings, managed communications, and helped execute key events that focused on electrical engineering solutions and technologies.'
    },
    {
      title: 'Tunisian Chemical Group',
      role: 'Web Development Intern (2024)',
      description: 'Developed a web application to monitor production processes, improving the efficiency of factory operations through React.js, Node.js, and MongoDB.'
    }
  ];

  return (
    <section id="extracurricular" className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-6">Extracurricular Activities</h2>
        <p className="text-lg mb-8">I am passionate about engaging in activities that foster growth, collaboration, and leadership.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="activity-card bg-gray-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
              <p className="text-md mb-4">{activity.role}</p>
              <p>{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularActivities;
