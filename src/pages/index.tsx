/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import SwiperCore from 'swiper';
import Slider from 'react-slick';

import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	AnimatePresence,
	useAnimationFrame,
	useInView,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { GrNode, GrMysql } from 'react-icons/gr';
import { CgFramer } from 'react-icons/cg';
import { TbBrandNextjs } from 'react-icons/tb';
import { RxStitchesLogo } from 'react-icons/rx';
import Me from '@/components/Me';
import Workspaces from '@/components/Workspaces';

import Courses from '@/components/Courses';
import { ProjectModal } from '@/components/ProjectModal';

import { useLocaleContext } from '@/Context/LocaleContext';
import AnimatedTextCharacter from '@/components/AnimatedTextCharacter';

interface ParallaxProps {
	baseVelocity: number;
}

const sliderItems = [
	{
		icon: <SiTailwindcss size={30} />,
		title: 'Tailwind',
	},
	{
		icon: <FaReact size={30} />,
		title: 'React',
	},
	{
		icon: <GrNode size={30} />,
		title: 'Node',
	},
	{
		icon: <CgFramer size={30} />,
		title: 'Framer',
	},

	{
		icon: <TbBrandNextjs size={30} />,
		title: 'Next',
	},
	{
		icon: <SiTailwindcss size={30} />,
		title: 'Tailwind',
	},
	{
		icon: <FaReact size={30} />,
		title: 'React',
	},
	{
		icon: <GrNode size={30} />,
		title: 'Node',
	},
	{
		icon: <CgFramer size={30} />,
		title: 'Framer',
	},

	{
		icon: <TbBrandNextjs size={30} />,
		title: 'Next',
	},
	{
		icon: <SiTailwindcss size={30} />,
		title: 'Tailwind',
	},
	{
		icon: <FaReact size={30} />,
		title: 'React',
	},
	{
		icon: <GrNode size={30} />,
		title: 'Node',
	},
	{
		icon: <CgFramer size={30} />,
		title: 'Framer',
	},

	{
		icon: <TbBrandNextjs size={30} />,
		title: 'Next',
	},
];

const headerItems = [
	{
		title: 'Apaixonado em programar sistemas',
		img: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
	},
	{
		title: 'Amante de filmes de terror',
		img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
	},
	{
		title: 'Viciado em criar interfaces interativas',
		img: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8',
	},
];

export default function Home() {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const { personal_Projects } = useLocaleContext();
	const isInView = useInView(ref);
	const isInVie2 = useInView(ref2);

	const icon = {
		hidden: {
			pathLength: 0,
			fill: 'rgba(255, 255, 255, 0)',
		},
		visible: {
			pathLength: 1,
			fill: 'rgba(255, 255, 255, 1)',
		},
	};

	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 800,
		draggable: false,
		pauseOnHover: false,
		swap: false,
		arrows: false,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	function ParallaxText({ baseVelocity = 100 }: ParallaxProps) {
		const baseX = useMotionValue(0);
		const { scrollY } = useScroll();
		const scrollVelocity = useVelocity(scrollY);
		const smoothVelocity = useSpring(scrollVelocity, {
			damping: 50,
			stiffness: 400,
		});
		const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
			clamp: false,
		});

		/**
		 * This is a magic wrapping for the length of the text - you
		 * have to replace for wrapping that works for you or dynamically
		 * calculate
		 */
		const x = useTransform(baseX, (v) => `${wrap(-1, -35, v)}%`);

		const directionFactor = useRef<number>(1);
		useAnimationFrame((t, delta) => {
			let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

			/**
			 * This is what changes the direction of the scroll once we
			 * switch scrolling directions.
			 */
			if (velocityFactor.get() < 0) {
				directionFactor.current = -1;
			} else if (velocityFactor.get() > 0) {
				directionFactor.current = 1;
			}

			moveBy += directionFactor.current * moveBy * velocityFactor.get();

			baseX.set(baseX.get() + moveBy);
		});

		/**
		 * The number of times to repeat the child text should be dynamically calculated
		 * based on the size of the text and viewport. Likewise, the x motion value is
		 * currently wrapped between -20 and -45% - this 25% is derived from the fact
		 * we have four children (100% / 4). This would also want deriving from the
		 * dynamically generated number of children.
		 *
		 * para 7 items usar -20, -34
		 * pode ser q funcione -14, -45,
		 */
		return (
			<div className="parallax">
				<motion.div className="scroller flex gap-12" style={{ x }}>
					{sliderItems.map((item, index) => {
						return (
							<div
								key={index}
								className="flex items-center w-[139px] h-[28px] justify-start gap-2 text-2xl font-poppins font-semibold normal-case text-white opacity-40 tracking-wide"
							>
								{item.icon} {item.title}
							</div>
						);
					})}
				</motion.div>
			</div>
		);
	}
	useEffect(() => {
		if (personal_Projects) {
			console.log(personal_Projects[0]);
		}
	}, [personal_Projects]);
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-full h-screen flex flex-col items-center bg-[url('/grid.svg')] bg-cover bg-no-repeat bg-center text-white px-5 md:px-0 relative">
				<Header teste={isInView} />
				{/* <div
					className="mt-32 lg:mt-40 flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between w-full max-w-7xl"
					ref={ref}
				>
					<div className="w-full flex flex-col max-w-xl mb-10 lg:mb-0">
						<span className="px-4 w-full lg:w-fit py-2 rounded-lg bg-white/10 before:content-[url('/bolt-small.svg')]  before:text-white/30 before:mt-1 flex gap-2 items-center">
							<span className="w-[1px] h-7 bg-white/20 mr-2 ml-1" />
							Fillipe Augusto - desenvolvedor Front end
						</span>
						<h1 className="text-4xl lg:text-6xl font-bold lg:leading-[4.5rem] mt-5">
							Apaixonado em games de primeira pessoa
						</h1>
					</div>
					<img
						src="https://media.graphassets.com/ueoLb23uRDeGRh0PV3Yw"
						alt=""
						className="w-full max-w-[650px] rounded"
					/>
				</div> */}
				<div className="w-full  bg-gradient-to-b from-black/40 via-black/90 to-black h-60 absolute bottom-0" />
				<div className="w-full max-w-7xl mt-3 md:mt-32">
					<Slider {...settings} className="w-full">
						{headerItems.map((item) => {
							return (
								<div className="w-full" key={item.title}>
									<div className="mt-32 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between w-full max-w-7xl">
										<div className="w-full flex flex-col max-w-xl mb-10 lg:mb-0">
											<span className="px-4 w-fit py-2 text-sm md:text-base rounded-lg bg-[#1c1c1c] before:content-[url('/bolt-small.svg')]  before:text-white/30 before:mt-1 flex gap-2 items-center">
												<span className="w-[1px] h-7 bg-white/20 mr-2 ml-1 " />
												<AnimatedTextCharacter
													text={'Fillipe Augusto - desenvolvedor Front end'}
												/>
											</span>
											<h1 className="text-4xl lg:text-6xl font-bold lg:leading-[4.5rem] mt-5">
												{item.title}
											</h1>

											<a
												href="#me"
												className="px-8 py-2 bg-blue-500 w-fit mt-10 text-lg font-epilogue font-semibold"
											>
												Sobre mim
											</a>
										</div>
										<img
											src={item.img}
											alt=""
											className="w-full max-w-[650px] rounded-lg"
										/>
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
				<div className="w-full max-w-[800px] mt-20 lg:mt-52">
					<ParallaxText baseVelocity={-5} />
				</div>
			</div>
			<div className="w-full bg-white flex justify-center" id="me">
				<Me />
			</div>
			<div className="w-full flex  flex-col items-center justify-center bg-black py-20 md:py-40">
				<Workspaces />
			</div>
			<div
				className="w-full flex flex-col items-center justify-center gap-32 pb-40 overflow-x-hidden"
				id="projects"
			>
				<motion.span className="text-5xl text-white font-epilogue font-bold ">
					Meus <motion.span className="text-blue-500">Projetos</motion.span>{' '}
					<SiTypescript size={24} color="#000" />
				</motion.span>

				<div className="w-full flex flex-col md:grid md:grid-cols-3 gap-24 max-w-7xl px-5">
					{personal_Projects?.map((item: any, index: number) => {
						return (
							<ProjectModal key={index} project={personal_Projects[index]}>
								<motion.div className="w-full  md:max-w-[370px] cursor-pointer">
									<div className="flex flex-col ">
										<div className="">
											<div className="relative h-62 w-full mb-3">
												<div className="absolute flex flex-col top-0 right-0 p-3">
													<button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-6 w-6"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
															/>
														</svg>
													</button>
												</div>
												<img
													src={item.thumbnail?.url}
													alt="Just a flower"
													className=" w-full   object-fill  rounded-2xl"
												/>
											</div>
											<div className="flex-auto justify-evenly">
												<div className="flex flex-wrap ">
													<div className="w-full flex-none text-sm flex items-center text-gray-600">
														{/* <svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 text-red-500 mr-1"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg> */}

														<span className="mr-2 text-gray-400">React</span>
													</div>
													<div className="flex items-center w-full justify-between min-w-0 ">
														<h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
															{item.name}
														</h2>
													</div>
												</div>
												<div className="text-lg text-white font-semibold mt-1 mb-3">
													2 meses
												</div>
											</div>
										</div>
									</div>
								</motion.div>
							</ProjectModal>
						);
					})}
				</div>
			</div>

			<div className="w-full flex flex-col  items-center justify-center bg-white py-20 md:py-40">
				<Courses />
			</div>
		</div>
	);
}
