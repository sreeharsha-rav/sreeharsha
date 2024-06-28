import { Badge } from "../ui/badge";
import skills_data from "@/lib/data/skill_data";

export default function Skills() {
    const skills = skills_data;
    return (
        <div className="flex flex-col">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 p-4">
                    {skills.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </div>
        </div>
    );
}