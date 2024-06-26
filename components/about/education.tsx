import { Separator } from "../ui/separator";

export default function Education() {
    return (
        <div>
            <h2 className="text-xl font-bold">Education</h2>
            <div className="flex flex-col">
                <div className="p-4">
                    <div className="flex items-center justify-between w-full">
                        <h3 className="text-md font-semibold">Arizona State University</h3>
                        <div className="bg-muted text-primary px-2 py-1 rounded-md text-xs font-medium">
                            2021 - 2023
                        </div>
                    </div>
                    <p className=" text-sm text-muted-foreground">MS in Computer Engineering</p>

                    <Separator className="my-2" />
                    
                    <div className="flex items-center justify-between w-full">
                        <h3 className="text-md font-semibold">National Institute of Technology Karnataka</h3>
                        <div className="bg-muted text-primary px-2 py-1 rounded-md text-xs font-medium">
                            2016 - 2020
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">B.Tech in Electronics and Communication Engineering</p>

                </div>
            </div>
        </div>
    );
}
