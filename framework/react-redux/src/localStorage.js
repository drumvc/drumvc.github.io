export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('rbx-pattern');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('rbx-pattern', serializedState);
	} catch (err) {
		console.log(err);		
	}
}