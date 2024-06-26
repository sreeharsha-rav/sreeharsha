import Articles from "@/components/projects/articles";
import OpenSource from "@/components/projects/opensource";
import RecentProjects from "@/components/projects/recent-projects";

export default function Projects() {
    return (
        <div className="mx-auto max-w-5xl space-y-8">
            <h1 className="text-3xl font-bold text-center">Projects</h1>
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <RecentProjects />
                    {/* <OpenSource /> */}
                </div>
                <div className="flex flex-col gap-2">
                    <Articles />
                </div>
            </div>
        </div>
    );
}