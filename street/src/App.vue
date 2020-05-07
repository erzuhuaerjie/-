<template>
  <div id="app">
    <div class="headers">
      <my-header></my-header>
      <my-nav></my-nav>
    </div>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import myHeader from "@/components/header";
import myFooter from "@/components/footer";
import myNav from "@/components/nav";
export default {
  components: {
    myHeader,
		myFooter,
		myNav
  },
  name: "App"
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.c1181 {
  width: 1181px;
  margin: 0 auto;
}
</style>
