<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.mt5 {
  margin-top: 5px;
}
.mt10 {
  margin-top: 10px;
}
.mt15 {
  margin-top: 15px;
}
.mt20 {
  margin-top: 20px;
}
.ml5 {
  margin-left: 5px;
}
.ml10 {
  margin-left: 10px;
}
.ml15 {
  margin-left: 15px;
}
.ml20 {
  margin-left: 20px;
}
.mr5 {
  margin-right: 5px;
}
.mr10 {
  margin-right: 10px;
}
.mr15 {
  margin-right: 15px;
}
.mr20 {
  margin-right: 20px;
}
html, body, #app {
  height: 100%;
}
</style>
