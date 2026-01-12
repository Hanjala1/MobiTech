import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const PaymentFaq = () => {
  const faqData = [
    { title: "What payment methods are accepted?", message: "We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (COD)." },
    { title: "Is online payment secure?", message: "Yes, all online payments are encrypted using SSL and handled by trusted payment gateways." },
    { title: "Can I pay using multiple payment methods?", message: "No, currently each order must be paid using a single payment method." },
    { title: "Do you support international payments?", message: "Yes, we accept international credit/debit cards in supported currencies." },
    { title: "Can I save my card for future purchases?", message: "Yes, you can save your card securely on your account for faster checkout." },
    { title: "Are there any extra charges for COD?", message: "No extra charges apply for Cash on Delivery." },
    { title: "Can I apply a gift card or coupon?", message: "Yes, enter the code during checkout to apply discounts or gift cards." },
    { title: "What should I do if my payment fails?", message: "Check your internet connection, card details, or try an alternative payment method." },
    { title: "Is my banking information safe?", message: "Yes, we do not store sensitive card details on our servers." },
    { title: "How do I get a refund for failed transactions?", message: "Refunds are automatically processed to your original payment method within 5-7 business days." },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-warning fw-bold">Payment FAQs</h2>
      <div className="accordion accordion-flush shadow-sm rounded-3 p-3 bg-light" id="accordionPaymentFAQ">
        {faqData.map((faq, index) => (
          <div className="accordion-item border-0 mb-2 rounded-3 overflow-hidden shadow-sm" key={index}>
            <h2 className="accordion-header" id={`flush-payment-heading${index}`}>
              <button
                className="accordion-button collapsed bg-white text-dark fw-semibold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-payment-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-payment-collapse${index}`}
              >
                {faq.title}
              </button>
            </h2>
            <div
              id={`flush-payment-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-payment-heading${index}`}
              data-bs-parent="#accordionPaymentFAQ"
            >
              <div className="accordion-body bg-white">{faq.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentFaq;
