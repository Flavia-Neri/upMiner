<template>
  <main>
    <div class="content-cards">
      <div class="card" v-for="item in items" :key="item.id" v-show="item.card">
        <div class="info-card">
          <font-awesome-icon class="icon" :icon="item.icon" />
          <span>{{ item.title }}</span>
          <p>{{ item.description }}</p>
        </div>
        <button>
          <span>{{ formatPrice(item.price) }}</span>
          <span><b>Saiba mais</b></span>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
     
    };
  },
  props:{
      items: Array,
  },
  methods:{
      formatPrice(value){
          const newValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
          return newValue;
      },
  }
};
</script>

<style lang="scss" scoped>
@import "@/sass/main.scss";
main {
  width: 100%;
  margin-top:40px;
  display: flex;
  justify-content: center;

  .content-cards {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .card {
      width: 305px;
      height: 317px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 53px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      box-shadow:  0px 3px 18px rgba(0, 0, 0, 0.06);
      .info-card {
        width: 100%;
        height: 50%;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .icon {
          font-size: 35px;
          color: $main-color;
        }
        span {
          font-size: 20px;
          color: #444444;
          font-weight: bold;
        }
        p {
          width: 80%;
          font-size: 13px;
          color: #9e9e9e;
          text-align: center;
        }
      }
      button {
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        span{
            font-size:22px;
            b{
                font-size:18px;
            }
        }
      }
    }
  }
}
</style>
