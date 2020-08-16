import { useState, useEffect } from 'react';

function usePersistedState(key, initialState) {
	// cria um estado para armazenar o tema usado
	const [state, setState] = useState(() => {
		const storageValue = localStorage.getItem(key);
		// verifica se o valor de um tema pré-escolhido existe
		if (storageValue) {
			// se existe, esse tema é retornado
			return JSON.parse(storageValue);
		} else {
			// se não, o estado inicial é retornado (light)
			return initialState;
		}
	});

	// useEffect para monitorar a mudança de valor no tema
	useEffect(() => {
		// salvando o tema no localStorage
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

export default usePersistedState;
