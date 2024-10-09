// components/WorkCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Developed a full-fledged e-commerce platform using Next.js and Node.js. Integrated Stripe for payments and implemented a responsive UI with Tailwind CSS.',
    image: '/images/ecommerce.png',
    link: 'https://ecommerce-platform.com',
  },
  {
    title: 'Social Media App',
    description: 'Built a real-time social media app using React, Firebase, and Tailwind CSS. Implemented authentication, real-time messaging, and a dynamic feed.',
    image: '/images/social-media.png',
    link: 'https://socialmedia-app.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website developed using Next.js and Tailwind CSS. Showcases my skills, projects, and experience in a clean, modern design.',
    image: '/images/portfolio.png',
    link: 'https://myportfolio.com',
  },
];

const WorkCarousel = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Pagination]}
        className="h-full"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkCarousel;
