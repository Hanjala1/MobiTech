import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TechFaq = () => {
  const faqData = [
    { title: "What is the latest Android version?", message: "The latest stable Android version is Android 14, released in 2023." },
    { title: "Can I install Android apps on Windows?", message: "Yes, using emulators like BlueStacks or Windows Subsystem for Android (WSA) on Windows 11." },
    { title: "Which iOS version is the latest?", message: "The latest iOS version is iOS 17, compatible with iPhone 8 and later." },
    { title: "How to update my Windows OS?", message: "Go to Settings → Update & Security → Windows Update → Check for updates." },
    { title: "Can I dual-boot Windows and Linux?", message: "Yes, you can install Linux alongside Windows by partitioning your drive." },
    { title: "What is the difference between Android and iOS?", message: "Android is open-source and customizable, while iOS is closed-source and more uniform across devices." },
    { title: "How to backup my Android phone?", message: "Use Google Drive or other cloud services to backup your apps, contacts, and data." },
    { title: "How to backup my iPhone?", message: "Use iCloud or iTunes to backup your device data safely." },
    { title: "Can I run Windows apps on Mac?", message: "Yes, using virtualization software like Parallels or Boot Camp on Intel Macs." },
    { title: "What is the difference between SSD and HDD?", message: "SSD is faster, more reliable, and consumes less power than HDD, which is cheaper with higher storage capacity." },
    { title: "How to recover deleted files in Windows?", message: "Check the Recycle Bin, use File History, or third-party recovery software." },
    { title: "Can iOS and Android devices share files?", message: "Yes, using apps like SHAREit, Google Drive, or email to transfer files between platforms." },
    { title: "How to improve laptop battery life?", message: "Reduce screen brightness, close unnecessary apps, and avoid full discharge cycles." },
    { title: "What is Microsoft Office 365?", message: "A subscription service offering Word, Excel, PowerPoint, and other cloud-based productivity tools." },
    { title: "How to secure my Android device?", message: "Use a screen lock, keep software updated, and avoid unknown apps." },
    { title: "How to secure my iPhone?", message: "Enable Face ID/Touch ID, use strong passwords, and update iOS regularly." },
    { title: "Can I connect my phone to Windows PC?", message: "Yes, via USB, Bluetooth, or apps like Your Phone (Windows 10/11) for Android integration." },
    { title: "What is the difference between Windows Home and Pro?", message: "Pro offers more features like BitLocker, Remote Desktop, and domain joining compared to Home." },
    { title: "How to reset my Android phone?", message: "Go to Settings → System → Reset Options → Erase all data (factory reset). Ensure you backup data first." },
    { title: "How to reset my iPhone?", message: "Go to Settings → General → Reset → Erase All Content and Settings. Backup your data before resetting." },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-primary fw-bold">FAQs</h2>
      <div className="accordion accordion-flush shadow-sm rounded-3 p-3 bg-light" id="accordionFlushExample">
        {faqData.map((faq, index) => (
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

export default TechFaq;
