"use client";

import IntroLinks from "./intro-links";
import IntroText from "./intro-text";
import IntroImage from "./intro-image";

export default function Intro() {
    return (
        <section>
            {/* Intro Image and Emoji */}
            <IntroImage />
            
            {/* Intro Text */}
            <IntroText />
            
            {/* Action links */}
            <IntroLinks />
        </section>
    );
}