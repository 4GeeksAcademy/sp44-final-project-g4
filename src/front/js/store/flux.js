const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			
			// Justo aqui es donde se van a definir todos los fecht (funciones) a utilizar, que a su vez modificaran las variables en demo
			//luego llamare y ejecutare estas funciones en el useEffect del appContext
				//modificar para el fetch de la base de datos
			// getVet: async () => {
			// 	if (localStorage.getItem("vetsLocal") === null) {
			// 		const host = "https://reimagined-journey-x7pq5jx4jjq2pvww-3001.app.github.dev";
			// 		const url = host + '/views/';
			// 		const request = {
			// 			method: "GET",
			// 			rediret: "follow"
			// 		}
			// 		const response = await fetch(url, request);
			// 		console.log(response);
			// 		if (response.ok) {
			// 			const dataVets = await response.json();
			// 			localStorage.setItem("vetsLocal", JSON.stringify(dataVets));
			// 		} else {
			// 			console.log("Error: ", response.status, response.statusText);
			// 		}
			// 	};
			// },

			// getGroomer: async () => {
			// 	if (localStorage.getItem("groomerLocal") === null) {
			// 		const host = "https://reimagined-journey-x7pq5jx4jjq2pvww-3001.app.github.dev";
			// 		const url = host + '/views/';
			// 		const request = {
			// 			method: "GET",
			// 			rediret: "follow"
			// 		}
			// 		const response = await fetch(url, request);
			// 		console.log(response);
			// 		if (response.ok) {
			// 			const dataGroomers = await response.json();
			// 			localStorage.setItem("groomersLocal", JSON.stringify(dataGroomers));
			// 		} else {
			// 			console.log("Error: ", response.status, response.statusText);
			// 		}
			// 	};
			// },

			// getWalker: async () => {
			// 	if (localStorage.getItem("walkerLocal") === null) {
			// 		const host = "https://reimagined-journey-x7pq5jx4jjq2pvww-3001.app.github.dev";
			// 		const url = host + '/views/';
			// 		const request = {
			// 			method: "GET",
			// 			rediret: "follow"
			// 		}
			// 		const response = await fetch(url, request);
			// 		console.log(response);
			// 		if (response.ok) {
			// 			const dataWalkers = await response.json();
			// 			localStorage.setItem("walkersLocal", JSON.stringify(dataWalkers));
			// 		} else {
			// 			console.log("Error: ", response.status, response.statusText);
			// 		}
			// 	};
			// },
			
			addFavorites: (nameCharacter) => {
				const FavoritesList = getStore().favorites; // Obtenemos la lista actual de favoritos
				const isDuplicate = FavoritesList.some((favorite) => favorite === nameCharacter); // Verificamos si el título ya está en la lista de favoritos
				if (!isDuplicate) {  // Si no es un duplicado, creamos una nueva (copia) lista de favoritos más el nuevo título
					const newFavorites = [...FavoritesList, nameCharacter];
					setStore({ favorites: newFavorites });  // Actualizamos el estado del contexto con la nueva lista de favoritos
					localStorage.setItem("favorites", JSON.stringify(newFavorites));  // Almacenamos la nueva lista de favoritos en el localStorage
				}
			},
			removeFavorites: (nameCharacter) => {
				const FavoritesList = getStore().favorites;
				const listRemove = FavoritesList.filter((favorite)=> favorite != nameCharacter);
				setStore({favorites: listRemove});
				localStorage.setItem("favorites", JSON.stringify(listRemove))
			},

			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			// getMessage: async () => {
			// 	try{
			//  		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
