"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
		});
	}, []);
	return (
		<>
			<Navbar></Navbar>
			<main className="overflow-hidden">
				<section
					className="bg-gray-950 px-6 py-40 text-center rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="home"
				>
					<div className="flex justify-center items-center mb-6">
						<Image
							src="/IMG_7441.jpg"
							alt="Profile Picture"
							width={200}
							height={200}
							className="rounded-full w-[200px] h-[200px] object-cover hover:scale-105 overflow-hidden"
						/>
					</div>
					<h1 className="text-2xl md:text-3xl text-white font-semibold mb-2">
						Yogi Tri Dirgantara
					</h1>
					<p className="text-sm md:text-xl text-gray-200 mb-6">
						Web Developer / Graphics Design / UI UX Design
					</p>
					<div className="flex justify-center gap-6">
						<a
							href="wa.me/+6281572529701"
							className="bg-green-700 hover:bg-green-900 p-3 rounded-md text-sm md:text-xl  "
						>
							Contact Saya
						</a>
						<a
							href="/Fortofolio_Yogi Tri Dirgantara.pdf"
							className="bg-gray-700 hover:bg-gray-900 p-3 rounded-md text-sm md:text-xl"
						>
							Download Portofolio
						</a>
					</div>
				</section>

				{/* About */}
				<section
					className="bg-gray-950 px-6 py-40 rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="about"
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center mb-6">
						About Me
					</h2>
					<p className="text-sm md:text-lg leading-relaxed text-gray-100 max-w-3xl mx-auto text-center">
						Saya adalah seorang pengembang web dan desainer
						grafis dengan passion dalam menciptakan pengalaman
						digital yang menarik dan berfungsi dengan baik.
						Dengan pengalaman dalam teknologi modern seperti
						Next.js, React, dan Node.js, saya mengembangkan
						aplikasi yang responsif, cepat, dan user-friendly.
					</p>
					<p className="text-sm md:text-lg leading-relaxed text-gray-100 max-w-3xl mx-auto text-center mt-4">
						Selain itu, saya juga seorang UI/UX designer yang
						memiliki keahlian dalam menciptakan desain yang
						estetis dan mudah digunakan. Saya percaya bahwa
						desain yang baik bukan hanya tentang keindahan,
						tetapi juga tentang pengalaman pengguna yang
						optimal.
					</p>
					<p className="text-sm md:text-lg leading-relaxed text-gray-100 max-w-3xl mx-auto text-center mt-4">
						Saya aktif membagikan wawasan dan inspirasi desain
						di media sosial saya, termasuk Instagram{""}
						<a
							href="https://www.instagram.com/gistudios"
							className="text-blue-500 font-semibold hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							@gistudios
						</a>
						. Jangan ragu untuk menghubungi saya jika Anda
						membutuhkan jasa desain atau pengembangan web!
					</p>
				</section>

				{/* Project */}
				<section
					className="bg-gray-950 px-6 py-40 rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="project"
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center mb-6">
						Project
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<Image
								src="/image-2.png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px] ">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen atas
									dilantiknya sebagai kepala CDC
									Universitas Ma'soem
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32 place-items-center">
									Photoshop
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-left"
						>
							<Image
								src="/img-3.png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									terimakasih terhadap seorang dosen
									atas dedikasinya menjadi kepala CDC
									Universitas Ma'soem
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Photoshop
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<Image
								src="/img-1.png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen yang
									menjadi guru besar di universitas
									padjadjaran
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Photoshop
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-left"
						>
							<Image
								src="/img-4.png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain flyer
									mengenai informasi psikotest
									mahasiswa Universitas Ma'soem
									tingkat 1
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Photoshop
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<Image
								src="/img (1).png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen yang
									menjadi guru besar di universitas
									padjadjaran
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Figma
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-left"
						>
							<Image
								src="/img (2).png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen yang
									menjadi guru besar di universitas
									padjadjaran
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Figma
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<Image
								src="/img (3).png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen yang
									menjadi guru besar di universitas
									padjadjaran
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Figma
								</h3>
							</div>
						</div>
						<div
							className="bg-gray-100 rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-left"
						>
							<Image
								src="/img (4).png"
								alt=""
								width={150}
								height={150}
								className="rounded-lg"
							/>
							<div className="flex flex-col justify-center items-center text-center mt-2">
								<p className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px]">
									Desain ini merupakan desain ucapan
									selamat terhadap seorang dosen yang
									menjadi guru besar di universitas
									padjadjaran
								</p>
								<h3 className="bg-gray-950 text-gray-100 text-center text-[12px] md:text-[16px] rounded-xl mt-4 w-32">
									Figma
								</h3>
							</div>
						</div>
					</div>
				</section>

				{/* Skills */}
				<section
					className="bg-gray-950 px-6 py-40 rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="skills"
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center mb-6">
						Skills
					</h2>

					<div className="place-items-center" data-aos="zoom-in">
						<ul className="grid grid-cols-2 sm:grid-cols-5 gap-3 place-items-center">
							<li className="text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./ps.png"
									alt=""
									width={50}
									height={50}
								/>
								Photoshop
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./figma.png"
									alt=""
									width={50}
									height={50}
								/>
								Figma
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./ai.png"
									alt=""
									width={50}
									height={50}
								/>
								Illustrator
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./coreldraw.png"
									alt=""
									width={50}
									height={50}
								/>
								Coreldraw
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./canva.png"
									alt=""
									width={50}
									height={50}
								/>
								Canva
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./next-js.png"
									alt=""
									width={50}
									height={50}
								/>
								Next Js
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./node_js.png"
									alt=""
									width={50}
									height={50}
								/>
								Node Js
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./tailwind.png"
									alt=""
									width={50}
									height={50}
								/>
								Tailwind CSS
							</li>
							<li className=" text-center rounded-lg p-4 hover:scale-110 place-items-center">
								<Image
									src="./php.png"
									alt=""
									width={50}
									height={50}
								/>
								PHP
							</li>
						</ul>
					</div>
				</section>

				{/* Experience */}
				<section
					className="bg-gray-950 px-6 py-40 rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="experience"
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center mb-6">
						Experience
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
						<div
							className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<div className="flex flex-col justify-start items-start mt-2">
								<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
									CDC Universitas Ma'soem
								</h3>
								<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
									Design Content Operator
								</h3>
								<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
									September 2024 - Sekarang
								</p>

								<ul className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px] mt-4">
									<li>
										Mendesain materi promosi dan
										publikasi untuk berbagai
										program dan kegiatan CDC MU.
									</li>
									<li>
										Menghasilkan desain
										infografis, feed Instagram,
										dan video singkat untuk
										meningkatkan engagement
										audiens.
									</li>
									<li>
										Memastikan desain yang
										dihasilkan sesuai dengan
										branding CDC MU dan mudah
										dipahami oleh target audiens.
									</li>
								</ul>
							</div>
						</div>
						<div
							className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-left"
						>
							<div className="flex flex-col justify-start items-start mt-2">
								<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
									PT RSI - Widyadhana
								</h3>
								<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
									Design Graphics
								</h3>
								<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
									Desember 2024 - Maret 2025
								</p>

								<ul className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px] mt-4">
									<li>
										Bertanggung jawab dalam
										pembuatan materi visual untuk
										kebutuhan branding dan
										pemasaran perusahaan.
									</li>
									<li>
										Mendesain berbagai materi
										promosi seperti brosur,
										banner, dan konten media
										sosial.
									</li>
									<li>
										Berkolaborasi dengan tim
										pemasaran untuk memastikan
										desain sesuai dengan identitas
										merek dan strategi bisnis.
									</li>
								</ul>
							</div>
						</div>
						<div
							className="bg-gray-700 w-[300px] md:w-[500px] rounded-lg p-6 grid grid-cols-1 gap-3 place-items-center hover:scale-105 transition-transform "
							data-aos="fade-right"
						>
							<div className="flex flex-col justify-start items-start mt-2">
								<h3 className="bg-gray-950 text-gray-100 text-[12px] md:text-[16px] rounded-md w-56 p-2 place-items-center font-bold">
									Pemira MU 2024
								</h3>
								<h3 className="text-gray-100 font-sans font-bold text-[12px] md:text-[16px] mt-4 font">
									Design Graphics
								</h3>
								<p className="text-gray-950 font-sans font-medium text-[8px] md:text-[12px] font">
									November 2024 - Januari 2025
								</p>

								<ul className="text-gray-950 font-sans font-medium text-[12px] md:text-[16px] mt-4">
									<li>
										Mengembangkan identitas visual
										untuk acara Pemira MU 2024,
										termasuk logo, poster, dan
										konten digital.
									</li>
									<li>
										Menciptakan desain yang
										menarik dan komunikatif guna
										meningkatkan partisipasi
										pemilih.
									</li>
									<li>
										Bekerja sama dengan tim
										kampanye untuk menyampaikan
										pesan acara secara efektif
										melalui desain visual.
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Contact */}
				<section
					className="bg-gray-950 px-6 py-40 rounded-lg shadow-lg mx-auto mb-12 w-full"
					data-aos="fade-up"
					id="contact"
				>
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-100 text-center mb-6">
						Contact
					</h2>

					<div className="place-items-center">
						<form
							className="w-full max-w-md bg-gray-700 p-8 rounded-lg shadow-lg"
							data-aos="fade-up"
						>
							<div className="mb-4">
								<label className="block text-gray-100 font-medium font-sans">
									Nama
								</label>
								<input
									type="text"
									placeholder="Masukkan Nama Anda"
									className="w-full p-2 mt-1 text-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans"
								/>
							</div>

							<div className="mb-4">
								<label className="block text-gray-100 font-medium font-sans">
									Email
								</label>
								<input
									type="email"
									placeholder="Masukkan Email Anda"
									className="w-full p-2 mt-1 text-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans"
								/>
							</div>

							<div className="mb-4">
								<label className="block text-gray-100 font-medium font-sans">
									Pesan
								</label>
								<textarea
									placeholder="Masukkan Pesan Anda"
									className="w-full p-2 mt-1 text-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-sans"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-sans"
							>
								Kirim
							</button>
						</form>
					</div>
				</section>
			</main>
		</>
	);
}
