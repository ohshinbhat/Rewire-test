import React from "react";
import { useState } from "react";
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { RiSubtractLine } from 'react-icons/ri'
import { IconContext } from "react-icons";

const Faq = () => {
  const data = [
    {
      question: 'What is Rewire Brain Games?',
      answer: 'Rewire Brain Games is a mobile app that offers a collection of games and exercises designed to enhance cognitive performance, improve memory, and boost overall brain function.'
    },
    {
      question: 'How do I download Rewire?',
      answer: 'You can download Rewire Brain Games from the App Store or Google Play Store, depending on your device.'
    },
    {
      question: 'Is Rewire Brain Games free?',
      answer: 'Yes, Rewire offers a free version with limited access to games and features. We also provide a premium subscription option for users who want full access to all games and personalized training programs.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Absolutely! You have the flexibility to cancel your subscription to Rewire at any time. Simply follow the cancellation instructions within the app or contact our support team for assistance.'
    },
    {
      question: 'Are there different levels of difficulty in the games?',
      answer: 'Yes, Rewire offers games with varying levels of difficulty to cater to users of all skill levels. Whether youre a beginner or an advanced player, youll find games that suit your abilities.'
    },
    {
      question: 'Can I track my progress and see my improvement over time?',
      answer: 'Yes, Rewire Brain Games provides detailed progress tracking features. You can view your scores, monitor your performance history, and track your improvement over time. Its a great way to stay motivated and see the impact of your brain training efforts.'
    },
    {
      question: 'Are the games suitable for children?',
      answer: 'Yes, Rewire Brain Games offers games suitable for children, with appropriate content and difficulty levels. Its a fun and educational way for kids to improve their cognitive skills while having a great time.'
    },
    {
      question: 'Do I need any special equipment to play Rewire Brain Games?',
      answer: 'No, you only need a smartphone or tablet to download the Rewire Brain Games app. Our games are designed to be compatible with standard mobile devices, making it accessible and convenient for everyone.'
    }

  ];

  const [accordion, setActiveAccordion] = useState(-1);
  const toggleAccordion = (index) => {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  }
  return (
    <div className="wrapper">
      <div className="faqtitle">
        Frequently Asked Questions
      </div>
      <div className="accordion">
        {data.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className="faqquestion">
              <div className="ques">
                <div className={accordion === index ? "active" : ""}>{item.question}</div>
              </div>
              <div className="symb">
                <IconContext.Provider value={{ color: "#000da1", size: 20 }}>
                  {accordion === index ? (<><span className="verticle"><RiSubtractLine /></span> </>) : (<><span className="verticle">< AiOutlinePlusCircle /></span> </>)}
                </IconContext.Provider>
              </div>
            </div>
            <div className="ans">
              <p className={accordion === index ? "active" : "inactive"} >{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;