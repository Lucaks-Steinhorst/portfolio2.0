/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Me() {
	return (
		<div className="flex flex-col-reverse md:flex-row max-w-7xl w-full gap-20 mt-20">
			<img
				src="https://github.com/Fillipeaugusto.png"
				alt=""
				className="grayscale"
			/>
			<div className="font-epilogue flex flex-col gap-2 mt-10">
				<span className="flex text-xl font-medium gap-2">
					Olá, prazer <img src="/smile.svg" alt="" /> me chamo
				</span>
				<div className="flex flex-col mt-3 gap-1">
					<h1 className="text-5xl font-medium font-sans ">Fillipe Augusto</h1>
					<span className="text-lg font-medium">Desenvolvedor Front end</span>
				</div>
				<span className="max-w-xl">
					Formado em Engenharia de software, atuo como programador Front end
					utilizando React e Next js com Typescript, atualmente estou estudando
					Testes automatizados
				</span>
			</div>
		</div>
	);
}
