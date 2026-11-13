import React from 'react';
import { 
  ShieldCheckIcon, 
  LockIcon, 
  EyeOffIcon, 
  StethoscopeIcon, 
  PatientIcon, 
  CheckCircleIcon 
} from '../icons/Icons';

export default function SecuritySection() {
  const securityRules = [
    {
      icon: <StethoscopeIcon size={24} />,
      title: "Doctor Authorization Scoping",
      rule: "Authorized Treatment Only",
      description: "Doctors can only access the medical histories of patients they have been actively authorized to treat. Blanket directory browsing across hospital patients is strictly blocked.",
      badge: "Strict Treatment Scope"
    },
    {
      icon: <PatientIcon size={24} />,
      title: "Patient Self-Sovereign Access",
      rule: "Isolated Self-Access",
      description: "Patients enjoy transparent, immediate access to their personal medical records, diagnostic outcomes, and historical prescriptions without administrative obstacles.",
      badge: "Patient Direct Access"
    },
    {
      icon: <EyeOffIcon size={24} />,
      title: "Zero Cross-Patient Visibility",
      rule: "Complete Patient Privacy",
      description: "Patients can never access or discover another patient's medical history, personal identifiers, or diagnostic records under any circumstance.",
      badge: "Absolute Data Boundary"
    },
    {
      icon: <LockIcon size={24} />,
      title: "Doctor Caseload Masking",
      rule: "Operational Confidentiality",
      description: "Patients are not permitted to view how many patients a doctor is treating or access broader hospital caseload statistics, preserving clinical workflow confidentiality.",
      badge: "Workload Masked"
    }
  ];

  return (
    <section id="security" className="section section-security">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="security-shield-badge">
            <ShieldCheckIcon size={18} />
            <span>Zero-Trust Healthcare Compliance</span>
          </div>
          <h2 className="section-title">
            Rigorous Access Control & Patient Privacy
          </h2>
          <p className="section-subtitle">
            Healthcare data demands uncompromising confidentiality. Our centralized database architecture enforces fine-grained authorization policies at every level of information retrieval.
          </p>
        </div>

        {/* 4 Core Access Principles Grid */}
        <div className="security-rules-grid">
          {securityRules.map((item, index) => (
            <div key={index} className="security-rule-card">
              <div className="rule-card-top">
                <div className="rule-icon-box">
                  {item.icon}
                </div>
                <span className="rule-badge">{item.badge}</span>
              </div>
              <h3 className="rule-title">{item.title}</h3>
              <div className="rule-criterion">
                <span className="criterion-tag">{item.rule}</span>
              </div>
              <p className="rule-description">{item.description}</p>
              <div className="rule-verification">
                <CheckCircleIcon size={16} className="rule-check-icon" />
                <span>Enforced by Backend Authorization Engine</span>
              </div>
            </div>
          ))}
        </div>

        {/* Access Matrix Comparison Table */}
        <div className="security-matrix-container">
          <div className="matrix-header">
            <h3>Authorization & Access Control Matrix</h3>
            <p>High-level privilege mapping across system roles</p>
          </div>
          <div className="matrix-table-wrapper">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Platform Resource</th>
                  <th>Hospital Admin</th>
                  <th>Authorized Doctor</th>
                  <th>Verified Patient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Own Medical Records</strong>
                    <span className="table-subtext">Diagnoses, lab tests, prescriptions</span>
                  </td>
                  <td><span className="access-pill pill-restricted">No (Audit Only)</span></td>
                  <td><span className="access-pill pill-restricted">Scoped to Treatment</span></td>
                  <td><span className="access-pill pill-allowed">Full Personal Access</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Other Patients' Records</strong>
                    <span className="table-subtext">Cross-patient medical data</span>
                  </td>
                  <td><span className="access-pill pill-denied">Blocked</span></td>
                  <td><span className="access-pill pill-denied">Blocked</span></td>
                  <td><span className="access-pill pill-denied">Strictly Blocked</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Doctor Patient Caseload</strong>
                    <span className="table-subtext">Total active patients per doctor</span>
                  </td>
                  <td><span className="access-pill pill-allowed">Permitted</span></td>
                  <td><span className="access-pill pill-allowed">Own Caseload Only</span></td>
                  <td><span className="access-pill pill-denied">Strictly Masked</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Treatment History Writing</strong>
                    <span className="table-subtext">Adding clinical notes & orders</span>
                  </td>
                  <td><span className="access-pill pill-denied">Blocked</span></td>
                  <td><span className="access-pill pill-allowed">Authorized Only</span></td>
                  <td><span className="access-pill pill-denied">Blocked</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

