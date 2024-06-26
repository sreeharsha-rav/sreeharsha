import { Separator } from '@/components/ui/separator';

interface Job {
    company: string;
    role: string;
    date: string;
    description: string;
}

const jobs = [
    {
        company: "Alltech Consulting Services Inc.",
        role: "Full-Stack Developer",
        date: "Mar 2024 - Present",
        description: "Developed and maintained applications with scalable microservices architecture and robust security measures. My role encompassed API development, containerization, CI/CD pipelines and frontend feature development."
    },
    {
        company: "EPICS at ASU",
        role: "Software Developer",
        date: "Dec 2023 - Mar 2024",
        description: "Resolved frontend issues, created wireframe mockups and implemented features for an SMS messaging platform. Used Bubble.io, Twilio and Javascript."
    },
    {
        company: "DXC Technology",
        role: "Software Engineer",
        date: "2020 - 2021",
        description: "Developed Python-based applications and implemented cloud-based data warehousing solutions. Worked with Azure, AWS, Kubernetes, Docker and Pandas."
    }
];

const ExperienceCard = ({ job } : { job: Job }) => {
    return (
        <>
            <div className="flex items-center justify-between w-full">
                <h3 className="text-md font-semibold">{job.company}</h3>
                <div className="bg-muted text-primary text-xs px-2 py-1 rounded-md text-sm font-medium">
                    {job.date}
                </div>
            </div>
            <p className="text-primary font-medium text-sm">{job.role}</p>
            <p className="text-sm text-muted-foreground">
                {job.description}
            </p>
        </>
    );
}

export default function Experience() {
    return (
        <div>
            <h2 className="text-xl font-bold">Experience</h2>
            <div className="flex flex-col">
                <div className="p-4">
                    {jobs.map((job) => (
                        <div key={job.company}>
                            <ExperienceCard job={job} />
                            <Separator className='my-2'/>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    );
}