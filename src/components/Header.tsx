import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useDetectScroll } from '@smakss/react-scroll-direction';
import {
	HiMenuAlt1,
	HiMenuAlt2,
	HiMenuAlt3,
	HiOutlineMenuAlt2,
} from 'react-icons/hi';

interface HeaderProps {
	active_tab: string;
}

export default function Header({ active_tab }: HeaderProps) {
	const [_, setScrollPosition] = useState(0);
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	const itemVariants: Variants = {
		open: {
			// opacity: 1,
			y: 0,

			transition: { type: 'spring', stiffness: 700, damping: 95 },
		},
		closed: {
			// opacity: 0,
			y: -100,
			transition: { duration: 0.3 },
		},
	};

	const tabVariants: Variants = {
		first: {
			left: '4px',
			transition: { type: 'spring', stiffness: 900, damping: 60 },
			width: '100px',
		},
		second: {
			left: '102px',
			transition: { type: 'spring', stiffness: 900, damping: 60 },
			width: '104px',
		},
		third: {
			left: '208px',
			transition: { type: 'spring', stiffness: 900, damping: 60 },
			width: '77px',
		},
		fourth: {
			left: '287px',
			transition: { type: 'spring', stiffness: 900, damping: 60 },
			width: '70px',
		},
		fifth: {
			left: '358px',
			transition: { type: 'spring', stiffness: 900, damping: 60 },
			width: '78px',
		},
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.div
			initial={false}
			variants={itemVariants}
			className={`w-full flex flex-col px-4 py-4 ${
				mobileNavOpen ? 'bg-black/90' : 'bg-black/80'
			} backdrop-blur-md text-white justify-between fixed z-40 gap-4`}
		>
			<div className="w-full flex justify-between">
				<svg
					width="190"
					height="37"
					viewBox="0 0 127 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M50.94 12.48C50.94 13.2933 50.7533 14.04 50.38 14.72C50.0067 15.3867 49.4333 15.9267 48.66 16.34C47.8867 16.7533 46.9267 16.96 45.78 16.96H43.66V22H40.24V7.96H45.78C46.9 7.96 47.8467 8.15333 48.62 8.54C49.3933 8.92667 49.9733 9.46 50.36 10.14C50.7467 10.82 50.94 11.6 50.94 12.48ZM45.52 14.24C46.1733 14.24 46.66 14.0867 46.98 13.78C47.3 13.4733 47.46 13.04 47.46 12.48C47.46 11.92 47.3 11.4867 46.98 11.18C46.66 10.8733 46.1733 10.72 45.52 10.72H43.66V14.24H45.52ZM58.0005 22.16C56.9071 22.16 55.9205 21.9267 55.0405 21.46C54.1738 20.9933 53.4871 20.3267 52.9805 19.46C52.4871 18.5933 52.2405 17.58 52.2405 16.42C52.2405 15.2733 52.4938 14.2667 53.0005 13.4C53.5071 12.52 54.2005 11.8467 55.0805 11.38C55.9605 10.9133 56.9471 10.68 58.0405 10.68C59.1338 10.68 60.1205 10.9133 61.0005 11.38C61.8805 11.8467 62.5738 12.52 63.0805 13.4C63.5871 14.2667 63.8405 15.2733 63.8405 16.42C63.8405 17.5667 63.5805 18.58 63.0605 19.46C62.5538 20.3267 61.8538 20.9933 60.9605 21.46C60.0805 21.9267 59.0938 22.16 58.0005 22.16ZM58.0005 19.2C58.6538 19.2 59.2071 18.96 59.6605 18.48C60.1271 18 60.3605 17.3133 60.3605 16.42C60.3605 15.5267 60.1338 14.84 59.6805 14.36C59.2405 13.88 58.6938 13.64 58.0405 13.64C57.3738 13.64 56.8205 13.88 56.3805 14.36C55.9405 14.8267 55.7205 15.5133 55.7205 16.42C55.7205 17.3133 55.9338 18 56.3605 18.48C56.8005 18.96 57.3471 19.2 58.0005 19.2ZM69.2748 12.7C69.6748 12.0867 70.1748 11.6067 70.7748 11.26C71.3748 10.9 72.0415 10.72 72.7748 10.72V14.34H71.8348C70.9815 14.34 70.3415 14.5267 69.9148 14.9C69.4882 15.26 69.2748 15.9 69.2748 16.82V22H65.8548V10.84H69.2748V12.7ZM80.8295 19.1V22H79.0895C77.8495 22 76.8829 21.7 76.1895 21.1C75.4962 20.4867 75.1495 19.4933 75.1495 18.12V13.68H73.7895V10.84H75.1495V8.12H78.5695V10.84H80.8095V13.68H78.5695V18.16C78.5695 18.4933 78.6495 18.7333 78.8095 18.88C78.9695 19.0267 79.2362 19.1 79.6095 19.1H80.8295ZM88.5345 13.68H86.6945V22H83.2745V13.68H82.0345V10.84H83.2745V10.52C83.2745 9.14667 83.6679 8.10667 84.4545 7.4C85.2412 6.68 86.3945 6.32 87.9145 6.32C88.1679 6.32 88.3545 6.32667 88.4745 6.34V9.24C87.8212 9.2 87.3612 9.29333 87.0945 9.52C86.8279 9.74667 86.6945 10.1533 86.6945 10.74V10.84H88.5345V13.68ZM95.4216 22.16C94.3282 22.16 93.3416 21.9267 92.4616 21.46C91.5949 20.9933 90.9082 20.3267 90.4016 19.46C89.9082 18.5933 89.6616 17.58 89.6616 16.42C89.6616 15.2733 89.9149 14.2667 90.4216 13.4C90.9282 12.52 91.6216 11.8467 92.5016 11.38C93.3816 10.9133 94.3682 10.68 95.4616 10.68C96.5549 10.68 97.5416 10.9133 98.4216 11.38C99.3016 11.8467 99.9949 12.52 100.502 13.4C101.008 14.2667 101.262 15.2733 101.262 16.42C101.262 17.5667 101.002 18.58 100.482 19.46C99.9749 20.3267 99.2749 20.9933 98.3816 21.46C97.5016 21.9267 96.5149 22.16 95.4216 22.16ZM95.4216 19.2C96.0749 19.2 96.6282 18.96 97.0816 18.48C97.5482 18 97.7816 17.3133 97.7816 16.42C97.7816 15.5267 97.5549 14.84 97.1016 14.36C96.6616 13.88 96.1149 13.64 95.4616 13.64C94.7949 13.64 94.2416 13.88 93.8016 14.36C93.3616 14.8267 93.1416 15.5133 93.1416 16.42C93.1416 17.3133 93.3549 18 93.7816 18.48C94.2216 18.96 94.7682 19.2 95.4216 19.2ZM98.0616 7.98L93.2416 10V7.64L98.0616 5.32V7.98ZM106.696 7.2V22H103.276V7.2H106.696ZM111.094 9.68C110.494 9.68 110.001 9.50667 109.614 9.16C109.241 8.8 109.054 8.36 109.054 7.84C109.054 7.30667 109.241 6.86667 109.614 6.52C110.001 6.16 110.494 5.98 111.094 5.98C111.681 5.98 112.161 6.16 112.534 6.52C112.921 6.86667 113.114 7.30667 113.114 7.84C113.114 8.36 112.921 8.8 112.534 9.16C112.161 9.50667 111.681 9.68 111.094 9.68ZM112.794 10.84V22H109.374V10.84H112.794ZM120.553 22.16C119.459 22.16 118.473 21.9267 117.593 21.46C116.726 20.9933 116.039 20.3267 115.533 19.46C115.039 18.5933 114.793 17.58 114.793 16.42C114.793 15.2733 115.046 14.2667 115.553 13.4C116.059 12.52 116.753 11.8467 117.633 11.38C118.513 10.9133 119.499 10.68 120.593 10.68C121.686 10.68 122.673 10.9133 123.553 11.38C124.433 11.8467 125.126 12.52 125.633 13.4C126.139 14.2667 126.393 15.2733 126.393 16.42C126.393 17.5667 126.133 18.58 125.613 19.46C125.106 20.3267 124.406 20.9933 123.513 21.46C122.633 21.9267 121.646 22.16 120.553 22.16ZM120.553 19.2C121.206 19.2 121.759 18.96 122.213 18.48C122.679 18 122.913 17.3133 122.913 16.42C122.913 15.5267 122.686 14.84 122.233 14.36C121.793 13.88 121.246 13.64 120.593 13.64C119.926 13.64 119.373 13.88 118.933 14.36C118.493 14.8267 118.273 15.5133 118.273 16.42C118.273 17.3133 118.486 18 118.913 18.48C119.353 18.96 119.899 19.2 120.553 19.2Z"
						fill="white"
					/>
					<path
						opacity="0.3"
						d="M14.9105 12.2696C13.8822 12.7559 13.1874 13.7842 13.0901 14.9376C13.0762 15.0349 13.0762 15.1322 13.0762 15.2294V16.0493C13.3264 16.0493 13.5765 16.1049 13.7988 16.2161L18.1622 18.2727L25.2631 14.9376C25.6105 14.7709 25.6105 14.2567 25.2631 14.09L18.1622 10.7549L18.0927 10.7827L14.9105 12.2696Z"
						fill="white"
					/>
					<path
						opacity="0.7"
						d="M13.8124 16.2022C13.5762 16.091 13.3399 16.0354 13.0898 16.0354V20.6489L18.1758 18.2588L14.2571 16.4106L13.8124 16.2022Z"
						fill="white"
					/>
					<path
						opacity="0.3"
						d="M14.9105 12.2696C13.8822 12.7559 13.1874 13.7842 13.0901 14.9376C13.0762 15.0349 13.0762 15.1322 13.0762 15.2294V16.0493C13.3264 16.0493 13.5765 16.1049 13.7988 16.2161L18.1622 18.2727L25.2631 14.9376C25.6105 14.7709 25.6105 14.2567 25.2631 14.09L18.1622 10.7549L18.0927 10.7827L14.9105 12.2696Z"
						fill="white"
					/>
					<path
						opacity="0.7"
						d="M13.8124 16.2022C13.5762 16.091 13.3399 16.0354 13.0898 16.0354V20.6489L18.1758 18.2588L14.2571 16.4106L13.8124 16.2022Z"
						fill="white"
					/>
					<path
						opacity="0.2"
						d="M7.99033 18.2588L0.889459 21.5939C0.542055 21.7606 0.542055 22.2748 0.889459 22.4415L12.3398 27.8332C12.7983 28.0555 13.3264 28.0555 13.7989 27.8332L25.2492 22.4415C25.5966 22.2748 25.5966 21.7606 25.2492 21.5939L18.1483 18.2588L13.0624 20.6489L7.99033 18.2588Z"
						fill="white"
					/>
					<path
						opacity="0.4"
						d="M25.263 6.54452L13.8126 1.16675C13.3541 0.944416 12.826 0.944416 12.3535 1.16675L0 6.9753L7.99022 10.7411L12.3535 8.68451C12.8121 8.46217 13.3402 8.46217 13.8126 8.68451L18.176 10.7411L25.2769 7.40607C25.6104 7.23932 25.6104 6.71127 25.263 6.54452Z"
						fill="white"
					/>
					<path
						opacity="0.8"
						d="M13.0762 16.0354C12.826 16.0354 12.5759 16.091 12.3536 16.2022L12.2285 16.2578L7.99023 18.2449L13.0762 20.635V16.0354Z"
						fill="white"
					/>
					<path
						opacity="0.6"
						d="M13.0761 16.0356V15.2157C13.0761 15.049 13.0622 14.8961 13.0345 14.7294C12.8955 13.6594 12.2285 12.7283 11.2558 12.2698L8.17087 10.8107L8.00412 10.7273L6.11426 11.6167L0 14.4931L7.99022 18.259L12.3535 16.2024C12.5898 16.1051 12.826 16.0356 13.0761 16.0356Z"
						fill="white"
					/>
					<path
						opacity="0.7"
						d="M13.0484 14.7433C13.0762 14.8961 13.0901 15.0629 13.0901 15.2296C13.0901 15.1324 13.0901 15.0351 13.1039 14.9378C13.2012 13.7705 13.896 12.7422 14.9243 12.2698L18.1204 10.769L18.1899 10.7412L13.8126 8.68458C13.3541 8.46224 12.826 8.46224 12.3536 8.68458L7.99023 10.7412L8.15699 10.8246L11.2558 12.2698C12.2285 12.7283 12.8955 13.6594 13.0484 14.7433Z"
						fill="white"
					/>
					<path
						opacity="0.2"
						d="M7.99033 18.2588L0.889459 21.5939C0.542055 21.7606 0.542055 22.2748 0.889459 22.4415L12.3398 27.8332C12.7983 28.0555 13.3264 28.0555 13.7989 27.8332L25.2492 22.4415C25.5966 22.2748 25.5966 21.7606 25.2492 21.5939L18.1483 18.2588L13.0624 20.6489L7.99033 18.2588Z"
						fill="white"
					/>
					<path
						opacity="0.4"
						d="M25.263 6.54452L13.8126 1.16675C13.3541 0.944416 12.826 0.944416 12.3535 1.16675L0 6.9753L7.99022 10.7411L12.3535 8.68451C12.8121 8.46217 13.3402 8.46217 13.8126 8.68451L18.176 10.7411L25.2769 7.40607C25.6104 7.23932 25.6104 6.71127 25.263 6.54452Z"
						fill="white"
					/>
					<path
						opacity="0.8"
						d="M13.0762 16.0354C12.826 16.0354 12.5759 16.091 12.3536 16.2022L12.2285 16.2578L7.99023 18.2449L13.0762 20.635V16.0354Z"
						fill="white"
					/>
					<path
						opacity="0.7"
						d="M13.0484 14.7433C13.0762 14.8961 13.0901 15.0629 13.0901 15.2296C13.0901 15.1324 13.0901 15.0351 13.1039 14.9378C13.2012 13.7705 13.896 12.7422 14.9243 12.2698L18.1204 10.769L18.1899 10.7412L13.8126 8.68458C13.3541 8.46224 12.826 8.46224 12.3536 8.68458L7.99023 10.7412L8.15699 10.8246L11.2558 12.2698C12.2285 12.7283 12.8955 13.6594 13.0484 14.7433Z"
						fill="white"
					/>
				</svg>

				<div className="md:flex hidden items-center relative gap-5 px-4 transition-all duration-200">
					<motion.div
						variants={tabVariants}
						initial="first"
						animate={active_tab}
						className="absolute  top-0 bottom-0 bg-white/20  h-full rounded-md z-0"
					/>
					<motion.a
						href="#about"
						className="font-semibold transition-all duration-300  hover:opacity-100"
					>
						Sobre mim
					</motion.a>
					<motion.a
						href="#experience"
						className="font-semibold transition-all duration-300  hover:opacity-100"
					>
						Experiencia
					</motion.a>
					<motion.a
						href="#projects"
						className="font-semibold transition-all duration-300  hover:opacity-100"
					>
						Projetos
					</motion.a>
					<motion.a
						href="#courses"
						className="font-semibold transition-all duration-200  hover:opacity-100"
					>
						Cursos
					</motion.a>
					<motion.a
						href="#contact"
						className="font-semibold transition-all duration-200  hover:opacity-100"
					>
						Contato
					</motion.a>
				</div>

				<motion.button
					onClick={() => setMobileNavOpen(!mobileNavOpen)}
					className="flex md:hidden"
				>
					<HiMenuAlt3 size={25} />
				</motion.button>
			</div>

			{mobileNavOpen && (
				<div className="flex flex-col md:hidden">
					<motion.a
						onClick={() => setMobileNavOpen(false)}
						href="#about"
						className="w-full hover:bg-white/10 rounded-md items-center justify-center p-2 flex transition-all duration-150 "
					>
						Sobre mim
					</motion.a>
					<motion.a
						href="#experience"
						onClick={() => setMobileNavOpen(false)}
						className="w-full hover:bg-white/10 rounded-md items-center justify-center p-2 flex transition-all duration-150 "
					>
						Experiencia
					</motion.a>
					<motion.a
						href="#projects"
						onClick={() => setMobileNavOpen(false)}
						className="w-full hover:bg-white/10 rounded-md items-center justify-center p-2 flex transition-all duration-150 "
					>
						Projetos
					</motion.a>
					<motion.a
						href="#courses"
						onClick={() => setMobileNavOpen(false)}
						className="w-full hover:bg-white/10 rounded-md items-center justify-center p-2 flex transition-all duration-150 "
					>
						Cursos
					</motion.a>
					<motion.a
						href="#contact"
						onClick={() => setMobileNavOpen(false)}
						className="w-full hover:bg-white/10 rounded-md items-center justify-center p-2 flex transition-all duration-150 "
					>
						Contato
					</motion.a>
				</div>
			)}
		</motion.div>
	);
}
