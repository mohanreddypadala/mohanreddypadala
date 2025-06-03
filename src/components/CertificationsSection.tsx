import React from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationLink?: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "March 14, 2024",
      credentialId: "9D26C8AD19E37422",
      verificationLink: "#"
    },
    {
      id: 2,
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "May 25, 2024",
      credentialId: "66AEA72F24DF6A27",
      verificationLink: "#"
    },
    {
      id: 3,
      name: "Network Security Associate Virtual Internship",
      issuer: "Fortinet",
      date: "January - March 2024",
      credentialId: "bc2e8cae6a603d4bcb3f4ab47a15bcbb",
      verificationLink: "#"
    },
    {
      id: 4,
      name: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 31, 2025",
      credentialId: "HCM Certified Foundation Associate",
      verificationLink: "#"
    },
    {
      id: 5,
      name: "Salesforce Certified AI Specialist",
      issuer: "Salesforce",
      date: "February 01, 2025",
      credentialId: "5731670",
      verificationLink: "https://sforce.co/verifycerts"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center">
            <span className="text-[#0066cc] font-mono mr-2">05.</span>
            Certifications
            <div className="ml-4 h-px bg-gray-700 flex-grow"></div>
          </h2>
          
          <p className="text-gray-400 mt-4 mb-12">
            Professional certifications that validate my technical skills and expertise.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-[#262626] rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] shadow-lg hover:shadow-[#0066cc]/20"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                  <CheckCircle className="h-5 w-5 text-[#0066cc] flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-gray-400 mt-2">{cert.issuer}</p>
                <p className="text-xs font-mono text-gray-500 mt-2">ID: {cert.credentialId}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs font-mono text-[#0066cc]">{cert.date}</span>
                  {cert.verificationLink && (
                    <a 
                      href={cert.verificationLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#0066cc] transition-colors duration-300 flex items-center text-sm"
                    >
                      Verify
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;