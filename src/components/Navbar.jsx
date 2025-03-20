import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMenu = [
    { id: 1, title: "Home", link: "#home" },
    { id: 2, title: "Categories", link: "#categories" },
    { id: 3, title: "Blog", link: "#blog" },
    { id: 4, title: "About", link: "#about" },
    { id: 5, title: "FAQ", link: "#faq" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle Menu Function
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Smooth Scroll Function
    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // Close menu after clicking
        }
    };

    return (
        <div className="text-white py-3 md:py-8 relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="container flex justify-between items-center relative z-50"
            >
                {/* Logo */}
                <div>
                    <img src="/images/logo.png" alt="Logo" className="max-w-[100px] invert" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-4">
                        {NavbarMenu.map((item) => (
                            <li key={item.id}>
                                <a
                                    onClick={() => scrollToSection(item.link)}
                                    className="inline-block text-base font-semibold py-2 px-3 uppercase hover:bg-white hover:rounded-full hover:text-black"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                        <button className="text-xl ps-14">
                            <FaRegUser />
                        </button>
                    </ul>
                </div>

                {/* Hamburger Menu Icon */}
                <div className="md:hidden z-[100] relative">
                    <button onClick={toggleMenu} className="text-4xl">
                        {isOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu with Transparent White Background */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-full left-0 w-full h-full bg-white z-[9998]"
                            onClick={toggleMenu} // Close menu when clicking outside
                        />

                        {/* Menu Box */}
                        <motion.div
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 0.9 }}
                            exit={{ y: "-100%", opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-full left-0 right-0 bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-lg z-[9999]"
                        >
                            <ul className="flex flex-col items-center gap-4">
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="text-lg font-semibold uppercase text-black"
                                            onClick={toggleMenu} // Closes menu when clicking a link
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
