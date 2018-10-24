<template>
    <div>
      <app-home></app-home>
        <bpp-home></bpp-home>
        <xmain1></xmain1>
    </div>
</template>

<script>
import $ from "jquery";
import bppHome from "../components/yw_component/Nav.vue";
import Xmain1 from "../components/yw_component/Xmain1.vue";
import AppHome from "../components/yw_component/Xheader.vue";
export default {
  data: function() {
    return {};
  },
  components: {
    bppHome,
    Xmain1,
    AppHome
    

  }
};
</script>

<style  lang='scss'>
</style>
