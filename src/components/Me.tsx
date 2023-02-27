/* eslint-disable @next/next/no-img-element */
import { useLocaleContext } from '@/Context/LocaleContext';
import { useMeQuery } from '@/graphql/generated';
import React from 'react';

export default function Me() {
	// const { data: en_data } = useMeQuery();
	const { me } = useLocaleContext();

	return (
		<div className="flex flex-col-reverse md:flex-row max-w-7xl w-full gap-20 mt-10 md:mt-20">
			<img
				src="https://github.com/Fillipeaugusto.png"
				alt=""
				className="grayscale"
			/>
			<div className="font-epilogue flex flex-col gap-2 mt-10   px-5 md:px-0">
				<span className="flex text-xl font-medium gap-2">
					Olá, prazer <img src="/smile.svg" alt="" /> me chamo
				</span>
				<div className="flex flex-col mt-3 gap-1">
					<h1 className="text-5xl font-medium font-sans ">{me?.fullName}</h1>
					<span className="text-lg font-medium">{me?.role}</span>
				</div>
				<span className="max-w-xl">{me?.bio}</span>
			</div>
		</div>
	);
}
