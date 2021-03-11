const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dogs: [],
			login: "false"
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadDogs: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ dogs: [...data.results] });
				console.log(getStore().dogs);
			},
			// Login funtion
			loggedIn: () => {
				let status = sessionStorage.getItem("is_logged");
				status != "true" ? setStore({ login: "false" }) : setStore({ login: status });
			},
			//loguot funtion
			logOut: () => {
				sessionStorage.removeItem("user_token");
				sessionStorage.removeItem("is_logged");
				getActions().loggedIn();
			}
		}
	};
};

export default getState;
