import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-col md:justify-center items-center gap-8 py-5 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="sm:text-5xl text-4xl p-2 text-center gradient-text">
        Contact Us
      </h1>
      <p className="flex gap-2 justify-center items-center sm:text-xl text-lg text-center">
        I’m Always Open To Discussing Product
        <b className="gradient-text">Design Work Or Partnerships.</b>{" "}
      </p>
      <p className="sm:text-xl text-lg text-center">For any questions please contact us:</p>
      <form action="">
        <label htmlFor="">Name:</label><input type="name" />
        <label htmlFor="">Email:</label><input type="email" />
        <label htmlFor="">Message</label><input type="message" />
      </form>
    </main>
  );
};

export default Contact;
