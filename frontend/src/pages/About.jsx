import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      
      <div className="space-y-6">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Department Background and Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            Established in 2016, the Department of Computer Science and Engineering (CSE) at IIT Dharwad is one of the institute's foundational departments. It offers a comprehensive suite of academic programs, including a four-year B.Tech., a two-year M.Tech. (launched in 2024), and two research-intensive programs—M.S. (by Research) and Ph.D.—in Computer Science and Engineering. Beginning from the academic year 2025–26, the M.S. (by Research) program will be renamed as M.Tech. by Research to better reflect its structure and rigor.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Academic Programs</h2>
          <p className="text-gray-600 leading-relaxed">
            In addition, the department offers an interdisciplinary B.Tech. program in Mathematics and Computing in collaboration with the Department of Mathematics, a minor program in Data Science and Artificial Intelligence, jointly with the Department of Electrical, Electronics, and Communication Engineering, and a minor program in Computer Science.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Research Areas</h2>
          <div className="space-y-4">
            <div className="text-gray-600 leading-relaxed">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Theoretical Foundations</h3>
              <p>Including logic, graph theory, and algorithms</p>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Systems</h3>
              <p>Encompassing computer architecture, operating systems, compilers, and parallel and distributed computing</p>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Networks</h3>
              <p>With focus on cutting-edge research in 4G/5G/6G cellular networks, IoT networks, network protocols, security, and AI/ML-driven network management. Work also spans edge/fog computing, vehicular communication (V2X), and network slicing/virtualization</p>
            </div>
            <div className="text-gray-600 leading-relaxed">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Artificial Intelligence and Machine Learning (AI/ML)</h3>
              <p>Emphasizing applied machine learning, deep learning, optimization, evolutionary computation, generative modeling, and data science.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Interdisciplinary Research</h2>
          <p className="text-gray-600 leading-relaxed">
            In addition, the department is involved in several interdisciplinary research domains such as cyber-physical systems, smart grids, healthcare technologies, natural language processing, scientific computing, and blockchain systems—addressing contemporary challenges in cybersecurity, distributed computing, and intelligent systems.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Curriculum and Innovation</h2>
          <p className="text-gray-600 leading-relaxed">
            The B.Tech. and M.Tech. curricula are thoughtfully designed to strike a balance between strong foundational knowledge and advanced specialization tracks, aligned with faculty research expertise and the evolving demands of the computing discipline. Courses are continuously updated to reflect the latest developments in academic research and industry practices.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The department is deeply committed to fostering innovation and impactful research. It maintains robust collaborations with leading academic institutions, government agencies, and industry partners. Supported by state-of-the-art laboratories, high-performance computing infrastructure, and a vibrant research ecosystem, students and scholars are well-equipped to translate ideas into impactful prototypes and deployable solutions.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            The department's research culture is further evidenced by frequent contributions to top-tier journals and prestigious international conferences, highlighting its expanding global research footprint.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 