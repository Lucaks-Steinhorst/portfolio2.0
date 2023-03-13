import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Modal from './Modal';

import { useWorkspacesQuery } from '@/graphql/generated';
export default function Workspaces() {
	const [hover, setHover] = useState(false);
	const ref = useRef(null);
	const isInView = useInView(ref);
	const [isModalOpen, setIsModalOpen] = useState(false);
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

	const { data } = useWorkspacesQuery();

	return (
		<motion.div className="flex flex-col px-4 xl:px-0 md:flex-row w-full max-w-7xl items-start justify-center mt-5 text-white gap-32">
			<motion.div className="flex lg:sticky top-36 md:px-3 w-full lg:w-auto overflow-hidden">
				<motion.div className="flex flex-col gap-3">
					<span className="font-semibold text-lg font-epilogue max-w-[200px]">
						Lugares por onde ja passei.
					</span>
					<span className="max-w-md text-2xl font-epilogue font-semibold">
						Aqui estão alguns lugares que já trabalhei, e alguns projetos que realizei
						ao longo da minha carreira.
					</span>

					<a href="#projects" className="w-fit px-10 py-2 bg-blue-600">
						Veja meus projetos
					</a>
				</motion.div>
			</motion.div>
			<motion.div className="flex flex-col gap-10 ml-auto ">
				{data?.workspaces.map((workspace, index) => {
					return (
						<>
							{data.workspaces.length - 1 !== index ? (
								<motion.div
									key={workspace.company}
									className={`max-w-2xl pb-7 flex flex-col  gap-3 border-b-2 border-white/20 `}
									onHoverStart={() => setHover(true)}
									onHoverEnd={() => setHover(false)}
								>
									<span className="text-md text-slate-100 flex gap-2 items-center">
										{workspace.company}{' '}
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
									<h1 className="text-2xl font-semibold">{workspace.role}</h1>
									<span
										className="font-epilogue text-white/60"
										dangerouslySetInnerHTML={{ __html: workspace.description?.html! }}
									/>

									{workspace.companyProjects.length > 0 && (
										<Modal companyProjects={workspace.companyProjects}>
											<button className="w-fit">Mais informações</button>
										</Modal>
									)}
								</motion.div>
							) : (
								<motion.div
									ref={ref}
									key={workspace.company}
									className={`max-w-3xl flex flex-col group relative  gap-3 px-2 py-4`}
								>
									<svg className="absolute left-0 top-0 z-0 h-full w-full">
										<rect
											x={1}
											y={1}
											fill="none"
											strokeWidth={2}
											rx={8}
											ry={8}
											className="animated-corner-card"
										/>
									</svg>
									<span className="text-md  text-slate-100 flex gap-2 items-center catalog-item-featured-label w-fit absolute left-0 top-0 rounded-tl-lg px-2 rounded-br-md">
										{workspace.company}
									</span>
									<h1 className="text-2xl font-semibold mt-7 z-10">{workspace.role}</h1>
									<span
										className="font-epilogue text-white/60 z-10"
										dangerouslySetInnerHTML={{ __html: workspace.description?.html! }}
									/>

									{workspace.companyProjects.length > 0 && (
										<Modal companyProjects={workspace.companyProjects}>
											<button className="w-fit">Mais informações</button>
										</Modal>
									)}
								</motion.div>
							)}
						</>
					);
				})}
				{/* <motion.div
					className="max-w-2xl pb-7 flex flex-col border-b-2 border-white/20 gap-3"
					onHoverStart={() => setHover(true)}
					onHoverEnd={() => setHover(false)}
				>
					<span className="text-md text-slate-100 flex gap-2 items-center">
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
				</motion.div> */}
				{/* <motion.div
					className="max-w-2xl pb-7 flex flex-col border-b-2 border-white/20 gap-3"
					onHoverStart={() => setHover(true)}
					onHoverEnd={() => setHover(false)}
				>
					<span className="text-md text-slate-100 flex gap-2 items-center">
						GetHash{' '}
						<motion.small
							className="text-xs"
							variants={container}
							initial="closed"
							animate={hover ? 'open' : 'closed'}
						>
							{' '}
							- setembro 2022
						</motion.small>
					</span>
					<h1 className="text-2xl font-semibold">Front-end developer React</h1>
					<span className="font-epilogue text-white/60">
						Participation in the development and maintenance of responsive
						applications with Next Js, following the layouts proposed in Figma,
						applying good code practices.
					</span>
					<Modal>
						<button className="w-fit">Mais informações</button>
					</Modal>
				</motion.div> */}
				{/* <motion.div
					ref={ref}
					className={`max-w-3xl flex flex-col group relative  gap-3 p-2`}
					onHoverStart={() => setHover(true)}
					onHoverEnd={() => setHover(false)}
				>
					<svg className="absolute left-0 top-0 z-0 h-full w-full">
						<rect
							x={1}
							y={1}
							fill="none"
							strokeWidth={2}
							rx={8}
							ry={8}
							className="animated-corner-card"
						/>
					</svg>
					<span className="text-md  text-slate-100 flex gap-2 items-center catalog-item-featured-label w-fit absolute left-0 top-0 rounded-tl-lg px-2 rounded-br-md">
						Lightbase
					</span>
					<h1 className="text-2xl font-semibold mt-10">
						Front-end developer ReactJs
					</h1>
					<span className="font-epilogue text-white/60">
						Participation in the development and maintenance of responsive
						applications with ReactJs
					</span>
					<ProjectModal>
						<button className="w-fit z-10">Mais informações</button>
					</ProjectModal>
				</motion.div> */}
			</motion.div>
		</motion.div>
	);
}
