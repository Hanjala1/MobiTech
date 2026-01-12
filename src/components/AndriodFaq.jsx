import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const AndroidFaq = () => {
  const androidFaqs = [
    { title: "What is the latest Android version?", message: "The latest stable Android version is Android 14, released in 2023." },
    { title: "How to update my Android phone?", message: "Go to Settings → System → System update → Check for updates and install the latest version." },
    { title: "How to backup my Android phone?", message: "Use Google Drive or other cloud services to backup apps, contacts, and data." },
    { title: "How to restore my Android from backup?", message: "During setup or in Settings → System → Backup, choose Restore from Google Backup." },
    { title: "How to reset my Android phone?", message: "Go to Settings → System → Reset options → Erase all data (factory reset). Backup your data first." },
    { title: "How to free up storage on Android?", message: "Delete unused apps, clear cache, move files to SD card or cloud storage." },
    { title: "How to secure my Android phone?", message: "Use a screen lock, enable Google Play Protect, avoid unknown apps, and keep software updated." },
    { title: "How to share files between Android and iOS?", message: "Use apps like SHAREit, Google Drive, or email to transfer files between devices." },
    { title: "How to improve Android battery life?", message: "Reduce screen brightness, disable background apps, enable Battery Saver mode, and update apps regularly." },
    { title: "Can I run Windows apps on Android?", message: "Yes, using remote desktop apps or emulators, but native Windows apps won't run directly." },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-success fw-bold">Android FAQs</h2>
      <div className="accordion accordion-flush shadow-sm rounded-3 p-3 bg-light" id="accordionFlushExample">
        {androidFaqs.map((faq, index) => (
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

export default AndroidFaq;
