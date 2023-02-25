import React from 'react';

export default function Teste() {
	return (
		<div className="mt-32 lg:mt-40 flex flex-col lg:flex-row items-center lg:items-start justify-center md:justify-between w-full max-w-7xl">
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
		</div>
	);
}
