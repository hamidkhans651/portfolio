import React from "react";
import Master from "@/components/Master"

export default function Home() {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <a href="/home" className=" flex text-black justify-center">Home</a>
      <title>Full-Stack Developer Portfolio</title>
      <meta name="description" content="Showcasing my work as a Full-Stack Developer" />
      <link rel="icon" href="/favicon.ico" />

      <Master />
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h1>
        <p className="text-lg text-gray-600 mb-16">Explore some of the projects I have worked on as a Full-Stack Developer.</p>

      </main>
    </div>
  );
}
