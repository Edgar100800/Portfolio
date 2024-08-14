import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div className="max-w-[70rem] px-[14px]">
        <div className="flex flex-col items-center text-center my-8">
          <div
            className="bg-black text-[#e8e1d2] px-4 py-1 text-lg rounded-lg mb-4 shadow-lg"
            style={{
              boxShadow: "0 0 100px 30px rgba(65, 184, 230, 0.7)",
            }}
          >
            Contact
          </div>
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-lg text-base">
            Want to chat? Just shoot me a message on whatsapp or email
            and I'll respond whenever I can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
