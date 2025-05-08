import React from "react";

const Contact = () => {
  return (
    <main className="flex flex-col md:justify-center items-center gap-8 py-5 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="sm:text-5xl text-4xl p-3 text-center gradient-text">
        Contact Us
      </h1>
      <p>For any questions please cotact us:</p>
      <p>
        I’M ALWAYS OPEN TO DISCUSSING PRODUCT
        <b>DESIGN WORK OR PARTNERSHIPS.</b>{" "}
      </p>
      <form action="">
        <input type="name" />
        <input type="email" />
        <input type="message" />
      </form>
    </main>
  );
};

export default Contact;
