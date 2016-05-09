const <%= ComponentName %> = require('./component');

module.exports = {
  <%= ComponentName %>,
  install(Vue) {
    Vue.component('<%= name %>', <%= ComponentName %>);
  }
};

