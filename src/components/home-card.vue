<template>
    <div class="home-card d-flex flex-column border border-info" v-on:click.stop="routerToPath">
        <div class="card-icon iconfont" v-bind:class="cardData.icon"></div>
        <div class="card-content">{{cardData.content}}</div>
        <div class="card-jump">
          <span class="iconfont icon-jinru"></span>
        </div>
    </div>
</template>
<script>
export default {
  name: "home-card",
  props: {
    cardData: {
      default: function() {
        return {};
      },
      type: Object
    }
  },
  data: function() {
    return {};
  },
  methods: {
    routerToPath: function() {
      this.$router.push(this.cardData.routerPath);
    }
  }
};
</script>
<style scoped>
.home-card {
  margin-top: 16px;
  background-color: white;
  padding: 16px 0;
  border-radius: 8px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.home-card:hover {
  background-color: rgba(200, 200, 200, 0.7);
}
.card-icon {
  font-size: 36px;
}
.card-content {
  font-size: 20px;
  margin: 16px 0;
}
.card-jump > .icon-jinru {
  color: red;
  font-size: 26px;
}
</style>