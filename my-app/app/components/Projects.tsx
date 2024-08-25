import React from 'react';
import Image from 'next/image';

const Projects = () => {
    return (
        <main>
            <section className="spacer "></section>
            {/* Responsive marquee container */}
            <section className="overflow-hidden flex group ">
                <div className="marquee__inner flex font-bold animate-loop-scroll space-x-20  w-16 h-16 group-hover:paused ">
                    {/* Marquee parts with responsive typography */}
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="mongo"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"  // Make sure the URL is allowed in next.config.js
                        alt="mysql"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" // Make sure the URL is allowed in next.config.js
                        alt="javascript"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="react"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="node"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="postgresql"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="Reddis"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" // Make sure the URL is allowed in next.config.js
                        alt="tailwind"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" // Make sure the URL is allowed in next.config.js
                        alt="typescript"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="Docker"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" // Make sure the URL is allowed in next.config.js
                        alt="git"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="html"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    <Image
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" // Make sure the URL is allowed in next.config.js
                        alt="Example Image"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                </div>

            </section>
            <section className="spacer"></section>
            <p className="text-center text-lg md:text-xl font-semibold">OUR PROJECTS</p>
        </main>
    );
}

export default Projects;
