<script>
  import Vue from 'vue';
  import <%= ComponentName %> from './../src/index';

  Vue.use(<%= ComponentName %>);

  export default {
    name: 'app',

    template: require('./demo.md'),

    data() {
      return {

      };
    }
  };
</script>
