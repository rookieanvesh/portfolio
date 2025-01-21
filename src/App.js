import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaFile, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ContactForm from './ContactForm'
import { 
  FaJava, 
  FaReact, 
  FaGit, 
  FaAws, 
  FaDatabase 
 } from 'react-icons/fa';
 import { 
  SiSpringboot, 
  SiJavascript, 
  SiPostgresql, 
  SiMysql, 
  SiApachekafka,
  SiSpring
 } from 'react-icons/si';
const FileIcon = ({ type, isOpen }) => {
  if (type === 'folder') {
    return isOpen ? 
      <FaFolderOpen className="text-yellow-400" size={20} /> : 
      <FaFolder className="text-yellow-400" size={20} />;
  }
  return <FaFile className="text-gray-400" size={20} />;
};
const WelcomeMessage = () => (
  <div className="flex flex-col items-center justify-center h-full text-gray-600">
    <p className="text-xl font-light mb-4">📂 Click around! I promise it won't download</p>
    <p className="text-sm">Final year student at VIT Bhopal University</p>
  </div>
);
const contentComponents = {
  about: () => (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">About Me</h2>
      <p>Final Year Student at VIT Bhopal with expertise in Spring Boot and React.</p>
    </div>
  ),
  education: () => (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold">VIT Bhopal</h3>
      <p>B.Tech in Computer Science | CGPA: 8.35/10</p>
      <p>2021 - 2025</p>
      
      <h3 className="font-semibold mt-4">Campion School, Bhopal</h3>
      <p>Class XII: 85.4% | 2021</p>
      <p>Class X: 92.2% | 2019</p>
    </div>
  ),
  experience: () => (
    <div className="p-4 space-y-4">
      <div>
        <h3 className="font-semibold">Intern at G-INFOSOFT Technologies</h3>
        <p className="text-gray-600">May 2024 - June 2024</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Architected distributed e-commerce platform</li>
          <li>Engineered fault-tolerant order processing system</li>
        </ul>
      </div>
    </div>
  ),
  certifications: () => (
    <div className="p-4 space-y-4">
      <h3 className="font-semibold text-xl">AWS Certifications</h3>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold">AWS Solutions Architect Associate [SAA-C03]</h4>
          <a 
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/b5ea291b44bf41f59d753248a49b90ed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mt-2"
          >
            <span>Verify Certificate</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>

        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-semibold">AWS Cloud Practitioner [CLF-C02]</h4>
          <a 
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/fd16daf4a1de46989e27ec7cc8f59930"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mt-2"
          >
            <span>Verify Certificate</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  ),
  vivaran: () => (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl">Vivaran - Documentation Platform</h3>
        <a 
          href="https://github.com/rookieanvesh/vivaran"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaGithub size={20} />
          <span className="text-sm">View Code</span>
        </a>
      </div>
      <div className="mt-4 mb-4">
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/TaHqsHOqeWk"
          title="Vivaran Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="space-y-2">
        <div className="text-gray-600 italic">September 2024 - November 2024</div>
        <div className="text-gray-600">Java, Spring Boot, MySql, AWS RDS, OAuth2, React, Google Gemini</div>
      </div>
      <ul className="list-disc pl-4 mt-2 space-y-2">
        <li>Built a secure documentation platform with OAuth2/MFA with over 5+ team members, implementing audit logging with 100% action traceability.</li>
        <li>Strengthened platform security through JWT-based authentication and CSRF protection, maintaining documentation integrity.</li>
        <li>Integrated Google Gemini AI for natural language documentation queries, reducing retrieval time from 5 minutes to 45 seconds.</li>
        <li>Optimized database performance and scalability using Amazon RDS and Elastic Beanstalk, reducing query response time by 60% while maintaining 75% system uptime.</li>
      </ul>
    </div>
  ),
 
  restin: () => (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-xl">RestIn - Hotel Management System</h3>
        <a 
          href="https://github.com/rookieanvesh/hotel-management"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          <FaGithub size={20} />
          <span className="text-sm">View Code</span>
        </a>
      </div>
      <div className="mt-4 mb-4">
        <iframe 
          className="w-full aspect-video rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/2jmLb_gZ70A"
          title="RestIn Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="space-y-2">
        <div className="text-gray-600 italic">August 2024 - September 2024</div>
        <div className="text-gray-600">Java, Spring Boot, PostgreSQL, AWS S3, React, JWT</div>
      </div>
      <ul className="list-disc pl-4 mt-2 space-y-2">
        <li>Constructed a full-stack hotel management system using Spring Boot and MVC architecture with JWT authentication, improving booking efficiency by 10%.</li>
        <li>Integrated AWS S3 for image storage and designed a SQL database, optimizing system performance by reducing page load times by 40% and enabling the management of over 7+ room listings concurrently.</li>
        <li>Designed and simplified a concurrency-safe booking system using database transactions and pessimistic locking, eliminating double-bookings and improving customer satisfaction by 15%.</li>
      </ul>
    </div>
  ),
  projects: () => (
    <div className="p-4 space-y-8">
      <div>
        <h3 className="font-semibold text-xl">Vivaran - Documentation Platform</h3>
        <ul className="list-disc pl-4 mt-2">
          <li>Built with Spring Boot and React</li>
          <li>Features OAuth2/MFA, JWT authentication</li>
          <li>Integrated Google Gemini AI</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-xl">RestIn - Hotel Management System</h3>
        <div className="mt-4 mb-4">
          <iframe 
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/2jmLb_gZ70A"
            title="RestIn Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <ul className="list-disc pl-4 mt-2">
          <li>Full-stack hotel management system using Spring Boot and MVC architecture</li>
          <li>Improved booking efficiency by 10% with JWT authentication</li>
          <li>Integrated AWS S3 for image storage and optimized SQL database design</li>
          <li>Reduced page load times by 40%</li>
          <li>Implemented concurrency-safe booking system using database transactions</li>
          <li>Eliminated double-bookings with pessimistic locking</li>
          <li>Improved customer satisfaction by 15%</li>
        </ul>
        <div className="mt-4">
          <a 
            href="https://www.youtube.com/watch?v=2jmLb_gZ70A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span>Watch Demo on YouTube</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  ),
  contact: () => <ContactForm />,
  skills: () => (
    <div className="p-4 space-y-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-xl mb-4">Skills & Technologies</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm text-gray-600 mb-2">Languages & Frameworks</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <FaJava className="text-red-600" size={20} />
                <span>Java</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <SiSpringboot className="text-green-600" size={20} />
                <span>Spring Boot</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <FaReact className="text-blue-500" size={20} />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                <SiJavascript className="text-yellow-500" size={20} />
                <span>JavaScript</span>
              </div>
            </div>
            </div>
    
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Databases & Cloud</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <SiPostgresql className="text-blue-600" size={20} />
                  <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <SiMysql className="text-orange-600" size={20} />
                  <span>MySQL</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <FaAws className="text-orange-500" size={20} />
                  <span>AWS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <FaDatabase className="text-gray-600" size={20} />
                  <span>Microservices</span>
                </div>
              </div>
            </div>
    
            <div>
              <h4 className="text-sm text-gray-600 mb-2">Tools & Others</h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <FaGit className="text-orange-600" size={20} />
                  <span>Git</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <SiApachekafka className="text-black" size={20} />
                  <span>Kafka</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <SiSpring className="text-green-600" size={20} />
                  <span>Spring Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    }

const fileTree = {
  name: 'Portfolio',
  type: 'folder',
  isOpen: true,
  children: [
    {
      name: 'About',
      type: 'folder',
      isOpen: false,
      children: [
        { name: 'Education', type: 'file', content: 'education' },
        { name: 'Experience', type: 'file', content: 'experience' },
        { name: 'Skills', type: 'file', content: 'skills' },
        { name: 'Certifications', type: 'file', content: 'certifications' }
      ]
    },
    {
      name: 'Projects',
      type: 'folder',
      isOpen: false,
      children: [
        { name: 'Vivaran', type: 'file', content: 'vivaran' },
        { name: 'RestIn', type: 'file', content: 'restin' }
      ]
    },
    { name: 'Contact', type: 'file', content: 'contact' }
  ]
};

const FileTreeNode = ({ node, depth = 0, onSelect, selectedFile }) => {
  const paddingLeft = depth * 16;
  const isSelected = selectedFile === node;

  return (
    <div>
      <div 
        className={`flex items-center gap-2 px-2 py-1 cursor-pointer hover:bg-gray-100
          ${isSelected ? 'bg-blue-100' : ''}`}
        style={{ paddingLeft: `${paddingLeft}px` }}
        onClick={() => onSelect(node)}
      >
        <FileIcon type={node.type} isOpen={node.isOpen} />
        <span className="text-sm">{node.name}</span>
      </div>
      {node.type === 'folder' && node.isOpen && node.children?.map((child, index) => (
        <FileTreeNode 
          key={index}
          node={child}
          depth={depth + 1}
          onSelect={onSelect}
          selectedFile={selectedFile}
        />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSelect = (node) => {
    if (node.type === 'file') {
      setSelectedFile(node);
    } else {
      node.isOpen = !node.isOpen;
      setSelectedFile({ ...node });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
  <div className="flex gap-2">
    <div className="w-3 h-3 rounded-full bg-red-500"></div>
    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
    <div className="w-3 h-3 rounded-full bg-green-500"></div>
  </div>
  <div className="text-white text-sm">Anvesh's Portfolio</div>
  <div className="flex gap-4 text-gray-400">
      <a href="https://drive.google.com/drive/folders/1KDRCfdB0deKhMjtw92fbU3GfcRxKKWEh" 
        target="_blank" 
        rel="noopener noreferrer"
        title="Resume"
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-700 transition-all hover:text-white">
        <FaFileAlt size={16} />
        <span className="text-sm">Resume</span>
      </a>
      <a href="https://github.com/rookieanvesh" 
        target="_blank" 
        rel="noopener noreferrer"
        title="GitHub"
        className="transition-transform hover:scale-110">
        <FaGithub className="hover:text-white" size={20} />
      </a>
      <a href="https://www.linkedin.com/in/anvesh-/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="LinkedIn"
        className="transition-transform hover:scale-110">
        <FaLinkedin className="hover:text-white" size={20} />
      </a>
      <a href="https://leetcode.com/u/rookieanvesh/" 
        target="_blank" 
        rel="noopener noreferrer"
        title="LeetCode"
        className="transition-transform hover:scale-110">
        <SiLeetcode className="hover:text-white" size={20} />
    </a>
  </div>
</div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200">
            <FileTreeNode 
              node={fileTree} 
              onSelect={handleSelect}
              selectedFile={selectedFile}
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-4 min-h-[500px]">
            {selectedFile ? (
              contentComponents[selectedFile.content]?.()
            ) : (
              <div className="h-full flex items-center justify-center">
                <WelcomeMessage />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-4 py-3 text-center text-sm text-gray-600">
          Made by Anvesh © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};
export default Portfolio;