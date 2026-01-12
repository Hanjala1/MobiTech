import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const IosFaq = () => {
  const iosFaqs = [
    { title: "Which iOS version is the latest?", message: "The latest iOS version is iOS 17, compatible with iPhone 8 and later." },
    { title: "How to update my iPhone?", message: "Go to Settings → General → Software Update → Download and Install the latest iOS version." },
    { title: "How to backup my iPhone?", message: "Use iCloud or iTunes to backup your device data safely." },
    { title: "How to restore my iPhone from a backup?", message: "During setup, choose Restore from iCloud Backup or Restore from iTunes Backup." },
    { title: "How to reset my iPhone?", message: "Go to Settings → General → Reset → Erase All Content and Settings. Backup your data first." },
    { title: "How to free up storage on my iPhone?", message: "Delete unused apps, offload photos to iCloud, and clear Safari cache and messages." },
    { title: "How to secure my iPhone?", message: "Enable Face ID/Touch ID, use a strong passcode, enable Find My iPhone, and keep iOS updated." },
    { title: "How to share files between iOS and Android?", message: "Use apps like SHAREit, Google Drive, or email to transfer files between devices." },
    { title: "How to manage notifications on iPhone?", message: "Go to Settings → Notifications, then customize per app or use Focus modes to limit alerts." },
    { title: "How to extend iPhone battery life?", message: "Reduce screen brightness, use Low Power Mode, disable background app refresh, and update iOS regularly." },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-primary fw-bold">iOS FAQs</h2>
      <div className="accordion accordion-flush shadow-sm rounded-3 p-3 bg-light" id="accordionFlushExample">
        {iosFaqs.map((faq, index) => (
          <div className="accordion-item border-0 mb-2 rounded-3 overflow-hidden shadow-sm" key={index}>
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button collapsed bg-white text-dark fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {faq.title}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${index}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body bg-white">{faq.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IosFaq;
