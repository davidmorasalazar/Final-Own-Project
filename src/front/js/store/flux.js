const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pets: [],
			login: "false"
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadDogs: async () => {
				const url = "https://3001-emerald-catfish-fwavhd5r.ws-us03.gitpod.io/pets";
				const response = await fetch(url);
				const data = await response.json();
				console.log(data);
				setStore({ pets: [...data] });
				console.log(getStore().pets);
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
