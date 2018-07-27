<template>
    <div class="QRCode-container position-fixed d-flex flex-column justify-content-center align-items-center" v-on:click="$emit('cancelQRCode')">
        <div class="QRCode-center col-9 d-flex flex-column justify-content-center align-items-center" v-on:click.stop>
            <img src="../../assets/imgs/QR-code.jpg" style="width:90%;" alt="">
            <div>
                <a href="#">下载二维码</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "QRCode-container",
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.QRCode-container {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}
.QRCode-center{
    max-height: 300px;
    background-color: white;
}
</style>