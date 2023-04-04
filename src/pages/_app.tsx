import '@/styles/globals.css';

import { client } from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';
import 'swiper/css';
import type { AppProps } from 'next/app';
import { LocaleProvider } from '@/Context/LocaleContext';
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<LocaleProvider>
				<NextSeo
					title="Portfolio - Fillipe Augusto"
					description="This is my portfolio."
					themeColor="#000"
					openGraph={{
						images: [
							{
								url: '/mockup.jpg',
								width: 800,
								height: 600,
								alt: 'Mockup image',
							},
						],
					}}
				/>
				<Component {...pageProps} />
			</LocaleProvider>
		</ApolloProvider>
	);
}
