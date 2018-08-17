<template>
    <div class="all-members">
        <div class="search-container input-group">
            <input type="text" class="form-control" placeholder="搜索商家"/>
            <div class="input-group-prepend">
                <span class="input-group-text iconfont icon-sousuo1"></span>
            </div>
        </div>
        <div>
            <div class="list-head">
                商户列表
            </div>
            <ul class="members-list">
                <li v-for="(item,index) in memberList" v-bind:key="index" class="member-item border-top border-top-info d-flex">
                    <div class="enterprise-icon">
                        <img v-bind:src="item.icon" alt="">
                    </div>
                    <div class="enterprise-body flex-grow-1">
                        <div class="enterprise-name">
                            {{item.enterprise}}
                        </div>
                        <div class="enterprise-address">
                            {{item.address}}
                        </div>
                    </div>
                    <div class="enterprise-del d-flex  align-items-center">
                            <span class="iconfont icon-shanchu"></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "all-members",
  data: function() {
    return {
      memberList: [
        {
          icon: "",
          enterprise: "山东电亮亮信息科技有限公司",
          address: "山东省济南市天桥区800号"
        },
        {
          icon: "",
          enterprise: "山东众域电气科技有限公司",
          address: "山东省济南市天桥区800号A座21F"
        },
        {
          icon: "",
          enterprise: "山东省三尺电气科技有限公司",
          address: "山东省济南市天桥区800号A座21F"
        }
      ]
    };
  }
};
</script>
<style scoped>
.all-members {
  height: 100%;
  background-color: white;
}
.search-container {
  padding: 15px;
}
.list-head {
  text-align: left;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
}
.members-list {
  padding: 0;
}
.member-item {
  padding: 8px 16px;
}
.enterprise-body {
  text-align: left;
}
.enterprise-name {
  font-size: 16px;
}
.enterprise-address {
  font-size: 14px;
  color: grey;
}
.icon-shanchu {
  color: red;
}
</style>