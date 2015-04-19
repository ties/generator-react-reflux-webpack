'use strict';

// Babel polyfills
require("babel/polyfill");

// Import libraries first
import React from 'react';

// TODO: Is the correct way to import?
import Router from 'react-router';
import {Route} from 'react-router';

// Re-usable application components
// Make sure the stores are included
import * as stores from "stores";

// The components
import <%= scriptAppName %> from './<%= scriptAppName %>';

const content = document.getElementById('content');

//
// react-router is included. Use contextTypes if you want
// to be able to use the router from a Component.
// 
// contextTypes: {
//    router: React.PropTypes.func
// },
//
// The params are stored in this.context.router.getCurrentParams()
//
const Routes = (
  <Route handler={<%= scriptAppName %>}>
    <Route name="/" handler={<%= scriptAppName %>}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
