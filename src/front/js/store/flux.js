const backend = "https://sample-service-name-3ajg.onrender.com/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			loggedUser: [],
			userFavorites: []

		},
		actions: {

			fetchData: async (urlKey, storageKey,) => {
				try {

					if (!localStorage.getItem(storageKey)) {

						const host = backend; // URL base
						const url = `${host}api/professional/${urlKey}`;

						const request = {
							method: 'GET',
							redirect: 'follow'
						};
						const response = await fetch(url, request);
						if (response.ok) {
							const data = await response.json();
							setStore({ [storageKey]: data.results });
							localStorage.setItem(storageKey, JSON.stringify(data));
							localStorage.removeItem(storageKey);
							return data;
						} else {
							throw new Error(`Error: ${response.status} - ${response.statusText}`);
						}


					} else {
						const data = JSON.parse(localStorage.getItem(storageKey));
						return data;
					}
				} catch (error) {
					throw new Error(`Error fetching ${urlKey}: ${error.message}`);
				}
			},


			getAllProfessionals: async () => {
				Promise.all([
					fetch(`${backend}api/professional/vet`),
					fetch(`${backend}api/professional/groomer`),
					fetch(`${backend}api/professional/walker`)
				])
					.then(responses => {
						return Promise.all(responses.map(response => response.json()));
					})
					.then(data => {
						setStore({ vets: data[0].results });
						setStore({ vets: data[1].results });
						setStore({ vets: data[2].results });
						localStorage.setItem("vets", JSON.stringify(data[0].results));
						localStorage.setItem("groomers", JSON.stringify(data[1].results));
						localStorage.setItem("walkers", JSON.stringify(data[2].results));
						console.log(data[0]);
						console.log(data[1]);
						console.log(data[2]);

					});
			},

			logout: () => {
				localStorage.removeItem("avatar");
				localStorage.removeItem("email");
				localStorage.removeItem("id");
				localStorage.removeItem("type");
				localStorage.removeItem("user");
				localStorage.removeItem("userToken");
				setStore({ loggedUser: [] });
			},

			addFavorite: (user, professional) => {


			}


			// VetSerpApip: fetch("https://api.serpapi.com/search?engine=google&q=bardo&location=madrid&language=es&api_key=1de844b2ccd1771a9620a23061c03a50113635222097504a9ae34cb79157bc36")
			// .then(response => response.json())
			// .then(data => console.log(data)),

		}
	};
};

export default getState;