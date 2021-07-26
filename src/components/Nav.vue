<template>
  <nav class="content">
    <div class="items">
      <div class="item" v-for="item in items" :key="item.id" @click="cardNav(item.id)">
        <font-awesome-icon class="icon" :icon="item.icon" />
        <span>{{item.title}}</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {  
    };
  },
  methods:{
  },
  props: {
    items: Array,
    cardNav:Function,
  },
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";
.content {
  width: 100%;
  min-height: 85px;
  padding: 30px;
  display: flex;
  justify-content: center;
  .items {
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    padding:0 10px;
    .item {
      width: 124px;
      height: 85px;
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color:#f9f9f9;
      border: 1px solid #c9c9c9;
      transition: 0.5s all;
      color:#6d6c6c;
      cursor:pointer;
      .icon{
        font-size:30px;
      }
      span{
        font-size:14px;
      }
      &:hover {
        background-color: $main-color;
        border:none;
        border-radius: 5px;
        box-shadow: 2px 5px 7px #a8a299;
        color:#fff;
      }
    }
  }
}
@media screen and (min-width:1200px){
  .content{
    .items{
      flex-wrap:nowrap;
      justify-content: center;
    }
  }
}
</style>
