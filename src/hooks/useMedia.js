import { useState, useEffect } from 'react';

export const useMedia = (query) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(query);
		const handleChange = (event) => {
			setMatches(event.matches);
		};

		setMatches(mediaQuery.matches);

		mediaQuery.addListener(handleChange);

		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, [query]);

	return matches;
};
