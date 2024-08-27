import React from 'react';

const ButtonComponent = () => {
    return (
        <div>
            <button className="scroll-button" onClick={() => console.log("Scrolled to bottom")}>
                MY WORK
            </button>
        </div>
    );
};

const Mid = () => {
    return (
        <div>
            <p className='stunning-paragraph p-8'>Muhammad.Hamid As a full-stack developer, I specialize in creating tailored web solutions for various client needs. For small-scale projects, I offer serverless APIs and MERN stack technologies, ideal for businesses seeking a robust digital presence without scalability issues. For larger enterprises facing high user traffic, I develop scalable web applications using event-driven architecture to ensure seamless performance and growth..</p>
        </div>
    );
};

export default Mid;
