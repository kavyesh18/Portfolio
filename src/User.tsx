
const Info = {
    name:"Badugu Kavyesh Raj",
    stack:["Full-Stack Developer" ,"Technology Enthusiasist","Web-Devloper","Entry-Level Seeker"],
    bio:"Full Stack Web Developer proficient in the MERN stack, Java, Spring Boot, and MySQL. Experienced in both front-end and back-end development, specializing in building dynamic, responsive web applications. Known for developing scalable solutions with a strong attention to detail and problem-solving skills."
}

const ProjectInfo = [
    {
        title:"Gemini Model Clone",
        desc:"In this project, I harnessed the power of Google Gemini 1.0 and employed the predefined React+Vite package `@google/generative-ai` to build the application's core functionality. The integration of the AI model was streamlined using an API key generated through Google AI Studio. The front end was designed with React.js to provide a dynamic and user-friendly interface. This approach ensured smooth interaction and an engaging experience, showcasing the capabilities of generative AI within a responsive and modern web environment.",
        image:"gemini.png",
        live:true,
        technologies:["React","Gemini 1.0","React-Axios","Google AI Studio"],
        link:"https://gemini-model-clone-4x189lori-badugu-kavyesh-rajs-projects.vercel.app/",
        github:"https://github.com/kavyesh18/Gemini-Model-Clone"

    },
    {
        title:"Feliz-Tails Pet App",
        desc: "The Feliz Tails app is a one-stop solution for pet owners, offering tools to manage pet care tasks like vet appointments, medication reminders, and more. It provides educational resources on pet health and behavior while fostering a community for pet lovers. The app simplifies and enriches the pet ownership experience.",
        image:"feliz-tails.png",
        live:false,
        technologies:["React","Node.js","Mongo-DB","Bootstrap-5","Express.js","Context-API"],
        link:"github.com/kavyesh18",
        github:"github.com/kavyesh18"
    },
    {
        title:"Employee-Management-App",
        desc:"I developed a basic employee management system with CRUD operations using React.js for the front end and **Bootstrap** for styling to create a responsive user interface. The application communicates with a **REST API** built with **Spring Boot** on the backend, handling data requests efficiently. The backend is integrated with an **SQL** database to store and manage employee records, ensuring data consistency and integrity. This project demonstrates a full-stack approach, combining front-end technologies and server-side logic for seamless data manipulation and management.",
        image:"employee-management.png",
        live:false,
        technologies:["React","Spring-Boot","MY-SQL","REST-API"],
        link:"https://github.com/kavyesh18",
        github:"https://github.com/kavyesh18/EMPLOYEE-MANAGEMENT"

    }
]

const SkillInfo = [
    {
        title:"Frontend",
        skills:["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
        title:"Backend",
        skills:["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title:"Languages",
        skills:["C","Java","Javascript","TypeScript"]
    },

    {
        title:"Tools",
        skills:["Git", "Github", "VS code", "MongoDB Compass", "Postman", "Spring Tool Suite"]
    }
]

    const ExperienceInfo = [

        {
            role:"Full Stack Web Developer Intern",
            company:"Nullclass",
            image:"NullClass.png",
            date:"June 2024-present",
            desc:"Currently pursuing a MERN stack internship at Nullclass, developing full-stack web applications and enhancing my skills in MongoDB, Express.js, React, and Node.js, while collaborating on projects to deliver efficient and scalable solutions.",
            skills:["React JS","Node JS","Express JS","MongoDB", "Firebase"]
        },
    ]

    const Slugs = [
        "typescript",
        "spring",
        "javascript",
        "java",
        "react",
        "android",
        "html5",
        "css3",
        "springboot",
        "mongodb",
        "nodedotjs",
        "express",
        "mysql",
        "postgresql",
        "firebase",
        "vercel",
        "testinglibrary",
        "jest",
        "cypress",
        "docker",
        "git",
        "jira",
        "github",
        "gitlab",
        "visualstudiocode",
        "androidstudio",
        "sonarqube",
        "figma",
    ];

export {Info,ProjectInfo,SkillInfo,ExperienceInfo,Slugs}