const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {

			// Justo aqui es donde se van a definir todos los fecht (funciones) a utilizar, que a su vez modificaran las variables en demo
			//luego llamare y ejecutare estas funciones en el useEffect del appContext
			//modificar para el fetch de la base de datos
			getPeople: async () => {
				if (localStorage.getItem("peopleLocal") === null) {
					const host = "https://serpapi.com/search.json?engine=google&q=Coffee";
					const url = host + '/people/';
					const request = {
						method: "GET",
						rediret: "follow"
					}
					const response = await fetch(url, request);
					console.log(response);
					if (response.ok) {
						const dataPeople = await response.json();
						localStorage.setItem("peopleLocal", JSON.stringify(dataPeople));
					} else {
						console.log("Error: ", response.status, response.statusText);
					}
				};
			},

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
				const listRemove = FavoritesList.filter((favorite) => favorite != nameCharacter);
				setStore({ favorites: listRemove });
				localStorage.setItem("favorites", JSON.stringify(listRemove))
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPosts: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				if (localStorage.getItem("postsLocal") === null) {
					const response = await fetch("https://orange-goldfish-9p6vxrpqj4gcpq6x-3001.preview.app.github.dev/api/posts", requestOptions)
					if (response.ok) {
						const posts = await response.json();
						localStorage.setItem("postsLocal", JSON.stringify(posts))
					} else {
						console.log("ERROR" + response.status)
					}
				}
			}

		}
	};
};

export default getState;
