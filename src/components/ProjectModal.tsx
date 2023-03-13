/* eslint-disable @next/next/no-img-element */
import React, { ReactNode, useEffect, useState } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '@stitches/react';
import { FiCopy } from 'react-icons/fi';
import { format } from 'date-fns';
import { TbWorldUpload } from 'react-icons/tb';
import { FaGithubAlt } from 'react-icons/fa';
import { ptBR } from 'date-fns/locale';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { RxCross2 } from 'react-icons/rx';
interface ModalProps {
	children: ReactNode;
	project: any;
}

const overlayShow = keyframes({
	'0%': { opacity: 0 },
	'100%': { opacity: 1 },
});

const contentShow = keyframes({
	'0%': { opacity: 0, transform: 'translate(-50%, 100%) scale(.96)' },
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
	top: '540px',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	overflowY: 'scroll',
	height: '100%',
	maxHeight: 'calc(100% - 80px)',
	animation: `${contentShow} 1s cubic-bezier(0.16, 1, 0.3, 1)`,
	'@media (max-width: 768px)': {
		top: '50%',
		left: '50%',
		width: '90vw',
	},
	'&:focus': { outline: 'none' },
});

const AlertDialogDescription = styled(AlertDialog.Description, {
	marginBottom: 20,
	width: '100%',

	overflowX: 'scroll',
	display: 'flex',
	flexDirection: 'column',
});

interface T {
	id: string;
	title: string;
	subtitle: string;
}

export function ProjectModal({ children, project }: ModalProps) {
	const [selectedId, setSelectedId] = useState<any>(null);
	const [value, copy] = useCopyToClipboard();
	const items = [
		{
			id: '1',
			subtitle: 'Subtitle 1',
			title: 'title 1',
		},
		{
			id: '2',
			subtitle: 'Subtitle 2',
			title: 'title 2',
		},
		{
			id: '3',
			subtitle: 'Subtitle 3',
			title: 'title 3',
		},
	];

	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialogOverlay className="bg-black/80 backdrop-blur-md" />
				<AlertDialogContent id="content" className="scrollbar-hide">
					{/* <div className="w-full flex flex-col relative"> */}

					{/* </div> */}
					<div className="w-full flex flex-col relative">
						<AlertDialog.Title className="sticky top-0 w-full bg-white">
							<div className="w-full h-10 px-3 md:px-10 py-7 flex items-center justify-between">
								<span className="font-poppins font-semibold text-lg w-full max-w-[220px] truncate">
									{project.name}
								</span>
								<div className="flex gap-6">
									<button onClick={() => copy(`${project.demoUrl}`)}>
										<FiCopy size={24} />
									</button>
									<a className="cursor-pointer" target="_blank" href={project.demoUrl}>
										<TbWorldUpload size={24} />
									</a>
									<a className="cursor-pointer" target="_blank" href={project.github}>
										<FaGithubAlt size={24} />
									</a>
								</div>
							</div>
						</AlertDialog.Title>
						<AlertDialogDescription className="px-4 md:px-12">
							<div className="w-full h-full pb-10 mt-10 flex flex-col items-center justify-center gap-10">
								<small className="text-lg">
									Feito em -{' '}
									{format(new Date(project.releaseDate), "MMMM' • ' y", {
										locale: ptBR,
									})}
								</small>
								<h1 className="text-2xl md:text-5xl font-bold font-poppins">
									{project.name}
								</h1>

								<img
									src={project.thumbnail.url}
									alt=""
									className="w-full max-w-6xl rounded-2xl object-cover"
								/>

								<span className="text-2xl font-urbanist max-w-6xl text-black/70 ">
									{project.description}
								</span>
							</div>
							<div className="w-full flex flex-col mt-10 gap-10 border-t-2 border-dashed pt-10">
								<div className="flex flex-col">
									<span className="text-xl font-semibold">Galeria</span>
									<span className="font-semibold text-4xl max-w-md font-epilogue leading-[50px]">
										Veja a galeria completa do projeto
									</span>
								</div>

								<div className="w-full flex flex-col md:grid md:grid-cols-2 gap-10  bg-[url('/white-grid.svg')] bg-cover bg-no-repeat bg-center">
									{project.images.map((image: any) => {
										return (
											<img
												key={image.url}
												src={image.url}
												alt=""
												className="w-full max-w-xl md:max-w-3xl rounded-2xl "
											/>
										);
									})}
								</div>
							</div>
						</AlertDialogDescription>
					</div>
					<div className="w-full flex items-center justify-end pr-4  sticky bottom-0  md:bottom-4 ">
						<AlertDialog.Cancel
							asChild
							className="cursor-pointer bg-black w-10 h-10 text-white rounded-md"
							// className="fixed -bottom-[90%] flex items-center justify-end w-full  z-50"
						>
							<RxCross2 />
						</AlertDialog.Cancel>
					</div>
				</AlertDialogContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}

type CopiedValue = string | null;
type CopyFn = (text: string) => Promise<boolean>; // Return success

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null);

	const copy: CopyFn = async (text) => {
		if (!navigator?.clipboard) {
			console.warn('Clipboard not supported');
			return false;
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			return true;
		} catch (error) {
			console.warn('Copy failed', error);
			setCopiedText(null);
			return false;
		}
	};

	return [copiedText, copy];
}
