<template>
  <div class="login-container" ref="vantaRef">

  </div>
</template>
<script lang="ts" setup name="login">
import { ref,onMounted,onBeforeUnmount} from "vue";
import * as THREE from 'three'
import RINGS from 'vanta/src/vanta.rings'
const vantaRef = ref(null);
let vantaEffect:any;
onMounted(() => {
    vantaEffect=RINGS({
      el:vantaRef.value,
      THREE:THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,//比例
      scaleMobile: 1.0,
      backgroundColor: 0x0,
      color: 0xb0d29d,
      backgroundAlpha: 0.84,

    })
   
})
onBeforeUnmount(()=>{
  if(vantaEffect){
    vantaEffect.destroy();
  }
})
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>