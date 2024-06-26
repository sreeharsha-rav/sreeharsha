"use client";

import { EnvelopeOpenIcon, IdCardIcon, GitHubLogoIcon, LinkedInLogoIcon, RocketIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function IntroLinks() {
    return (
        <>
            <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        delay: 0.1,
                    }}
            >   
                <Button variant="outline">
                    <Link href="/about" className="flex items-center justify-center">
                        <IdCardIcon className="mr-2 h-4 w-4" /> More About Me
                    </Link>
                </Button>
                <Button variant="outline">
                    <Link href="/projects" className="flex items-center justify-center">
                        <RocketIcon className="mr-2 h-4 w-4" /> View Projects
                    </Link>
                </Button>

                <Button variant="outline">
                    <Link href="/contact" className="flex items-center justify-center">
                        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Contact Me
                    </Link>
                </Button>

            </motion.div>
            <br/>
            <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        delay: 0.1,
                    }}
            >   

                <Button variant="link">
                    <a className="flex items-center gap-2" href="/CV-demo.pdf" target="_blank">
                        View CV{" "}
                        <OpenInNewWindowIcon className="mr-2 h-4 w-4"/>
                    </a>
                </Button>


                <a
                className="bg-white p-4 text-gray-700 hover:text-primary flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                href="https://www.linkedin.com/in/sreeharsha-rav/"
                target="_blank"
                >
                    <LinkedInLogoIcon className="mr-2 h-4 w-4"/>
                </a>

                <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary active:scale-105 transition cursor-pointer"
                href="https://github.com/sreeharsha-rav"
                target="_blank"
                >
                    <GitHubLogoIcon className="mr-2 h-4 w-4"/>
                </a>
            </motion.div>
        </>
    );
}