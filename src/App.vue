<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/fonts/iconfont.css";
export default {
  name: "app",
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: rgb(244, 242, 245);
}
.container {
  padding: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
