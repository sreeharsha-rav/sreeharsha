"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroImage() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Image
                    src="/face_emoji.jpg"
                    alt="Sreeharsha Animated Portrait"
                    width={200}
                    height={200}
                    priority={true}
                    className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-muted shadow-xl"
                />
            </motion.div>

            <motion.span
                className="absolute bottom-0 right-0 text-4xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
                }}
            >
                👋
            </motion.span>
            </div>
        </div>
    );
}