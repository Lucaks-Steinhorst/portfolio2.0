import React, { ReactNode } from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from '@stitches/react';
interface ModalProps {
	children: ReactNode;
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
	overflowY: 'scroll',
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

const Flex = styled('div', { display: 'flex' });

export default function Modal({ children }: ModalProps) {
	return (
		<AlertDialog.Root>
			<AlertDialog.Trigger asChild>{children}</AlertDialog.Trigger>
			<AlertDialog.Portal>
				<AlertDialogOverlay className="bg-black/90" />
				<AlertDialogContent id="content">
					<AlertDialog.Cancel asChild className=" ">
						<div className=" absolute right-3 top-3 w-10 h-10 rounded-full flex bg-black/10 cursor-pointer items-center justify-center">
							{/* <svg
								width="24"
								height="24"
								viewBox="0 0 129 129"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M114.202 22.194L98.7915 22.404L74.0815 47.114C71.56 49.6299 68.1435 51.0429 64.5815 51.0429C61.0196 51.0429 57.603 49.6299 55.0815 47.114L30.3715 22.404L14.9615 22.194L45.5815 52.814C50.6232 57.8483 57.4568 60.6758 64.5815 60.6758C71.7063 60.6758 78.5398 57.8483 83.5816 52.814L114.202 22.194Z"
									fill="black"
								/>
								<path
									d="M14.9615 106.374L30.3715 106.164L55.0815 81.454C57.603 78.9381 61.0196 77.5252 64.5815 77.5252C68.1435 77.5252 71.56 78.9381 74.0815 81.454L98.7915 106.164L114.202 106.374L83.5816 75.754C78.5398 70.7198 71.7063 67.8922 64.5815 67.8922C57.4568 67.8922 50.6232 70.7198 45.5815 75.754L14.9615 106.374Z"
									fill="black"
								/>
							</svg> */}
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
									Projetos e tecnologias utilizadas na empresa
								</h1>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
								<div>
									<a
										href="#"
										className="text-lg font-semibold font-epilogue text-blue-600 hover:border-b-2 border-blue-400/30	"
									>
										Bolo no bolso
									</a>{' '}
									<span className="text-lg">
										- Um aplicativo cuidadosamente elaborado para profissionais da
										confeitaria que precisam de todos os seus controles em um só lugar.
									</span>
								</div>
							</div>
						</AlertDialogDescription>
					</div>
				</AlertDialogContent>
			</AlertDialog.Portal>
		</AlertDialog.Root>
	);
}
