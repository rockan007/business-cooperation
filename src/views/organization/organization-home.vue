<template>
    <div class="organization-home d-flex flex-wrap flex-warp justify-content-around">
        <home-card class="col-5" v-for="(option,index) in options" v-bind:key="index" v-bind:cardData="option"></home-card>
    </div>
</template>
<script>
import HomeCard from "@/components/home-card";
export default {
  name: "organization-home",
  components: {
    "home-card": HomeCard
  },
  data: function() {
    return {
      options: [
        {
          icon: "icon-qiye",
          content: "企业信息",
          routerPath: "/enterprise-info"
        },
        {
          icon: "icon-shanghu",
          content: "商户管理",
          routerPath: ""
        },
        {
          icon: "icon-jiankong",
          content: "设备监控",
          routerPath: ""
        },
        {
          icon: "icon-yujing",
          content: "故障预警",
          routerPath: ""
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.organization-home{
  padding: 36px 0;
}
</style>
