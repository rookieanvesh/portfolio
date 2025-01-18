import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Classic Macintosh-style icons
const FolderIcon = ({ className, isOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className} fill={isOpen ? "#FFD700" : "#C0C0C0"}>
    <path d="M4 8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H4z" />
    <path d="M28 8H4L2 6h26z" fill="#808080" />
  </svg>
);

const PortfolioApp = () => {
  const [openFolders, setOpenFolders] = useState({
    experience: false,
    education: false,
    contact: false,
    skills: false,
    projects: false
  });

  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [emailStatus, setEmailStatus] = useState({
    sending: false,
    success: false,
    error: false
  });

  const toggleFolder = (folderName) => {
    setOpenFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName]
    }));
  };

  const handleEmailFormChange = (e) => {
    const { name, value } = e.target;
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    
    // Basic client-side validation
    if (!emailForm.name || !emailForm.email || !emailForm.message) {
      alert('Please fill in all fields');
      return;
    }

    setEmailStatus({ sending: true, success: false, error: false });

    try {
      const response = await fetch('https://formspree.io/f/xzzzqppv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: emailForm.name,
          email: emailForm.email,
          message: emailForm.message
        })
      });

      if (response.ok) {
        setEmailStatus({ sending: false, success: true, error: false });
        // Reset form
        setEmailForm({ name: '', email: '', message: '' });
        // Clear status after 3 seconds
        setTimeout(() => setEmailStatus({ sending: false, success: false, error: false }), 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setEmailStatus({ sending: false, success: false, error: true });
      // Clear error after 3 seconds
      setTimeout(() => setEmailStatus({ sending: false, success: false, error: false }), 3000);
    }
  };

  const WindowHeader = () => (
    <div className="bg-[#808080] h-6 flex items-center justify-between px-2 text-white text-xs">
      <span>Anvesh Srivastava - Portfolio</span>
      <div className="flex space-x-1">
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
      </div>
    </div>
  );

  const EducationContent = () => (
    <div className="p-2 text-xs bg-white">
      <div className="mb-2">
        <strong>Vellore Institute of Technology Bhopal</strong>
        <div>B.Tech in Computer Science and Engineering</div>
        <div>CGPA: 8.35/10 | Sep 2021 - Jul 2025</div>
      </div>
      <div>
        <strong>Campion School, Bhopal</strong>
        <div>Class XII: 85.4% | Apr 2020 - May 2021</div>
        <div>Class X: 92.2% | Apr 2018 - May 2019</div>
      </div>
    </div>
  );

  const ExperienceContent = () => (
    <div className="p-2 text-xs bg-white">
      <div>
        <strong>Intern at G-INFOSOFT Technologies, Bhopal</strong>
        <div>May 2024 - June 2024</div>
        <ul className="list-disc pl-4">
          <li>Architected distributed e-commerce platform using Spring Boot microservices</li>
          <li>Engineered fault-tolerant order processing system</li>
        </ul>
      </div>
    </div>
  );

  const ContactContent = () => (
    <div className="p-2 text-xs bg-white">
      <div className="mb-2">
        <strong>Contact Information</strong>
        <div>Phone: +91-7974-810-846</div>
        <div>Email: srivastavaanvesh13@gmail.com</div>
      </div>
      <form onSubmit={handleEmailSubmit} className="space-y-2">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={emailForm.name}
            onChange={handleEmailFormChange}
            required
            className="w-full p-1 border border-gray-400 bg-white"
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={emailForm.email}
            onChange={handleEmailFormChange}
            required
            className="w-full p-1 border border-gray-400 bg-white"
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={emailForm.message}
            onChange={handleEmailFormChange}
            required
            className="w-full p-1 border border-gray-400 bg-white h-24"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={emailStatus.sending}
          className="w-full p-2 bg-[#D4D0C8] border border-gray-500 hover:bg-gray-300"
        >
          {emailStatus.sending ? 'Sending...' : 'Send Message'}
        </button>
        {emailStatus.success && (
          <div className="text-green-600 text-center mt-2">
            Message sent successfully!
          </div>
        )}
        {emailStatus.error && (
          <div className="text-red-600 text-center mt-2">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </div>
  );

  const SkillsContent = () => (
    <div className="p-2 text-xs bg-white">
      <div>• Languages: Java, Spring Boot, React, JavaScript</div>
      <div>• Technologies: PostgreSQL, AWS, Microservices</div>
      <div>• Tools: Git, Kafka, Spring Security</div>
    </div>
  );

  const FileItem = ({ icon: Icon, label, onClick, isOpen }) => (
    <div 
      className={`flex items-center cursor-pointer p-1 ${isOpen ? 'bg-[#0000AA] text-white' : 'hover:bg-gray-200'}`}
      onClick={onClick}
    >
      <Icon className="mr-2 w-6 h-6" isOpen={isOpen} />
      <span>{label}</span>
      <span className="ml-auto text-xs">
        {isOpen ? '▼' : '▶'}
      </span>
    </div>
  );

  const SocialLinks = () => (
    <div className="absolute top-8 right-2 flex space-x-1">
      <a 
        href="https://github.com/rookieanvesh" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-700 hover:text-black"
        title="GitHub"
      >
        <img 
          src="/api/placeholder/24/24" 
          alt="GitHub" 
          className="w-6 h-6 bg-gray-300 rounded"
        />
      </a>
      <a 
        href="https://www.linkedin.com/in/anvesh-/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-700 hover:text-black"
        title="LinkedIn"
      >
        <img 
          src="/api/placeholder/24/24" 
          alt="LinkedIn" 
          className="w-6 h-6 bg-gray-300 rounded"
        />
      </a>
      <a 
        href="https://leetcode.com/u/rookieanvesh/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-700 hover:text-black"
        title="LeetCode"
      >
        <img 
          src="/api/placeholder/24/24" 
          alt="LeetCode" 
          className="w-6 h-6 bg-gray-300 rounded"
        />
      </a>
    </div>
  );

  return (
    <div className="font-mono bg-[#D4D0C8] min-h-screen flex items-center justify-center p-4">
      <div className="bg-white border-4 border-[#808080] shadow-lg w-full max-w-xl relative">
        <WindowHeader />
        <SocialLinks />
        
        <div className="p-2">
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold">Anvesh Srivastava</h1>
            <p className="text-xs text-gray-600">
              Final Year Student, VIT Bhopal
            </p>
          </div>

          <div className="border border-gray-400">
            <FileItem 
              icon={FolderIcon} 
              label="Education" 
              onClick={() => toggleFolder('education')}
              isOpen={openFolders.education}
            />
            {openFolders.education && <EducationContent />}

            <FileItem 
              icon={FolderIcon} 
              label="Experience" 
              onClick={() => toggleFolder('experience')}
              isOpen={openFolders.experience}
            />
            {openFolders.experience && <ExperienceContent />}

            <FileItem 
              icon={FolderIcon} 
              label="Contact" 
              onClick={() => toggleFolder('contact')}
              isOpen={openFolders.contact}
            />
            {openFolders.contact && <ContactContent />}

            <FileItem 
              icon={FolderIcon} 
              label="Skills" 
              onClick={() => toggleFolder('skills')}
              isOpen={openFolders.skills}
            />
            {openFolders.skills && <SkillsContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioApp;