import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='px-2 md:px-12 lg:px-40 mx-auto mt-5 md:mt-10 lg:mt-16'>
            <section>
                <div className="container py-12 mx-auto">
                    <h1 className="text-2xl font-semibold lg:text-4xl">Frequently Asked Questions</h1>
                    <p className="mt-2 text-lg">
                        Find answers to common questions about shopping, delivery, and more at E-24.
                    </p>

                    <div className="mt-4 space-y-4 lg:mt-6">
                        {[
                            {
                                question: "What is E-24?",
                                answer: "E-24 is an online store specializing in kids' products such as clothes, shoes, watches, eyeglasses, electronics, and more."
                            },
                            {
                                question: "How can I place an order?",
                                answer: "Simply browse products, add them to your cart, and proceed to checkout. You’ll need to create an account or log in to complete your purchase."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major payment methods including credit/debit cards, mobile banking, and cash on delivery (COD) in selected areas."
                            },
                            {
                                question: "How long does delivery take?",
                                answer: "Standard delivery takes 3–5 business days. For remote locations, delivery might take slightly longer. You'll receive tracking details once your order is shipped."
                            },
                            {
                                question: "Can I return or exchange a product?",
                                answer: "Yes, we offer a 7-day return/exchange policy for most items. Please ensure the product is unused and in its original packaging."
                            },
                            {
                                question: "Is my personal information secure?",
                                answer: "Absolutely. We use secure encryption technologies to protect your personal and payment information."
                            }
                        ].map(({ question, answer }, index) => (
                            <div
                                key={index}
                                className="p-4 border-2 border-slate-300 rounded-lg hover:bg-gray-100 hover:text-black transition duration-200"
                            >
                                <button
                                    className="flex items-center justify-between w-full focus:outline-none"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <h1 className={`font-bold text-lg ${openIndex === index ? 'text-yellow-600' : ''} transition duration-200`}>
                                        {question}
                                    </h1>
                                    <span className="text-yellow-600 font-light rounded-full transition-transform duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <p className="mt-4 text-sm text-gray-700">{answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAskedQuestions;