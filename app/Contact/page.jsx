"use client";
import React from "react";
import Form from "../Components/Form/Form";


const Contact = () => {

  return (
    <main className="flex flex-col md:justify-center items-center gap-8 py-5 ">
      <h1 className="sm:text-5xl text-4xl p-2 text-center gradient-text">
        Contact Us
      </h1>
      <p className="flex sm:flex-row flex-col gap-2 justify-center items-center sm:text-xl text-lg text-center">
        I’m Always Open To Discussing Product
        <b className="gradient-text">Design Work Or Partnerships.</b>
      </p>
      <p className="text-xl text-center">
        For any questions please contact us:
      </p>
      <Form/>
    </main>
  );
};

export default Contact;
