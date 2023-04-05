/* eslint-disable @next/next/no-img-element */
import { Widget } from '@typeform/embed-react';
import Header from '@/components/Header';
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
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaGithub, FaReact } from 'react-icons/fa';
import { GrNode, GrMysql } from 'react-icons/gr';
import { CgFramer } from 'react-icons/cg';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineLink } from 'react-icons/ai';

import Me from '@/components/Me';
import Workspaces from '@/components/Workspaces';

import Courses from '@/components/Courses';

import { useLocaleContext } from '@/Context/LocaleContext';
import AnimatedTextCharacter from '@/components/AnimatedTextCharacter';
import { IoCloseCircleOutline, IoLogoDocker } from 'react-icons/io5';

interface ParallaxProps {
	baseVelocity: number;
}

interface OvelayProps {
	close: () => void;
	children: ReactNode;
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

const sliderItems2 = [
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
		icon: <GrMysql size={30} />,
		title: 'MySQL',
	},
	{
		icon: <IoLogoDocker size={30} />,
		title: 'Docker',
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
		icon: <GrMysql size={30} />,
		title: 'MySQL',
	},
	{
		icon: <IoLogoDocker size={30} />,
		title: 'Docker',
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
		icon: <GrMysql size={30} />,
		title: 'MySQL',
	},
	{
		icon: <IoLogoDocker size={30} />,
		title: 'Docker',
	},
];

const headerItems = [
	{
		title: 'Apaixonado em programar sistemas',
		img: 'slider_1.jpeg',
	},
	{
		title: 'Amante de filmes de terror',
		img: 'slider_2.jpeg',
	},
	{
		title: 'Viciado em criar interfaces interativas',
		img: 'slider_3.jpeg',
	},
];

const Overlay = ({ children, close }: OvelayProps) => {
	const variants = {
		open: { backgroundColor: 'rgba(0,0,0,0.6)' },
		closed: { backgroundColor: 'rgba(0,0,0,0)' },
	};

	return (
		<motion.div
			className="fixed top-0 left-0 w-full h-full flex z-50 items-center justify-center"
			onClick={close}
			variants={variants}
			initial={'closed'}
			animate={'open'}
			exit={'closed'}
			key="overlay"
		>
			{children}
		</motion.div>
	);
};

const Modal = ({ data, close }: any) => {
	const modalVariants = {
		open: {
			opacity: 1,
			transition: { staggerChildren: 0.5, delayChildren: 0.2 },
		},
		closed: { opacity: 0 },
	};

	const imageVariants = {
		open: { opacity: 1, y: '0vh' },
		closed: { opacity: 0, y: '-10vh' },
	};

	const modalInfoVariants = {
		open: { opacity: 1, transition: { staggerChildren: 0.2 } },
		closed: { opacity: 0 },
	};

	const modalRowVariants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: '10%' },
	};

	return (
		<motion.div
			className="modal flex relative bg-white dark:bg-[#111010]"
			variants={modalVariants}
			onClick={(e) => e.stopPropagation()}
		>
			{data.videoDemo ? (
				<motion.video
					className="modal__image"
					autoPlay
					controls={false}
					preload="metadata"
					poster={data.thumbnail?.url}
					src={data.videoDemo.url}
					variants={imageVariants}
				/>
			) : (
				<motion.img
					className="modal__image"
					src={data.thumbnail?.url}
					variants={imageVariants}
				/>
			)}

			<motion.div
				className="bg-white dark:bg-[#111010] text-black dark:text-white flex w-full h-full p-5 flex-col items-start"
				variants={modalInfoVariants}
			>
				<motion.div
					className="flex items-center text-left my-5"
					variants={modalRowVariants}
				>
					<span className="text-4xl font-semibold font-epilogue">{data.name}</span>
				</motion.div>

				<motion.div
					className="flex items-center text-left my-5 gap-2"
					variants={modalRowVariants}
				>
					<a
						target={data.github ? '_blank' : ''}
						href={data.github ? data.github : ''}
						className="flex items-center mr-3 group cursor-pointer "
					>
						<span className="w-8 h-8 bg-black/5 dark:bg-white/10 group-hover:bg-black/10 dark:group-hover:bg-white/20 flex justify-center items-center mr-1 rounded-full transition-all duration-200">
							<FaGithub size={22} />
						</span>
						<span className="whitespace-nowrap font-semibold font-epilogue mt-1 border-b-2 border-b-transparent group-hover:border-b-black/20 dark:group-hover:border-b-white/20 transition-all duration-200">
							Github
						</span>
					</a>
					<a
						target={data.demoUrl ? '_blank' : '_self'}
						href={data.demoUrl ? data.demoUrl : '#'}
						className="flex items-center mr-3 group cursor-pointer"
					>
						<span className="w-8 h-8 bg-black/5 dark:bg-white/10 group-hover:text-blue-500 group-hover:bg-black/10 dark:group-hover:bg-white/20 flex justify-center items-center mr-1 rounded-full transition-all duration-200">
							<AiOutlineLink size={22} />
						</span>
						<span className="whitespace-nowrap text-black dark:text-white group-hover:text-blue-500 font-semibold mt-1 font-epilogue border-b-2 border-b-transparent group-hover:border-b-black/20 dark:group-hover:border-b-white/20 transition-all duration-200">
							Demo
						</span>
					</a>
				</motion.div>
				<motion.div className="" variants={modalRowVariants}>
					<p className="overflow-y-scroll scrollbar-hide flex items-start justify-start text-lg  text-black/70 dark:text-white/80 font-poppins leading-8">
						{data.description}
					</p>
				</motion.div>
				<motion.button
					className="modal__close-wrapper"
					whileHover={{ scale: 1.2 }}
					onClick={close}
				>
					<IoCloseCircleOutline className="modal__close-icon" />
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

export default function Home() {
	const { personal_Projects } = useLocaleContext();
	const [stepProgress, setStepProgress] = useState('first');
	const cta = useRef(null);
	const about_me = useRef(null);
	const experience = useRef(null);
	const projects = useRef(null);
	const courses = useRef(null);
	const contact = useRef(null);
	const CtaisInView = useInView(cta);
	const aboutMeisInView = useInView(about_me);
	const ExperienceisInView = useInView(experience);
	const ProjectsInView = useInView(projects);
	const CoursesInView = useInView(courses);
	const ContactInView = useInView(contact);
	const [open, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
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
					{sliderItems2.map((item, index) => {
						return (
							<div
								key={index}
								className="flex items-center w-[139px] h-[28px] justify-start gap-1 md:gap-2 text-xl md:text-2xl font-poppins font-semibold normal-case text-white opacity-50 tracking-wide"
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
		if (CtaisInView) {
			setStepProgress('first');
		}
		if (aboutMeisInView) {
			setStepProgress('first');
		}
		if (ExperienceisInView) {
			setStepProgress('second');
		}
		if (ProjectsInView) {
			setStepProgress('third');
		}
		if (CoursesInView) {
			setStepProgress('fourth');
		}
		if (ContactInView) {
			setStepProgress('fifth');
		}
	}, [
		ExperienceisInView,
		CtaisInView,
		aboutMeisInView,
		ProjectsInView,
		CoursesInView,
		ContactInView,
	]);

	// useLaoutEffect callback return type is "() => void" type
	useLayoutEffect((): (() => void) => {
		if (open) {
			// Get original body overflow
			const originalStyle: string = window.getComputedStyle(
				document.body
			).overflow;
			// Prevent scrolling on mount
			document.body.style.overflow = 'hidden';
			// Re-enable scrolling when component unmounts
			return () => (document.body.style.overflow = originalStyle);
		} else {
			return () => {};
		}
	}, [open]); // Empty array ensures effect is only run on mount and unmount

	function showModal(project: any) {
		setSelectedProject(project);
		openModal();
	}

	return (
		<div className="w-full flex flex-col items-center">
			<div
				className="w-full h-screen flex flex-col items-center bg-[url('/grid.svg')] bg-cover bg-no-repeat bg-center text-white px-5 md:px-0 relative"
				id="about"
			>
				<Header active_tab={stepProgress} />

				<div
					ref={cta}
					className="w-full  bg-gradient-to-b from-black/40 via-black/90 to-black h-60 absolute bottom-0"
				/>
				<div className="w-full px-2 md:px-5 xl:px-0 max-w-7xl mt-3 xl:mt-32">
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
				<div className="w-full md:max-w-[950px] mt-20 lg:mt-52 relative">
					<div className="absolute bg-gradient-to-r from-black to-transparent via-black/40 z-10 h-full w-20 md:w-32 left-0 top-0" />
					<ParallaxText baseVelocity={-3} />
					<div className="absolute bg-gradient-to-l from-black to-transparent via-black/40 z-10 h-full w-20 md:w-32 right-0 top-0" />
				</div>
			</div>
			<div className="w-full bg-white flex justify-center" id="me" ref={about_me}>
				<Me />
			</div>
			<div
				className="w-full flex  flex-col items-center justify-center bg-black py-20 md:py-40"
				id="experience"
				ref={experience}
			>
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

				<div
					className="w-full flex flex-col md:grid md:grid-cols-3 gap-24 max-w-7xl px-5"
					ref={projects}
					id="projects"
				>
					{personal_Projects?.map((item: any, index: number) => {
						return (
							<motion.div
								className="w-full  md:max-w-[370px] cursor-pointer"
								key={index}
								onClick={() => showModal(personal_Projects[index])}
							>
								<div className="flex flex-col ">
									<div className="">
										<div className="relative h-62 w-full mb-3">
											<img
												src={item.thumbnail?.url}
												alt="Just a flower"
												className=" w-full object-fill rounded-2xl"
											/>
										</div>
										<div className="flex-auto justify-evenly">
											<div className="flex flex-wrap ">
												<div className="w-full flex-none text-sm flex items-center text-gray-600">
													<span className="mr-2 text-gray-400">React</span>
												</div>
												<div className="flex items-center w-full justify-between min-w-0 ">
													<h2 className="text-lg mr-auto cursor-pointer text-gray-200 truncate ">
														{item.name}
													</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
				<AnimatePresence>
					{open && (
						<Overlay close={closeModal}>
							<Modal data={selectedProject} close={closeModal} />
						</Overlay>
					)}
				</AnimatePresence>
			</div>

			<div
				className="w-full flex flex-col  items-center justify-center bg-white py-20 md:py-40"
				ref={courses}
				id="courses"
			>
				<Courses />
			</div>
			<div
				className="w-full md:pb-5  flex flex-col  items-center justify-center bg-white pb-32"
				ref={contact}
				id="contact"
			>
				<Widget id="v7a3IcmF" className="w-full max-w-7xl h-[500px]" />
			</div>
		</div>
	);
}
