'use strict';

describe('<%= classedName %>', function () {
  import React from 'react/addons';
  let <%= classedName %>, component;

  beforeEach(function () {
    <%= classedName %> = require('components/<%= classedFileName %>.js');
    component = React.createElement(<%= classedName %>);
  });

  it('should create a new instance of <%= classedName %>', function () {
    expect(component).toBeDefined();
  });
});
