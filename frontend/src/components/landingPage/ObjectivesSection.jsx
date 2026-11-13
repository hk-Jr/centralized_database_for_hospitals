import React from 'react';
import { 
  DatabaseIcon, 
  ShieldCheckIcon, 
  StethoscopeIcon, 
  NetworkIcon, 
  CheckCircleIcon,
  ActivityIcon,
  FileTextIcon
} from '../icons/Icons';

export default function ObjectivesSection() {
  const objectives = [
    {
      id: 1,
      icon: <DatabaseIcon size={26} />,
      title: "Centralize Hospital Information",
      description: "Aggregate institutional profiles, departmental registries, and clinical operational data into a singular, highly available data management tier."
    },
    {
      id: 2,
      icon: <ShieldCheckIcon size={26} />,
      title: "Secure Patient Record Keeping",
      description: "Safeguard sensitive electronic health records with rigorous encryption, audit trails, and data sovereignty compliance."
    },
    {
      id: 3,
      icon: <StethoscopeIcon size={26} />,
      title: "Doctor-Patient Relational Management",
      description: "Model explicit, traceable doctor-patient consultation links ensuring clinical access is tied directly to verified treatment assignments."
    },
    {
      id: 4,
      icon: <ActivityIcon size={26} />,
      title: "Enhanced Data Accessibility & Speed",
      description: "Accelerate clinical decision-making by eliminating record retrieval lag, ensuring treating doctors receive vital histories within seconds."
    },
    {
      id: 5,
      icon: <FileTextIcon size={26} />,
      title: "Data Consistency & Zero Redundancy",
      description: "Prevent conflicting medical records and duplicate diagnostic evaluations through synchronized centralized schema constraints."
    },
    {
      id: 6,
      icon: <NetworkIcon size={26} />,
      title: "Multi-Hospital Interoperability Foundation",
      description: "Architect a scalable foundation prepared for seamless multi-hospital federation, regional health network integration, and shared registries."
    }
  ];

  return (
    <section id="objectives" className="section section-objectives">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Strategic Blueprint</span>
          <h2 className="section-title">
            Core Objectives of the Centralized Platform
          </h2>
          <p className="section-subtitle">
            Every architectural module is engineered to resolve specific healthcare information challenges, prioritizing reliability, data integrity, and strict access governance.
          </p>
        </div>

        <div className="objectives-grid">
          {objectives.map((obj) => (
            <div key={obj.id} className="objective-card">
              <div className="objective-card-header">
                <div className="objective-icon-wrapper">
                  {obj.icon}
                </div>
                <span className="objective-number">0{obj.id}</span>
              </div>
              <h3 className="objective-title">{obj.title}</h3>
              <p className="objective-description">{obj.description}</p>
              <div className="objective-status">
                <CheckCircleIcon size={16} className="status-check" />
                <span>Core Architectural Requirement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

