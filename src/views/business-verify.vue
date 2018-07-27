//商业认证
<template>
    <div class="business-verify d-flex flex-wrap justify-content-around">
        <home-card class="col-5" v-for="(verify,index) in verifyList" v-bind:key='index' v-bind:cardData="verify"></home-card>
    </div>
</template>
<script>
import HomeCard from "@/components/home-card";
export default {
  name: "business-verify",
  components: {
    "home-card": HomeCard
  },
  data: function() {
    return {
      verifyList: [
        {
          icon: "icon-qiye",
          content: "企业验证",
          routerPath: "/organization-verify"
        },
        {
          icon: "icon-shanghu",
          content: "商户验证",
          routerPath: "/member-verify"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.business-verify{
  padding-top: 56px;
}
</style>
