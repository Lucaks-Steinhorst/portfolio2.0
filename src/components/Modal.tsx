import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '@stitches/react';

interface ModalProps {
	children: ReactNode;
	companyProjects: any;
}

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
	'100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const AlertDialogOverlay = styled(AlertDialog.Overlay, {
	position: 'fixed',
	inset: 0,
	zIndex: 50,
	overflow: 'auto',
	animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const AlertDialogContent = styled(AlertDialog.Content, {
	backgroundColor: 'white',
	borderRadius: 6,
	zIndex: 100,
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	overflowY: 'auto',
	maxWidth: '900px',
	maxHeight: '85vh',
	padding: 25,
	animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

	'&:focus': { outline: 'none' },
});

const AlertDialogDescription = styled(AlertDialog.Description, {
	marginBottom: 20,
	// color: 'black',
	// fontSize: 15,
	// lineHeight: 1.5,
});

export default function Modal({ children, companyProjects }: ModalProps) {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialogOverlay className="bg-black/40 backdrop-blur-md" />
				<AlertDialogContent id="content">
					<AlertDialog.Cancel asChild className=" ">
						<div className=" absolute right-3 top-3 w-10 h-10 rounded-full flex bg-black/10 cursor-pointer items-center justify-center">
							<svg
								width="20"
								height="20"
								viewBox="0 0 8 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6.5 6.5L1.5 1.5"
									stroke="#000000"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M1.5 6.5L6.5 1.5"
									stroke="#000000"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
					</AlertDialog.Cancel>
					<div className="mt-5">
						{/* <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle> */}
						<AlertDialogDescription>
							<div className="flex flex-col gap-5">
								<h1 className="text-xl font-epilogue font-semibold">
									Projetos e tecnologias utilizadas no meu dia a dia
								</h1>
								{companyProjects.map((project: any, index: number) => {
									return (
										<div className="flex flex-col gap-5" key={index}>
											<div>
												{project.url ? (
													<a
														href={project.url}
														target="_blank"
														className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30"
													>
														{project.name}
													</a>
												) : (
													<button className="text-lg font-semibold font-epilogue text-blue-500 hover:text-blue-500/60 transition-all duration-200  cursor-not-allowed">
														{project.name}
													</button>
												)}{' '}
												<span className="text-lg"> - {project.description}</span>
											</div>
											<div className="flex items-center gap-3">
												{project.techs.map((tech: any, index: number) => {
													return (
														<span key={index} dangerouslySetInnerHTML={{ __html: tech }} />
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</AlertDialogDescription>
					</div>
				</AlertDialogContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
