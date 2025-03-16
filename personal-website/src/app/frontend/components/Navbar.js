"use client";
import Link from "next/link";
import "../styles/navbar.css";
import {useState} from "react";
import { Inter, Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
    weight: ['100', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className = "NavBarContainer">
                <div className = "middle">
                    <Link href = "/" className = {`navItem ${robotoSlab.className}`}>Home</Link>
                    <Link href = "/ProjectPage" className = {`navItem ${robotoSlab.className}`}>Projects</Link>
                    <Link href = "AboutMe"  className = {`navItem ${robotoSlab.className}`}>About Me</Link>
                </div>
                <div className = "bottom">
                    <a href="https://www.instagram.com/peter.yoo7/" target="_blank" className = "instagram"></a>
                    <a href="https://ca.linkedin.com/in/peter-yoo-9a288924b" target="_blank"className = "linkedin"></a>
                    <a href="https://github.com/VoidBeGone" target="_blank" className = "github"></a>
                </div>
            </div>

            <div className="MobileNav">
                {!menuOpen && (
                    <div className="menuIcon" onClick={() => setMenuOpen(true)}>
                        <img
                        src="/dropdown.svg"
                        alt="Menu"
                        className="menuIcon"
                        onClick={() => setMenuOpen(true)}
                        />
                    </div>
                )}

                <div className={`dropdownMenu ${menuOpen ? "open" : ""}`}>
                    {menuOpen && (
                        <div className="closeIcon" onClick={() => setMenuOpen(false)}>✖</div>
                    )}
                    <div className={`menuItems ${robotoSlab.className}`}>
                        <Link href="/" className="dropdownItem" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link href="/ProjectPage" className="dropdownItem" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <Link href="/AboutMe" className="dropdownItem" onClick={() => setMenuOpen(false)}>About Me</Link>
                    </div>
                    <div className="socialIcons">
                        <a href="https://www.instagram.com/peter.yoo7/" target="_blank" className="instagram"></a>
                        <a href="https://ca.linkedin.com/in/peter-yoo-9a288924b" target="_blank" className="linkedin"></a>
                        <a href="https://github.com/VoidBeGone" target="_blank" className="github"></a>
                    </div>
                </div>
            </div>
        </>
    )
}