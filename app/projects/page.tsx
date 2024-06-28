import Articles from "@/components/projects/articles";
import OpenSource from "@/components/projects/opensource";
import RecentProjects from "./recent-projects";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ProjectCard1 } from "@/components/projects/project-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import projects_data from "@/lib/data/project_data";


export default function Projects() {
    const projects = projects_data;

    return (
        <div className="mx-auto max-w-5xl space-y-8">
            {/* <h1 className="text-3xl font-bold text-center">Projects</h1> */}
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between w-full">
                        <h2 className="text-xl font-bold">Recent Projects</h2>
                        <div className="flex items-center justify-start px-4">
                            <Link href="/projects/all">
                                <span className="flex items-center gap-2 font-semibold hover:text-primary hover:underline transition">
                                    <span>View all projects</span>
                                    <ArrowRightIcon />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-between w-full p-4">
                    <ScrollArea className="flex flex-wrap max-h-96 overflow-y-auto hover:bg-gray-100 rounded-md">
                        {projects.slice(0, 5).map((project) => (
                        <div key={project.name} className="p-2">
                            <ProjectCard1 project={project} />
                        </div>
                        ))}
                    </ScrollArea>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Articles />
                    {/* <OpenSource /> */}
                </div>
            </div>
        </div>
    );
}