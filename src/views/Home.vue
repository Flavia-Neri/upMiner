<template>
  <div class="home">
    <Header :isHome="true" :logo="require('@/assets/logo_upminer.png')" />
    <Nav :items="itemsNav" :cardNav="cardNav" />

    <div class="content-select">
      <div class="select-div">
        <label>ORDERNAR</label>
        <select
          class="select"
          v-model="selected_ord"
          :reduce="(ordenation) => ordenation.id"
          label="name"
          @input="sortHandle"
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

const itemsDefault= [
  { title: "Todos", id: 0, icon: "globe" },
  {
    title: "Profissional",
    id: 1,
    category:"pro",
    icon: "briefcase",
    price:29.99,
    card: true,
    description:"",
  },
  {
    title: "Reguladores",
    id: 2,
    category:"reg",
    icon: "university",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Sócio Ambiental",
    id: 3,
    category:"soc",
    icon: "tree",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Jurídico",
    id: 4,
    category:"jur",
    icon: "gavel",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Listas Restritivas",
    id: 5,
    category:"res",
    icon: "ban",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Mídia / Internet",
    id: 6,
    category:"mid",
    icon: "globe-americas",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Bens e Imóveis",
    id: 7,
    category:"bens",
    icon: "gem",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Cadastro",
    id: 8,
    category:"cad",
    icon: "male",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Financeiro",
    id: 9,
    category:"fin",
    icon: "piggy-bank",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
]
const itemsNav= [
  { title: "Todos", id: 0, icon: "globe" },
  {
    title: "Profissional",
    id: 1,
    category:"pro",
    icon: "briefcase",
    price:29.99,
    card: true,
    description:"",
  },
  {
    title: "Reguladores",
    id: 2,
    category:"reg",
    icon: "university",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Sócio Ambiental",
    id: 3,
    category:"soc",
    icon: "tree",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Jurídico",
    id: 4,
    category:"jur",
    icon: "gavel",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Listas Restritivas",
    id: 5,
    category:"res",
    icon: "ban",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Mídia / Internet",
    id: 6,
    category:"mid",
    icon: "globe-americas",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Bens e Imóveis",
    id: 7,
    category:"bens",
    icon: "gem",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Cadastro",
    id: 8,
    category:"cad",
    icon: "male",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
  {
    title: "Financeiro",
    id: 9,
    category:"fin",
    icon: "piggy-bank",
    price:29.99,
    card: true,
    description:
      "O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos Diários Oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.",
  },
]

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
      itemsNav: [...itemsNav],
      items: [...itemsDefault],
      ordenation: [
        { name: "Lançamento", id: 0 },
        { name: "Alfabética", id: 1 },
      ],
    };
  },
  methods:{
    cardNav(category){
      this.items = itemsDefault.filter(e=>e.category === category);
      this.sortCards(this.selected_ord)
      if(!category){
        this.items = itemsDefault;
        this.sortCards(this.selected_ord)
      }
    },
    sortHandle(e){
      this.selected_ord = e.target.value
    },
    sortCards(value){
      switch(value){
        case 1: 
          this.items = [...this.items].sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          this.items = [...this.items].sort((a, b) => {
             if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          });
          break;
      }
    }
  },
  watch: {
    selected_ord: function(value) {
      this.sortCards(value)
    }
  }
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
