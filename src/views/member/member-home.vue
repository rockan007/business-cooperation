<template>
    <div class="member-home">

    </div>
</template>
<script>
export default {
  name: "member-home",
  data: function() {
    return {
      options:[
        {
          icon:'icon-shanghu',
          content:'绑定管理',
          routerPath:''
        },{
          icon:'icon-jiaofei1',
          content:'缴费管理',
          routerPath:''
        },{
          icon:'icon-dianbiao1',
          content:'用电设备',
          routerPath:''
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>