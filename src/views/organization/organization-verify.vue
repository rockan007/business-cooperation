<template>
    <div class="organization-verify input-group mb-3">
        <input type="text" class="form-control" v-model.trim="verifyCode" placeholder="请输入验证码" aria-label="验证码" aria-describedby="button-sure">
        <div class="input-group-append" id="button-sure">
            <button class="btn btn-primary" type="button" v-on:click="submitOrgVerify">确认</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "organization-verify",
  data: function() {
    return { verifyCode: "" };
  },
  methods: {
    submitOrgVerify: function() {
      //to do
      //提交验证码
      //成功后返回上一页
      this.$router.push('/organization-home')
    }
  }
};
</script>
<style scoped>
.organization-verify{
    padding-top: 106px;
}
</style>