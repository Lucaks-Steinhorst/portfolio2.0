'use client';

import { useMeQuery, usePersonalProjectsQuery } from '@/graphql/generated';
import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useContext, useEffect, useState } from 'react';

interface ContextProps {
	locale: string;
	changeLocale: () => void;
	me: any;
	personal_Projects: any;
}

export const LocaleContext = createContext<ContextProps>({} as ContextProps);

export const LocaleProvider = (props: any) => {
	const { data: me_data } = useMeQuery();
	const { data: personalProjects } = usePersonalProjectsQuery();
	const [me, setMe] = useState<null | any>(me_data);
	const [personal_Projects, setPersonalProjects] = useState<null | any>(
		personalProjects
	);
	const [locale, setLocale] = useState('pt_BR');

	useEffect(() => {
		setMe(me_data?.me?.localizations[0]);
		setPersonalProjects(personalProjects?.personalProjects);
	}, [me_data?.me, personalProjects]);

	return (
		<LocaleContext.Provider value={{ locale, me, personal_Projects }} {...props}>
			{props.children}
		</LocaleContext.Provider>
	);
};

export const useLocaleContext = () => useContext(LocaleContext);
