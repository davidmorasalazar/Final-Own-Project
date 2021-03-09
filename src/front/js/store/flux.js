const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dogs: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadDogs: async () => {
				const url = "https://www.swapi.tech/api/people";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ dogs: [...data.results] });
				console.log(getStore().dogs);
			}
		}
	};
};

export default getState;
