"use client"; //mark as client component
import { useState } from "react"; // Import useState hook from React to manage component state

const faqs = [ //array to store faq questions and anwsers
  {
    question: "How many days am I required to be in the office?",
    answer:
      "At least 3 days in a week. Your selected days should be communicated with your lead beforehand.",
  },
  {
    question: "What happens if I take a sick day or a holiday?",
    answer:
      "If the sick day/holiday falls on one of your selected office days, your streak will be maintained and will not reset.",
  },
  {
    question: "What is the 'Weekly Quota'?",
    answer:
      "It is simply a visual indicator that keeps track of how many full days (out of the minimum 3 days) you have been to the office for the current work week.",
  },
  {
    question:
      "Will my streak break if I do not come to the office on my selected day but attend on a different day?",
    answer:
      "No, your streak will not break. However, your lead will be notified of your absence on the originally selected day.",
  },
  {
    question:
      "What happens if I spend more than 6 hours and 30 minutes in the office but arrive later than 10:00 AM? Will my streak break?",
    answer:
      "No, your streak will not break but you will be flagged for not getting to the office on time.",
  },
  {
    question:
      "What happens if I forget to clock in using the logger? Is my day lost?",
    answer:
      "If you do not clock in with the logger, your data source is solely reliant on the access control but in case the access control is offline, your data for that day might be inaccurate. So we encourage everyone to use the logger once in a while to help keep accurate data.",
  },
];

export default function FAQ() {    // FAQ component
  const [openIndex, setOpenIndex] = useState(null); //track which FAQ is currently expanded by its index 

  function toggle(index) { //function to open/close state of Faq using the index
    setOpenIndex(openIndex === index ? null : index); //index clicked should be opened if not closed
  }

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl my-12" style  = {{backgroundColor: "#BDFF00"}}>
      <div className="bg-white rounded-xl p-8 shadow-md">     
        <h2 className="text-center font-semibold text-lg mb-1">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-green-700 font-semibold mb-6 flex justify-center items-center gap-2"> 
          Have any questions? we’re here to help <span className="text-2xl">😀</span>
        </p>

        <div className="divide-y divide-gray-200"> 
          {faqs.map((faq, i) => ( 
            <div key={i} className="py-4"> 
              <button   
                onClick={() => toggle(i)}  // when clicked the toggle function is called to open/clise the faq
                className="flex justify-between items-start w-full text-left cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}  //aria tags indicate if its open and controls the answer section
              >
                <span className="font-semibold text-gray-800 w-[90%]">{faq.question}</span>
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-400">
                  {openIndex === i ? (
                    <MinusIcon className="w-5 h-5 text-gray-600" /> //if faq is open show minus sign
                  ) : (
                    <PlusIcon className="w-5 h-5 text-gray-600" />
                  )}
                </span>
              </button>
              {openIndex === i && ( //if item open show the answer
                <p
                  id={`faq-answer-${i}`}
                  className="mt-2 text-gray-500 text-sm max-w-[90%]"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor" //matches the current text color
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" /> // horizontal and vertical line to form plus 
    </svg>
  );
}

function MinusIcon(props) { // "props" spreads any incoming props into the SVG tag
  return (
    <svg
      {...props} //spread any passed props like className into the SVG element
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /> // horizontal line to form minus
    </svg>
  );
}
