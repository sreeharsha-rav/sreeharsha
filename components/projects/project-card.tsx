import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Project {
    name: string;
    description: string;
    url: string;
    skills: string[];
    date: string;
}

const ProjectCard1 = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-col p-4 bg-white shadow-md rounded-md max-h-48 w-full">
          <div className="flex items-center justify-between w-full gap-2">
                <a href={project.url} target="_blank">
                    <div className="flex items-center gap-2 hover:font-semibold hover:text-primary hover:underline transition">
                        <h3 className="text-md font-medium">{project.name}</h3>
                        <ExternalLinkIcon className="w-4 h-4" />
                    </div>
                </a>
                <p className="text-primary text-xs flex-shrink-0">
                    {project.date}
                </p>
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
                {project.skills.map((skill) => (
                    <div key={skill} className="bg-muted text-primary px-1 py-1 rounded-md text-xs font-medium">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

const ProjectCard2 = ({ project }: { project: Project }) => {
    return (
        <div className="flex flex-col p-4 bg-white">
            <a href={project.url} target="_blank" className="py-2">
                <div className="flex items-center gap-2 hover:font-semibold hover:text-primary hover:underline transition">
                    <h3 className="text-md font-medium">{project.name}</h3>
                    <ExternalLinkIcon className="w-4 h-4" />
                </div>
            </a>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-1">
                {project.skills.map((skill) => (
                    <div key={skill} className="bg-muted text-primary px-1 py-1 rounded-md text-xs font-medium">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { ProjectCard1, ProjectCard2 };