'use strict';

import <%= scriptAppName %> from './<%= scriptAppName %>';
import React from 'react';
import Router from 'react-router';

const Route = Router.Route;

const content = document.getElementById('content');

const Routes = (
  <Route handler={<%= scriptAppName %>}>
    <Route name="/" handler={<%= scriptAppName %>}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
