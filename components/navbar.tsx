import Link from 'next/link';

const styles = {
    wrapper: "container mx-auto flex h-16 items-center justify-between px-4 md:px-6",
    nav: "flex w-full justify-center",
    navItems: "flex items-center gap-6 rounded-md border border-input bg-primary px-4 py-2 shadow-md",
    navLink: "text-sm text-secondary font-medium hover:underline hover:underline-offset-4 transition-colors duration-200 ease-in-out"
};

const Navbar = () => {
    return (
        <header className="fixed top-0 z-50 w-full">
            <div className={styles.wrapper}>
                <nav className={styles.nav}>
                <div className={styles.navItems}>
                    <Link href="/" className={styles.navLink}>
                        <span>Home</span>
                    </Link>
                    <Link href="/about" className={styles.navLink}>
                        <span>About</span>
                    </Link>
                    <Link href="/projects" className={styles.navLink}>
                        <span>Projects</span>
                    </Link>
                    <Link href="/contact" className={styles.navLink}>
                        <span>Contact</span>
                    </Link>
                </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;