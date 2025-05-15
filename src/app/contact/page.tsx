// pages/contact.tsx
"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here, such as sending data to a backend or an email API.
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-black ">
      <div className="flex justify-center items-center max-w-3xl mx-auto py-6  sm:px-6 lg:px-8">
        <Link href="/" className="text-black hover:text-blue-200">
          &larr; Back to Portfolio
        </Link>
      </div>

      <Head>
        <title>Contact Us - Modern Contact Page</title>
        <meta
          name="description"
          content="Get in touch with us using the contact form. We'd love to hear from you!"
        />
      </Head>
      <main className="max-w-6xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg text-center mb-12">
          Feel free to reach out to us for any inquiries, collaborations, or
          just to say hello!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
            <p className="mb-4">
              123 Modern Street, Innovative City,
              <br /> Country 45678
            </p>
            <p className="mb-4">Email: contact@yourwebsite.com</p>
            <p className="mb-4">Phone: +123 456 7890</p>
            <h3 className="text-xl font-medium mt-8">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons (replace with your own icons or links) */}
              <a
                href="#"
                className="text-black hover:text-gray-500 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                {/* Placeholder SVG */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54v-2.205c0-2.507 1.492-3.89 3.778-3.89 1.097 0 2.243.196 2.243.196v2.464H15.9c-1.492 0-1.952.926-1.952 1.875v1.955h3.3l-.528 2.89h-2.772V22C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-500 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.98 2c-2.44 0-4.42 1.94-4.42 4.32 0 .34.04.68.1 1-3.67-.17-7-1.92-9.21-4.57a4.15 4.15 0 00-.6 2.17c0 1.5.77 2.83 1.94 3.61a4.45 4.45 0 01-2-.54v.06c0 2.1 1.53 3.85 3.56 4.24a4.48 4.48 0 01-1.15.14c-.28 0-.56-.02-.82-.07.56 1.73 2.2 2.98 4.13 3.02A8.95 8.95 0 012 19.54 12.59 12.59 0 007.29 21c7.75 0 12-6.3 12-11.77v-.54A8.27 8.27 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-500 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v8h-4v-8a2 2 0 00-4 0v8h-4v-8a6 6 0 016-6zM2 9h4v12H2V9zm2-5a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring focus:ring-black focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded-md shadow-md hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
