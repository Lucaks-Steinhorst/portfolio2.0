import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useCoursesBrQuery } from '@/graphql/generated';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function Courses() {
	const [hover, setHover] = useState(false);

	const { data: pt_data } = useCoursesBrQuery();

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

	return (
		<motion.div className="flex flex-col-reverse px-5 xl:px-0 md:flex-row w-full max-w-7xl items-start justify-center mt-5  gap-32">
			<motion.div className="flex flex-col gap-10 ml-auto">
				{pt_data?.courses.map((course, index) => {
					console.log(course);
					return (
						<motion.div
							key={course.id}
							className={`max-w-2xl pb-7 flex flex-col relative ${
								index !== pt_data.courses.length - 1 && 'border-b-2 border-black/20'
							}  gap-3`}
						>
							{course.isHighlighted && (
								<motion.img
									src="/star-circle.svg"
									alt="avatar"
									className="w-full max-w-[24px] absolute right-4"
								/>
							)}

							<span className="text-lg text-slate-900 flex gap-2 items-center">
								{course.school}{' '}
								<motion.small className="text-sm " variants={container}>
									{' '}
									-{' '}
									{format(new Date(course.completedIn), 'MMMM yyyy', {
										locale: ptBR,
									})}
								</motion.small>
							</span>
							<h1 className="text-2xl font-semibold">{course.name}</h1>
							<span className="font-epilogue text-black/60">{course.description}</span>

							<a
								href={course.certificateLink ? course.certificateLink : '#'}
								target="_blank"
								className="w-fit"
							>
								Ver certificado
							</a>
						</motion.div>
					);
				})}
			</motion.div>
			<motion.div className="flex lg:sticky top-20 md:px-3 w-full lg:w-auto overflow-hidden">
				<motion.div className="flex flex-col gap-3">
					<span className="font-semibold text-lg font-epilogue max-w-[200px]">
						Meus cursos.
					</span>
					<span className="max-w-md text-2xl font-epilogue font-semibold">
						Aqui estão alguns cursos que já realizei e meus certificados que adiquiri
						ao longo da minha carreira.
					</span>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
