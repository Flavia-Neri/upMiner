<template>
  <div class="bhistory">
    <Header :isHome="false" :logo="require('@/assets/logo_upminer_.png')" />
    <section class="backtohome">
      <div class="aux">
        <router-link to="/" class="linkto">
          <img :src="require('../assets/arrow.svg')" />
          <span>Histórico Empresarial</span>
        </router-link>
      </div>
    </section>
    <Slide />
    <section class="describe">
      <div class="text-info">
        <p>
          O aplicativo Histórico Empresarial permite ao usuário ter acesso a
          todos os fatos e acontecimentos relevantes de uma empresa desde o seu
          ano de fundação. Tenha acesso aos principais eventos corporativos de
          uma empresa, como: marcos jurídicos, mudança no quadro societário,
          aumento de capital,reportagens e muito mais.
        </p>

        <p>
          Após realizar a consulta, o histórico é salvo automaticamente,
          tornando as informações acessíveis ao usuário. A linha do tempo pode
          também ser exportada no formato PDF.
        </p>
      </div>
      <div class="infosBanner">
        <div class="infosBanner-text">
          <span>R$ <span>40,00</span></span>
        </div>
        <router-link to="/business_history" role="button"
          ><button>Habilitar</button></router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Slide from "@/components/Slide.vue";
export default {
  components: {
    Header,
    Slide,
  },
};
</script>
<style lang="scss" scoped>
@import "@/sass/main.scss";
.bhistory {
  padding-bottom:100px;
  .backtohome {
    margin-top: 15px;
    display: flex;
    width: 100%;
    padding: 0 8%;
    justify-content: flex-start;

    .aux {
      width: 90%;
      margin-bottom: 45px;
      transition: 0.3s;

      .linkto {
        width: fit-content;
        text-decoration: none;
        display: flex;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          margin-right: 10px;
          transition: all 0.3s;
        }

        span {
          color: $main-color;
          font-size: 24px;
          font-weight: 400;
          transition: all 0.3s;
        }

        &:hover {
          img,
          span {
            transform: translateY(-5px);
          }

          span {
            font-size: 26px;
          }

          img {
            width: 27px;
            height: 27px;
          }
        }
      }
    }
  }
  .describe {
    width: 76%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    .text-info {
      p {
        font-weight: 300;
        color: #696969;
      }
    }
    .infosBanner {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .infosBanner-text {
        span {
          font-size: 16px;
          font-weight: 400;
          margin-right: 3px;
          span {
            margin-right: 50px;
            font-size: 38px;
          }
        }
      }
      button {
        width: 130px;
        height: 40px;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .aux {
    width: 58%;
  }
}
</style>
