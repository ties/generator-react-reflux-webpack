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

const Routes = (
  <Route handler={<%= scriptAppName %>}>
    <Route name="/" handler={<%= scriptAppName %>}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
