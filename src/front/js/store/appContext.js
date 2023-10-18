import React, { useState, useEffect } from "react";
import getState from "./flux.js";


export const Context = React.createContext(null);

const injectContext = PassedComponent => {


	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {

			state.actions.getAllProfessionals()
				.then(data => console.log(data));

			localStorage.setItem("url", "https://sample-service-name-qduh.onrender.com/")

		}, []);


		// The initial value for the context is not null anymore, but the current state of this component,
		// the context will now have a getStore, getActions and setStore functions available, because they were declared
		// on the state of this component
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
