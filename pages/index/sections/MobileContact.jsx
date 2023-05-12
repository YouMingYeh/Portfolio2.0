import React from "react";
import { useForm } from "@formspree/react";

const MobileContact = () => {
  const [state, submit] = useForm("mnqygzeg");
  const { succeeded, submitting } = state;

  return (
    <div className="flex flex-col items-center mt-20 h-full justify-center font-serif px-3">
      <h2 className="text-4xl font-bold ">Contact Me🤙</h2>
      <div className="w-full max-w-lg contact border shadow-lg">
        {submitting ? (
          <button
            disabled
            className="w-full text-white font-bold py-2 px-4 rounded"
          >
            Sending...
          </button>
        ) : succeeded ? (
          <p className="text-lg text-center">
            Thank you for your message! I will get back to you soon.
          </p>
        ) : (
          <form onSubmit={submit} className="rounded px-8 pt-6 pb-8 ">
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline input input-bordered"
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline textarea textarea-bordered"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full btn text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MobileContact;
