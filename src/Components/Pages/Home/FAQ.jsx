import React from "react";
import faq from "../../../assets/images/FAQs-rafiki.png";
// import faq from "../../../assets/images/faq.svg";
const FAQ = () => {
  const faqs = [
    {
      question: "What is QueryHive?",
      answer:
        "QueryHive is a platform where users can ask questions, get recommendations, and interact with a community to solve queries, share ideas, and make better decisions.",
    },
    {
      question: "How do I post a query on QueryHive?",
      answer:
        "Simply sign in to your account, navigate to the 'Post Query' section, and fill out the form with your question and preferences. Once submitted, your query will appear for the community to engage with.",
    },
    {
      question: "Can I update or delete my queries?",
      answer:
        "Yes, you can! Navigate to your profile, find the query you want to update or delete, and click the respective buttons to make changes.",
    },
    {
      question: "How do recommendations work on QueryHive?",
      answer:
        "Recommendations are powered by AI and user contributions. Based on your query details, the platform suggests solutions, products, or ideas tailored to your needs.",
    },
    {
      question: "Is QueryHive free to use?",
      answer:
        "Yes, QueryHive is completely free to use. You can post queries, interact with recommendations, and engage with the community at no cost.",
    },
  ];

  return (
    <div className="mt-14">
      <h2 className="text-6xl font-bold text-center">
        FA<span className="text-7xl text-red-900">Q</span><span className="text-4xl">s</span>
      </h2>
      <section className="  pt-7 px-6 lg:px-16">
        <div className="lg:flex gap-28">
          <div>
            <img className="lg:w-[1000px]" src={faq} alt="" />
          </div>
          <div>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font font-bold text-gray-800 mb-6 colo">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 mb-10 colo">
                Have questions about how QueryHive works? We’ve got answers!
                Explore our <br /> FAQs to learn more.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-base-200 mb-4"
                >
                  <input
                    type="radio"
                    name="faq-accordion"
                    defaultChecked={index === 0} 
                  />
                  <div className="collapse-title text-xl font-medium">
                    {faq.question}
                  </div>
                  <div className="collapse-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
