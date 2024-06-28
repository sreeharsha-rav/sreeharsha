import Experience from "@/components/about/experience";
import Education from "@/components/about/education";
import Skills from "@/components/about/skills";
import Certifications from "@/components/about/certifications";

export default function About() {
return (
    <div className="mx-auto max-w-5xl space-y-8">
        {/* <h1 className="text-3xl font-bold text-center">About Me</h1> */}
        <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
                <Experience />
                <Education />
            </div>
            <div className="flex flex-col gap-2">
                <Skills />
                {/* TODO: <Certifications /> */}
            </div>
        </div>
    </div>
);
}