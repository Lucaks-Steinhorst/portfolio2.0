import React from 'react';

export default function Br() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="40"
			fill="none"
			viewBox="0 0 56 40"
		>
			<rect width="56" height="40" fill="#fff" rx="4"></rect>
			<mask
				id="mask0_102_2262"
				style={{ maskType: 'luminance' }}
				width="56"
				height="40"
				x="0"
				y="0"
				maskUnits="userSpaceOnUse"
			>
				<rect width="56" height="40" fill="#fff" rx="4"></rect>
			</mask>
			<g mask="url(#mask0_102_2262)">
				<path fill="#05AB41" d="M0 0H56V40H0z"></path>
				<path
					fill="#FDD216"
					fillRule="evenodd"
					d="M7.063 21.12a1.333 1.333 0 010-2.24L27.276 5.803a1.333 1.333 0 011.448 0l20.213 13.079a1.333 1.333 0 010 2.238L28.724 34.198a1.333 1.333 0 01-1.448 0L7.063 21.119z"
					clipRule="evenodd"
				></path>
				<circle cx="28" cy="20" r="9.333" fill="#053087"></circle>
				<mask
					id="mask1_102_2262"
					style={{ maskType: 'luminance' }}
					width="20"
					height="20"
					x="18"
					y="10"
					maskUnits="userSpaceOnUse"
				>
					<circle cx="28" cy="20" r="9.333" fill="#fff"></circle>
				</mask>
				<g mask="url(#mask1_102_2262)">
					<path
						stroke="#fff"
						strokeLinecap="square"
						strokeWidth="2.667"
						d="M17.56 17.56c1.465-1.186 6.194-.062 10.608 1.116 4.414 1.177 9.018 3.645 10.19 5.093"
					></path>
				</g>
			</g>
		</svg>
	);
}
