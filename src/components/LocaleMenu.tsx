/* eslint-disable react/display-name */
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { styled, keyframes } from '@stitches/react';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { violet, mauve, blackA } from '@radix-ui/colors';
import Br from './Flags/BR';
import { GrGlobe } from 'react-icons/gr';

const NavigationMenuDemo = () => {
	return (
		<NavigationMenuRoot>
			<NavigationMenuList>
				<NavigationMenu.Item>
					<NavigationMenuTrigger>
						<GrGlobe id="globe" />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ListItem>
							<Br /> <GrGlobe size={30} />
						</ListItem>
					</NavigationMenuContent>
				</NavigationMenu.Item>
			</NavigationMenuList>

			<ViewportPosition>
				<NavigationMenuViewport />
			</ViewportPosition>
		</NavigationMenuRoot>
	);
};

const enterFromRight = keyframes({
	from: { transform: 'translateX(200px)', opacity: 0 },
	to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
	from: { transform: 'translateX(-200px)', opacity: 0 },
	to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
	from: { transform: 'translateX(0)', opacity: 1 },
	to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
	from: { transform: 'translateX(0)', opacity: 1 },
	to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
	from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
	to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
	from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
	to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const NavigationMenuRoot = styled(NavigationMenu.Root, {
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
	zIndex: 1,
});

const NavigationMenuList = styled(NavigationMenu.List, {
	display: 'flex',
	cursor: 'pointer',
	justifyContent: 'center',
	listStyle: 'none',
	boxShadow: `0 2px 10px ${blackA.blackA7}`,
	margin: 0,
});

const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
	all: 'unset',
	background: 'black',
	color: '#fff',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: 2,
});

const NavigationMenuContent = styled(NavigationMenu.Content, {
	position: 'absolute',
	top: 0,
	left: 0,
	padding: 10,
	background: 'red',
	width: 'auto',
	backgroundColor: '#262626',
	borderRadius: 6,

	animationDuration: '250ms',
	animationTimingFunction: 'ease',
	'&[data-motion="from-start"]': { animationName: enterFromLeft },
	'&[data-motion="from-end"]': { animationName: enterFromRight },
	'&[data-motion="to-start"]': { animationName: exitToLeft },
	'&[data-motion="to-end"]': { animationName: exitToRight },
});

const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
	position: 'relative',
	transformOrigin: 'top center',
	width: '100%',
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
	height: 'var(--radix-navigation-menu-viewport-height)',
	transition: 'width, height, 300ms ease',
	'&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
	'&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
});

const ListItem = React.forwardRef(
	({ children, title, ...props }: any, forwardedRef) => (
		<li>
			<NavigationMenu.Link asChild>
				<ListItemLink {...props} ref={forwardedRef}>
					<ListItemText>{children}</ListItemText>
				</ListItemLink>
			</NavigationMenu.Link>
		</li>
	)
);

const ListItemLink = styled('span', {
	display: 'block',
	outline: 'none',
	textDecoration: 'none',
	userSelect: 'none',
	paddingLeft: 12,
	paddingRight: 12,
	borderRadius: 6,
	fontSize: 15,
	lineHeight: 1,
	'&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
	'&:hover': { backgroundColor: mauve.mauve3 },
});

const ListItemText = styled('p', {
	all: 'unset',
	color: mauve.mauve11,
	// lineHeight: 1.4,
	fontWeight: 'initial',
});

const ViewportPosition = styled('div', {
	position: 'absolute',
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	top: '100%',
	left: 0,
	perspective: '2000px',
});

export default NavigationMenuDemo;
