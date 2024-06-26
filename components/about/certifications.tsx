import { Separator } from "../ui/separator";

export default function Certifications() {
    return (
        <div>
            <h2 className="text-xl font-bold">Certifications</h2>
            <div className="flex flex-col">
                <div className="p-4">
                    <div className="flex items-center justify-between w-full">
                        <h3 className="text-md font-semibold">Codecademy</h3>
                        <div className="bg-muted text-primary px-2 py-1 rounded-md text-sm font-medium">
                            Mar 2024 - Present
                        </div>
                    </div>
                    <p className="text-primary">Full-Stack Developer</p>
                    <p className="text-sm text-muted-foreground">
                    Skills: 
                    </p>

                    <Separator className="my-2" />
                </div>
            </div>
        </div>
    );
}