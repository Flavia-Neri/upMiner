<template>
  <div class="home">
    <Header :isHome="true" :logo="require('@/assets/logo_upminer.png')" />
    <Nav :items="items"/>

    <div class="content-select">
      <div class="select-div">
        <label>ORDERNAR</label>
        <select
          class="select"
          v-model="selected_ord"
          :reduce="(ordenation) => ordenation.id"
          label="name"
        >
          <option v-for="opt in ordenation" :key="opt.id" :value="opt.id">
            {{ opt.name }}
          </option>
        </select>
      </div>
    </div>
    <Cards :items="items" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Cards from "@/components/Cards.vue";

export default {
  name: "Home",
  components: {
    Header,
    Nav,
    Cards,
  },
  metaInfo: {
    title: "Home",
  },
  data: function() {
    return {
      selected_ord: 0,
 items: [
        { title: "Todos", id: 0, icon: "globe" },
        {
          title: "Profissional",
          id: 1,
          icon: "briefcase",
          price:29.99,
          card: true,
          description:"",
        },
        {
          title: "Reguladores",
          id: 2,
          icon: "university",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Sócio Ambiental",
          id: 3,
          icon: "tree",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Jurídico",
          id: 4,
          icon: "gavel",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Listas Restritivas",
          id: 5,
          icon: "ban",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Mídia / Internet",
          id: 6,
          icon: "globe-americas",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Bens e Imóveis",
          id: 7,
          icon: "gem",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Cadastro",
          id: 8,
          icon: "male",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
        {
          title: "Financeiro",
          id: 9,
          icon: "piggy-bank",
          price:29.99,
          card: true,
          description:
            "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
        },
      ],
      ordenation: [
        { name: "Lançamento", id: 0 },
        { name: "Alfabética", id: 1 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.content-select {
    width: 100%;
    height: 50px;
    margin-top:30px;
  .select-div {
    display: flex;
    align-items: center;
    padding: 0 30px;

    label {
      font-weight: bold;
      margin-right: 20px;
    }

    .select {
      width: 220px;
      height: 35px;
      border-radius: 5px;
      border: 2px solid #eaeaea;
      appearance: none;
      background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5                         5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
      background-repeat: no-repeat;
      background-position: right;
      padding-left: 14px;

      &:focus {
        outline: none;
      }
    }
  }
}
@media screen and (min-width:1200px){
    .content-select{
        .select-div{
            width:37%;
            justify-content: center;
        }
    }
}
</style>
