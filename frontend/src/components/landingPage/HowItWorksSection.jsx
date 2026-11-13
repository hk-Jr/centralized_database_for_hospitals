import React from 'react';
import { 
  HospitalIcon, 
  StethoscopeIcon, 
  PatientIcon, 
  ShieldCheckIcon, 
  FileTextIcon 
} from '../icons/Icons';

export default function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: <HospitalIcon size={28} />,
      title: "Hospital Entity Registration",
      subtitle: "Institutional Verification",
      description: "Accredited hospital institutions are onboarded into the centralized network, defining clinical departments, operational standards, and institutional record standards."
    },
    {
      step: "02",
      icon: <StethoscopeIcon size={28} />,
      title: "Doctor Credentialing & Affiliation",
      subtitle: "Specialty & Practice Mapping",
      description: "Physicians and clinical specialists are securely mapped to their licensed hospitals and specialties, establishing verified clinical identities within the centralized directory."
    },
    {
      step: "03",
      icon: <PatientIcon size={28} />,
      title: "Unified Patient Profile Creation",
      subtitle: "Lifelong Health Identification",
      description: "Patients maintain an individual, secure health profile that tracks historical diagnoses, medications, and treatments across any connected medical institution."
    },
    {
      step: "04",
      icon: <ShieldCheckIcon size={28} />,
      title: "Authorized Treatment Linkage",
      subtitle: "Active Clinical Care Governance",
      description: "When a patient consults an affiliated doctor, an authorized treatment relationship is forged. Access to medical histories is dynamically granted solely for active care."
    },
    {
      step: "05",
      icon: <FileTextIcon size={28} />,
      title: "Synchronized Record Management",
      subtitle: "Consolidated Real-Time Notes",
      description: "New clinical notes, lab results, and prescriptions are written directly to the centralized database, keeping records updated, tamper-evident, and accessible for future authorized care."
    }
  ];

  return (
    <section id="how-it-works" className="section section-workflow">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Relational Architecture</span>
          <h2 className="section-title">
            How the Centralized Platform Operates
          </h2>
          <p className="section-subtitle">
            A cohesive relationship model linking institutions, healthcare providers, and patients to ensure medical continuity while enforcing precise authorization gates.
          </p>
        </div>

        {/* Workflow Timeline / Steps */}
        <div className="workflow-steps-wrapper">
          {steps.map((item, index) => (
            <div key={item.step} className="workflow-step-card">
              <div className="step-card-indicator">
                <span className="step-number">{item.step}</span>
                <div className="step-icon-box">
                  {item.icon}
                </div>
              </div>

              <div className="step-card-content">
                <span className="step-subtitle">{item.subtitle}</span>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <div className="connector-line"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Beneficiaries Breakdown: Doctors vs Patients */}
        <div className="beneficiaries-grid">
          {/* For Doctors */}
          <div className="beneficiary-box doctor-box">
            <div className="beneficiary-header">
              <div className="beneficiary-icon">
                <StethoscopeIcon size={24} />
              </div>
              <div>
                <h3>How Doctors Benefit</h3>
                <span>Enhanced Clinical Accuracy</span>
              </div>
            </div>
            <ul className="beneficiary-list">
              <li>Immediate access to pre-existing allergies, ongoing prescriptions, and chronic conditions.</li>
              <li>Elimination of diagnostic delays caused by waiting for external hospital fax or courier transfers.</li>
              <li>Confidence that all historical lab and imaging data originates from authenticated institutions.</li>
              <li>Clear clinical scope: permissions are scoped solely to actively assigned patients.</li>
            </ul>
          </div>

          {/* For Patients */}
          <div className="beneficiary-box patient-box">
            <div className="beneficiary-header">
              <div className="beneficiary-icon">
                <PatientIcon size={24} />
              </div>
              <div>
                <h3>How Patients Benefit</h3>
                <span>Empowered & Protected Health</span>
              </div>
            </div>
            <ul className="beneficiary-list">
              <li>No longer required to physically transport folders of paper records between hospitals.</li>
              <li>Prevention of hazardous drug interactions and unnecessary repeated blood draws or CT scans.</li>
              <li>24/7 personal access to complete diagnostic histories and doctor recommendations.</li>
              <li>Total peace of mind knowing medical records are safeguarded from unauthorized viewers.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

