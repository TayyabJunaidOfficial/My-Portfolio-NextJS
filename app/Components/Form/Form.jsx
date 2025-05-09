import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Minimum 5 characters" })
    .max(15, { message: "Maximum 15 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Min 15 characters long" }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (res.ok) alert('Message sent!');
      else throw new Error('Error sending message');
    } catch (err) {
      alert(err.message);
    }
  };
    return (
    <>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full sm:max-w-lg max-w-sm"
      >
        <div className="flex justify-center items-center relative">
          <input
            id="name"
            type="text"
            placeholder=" "
            {...register("name")}
            className="peer sm:w-full w-xs border border-gray-500 rounded px-3 pt-6 pb-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="name"
            className="absolute sm:left-3 left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex justify-center items-center relative">
          <input
            id="email"
            type="email"
            placeholder=" "
            {...register("email")}
            className="peer sm:w-full w-xs border border-gray-500 rounded px-3 pt-6 pb-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute sm:left-3 left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
          >
            Email
          </label>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="flex justify-center items-center relative">
          <textarea
            id="message"
            type="text"
            placeholder=" "
            {...register("message")}
            className="peer sm:w-full w-xs border border-gray-500 rounded px-3 pt-6 pb-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="message"
            className="absolute sm:left-3 left-10 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm"
          >
            Message
          </label>
          {errors.message && (
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="flex sm:justify-end justify-center">
          <input
            type="submit"
            value="Send"
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white border-2 w-24 rounded-lg py-2 font-semibold transition hover:shadow-[0_0_15px_#ec4899]"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
