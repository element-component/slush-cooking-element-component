var test = require('ava');
var Vue = require('vue');
var <%= ComponentName %> = require('../dist/index.js');

test('<%= name %>', t => {
  t.truthy(<%= ComponentName %>.install);
});
