import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    CUFE,
    ALX,
    Painting,
    Shell,
    Smart_Car,
    AirBnB,
    WhatsApp,
    LinkedIn,
    Gmail,
    Instagram,
    github,
    mssql,
    flask,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Database Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    // {
    //     name: "Flask",
    //     icon: flask,
    // },
    // {
    //     name: "mssql",
    //     icon: mssql,
    // }
];

const experience = [
    {
        title: "ALX-Software Engineering Course",
        company: "ALX Online",
        points:
            [
                {desc: "Programming Fundamentals: Core concepts in languages like C, Python, and JavaScript, covering data structures, algorithms, and system design."},

                {desc: "Web Development: Both front-end and back-end development are covered, including HTML, CSS, JavaScript, Node.js, React, and various web frameworks and libraries."},

                {desc: "Systems Engineering: Deep dive into operating systems, shell scripting, networking, and DevOps practices, including containerization with Docker and orchestration with Kubernetes."},

                {desc: "Data Structures and Algorithms: Strong emphasis on understanding and implementing data structures and algorithms, essential for optimizing code and solving complex problems."},


                {desc: "Professional Development: Focuses on building soft skills such as communication, problem-solving, and time management, preparing participants for successful careers in the tech industry."},

            ],

        icon: ALX,
        date: "September 2023 - October 2024",
    },
    {
        title: "Web Developer Intern",
        company: "CUFE, Giza",
        points:
            [
                {desc: "Backend Development with Node.js and Express: Learned to build robust server-side applications using Node.js and Express, managing server logic, middleware, and RESTful APIs."},

                {desc: "Frontend Development with React: Gained expertise in building dynamic and responsive user interfaces using React, focusing on component-based development and state management.\n"},

                {desc: "JavaScript and ES6+ Features: Deepened knowledge of JavaScript, including modern ES6+ syntax and features, essential for both backend and frontend development."},

                {desc: "Project-Based Learning: Engaged in hands-on projects that simulated real-world development scenarios, enhancing skills in problem-solving and debugging."},

            ],

        icon: CUFE,
        date: "July 2024 - September 2024",
    }
];

const projects = [
    {
        name: "AirBnB Console",
        description:
            "Backend-focused web application developed using Python, Flask, and MySQL, featuring RESTful APIs and SQLAlchemy ORM for efficient data management. It demonstrates skills in backend development, database handling, and web server deployment.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "shell",
                color: "green-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
        ],
        icon: AirBnB,
        source_code_link: "https://github.com/MarioRaafat/AirBnB_clone_v2",
    },

    {
        name: "Simple Shell",
        description:
            "Simple Shell project is a custom implementation of a Unix shell written in C. It supports fundamental shell features such as command execution, built-in commands, input redirection, and handling of environment variables, showcasing proficiency in system programming, process management, and C programming concepts.",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "shell",
                color: "green-text-gradient",
            },
        ],
        icon: Shell,
        source_code_link: "https://github.com/MazenAtlam/simple_shell",
    },

    {
        name: "Painting for Kids",
        description:
            "Painting program designed for kids using C++. It has two modes: draw mode and play mode. In draw mode the kid can draw the shapes he wants and color them. In play mode he plays game in which he picks only the shapes written on the screen. The program had features such as save, load, undo, redo, and a lot more.",

        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "C++",
                color: "green-text-gradient",
            },
        ],
        icon: Painting,
        source_code_link: "https://github.com/tonynagyy/PT-Project",
    },

    {
        name: "Smart Car",
        description:
            "Obstacle Avoiding Smart Car is a robotics project built with Arduino and C++ that autonomously navigates its environment by detecting and avoiding obstacles. Equipped with ultrasonic sensors and programmed algorithms.",
        tags: [
            {
                name: "Arduino ",
                color: "blue-text-gradient",
            },
            {
                name: "C++",
                color: "green-text-gradient",
            },
        ],
        icon: Smart_Car,
        source_code_link: "",
    },
];

const contact = [
    {
        title: "Email",
        icon: Gmail,
        link: "mailto:mariorafat@gmail.com",
    },
    {
        title: "LinkedIn",
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/mario-raafat-0a222a281/",
    },
    {
        title: "GitHub",
        icon: github,
        link: "https://github.com/MarioRaafat",
    },
    {
        title: "Instagram",
        icon: Instagram,
        link: "https://www.instagram.com/mario_rafat10/",
    },
    {
        title: "WhatsApp",
        icon: WhatsApp,
        link: "https://wa.me/+201204878505",
    },
]

export { services, technologies, experience, projects, contact};