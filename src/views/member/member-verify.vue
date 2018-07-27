<template>
    <form class="member-verify" v-on:submit="submitMemVerify">
        <fieldset>
            <legend>
                商户信息
            </legend>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="member-logo">Logo</span>
                </div>
                <input type="file" class="form-control" placeholder="请选择logo图片" aria-label="请选择logo图片" aria-describedby="member-logo">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="member-name">名称</span>
                </div>
                <input type="text" class="form-control" placeholder="请输入商户名称" aria-label="请输入商户名称" aria-describedby="member-name">
            </div>
         
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="member-site">地址</span>
                </div>
                <input type="text" class="form-control" id="member-site" placeholder="请输入详细地址,精确至门牌号" aria-label="请输入详细地址,精确至门牌号" aria-describedby="member-site"/>
            </div>
            
        </fieldset>
        <fieldset>
            <legend>
                申请人信息
            </legend>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="proposer">姓名</span>
                </div>
                <input type="text" class="form-control" pattern=".+"  placeholder="请输入姓名" aria-label="请输入姓名" aria-describedby="proposer"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="position">职位</span>
                </div>
                <input type="text" class="form-control" pattern="" placeholder="请输入职位" aria-label="请输入职位" aria-describedby="position">
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="contact-phone">电话</span>
                </div>
                <input type="tel" class="form-control" pattern="" placeholder="请输入联系电话" aria-label="请输入联系电话" aria-describedby="contact-phone">
            </div>
        </fieldset>
        <button type="submit" class="btn btn-primary" value="提交申请">提交申请</button>
    </form>
</template>
<script>
export default {
  name: "member-verify",
  data: function() {
    return {
      verifyCode: ""
    };
  },
  methods: {
    submitMemVerify: function() {
        this.$router.push('/member-home');
    }
  }
};
</script>
<style scoped>
</style>