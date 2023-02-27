import '@/styles/globals.css';
import { client } from '@/lib/apollo';
import { ApolloProvider } from '@apollo/client';

import type { AppProps } from 'next/app';
import { LocaleProvider } from '@/Context/LocaleContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<LocaleProvider>
				<Component {...pageProps} />
			</LocaleProvider>
		</ApolloProvider>
	);
}
