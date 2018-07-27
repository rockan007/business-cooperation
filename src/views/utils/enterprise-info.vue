<template>
    <div class="enterprise-info d-flex flex-column">
        <div class="enterprise-header position-relative">
            <div class="head-back-img"></div>
            <div class="enterprise-name d-flex justify-content-end">
              <div class="flex-grow-1">
                电亮亮信息科技有限公司
              </div>
              <div class="">
                <span class="QR-code iconfont icon-erweima" v-on:click="showQRCode=true"></span>
              </div>
            </div>
            <img class="enterprsie-icon position-absolute" src="../../assets/imgs/enterprise-icon.png" alt="">
        </div>
        <div class="enterprise-body flex-grow-1">
            <div class='enterprise-contact'>
              <div>
                <span class="iconfont icon-dianhua2"></span>0531-55726863
              </div>
              <div>
                <span class="iconfont icon-dingwei1"></span>山东省济南市天桥区明湖西路800号A座21F
              </div>
            </div>
            <div class="devider-line"></div>
            <div class="enterprise-briefIntro">
                公司简介：山东电亮亮信息科技有限公司创立于2017年，注册资金1000万元。是一家致力于大数据分析、RS/GIS/GPS、测绘、配电自动化系统运维、电力设备带电检测、电力系统监控的智能运营高新技术企业。
                                            
            </div>
        </div>
        <QRCode-container v-if="showQRCode" v-on:cancelQRCode="showQRCode=false"></QRCode-container>
    </div>
</template>
<script>
import QRCodeContainer from "@/components/utils/QRCode-container";
export default {
  name: "enterprise-info",
  components: {
    "QRCode-container": QRCodeContainer
  },
  data: function() {
    return {
      showQRCode: false
    };
  },
  methods: {}
};
</script>
<style scoped>
.enterprise-info {
  height: 100%;
}
.enterprise-header {
  background-color: white;
}
.head-back-img {
  min-height: 150px;
  background-image: url(../../assets/imgs/enterprise-head-back.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.enterprise-name {
  line-height: 42px;
  height: 42px;
  padding: 0 15px;
}
.QR-code {
  font-size: 24px;
}
.enterprsie-icon {
  left: 20px;
  top: 120px;
  z-index: 50px;
  width: 60px;
  height: 60px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
}
.head-name {
  font-size: 20px;
}
.enterprise-body {
  margin-top: 16px;
  padding: 15px;
  background-color: white;
}
.enterprise-contact {
  text-align: left;
}
.iconfont.icon-dianhua2 {
  color: #fe5722;
  margin-right: 12px;
}
.iconfont.icon-dingwei1 {
  color: deepskyblue;
  margin-right: 12px;
}
.devider-line {
  margin: 12px 0;
  height: 1px;
  background-color: black;
}
.enterprise-briefIntro {
  text-align: left;
  font-size: 16px;
  color: grey;
}
</style>