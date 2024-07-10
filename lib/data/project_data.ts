const projects_data = [
    {
        "name": "Meal Map API",
        "description": "A reactive API for meal planning and recipe management with Spring Webflux and R2DBC",
        "url": "https://github.com/sreeharsha-rav/java_projects/tree/main/meal-map",
        "skills": ["Java", "Spring Webflux", "R2DBC", "Postgres", "MongoDB", "Postman"],
        "date": "July 2024"
    },
    {
        "name": "E-Commerce Microservices",
        "description": "A simple e-commerce application built using microservices architecture with Spring Boot and Spring Cloud",
        "url": "https://github.com/sreeharsha-rav/java_projects/tree/main/e-commerce-app",
        "skills": ["Java", "Spring Boot", "Spring Cloud", "Eureka", "MongoDB", "MySQL", "Hibernate", "JWT", "Keycloak", "Postman"],
        "date": "2024"
    },
    {
        "name": "Book Management CRUD",
        "description": "A full-stack CRUD application for managing books and authors",
        "url": "https://github.com/sreeharsha-rav/gid-week5-assessment",
        "skills": ["Java", "Spring Boot", "TypeScript", "Angular", "JPA", "Postman", "MySQL", "Bootstrap"],
        "date": "2024"
    },
    {
        "name": "DoConnect",
        "description": "A full-stack question and answer forum facilitating user interaction through Q&A threads",
        "url": "https://github.com/sreeharsha-rav/full-stack_projects/tree/main/do-connect",
        "skills": ["Java", "Spring Boot", "TypeScript", "Angular", "JPA", "MySQL", "Spring Security", "JWT", "Postman"],
        "date": "2024"
    },
    {
        "name": "Next.js Dashboard",
        "description": "Full-stack dashboard utilizing Next.js, TypeScript, Postgres, Tailwind CSS hosted on Vercel",
        "url": "https://github.com/sreeharsha-rav/react-apps/tree/main/nextjs-dashboard",
        "skills": ["TypeScript", "Next.js", "Postgres", "Tailwind CSS", "Vercel", "Postman"],
        "date": "2024"
    },
    {
        "name": "Quiz App",
        "description": "A microservice-based quiz application that allows users to answer questions and view results",
        "url": "https://github.com/sreeharsha-rav/java_projects/tree/main/quiz-app",
        "skills": ["Java", "Spring Boot", "JPA", "Spring Cloud", "Eureka", "Postman"],
        "date": "2024"
    },
    {
      "name": "Photo Caption API",
      "description": "Backend service enabling photo captioning with caching and RESTful API",
      "url": "https://github.com/sreeharsha-rav/typescript-projects/tree/main/photo-caption",
      "skills": ["TypeScript", "Node.js", "Fastify", "Redis", "REST API", "Postgres", "Prisma", "JWT", "Postman"],
      "date": "2024"
    },
    {
        "name": "Personal Budget API",
        "description": "RESTful API facilitating envelope budgeting for personal finance management",
        "url": "https://github.com/sreeharsha-rav/typescript-projects/tree/main/personal-budget-2",
        "skills": ["TypeScript", "Node.js", "Express", "Postgres", "Sequelize", "REST API", "Postman"],
        "date": "2024"
    },
    {
      "name": "EduScan V2",
      "description": "A classroom assistant for seamless student identification and academic data retrieval using open-source solutions",
      "url": "https://github.com/sreeharsha-rav/openfaas-eduscan",
      "skills": ["Python", "OpenFaaS", "AWS", "Docker", "Kubernetes"],
      "date": "Fall 2023"
    },
    {
      "name": "EduScan",
      "description": "A classroom assistant for seamless student identification and academic data retrieval",
      "url": "https://github.com/sreeharsha-rav/aws-eduscan",
      "skills": ["Python", "AWS", "Docker", "Streamlit"],
      "date": "Fall 2023"
    },
    {
      "name": "Playlistify",
      "description": "A responsive web application for creating custom playlists using Spotify API",
      "url": "https://github.com/sreeharsha-rav/react-apps/tree/main/playlistify",
      "skills": ["JavaScript", "React.js", "HTML", "Tailwind CSS", "Git", "Spotify API"],
      "date": "2023"
    },
    {
      "name": "Cloud Vision",
      "description": "An elastic image recognition service built using AWS EC2, S3, SQS",
      "url": "https://github.com/sreeharsha-rav/aws_cloudvision/tree/main",
      "skills": ["Python", "AWS", "Flask"],
      "date": "Fall 2023"
    },
    {
      "name": "Foodie Finds",
      "description": "A responsive web application for users to search for restaurants",
      "url": "https://github.com/sreeharsha-rav/react-apps/tree/main/foodie_finds",
      "skills": ["JavaScript", "Node.js", "React.js", "HTML", "CSS", "Git", "Yelp API"],
      "date": "2023"
    },
    {
      "name": "Sparky's Money Rush",
      "description": "An immersive and interactive AR-based Snapchat filter game designed exclusively for the Devil's Invent Hackathon",
      "url": "https://drive.google.com/file/d/1PNd5a5Cod6yhtPHMyuim235B0oRBNcVP/view?usp=drive_link",
      "skills": ["LensStudio", "SnapAR"],
      "date": "Fall 2023"
    },
    {
      "name": "Expresso",
      "description": "A full back-end CRUD API for local cafe",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/expresso",
      "skills": ["JavaScript", "Node.js", "Express.js", "SQL", "HTML", "CSS", "git"],
      "date": "2023"
    },
    {
      "name": "Boss Machine",
      "description": "An API based unique management application for accomplished minions",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/boss_machine",
      "skills": ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "git"],
      "date": "2023"
    },
    {
      "name": "The Scoop",
      "description": "A web application for users to post articles, comment and upvote/downvote them.",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/the_scoop",
      "skills": ["JavaScript", "Node.js", "YAML", "HTML", "CSS", "git"],
      "date": "2023"
    },
    {
      "name": "Rock-Paper-Scissors",
      "description": "A 3-round variation of Rock-Paper-Scissors as an interactive web game",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/rps_x99",
      "skills": ["JavaScript", "Node.js", "HTML", "CSS", "git"],
      "date": "2023"
    },
    {
      "name": "Chatter Box",
      "description": "A real-time chatroom application leveraging WebSockets",
      "url": "https://github.com/sreeharsha-rav/chatter-box",
      "skills": ["JavaScript", "Node.js", "HTML", "CSS", "git"],
      "date": "2023"
    },
    {
      "name": "Branch Predictor",
      "description": "A machine learning based branch predictor for optimized performance",
      "url": "https://drive.google.com/file/d/16QSpOO0zC3UPM8t2_ZoT04LwgM6OYqEw/view?usp=drive_link",
      "skills": ["C", "git"],
      "date": "Spring 2022"
    },
    {
      "name": "Audio Synthesizer",
      "description": "Neural Network based audio synthesizer to mix and produce custom audio clips",
      "url": "https://drive.google.com/file/d/1AgE_OfJ8G3XV_DNutRvzoiOpEvabR5SH/view?usp=drive_link",
      "skills": ["Python", "TensorFlow", "Keras", "git"],
      "date": "Fall 2022"
    },
];

export default projects_data;