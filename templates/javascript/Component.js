'use strict';

import React from 'react/addons';

<% if (stylesLanguage === 'css') { %>require('styles/<%= classedFileName %>.css');<% } %><%
if (stylesLanguage === 'sass')   { %>require('styles/<%= classedFileName %>.sass');<% } %><%
if (stylesLanguage === 'scss')   { %>require('styles/<%= classedFileName %>.scss');<% } %><%
if (stylesLanguage === 'less')   { %>require('styles/<%= classedFileName %>.less');<% } %><%
if (stylesLanguage === 'stylus') { %>require('styles/<%= classedFileName %>.styl');<% } %>

var <%= classedName %> = React.createClass({
  render: function () {
    return (
        <div className="<%= classedName %>">
          <p>Content for <%= classedName %></p>
        </div>
      );
  }
});

export default <%= classedName %>;