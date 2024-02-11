import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intern at KnowX Innovations Pvt. Ltd.",
    location: "Bangalore, India",
    description:
      "I graduated after 4 years of studying. I immediately found a job as an associate software engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Intern at Agiledge Process Solutions Pvt. Ltd.",
    location: "Bangalore, India",
    description:
      "I graduated after 4 years of studying. I immediately found a job as an associate software engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Graduated with a Bachelor's degree in Electronics and Communication Engineering",
    location: "NITK Surathkal, India",
    description:
      "I graduated after 4 years of studying. I immediately found a job as an associate software engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description:
      "I worked as a software enggineer at DXC Technology. I upskilled in technologies like Azure, AWS, SQL and Python.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Graduated with a Master's degree in Computer Engineering",
    location: "Tempe, AZ",
    description:
      "I graduated after 2 years of studying. I'm volunteering at EPICS ASU.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: "Developer at EPICS ASU",
    location: "Tempe, AZ",
    description:
      "I'm volunteering at EPICS ASU. I'm working on a project called Message Everywhere. I'm using JavaScript, Python and Bubble.io.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "EduScan V2",
    description: "A classroom assistant for seamless student identification and academic data retrieval using open-source solutions",
    tags: ["Python", "OpenFaaS", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "EduScan",
    description: "A classroom assistant for seamless student identification and academic data retrieval",
    tags: ["Python", "AWS", "Docker", "Streamlit"],
  },
  {
    title: "Playlistify",
    description: "A responsive web application for creating custom playlists using Spotify API",
    tags: ["JavaScript", "React.js", "HTML", "Tailwind CSS", "Git", "Spotify API"],
  },
  {
    title: "Cloud Vision",
    description: "An elastic image recognition service built using AWS EC2, S3, SQS",
    tags: ["Python", "AWS", "Flask"],
  },
  {
    title: "Foodie Finds",
    description: "A responsive web application for users to search for restaurants",
    tags: ["JavaScript", "Node.js", "React.js", "HTML", "CSS", "Git", "Yelp API"],
  },
  {
    title: "Sparky's Money Rush",
    description: "An immersive and interactive AR-based Snapchat filter game designed exclusively for the Devil's Invent Hackathon",
    tags: ["LensStudio", "SnapAR"],
  },
  {
    title: "Expresso",
    description: "A full back-end CRUD API for local cafe",
    tags: ["JavaScript", "Node.js", "Express.js", "SQL", "HTML", "CSS", "Git"],
  },
  {
    title: "Boss Machine",
    description: "An API based unique management application for accomplished minions",
    tags: ["JavaScript", "Node.js", "Express.js", "HTML", "CSS", "Git"],
  },
  {
    title: "The Scoop",
    description: "A web application for users to post articles, comment and upvote/downvote them.",
    tags: ["JavaScript", "Node.js", "YAML", "HTML", "CSS", "Git"],
  },
  {
    title: "Rock-Paper-Scissors",
    description: "A 3-round variation of Rock-Paper-Scissors as an interactive web game",
    tags: ["JavaScript", "Node.js", "HTML", "CSS", "Git"],
  },
  {
    title: "Chatter Box",
    description: "A real-time chatroom application leveraging WebSockets",
    tags: ["JavaScript", "Node.js", "HTML", "CSS", "Git"],
  },
  {
    title: "Branch Predictor",
    description: "A machine learning based branch predictor for optimized performance",
    tags: ["C", "Git"],
  },
  {
    title: "Audio Synthesizer",
    description: "Neural Network based audio synthesizer to mix and produce custom audio clips",
    tags: ["Python"],
  },
  {
    title: "Tic Tac Toe",
    description: "A simple python terminal based Tic Tac Toe game",
    tags: ["Python", "Git"],
  },
] as const;

export const skillsData = [
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "Azure",
  "Postman",
  "Java",
  "C",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "SQL",
  "NoSQL",
  "PostgreSQL",
  "React.js",
  "Express.js",
  "Node.js",
  "Figma",
  "Photoshop",
  "Bubble.io",
] as const;
