
const getState = ( { getStore, getActions, setStore } ) => {
	return {
		store: {
			loggedUser: [],
			userFavorites: []

		},
		actions: {

			fetchData: async ( urlKey, storageKey, ) => {
				try {

					if ( !localStorage.getItem( storageKey ) ) {

						const host = "https://ideal-space-goggles-9r547pw47qq2p5vr-3001.app.github.dev"; // URL base
						const url = `${ host }/api/professional/${ urlKey }`;

						const request = {
							method: 'GET',
							redirect: 'follow'
						};
						const response = await fetch( url, request );
						if ( response.ok ) {
							const data = await response.json();
							setStore( { [ storageKey ]: data.results } );
							localStorage.setItem( storageKey, JSON.stringify( data ) );
							localStorage.removeItem( storageKey );
							return data;
						} else {
							throw new Error( `Error: ${ response.status } - ${ response.statusText }` );
						}


					} else {
						const data = JSON.parse( localStorage.getItem( storageKey ) );
						return data;
					}
				} catch ( error ) {
					throw new Error( `Error fetching ${ urlKey }: ${ error.message }` );
				}
			},


			getAllProfessionals: async () => {
				Promise.all( [
					fetch( "https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/professional/vet" ),
					fetch( "https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/professional/groomer" ),
					fetch( "https://miniature-trout-9rqg9vgq9jv2p959-3001.preview.app.github.dev/api/professional/walker" )
				] )
					.then( responses => {
						return Promise.all( responses.map( response => response.json() ) );
					} )
					.then( data => {
						setStore( { vets: data[ 0 ].results } );
						setStore( { vets: data[ 1 ].results } );
						setStore( { vets: data[ 2 ].results } );
						localStorage.setItem( "vets", JSON.stringify( data[ 0 ].results ) );
						localStorage.setItem( "groomers", JSON.stringify( data[ 1 ].results ) );
						localStorage.setItem( "walkers", JSON.stringify( data[ 2 ].results ) );
						console.log( data[ 0 ] );
						console.log( data[ 1 ] );
						console.log( data[ 2 ] );

					} );
			},

			logout: () => {
				localStorage.removeItem( "avatar" );
				localStorage.removeItem( "email" );
				localStorage.removeItem( "id" );
				localStorage.removeItem( "type" );
				localStorage.removeItem( "user" );
				setStore( { loggedUser: [] } );
			},

			getPosts: async () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};
				if ( localStorage.getItem( "postsLocal" ) === null ) {
					const response = await fetch( "https://orange-goldfish-9p6vxrpqj4gcpq6x-3001.preview.app.github.dev/api/posts", requestOptions );
					if ( response.ok ) {
						const posts = await response.json();
						localStorage.setItem( "postsLocal", JSON.stringify( posts ) );
					} else {
						console.log( "ERROR" + response.status );
					}
				}
			},
			addFavorite: ( user, professional ) => {


			}


			// VetSerpApip: fetch("https://api.serpapi.com/search?engine=google&q=bardo&location=madrid&language=es&api_key=1de844b2ccd1771a9620a23061c03a50113635222097504a9ae34cb79157bc36")
			// .then(response => response.json())
			// .then(data => console.log(data)),

		}
	};
};

export default getState;