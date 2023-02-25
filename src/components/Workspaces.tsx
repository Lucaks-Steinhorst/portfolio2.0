import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
export default function Workspaces() {
	const [hover, setHover] = useState(false);
	const container = {
		open: {
			opacity: 1,
			y: 0,
			transition: { type: 'spring', stiffness: 700, damping: 90 },
		},
		closed: {
			opacity: 0,
			y: 5,
			transition: { duration: 0.3 },
		},
	};
	return (
		<motion.div className="flex flex-col px-10 xl:px-0 md:flex-row w-full max-w-7xl items-start justify-center mt-5 text-white gap-32">
			<motion.div className="flex lg:sticky top-36 md:px-3 w-full lg:w-auto overflow-hidden">
				<motion.div className="flex flex-col gap-3">
					<span className="font-semibold text-lg font-epilogue max-w-[200px]">
						Lugares por onde ja passei.
					</span>
					<span className="max-w-md text-2xl font-epilogue font-semibold">
						Aqui estão alguns lugares que já trabalhei, e alguns projetos que realizei
						ao longo da minha carreira.
					</span>
					<button className="w-fit px-10 py-2 bg-blue-600">
						Veja meus projetos
					</button>
				</motion.div>
			</motion.div>
			<motion.div className="flex flex-col gap-10 ml-auto">
				<motion.div
					className="max-w-2xl pb-7 flex flex-col border-b-2 border-white/20 gap-3"
					onHoverStart={() => setHover(true)}
					onHoverEnd={() => setHover(false)}
				>
					<span className="text-lg text-slate-100 flex gap-2 items-center">
						Interativa digital{' '}
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
					<h1 className="text-2xl font-semibold">Full stack developer</h1>
					<span className="font-epilogue text-white/60">
						At Interativa Digital I participated in the development and maintenance of
						front-end PWA applications using React js, I also had active participation
						in the development and maintenance of API rest in node.
					</span>
					<Modal>
						<button className="w-fit">Mais informações</button>
					</Modal>
				</motion.div>
				<motion.div className="max-w-2xl pb-7 flex flex-col border-b-2 border-white/20 gap-3">
					<span className="text-lg text-slate-100 flex gap-2 items-center">
						GetHash <motion.small className="text-xs"> - setembro 2022</motion.small>
					</span>

					<h1 className="text-2xl font-semibold">Front-end developer React</h1>
					<span className="">
						Participation in the development and maintenance of responsive
						applications with Next Js, following the layouts proposed in Figma,
						applying good code practices.
					</span>
					<button className="w-fit">Mais informações</button>
				</motion.div>
				<motion.div className="max-w-2xl pb-7 flex flex-col  gap-3">
					<span className="text-lg text-slate-100 flex gap-2 items-center">
						Lightbase{' '}
						<motion.small className="text-xs"> - novembro 2022</motion.small>
					</span>
					<span className="text-lg text-slate-100"></span>
					<h1 className="text-2xl font-semibold">Front-end developer ReactJs</h1>
					<span className="">
						Participation in the development and maintenance of responsive
						applications with ReactJs
					</span>
					<button className="w-fit">Mais informações</button>
				</motion.div>
			</motion.div>
			{/* <div>
				<svg className="absolute left-0 top-0 z-0 h-full w-full">
					<rect x="1" y="1" fill="none" stroke-width="2" rx="8" ry="8"></rect>
				</svg>
			</div> */}
		</motion.div>
	);
}
