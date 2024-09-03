import { motion } from "framer-motion";

export default function IntroText() {
    return (
        <motion.h1
                className="mb-10 mt-4 px-4 text-2xl poppins-regular !leading-[1.5] sm:text-2xl items-center justify-center text-center"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
        >
            <span className="poppins-semibold">Hello, I&apos;m Sreeharsha.</span>
            <span className="block">
                I&apos;m a <span className="poppins-semibold">Software Developer</span> with <span className="font-semibold">3+ years</span> of experience.
            </span>
            <span className="block">I like to build <i>full-stack applications</i> with a focus on<i> responsive design</i></span>
            <span className="block">and <i>user-friendly experiences</i>.</span>
        </motion.h1>
    );
}

// FUTURE: Add cursor animation to for typewriter effect