'use strict';

import React from 'react/addons';

describe('<%= classedName %>', function () {
  let <%= classedName %>, component;

  beforeEach(function () {
    <%= classedName %> = require('components/<%= classedFileName %>.js');
    component = React.createElement(<%= classedName %>);
  });

  it('should create a new instance of <%= classedName %>', function () {
    expect(component).toBeDefined();
  });
});
