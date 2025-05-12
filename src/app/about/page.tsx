import React from 'react'
import Menubar from '@/components/MenuBar'; 


const page = () => {
    return (
        <div className='p-10 '>
              <Menubar />
            <h1>Hello I am Muhammad Hamid</h1>
            <h1>Professional Summary</h1>
            <p>
                I began my journey in software development during my college years, where I built a strong foundation in Object-Oriented Programming (OOP) using C and C++. Over time, I transitioned into the modern tech stack, mastering JavaScript, TypeScript, and Python. My passion for development now lies in creating full-stack applications, leveraging cutting-edge technologies like Next.js to build dynamic, scalable, and user-friendly interfaces.</p>
            <h1>Skills and Expertise</h1>

            <p>
                I have hands-on experience in developing cloud-native applications, where I apply an event-driven architecture for creating scalable and reliable systems. My tech stack includes:

                Front-End Development: Next.js, React, TailwindCSS
                Back-End Development: Node.js, NestJS, Express.js
                Database Management: MongoDB, PostgreSQL
                Cloud & DevOps: Azure, Docker for containerization, and Kubernetes for orchestration
                Communication & Messaging Systems: Apache Kafka, Protocol Buffers
                API Management: Kong for API Gateway
                Deployment & Monitoring: Azure DevOps, GitHub Actions for CI/CD pipelines
            </p>
            <h1>Learning and Future Vision</h1>
            <p>My passion for learning drives me to continuously explore emerging technologies and paradigms. Currently, I’m focusing on cloud-native approaches, where I integrate event-driven architectures for high-performance and low-latency applications. My vision is to become an expert in building distributed systems that handle millions of transactions with ease.

                As part of this vision, I’m working on enhancing my skills in advanced tools and technologies like Apache Kafka, Azure cloud services, and Kong API Gateway. I aim to implement these technologies in real-world projects that require resilient, scalable, and maintainable architectures.

            </p>
            <h1>Career Objective</h1>
            <p>I aspire to contribute to the tech community by developing innovative solutions and sharing knowledge through teaching and open-source contributions. My goal is to specialize in cloud-native development, focusing on building complex, distributed systems that solve real-world problems for businesses of all sizes</p>
        </div>

    )
}

export default page