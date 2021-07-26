<template>
  <div class="container" :class="isHome ? 'isHome' : 'isBusinessHistory'">
    <div
      class="banner-infos"
      :class="isHome ? 'home-banner-infos' : 'bussiness-banner-infos'"
    >
      <div class="logo">
        <img :src="logo" alt="Logotipo upMiner" />
        <span>Histórico Empresarial</span>
      </div>
      <div class="text-banner">
        <p>
          O aplicativo Histórico Empresarial permite ao usuário ter acesso a
          todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano
          de fundação
        </p>
      </div>
      <div class="btn">
        <span>R$ <span>40,00</span></span>
        <button type="submit">Saiba mais</button>
      </div>
    </div>
    <div
      class="banner-img"
      :class="isHome ? 'bannerHome ' : 'bannerBusinessHistory'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {};
  },
  props: {
    isHome: Boolean,
    logo: String,
  },
};
</script>

<style lang="scss">
@import "@/sass/main.scss";



.isHome {
  background-image: linear-gradient(-1deg, #155175 0%, #000e1d 71%);

  .home-banner-infos {
    .logo {
      span {
        color: #fff;
        border-left: 2px solid #fff;
      }
    }
  }
  .bannerHome{
    background-image: url("~@/assets/imagebannerhome2.jpeg");
  }
}
.isBusinessHistory{
  background-image: linear-gradient(-4deg, #d7d7d7 0%, #ffffff 56%);

  .bussiness-banner-infos {
    .logo {
      span {
        color: #231f1f;
        border-left: 2px solid #231f1f;
      }
    }
    .text-banner, span{
      color:#696969;
    }
  }
  .bannerBusinessHistory{
    background-image: url("~@/assets/imagebannerbusiness.jpeg");
  }
}
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #fff;
  border-bottom: 5px solid $main-color;
  
  .banner-infos {
    width: 100%;
    padding:30px;

    .logo {
      display: flex;
      align-items: center;
      span {
        font-size: 1.5rem;
        margin-left: 10px;
        padding-left: 10px;
      }
    }
    .text-banner {
      padding-top: 15px;

      p {
        line-height:1.8rem;
      }
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 250px;
      margin-bottom: 34px;

      span {
        span {
          font-size: 2.18rem;
        }
      }
    }
    button {
      height: 34px;
      width: 112px;
      cursor: pointer;
      border-radius: 5px;
      border: none;
      color: #fff;
      background-image: $btn-color;
      background-size: 200% 100%;
      transition: 0.3s all;

      &:hover {
        background-position: 100%;
      }
    }
  }
  .banner-img {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
@media screen and (min-width:480px){
  .container{
    .banner-infos{
      .logo{
        span{
          font-size:1.6rem;
        }
      }
    }
  }
}
@media screen and (min-width:700px){
  .container{
    .banner-infos{
      display:flex;
      flex-direction:column;
      padding: 70px 0 0px 70px;
      .logo{
        span{
          font-size:2rem;
        }
      }
      .text-banner{
        max-width: 81%;
      }
    }
  }
}
@media screen and (min-width:1200px){
  .container{
    flex-direction:row;
    height:317px;
    .banner-infos{
      .text-banner{
        max-width: 93%;
      }
    }
  }
}
@media screen and (min-width:1400px){
  .container{
    .banner-infos{
      .text-banner{
        max-width: 69%;
      }
    }
  }
}
</style>
