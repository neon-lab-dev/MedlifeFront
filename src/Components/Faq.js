import React, { useState } from "react";
import "./styles/Faqs.css";
const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What services does Med Life Easy provide?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: "How can I book an appointment with Med Life Easy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: " Do you accept insurance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faqs-cont">
      <div className="hero-btm-head">Frequently Asked Questions</div>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

const FAQ = ({ faq, index, toggleFAQ }) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-inner">
        <div className="faq-question">{faq.question}</div>
        <div className="faq-plus">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M7.38022 10.0352C7.40794 10.0072 7.42181 9.99328 7.43391 9.98188C7.81808 9.61989 8.41745 9.61883 8.8029 9.97946C8.81504 9.99082 8.82895 10.0047 8.85678 10.0326L11.4842 12.66C12.1509 13.3267 12.4842 13.66 12.8984 13.66C13.3127 13.66 13.646 13.3267 14.3127 12.66L16.9401 10.0326C16.9679 10.0047 16.9818 9.99082 16.994 9.97946C17.3794 9.61883 17.9788 9.61989 18.363 9.98188C18.3751 9.99328 18.3889 10.0072 18.4167 10.0352C18.4442 10.0629 18.458 10.0768 18.4693 10.0889C18.8268 10.4737 18.8257 11.0695 18.4668 11.453C18.4555 11.465 18.4417 11.4789 18.4141 11.5065L14.3127 15.6079C13.646 16.2746 13.3127 16.6079 12.8984 16.6079C12.4842 16.6079 12.1509 16.2746 11.4842 15.6079L7.38282 11.5065C7.35517 11.4789 7.34134 11.465 7.33003 11.453C6.97113 11.0695 6.97008 10.4737 7.32762 10.0889C7.33889 10.0768 7.35267 10.0629 7.38022 10.0352Z"
              fill="#00A79D"
            />
          </svg>
        </div>
      </div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default Faqs;
