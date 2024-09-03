import { Mail, IdCard, Rocket, FileText, Linkedin, Github } from 'lucide-react';

import { motion } from "framer-motion";

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
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
                    <a href="/about" className="flex items-center justify-center">
                        <IdCard className="mr-2 h-4 w-4" /> More About Me
                    </a>
                </button>
                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
                    <a href="/projects" className="flex items-center justify-center">
                        <Rocket className="mr-2 h-4 w-4" /> View Projects
                    </a>
                </button>

                <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600">
                    <a href="/contact" className="flex items-center justify-center">
                        <Mail className="mr-2 h-4 w-4" /> Contact Me
                    </a>
                </button>

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
<button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                    <a className="flex items-center gap-2" href="/SreeharshaRaveendra.pdf" target="_blank">
                        View Resume{" "}
                        <FileText className="mr-2 h-4 w-4"/>
                    </a>
                </button>


                <a
                className="bg-white p-4 text-gray-700 hover:text-primary flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                href="https://www.linkedin.com/in/sreeharsha-rav/"
                target="_blank"
                >
                    <Linkedin className="mr-2 h-4 w-4"/>
                </a>

                <a
                className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-primary active:scale-105 transition cursor-pointer"
                href="https://github.com/sreeharsha-rav"
                target="_blank"
                >
                    <Github className="mr-2 h-4 w-4"/>
                </a>
            </motion.div>
        </>
    );
}