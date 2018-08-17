<template>
    <div class="members-manage d-flex flex-column">
        <div class="manage-head d-flex">
            <div v-for="(statistics,index) in statisticsData" v-bind:key="index" v-bind:class="'statistics-container-'+index"
             class="flex-grow-1 d-flex flex-column justify-content-center">
                <div class="statistics-percent">{{statistics.percent}}商户</div>
                <div class="statistics-title">{{statistics.title}}</div>
            </div>
        </div>
        <div class="manage-body flex-grow-1  d-flex flex-column">
            <div class="nav-container d-flex justify-content-between">
                <div>
                    待审批
                </div>
                <div v-on:click="routerToAllMembers">
                    全部用户
                </div>
            </div>
            <ul class="approval-pending-list flex-grow-1 overflow-y-auto">
                <li v-for="(approvalPending,index) in approvalPendings" v-bind:key="index" class="d-flex">
                    <div class="enetrprise-icon">{{approvalPending.icon}}</div>
                    <div class="enterprise-body flex-grow-1 d-flex flex-column">
                        <div class="enterprise-name">
                            {{approvalPending.enterprise}}
                        </div>
                        <div class="enterprise-address">
                            {{approvalPending.address}}
                        </div>
                    </div>
                    <div class="enterprise-distance">{{approvalPending.distance}}km</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "members-manage",
  data: function() {
    return {
      statisticsData: [
        {
          title: "电费正常",
          percent: "70%"
        },
        {
          title: "面临欠费",
          percent: "20%"
        },
        {
          title: "已欠费",
          percent: "10%"
        }
      ],
      approvalPendings: [
        {
          icon: "",
          enterprise: "山东众域电气科技有限公司",
          address: "山东省济南市天桥区明湖西路800号银座好望角A座21F",
          distance: 0.78
        },
        {
          icon: "",
          enterprise: "山东三尺电气科技有限公司",
          address: "山东省济南市天桥区明湖西路800号银座好望角A座21F",
          distance: 0.77
        },
        {
          icon: "",
          enterprise: "山东电亮亮信息科技有限公司",
          address: "山东省济南市天桥区明湖西路800号银座好望角A座21F",
          distance: 0.76
        }
      ]
    };
  },
  methods:{
      routerToAllMembers:function(){
          this.$router.push('/all-members');
      }
  }
};
</script>
<style scoped>
.members-manage {
  height: 100%;
}
.manage-head {
  color: white;
  background-image: url(../../assets/imgs/members-manage-back.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 150px;
}
.statistics-percent {
  font-size: 16px;
}
.statistics-title {
  font-size: 14px;
}
.statistics-container-0,
.statistics-container-1,
.statistics-container-2 {
  margin: 0 16px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.statistics-container-0 {
  background-image: url(../../assets/imgs/normal-back.png);
}
.statistics-container-1 {
  background-image: url(../../assets/imgs/goingTo-back.png);
}
.statistics-container-2 {
  background-image: url(../../assets/imgs/arrearage-back.png);
}
.nav-container {
  padding: 8px 16px;
}
.approval-pending-list{
    padding: 0 15px;
}
.enterprise-body {
  text-align: left;
}
.enterprise-address{
    font-size: 14px;
    color: grey;
}
.enterprise-distance{
    font-size: 12px;
    color:gray;
}
</style>