"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			mirror: true,
		});
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<title>Fortofolio</title>
			<nav className="bg-gray-950 h-14 flex justify-between items-center px-5 text-white fixed w-full z-10">
				<h1 className="font-bold italic" data-aos="fade-right">
					Fortofolio
				</h1>

				{/* Desktop Menu */}
				<ul className="hidden md:flex md:items-center md:space-x-5">
					<li>
						<Link href="#home">Home</Link>
					</li>
					<li>
						<Link href="#about">About</Link>
					</li>
					<li>
						<Link href="#project">Project</Link>
					</li>
					<li>
						<Link href="#skills">Skills</Link>
					</li>
					<li>
						<Link href="#experience">Experience</Link>
					</li>
					<li>
						<Link href="#contact">Contact</Link>
					</li>
				</ul>

				{/* Toggle Button for Mobile */}
				<button
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Mobile Menu */}
				{isOpen && (
					<ul className="absolute top-14 right-0 w-full bg-gray-950 flex flex-col items-center space-y-3 py-3 md:hidden">
						<li>
							<Link href="#">Home</Link>
						</li>
						<li>
							<Link href="#about">About</Link>
						</li>
						<li>
							<Link href="#project">Project</Link>
						</li>
						<li>
							<Link href="#skills">Skills</Link>
						</li>
						<li>
							<Link href="#experience">Experience</Link>
						</li>
						<li>
							<Link href="#contact">Contact</Link>
						</li>
					</ul>
				)}
			</nav>
		</>
	);
}
