import { ScrollArea } from "@/components/ui/scroll-area";
import projects_data from "@/lib/data/project_data";
import { ProjectCard1 } from "@/components/projects/project-card";

interface Project {
    name: string;
    description: string;
    url: string;
    skills: string[];
    date: string;
}

const projects: Project[] = projects_data;

export default function RecentProjects() {
    return (
      <div>
        <h2 className="text-xl font-bold">Recent Projects</h2>
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
    );
}