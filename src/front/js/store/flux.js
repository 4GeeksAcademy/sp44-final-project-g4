const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			fetchData : async (urlKey, storageKey,) => {
				try {
					if(!localStorage.getItem(storageKey)){
						
						const host = "https://glowing-robot-jv4p56prx47fj6vp-3001.preview.app.github.dev"; // URL base
						const url = `${host}/api/professional/${urlKey}`;
						const request = {
							method: 'GET',
							redirect: 'follow'
						};
						const response = await fetch(url, request);
						if (response.ok) {
							const data = await response.json();
							setStore({ [storageKey]: data.results });
							localStorage.setItem(storageKey, JSON.stringify(data));
							localStorage.removeItem(storageKey)
							return data
						} else {
							throw new Error(`Error: ${response.status} - ${response.statusText}`);
						}
					
					} else {
						const data = JSON.parse(localStorage.getItem(storageKey));
						return data
					}
				} catch (error) {
					throw new Error(`Error fetching ${urlKey}: ${error.message}`);
				}
			},

			// VetSerpApip: fetch("https://api.serpapi.com/search?engine=google&q=bardo&location=madrid&language=es&api_key=1de844b2ccd1771a9620a23061c03a50113635222097504a9ae34cb79157bc36")
			// .then(response => response.json())
			// .then(data => console.log(data)),
		}
	};
};

export default getState;