'use strict';

import Reflux from 'reflux';

import * as actions from "actions";

const RouterStore = Reflux.createStore({
	listenables: [actions.NavigationActions],
	// The action should be called with the current component as first argument
	onRootPage(comp, data) {
		comp.context.router.transitionTo('/', data);
	},
});

export default RouterStore;
