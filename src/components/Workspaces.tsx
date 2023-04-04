import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Modal from './Modal';

import { useWorkspacesQuery } from '@/graphql/generated';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
export default function Workspaces() {
	const ref = useRef(null);

	const { data } = useWorkspacesQuery();

	return (
		<motion.div className="flex flex-col px-4 xl:px-0 md:flex-row w-full max-w-7xl items-start justify-center mt-5 text-white gap-32">
			<motion.div className="flex lg:sticky top-36 md:px-3 w-full lg:w-auto overflow-hidden">
				<motion.div className="flex flex-col gap-3">
					<span className="font-semibold text-lg font-epilogue max-w-[200px]">
						Lugares por onde já passei.
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
								>
									<span className="text-md text-slate-100 flex gap-2 items-center">
										{workspace.company}{' '}
										<motion.small className="text-xs">
											{' '}
											-{' '}
											{formatDistance(
												new Date(workspace.endIn),
												new Date(workspace.startedIn),
												{ locale: ptBR }
											)}
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
			</motion.div>
		</motion.div>
	);
}
