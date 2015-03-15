'use strict';

import React from 'react/addons';

const ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('styles/normalize.css');
require('styles/main.css');

const imageURL = require('../../images/yeoman.png');

const <%= scriptAppName %> = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});
<% if (!reactRouter) {
%>React.render(<<%= scriptAppName %> />, document.getElementById('content')); // jshint ignore:line
<% } %>
export default <%= scriptAppName %>;
