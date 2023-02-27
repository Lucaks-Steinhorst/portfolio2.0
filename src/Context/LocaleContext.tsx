'use client';

import { useMeQuery } from '@/graphql/generated';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';

interface ContextProps {
	locale: string;
	changeLocale: () => void;
	me: any;
}

export const LocaleContext = createContext<ContextProps>({} as ContextProps);

export const LocaleProvider = (props: any) => {
	const { data: me_data } = useMeQuery();
	const [me, setMe] = useState<null | any>(me_data);
	const [locale, setLocale] = useState('pt_BR');
	const cookies = parseCookies();
	useEffect(() => {
		setCookie(null, 'locale', locale, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		});
	}, [locale]);

	async function changeLocale() {
		if (cookies.locale === 'pt_BR') {
			setLocale('en');
		} else {
			setLocale('pt_BR');
		}
	}

	useEffect(() => {
		if (locale === 'pt_BR') {
			setMe(me_data?.me?.localizations[0]);
		} else {
			setMe(me_data?.me);
		}
	}, [locale, me_data?.me]);

	return (
		<LocaleContext.Provider value={{ locale, changeLocale, me }} {...props}>
			{props.children}
		</LocaleContext.Provider>
	);
};

export const useLocaleContext = () => useContext(LocaleContext);
