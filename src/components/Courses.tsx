import React, { useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import Modal from './Modal';
import { useDetectScroll } from '@smakss/react-scroll-direction';
import ProjectModal from './ProjectModal';

export default function Courses() {
	const [hover, setHover] = useState(false);

	const [isModalOpen, setIsModalOpen] = useState(false);

	console.log(isModalOpen);
	const container = {
		open: {
			opacity: 1,
			x: 0,
			transition: { stiffness: 1000, duration: 0.3 },
		},
		closed: {
			opacity: 0,
			x: -50,
			transition: { duration: 0.3 },
		},
	};

	const courses = [
		{
			title: 'Masterclass',
			schoolName: 'Rocketseat',
			description:
				'No masterclass program construimos um clone do Twitter do zero utilizando Next js, Typescript, entre outras tecnologias.',
			completedIn: 'dezembro 2021',
			isHighlighted: true,
		},
		{
			title: 'CEFR B2 Upper intermediate',
			schoolName: 'Lsi education',
			description: 'Curso de inglês B2 realizado em Toronto.',
			completedIn: 'dezembro 2021',
			isHighlighted: false,
		},
		{
			title: 'Full stack developer',
			schoolName: 'Interativa digital',
			description:
				'At Interativa Digital I participated in the development and maintenance of front-end PWA applications using React js, I also had active participation in the development and maintenance of API rest in node.',
			completedIn: 'dezembro 2021',
			isHighlighted: false,
		},
	];

	return (
		<motion.div className="flex flex-col px-10 xl:px-0 md:flex-row w-full max-w-7xl items-start justify-center mt-5  gap-32">
			<motion.div className="flex flex-col gap-10 ml-auto">
				{courses.map((course, index) => {
					return (
						<motion.div
							key={course.title}
							className={`max-w-2xl pb-7 flex flex-col relative ${
								index !== courses.length - 1 && 'border-b-2 border-black/20'
							}  gap-3`}
							onHoverStart={() => setHover(true)}
							onHoverEnd={() => setHover(false)}
						>
							{course.isHighlighted && (
								<motion.img
									src="/star-circle.svg"
									alt="avatar"
									className="w-full max-w-[24px] absolute right-4"
								/>
							)}

							<span className="text-lg text-slate-900 flex gap-2 items-center">
								{course.schoolName}{' '}
								<motion.small
									className="text-xs"
									variants={container}
									initial="closed"
									animate={hover ? 'open' : 'closed'}
								>
									{' '}
									- dezembro 2021
								</motion.small>
							</span>
							<h1 className="text-2xl font-semibold">{course.title}</h1>
							<span className="font-epilogue text-black/60">{course.description}</span>
							<Modal>
								<button className="w-fit">Ver certificado</button>
							</Modal>
						</motion.div>
					);
				})}
			</motion.div>
			<motion.div className="flex lg:sticky top-36 md:px-3 w-full lg:w-auto overflow-hidden">
				<motion.div className="flex flex-col gap-3">
					<span className="font-semibold text-lg font-epilogue max-w-[200px]">
						Meus cursos.
					</span>
					<span className="max-w-md text-2xl font-epilogue font-semibold">
						Aqui estão alguns cursos que já realizei e meus certificados.
					</span>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}