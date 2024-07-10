"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const styles = {
    wrapper: "container mx-auto flex h-16 items-center justify-between px-4 md:px-6",
    nav: "flex w-full justify-center",
    navItems: "flex items-center rounded-md border border-input bg-primary shadow-md",
    navLink: "text-sm text-muted font-medium hover:bg-blue-800 hover:text-white px-4 py-2 rounded transition-colors duration-200 ease-in-out",
    activeLink: "text-sm text-white font-medium bg-blue-700 hover:bg-blue-700 hover:text-white px-4 py-2 rounded transition-colors duration-200 ease-in-out",
};

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full">
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                <div className={styles.navItems}>
                    <Link href="/" className={`${usePathname() === '/' ? styles.activeLink : styles.navLink}`}>
                        <span>Home</span>
                    </Link>
                    <Link href="/about" className={`${usePathname() === '/about' ? styles.activeLink : styles.navLink}`}>
                        <span>About</span>
                    </Link>
                    <Link href="/projects" className={`${usePathname() === '/projects' ? styles.activeLink : styles.navLink}`}>
                        <span>Projects</span>
                    </Link>
                    <Link href="/contact" className={`${usePathname() === '/contact' ? styles.activeLink : styles.navLink}`}>
                        <span>Contact</span>
                    </Link>
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;