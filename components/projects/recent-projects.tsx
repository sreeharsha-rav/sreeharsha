import { ScrollArea } from "../ui/scroll-area";

interface Project {
    name: string;
    description: string;
    url: string;
    skills: string[];
}

const projects: Project[] = [
    {
      "name": "EduScan V2",
      "description": "A classroom assistant for seamless student identification and academic data retrieval using open-source solutions",
      "url": "https://github.com/sreeharsha-rav/openfaas-eduscan",
      "skills": ["Python", "OpenFaaS", "AWS", "Docker", "Kubernetes"]
    },
    {
      "name": "EduScan",
      "description": "A classroom assistant for seamless student identification and academic data retrieval",
      "url": "https://github.com/sreeharsha-rav/aws-eduscan",
      "skills": ["Python", "AWS", "Docker", "Streamlit"]
    },
    {
      "name": "Playlistify",
      "description": "A responsive web application for creating custom playlists using Spotify API",
      "url": "https://github.com/sreeharsha-rav/react-apps/tree/main/playlistify",
      "skills": ["JavaScript", "React.js", "HTML", "Tailwind CSS", "Git", "Spotify API"]
    },
    {
      "name": "Cloud Vision",
      "description": "An elastic image recognition service built using AWS EC2, S3, SQS",
      "url": "https://github.com/sreeharsha-rav/aws_cloudvision/tree/main",
      "skills": ["Python", "AWS", "Flask"]
    },
    {
      "name": "Foodie Finds",
      "description": "A responsive web application for users to search for restaurants",
      "url": "https://github.com/sreeharsha-rav/react-apps/tree/main/foodie_finds",
      "skills": ["JavaScript", "Node.js", "React.js", "HTML", "CSS", "Git", "Yelp API"]
    },
    {
      "name": "Sparky's Money Rush",
      "description": "An immersive and interactive AR-based Snapchat filter game designed exclusively for the Devil's Invent Hackathon",
      "url": "https://drive.google.com/file/d/1PNd5a5Cod6yhtPHMyuim235B0oRBNcVP/view?usp=drive_link",
      "skills": ["LensStudio", "SnapAR"]
    },
    {
      "name": "Expresso",
      "description": "A full back-end CRUD API for local cafe",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/expresso",
      "skills": ["JavaScript", "Node.js", "Express.js", "SQL", "HTML", "CSS", "git"]
    },
    {
      "name": "Boss Machine",
      "description": "An API based unique management application for accomplished minions",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/boss_machine",
      "skills": ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "git"]
    },
    {
      "name": "The Scoop",
      "description": "A web application for users to post articles, comment and upvote/downvote them.",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/the_scoop",
      "skills": ["JavaScript", "Node.js", "YAML", "HTML", "CSS", "git"]
    },
    {
      "name": "Rock-Paper-Scissors",
      "description": "A 3-round variation of Rock-Paper-Scissors as an interactive web game",
      "url": "https://github.com/sreeharsha-rav/javascript_projects/tree/main/rps_x99",
      "skills": ["JavaScript", "Node.js", "HTML", "CSS", "git"]
    },
    {
      "name": "Chatter Box",
      "description": "A real-time chatroom application leveraging WebSockets",
      "url": "https://github.com/sreeharsha-rav/chatter-box",
      "skills": ["JavaScript", "Node.js", "HTML", "CSS", "git"]
    },
    {
      "name": "Branch Predictor",
      "description": "A machine learning based branch predictor for optimized performance",
      "url": "https://drive.google.com/file/d/16QSpOO0zC3UPM8t2_ZoT04LwgM6OYqEw/view?usp=drive_link",
      "skills": ["C", "git"]
    },
    {
      "name": "Audio Synthesizer",
      "description": "Neural Network based audio synthesizer to mix and produce custom audio clips",
      "url": "https://drive.google.com/file/d/1AgE_OfJ8G3XV_DNutRvzoiOpEvabR5SH/view?usp=drive_link",
      "skills": ["Python"]
    },
    {
      "name": "Tic Tac Toe",
      "description": "A simple python terminal based Tic Tac Toe game",
      "url": "https://github.com/sreeharsha-rav/python_projects/tree/main/tic_tac_toe",
      "skills": ["Python", "git"]
    }
];

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-md max-h-48 w-full">
            <a href={project.url} target="_blank">
                <h3 className="text-md font-medium hover:font-semibold hover:text-primary hover:underline transition">{project.name}</h3>
            </a>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
                {project.skills.map((skill) => (
                    <div className="bg-muted text-primary px-1 py-1 rounded-md text-xs font-medium">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function RecentProjects() {
    return (
        <div>
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <div className="flex items-center justify-between w-full p-4">
                <ScrollArea className="flex flex-wrap max-h-96 overflow-y-auto hover:bg-gray-100 rounded-md mb-10">
                    {projects.map((project) => (
                        <div key={project.name} className="p-2">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </ScrollArea>
            </div>
            {/* <a href="/all-projects" className="text-primary font-medium hover:underline">View all projects</a> */}
        </div>
    );
}