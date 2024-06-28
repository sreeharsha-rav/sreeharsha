import projects_data from "@/lib/data/project_data";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ProjectCard2 } from "@/components/projects/project-card";

interface Project {
    name: string;
    description: string;
    url: string;
    skills: string[];
    date: string;
}

const projects: Project[] = projects_data;

export default function Projects() {
    const projectCount = projects.length;

    return (
        <div className="mx-auto max-w-5xl space-y-8 mb-10">
            <div className="flex items-center justify-between w-full p-4">
                <Link href="/projects">
                    <span className="flex items-center gap-2 font-semibold hover:text-primary hover:underline transition">
                        <ArrowLeftIcon />
                        <span>Back to recent projects</span>
                    </span>    
                </Link>
                <div className="bg-muted text-primary text-md px-2 py-1 rounded-md text-sm font-medium">
                {projectCount} projects
                </div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {projects.map((project) => (
                    <div key={project.name} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2">
                        <ProjectCard2 project={project} />
                    </div>
                ))}
            </section>
        </div>
    );
}