'use strict';

import React from 'react/addons';

describe('<%= classedName %>', function () {
  let <%= scriptAppName %>, component;

  beforeEach(function () {
    const container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    <%= scriptAppName %> = require('components/<%= scriptAppName %>.js');
    component = React.createElement(<%= scriptAppName %>);
  });

  it('should create a new instance of <%= scriptAppName %>', function () {
    expect(component).toBeDefined();
  });
});
