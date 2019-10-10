<template>
  <div>
    <ul class="lista-ul">
      <li
        class="lista-li"
        v-for="(miga, idx) in listaMigasDePan"
        :key="idx"
        @click="routeTo(idx)">
        <span
           v-if="miga.link"
           class="linked">
           {{ miga.name }}
        </span>
        <span v-if="miga.link">
            >
        </span>
        <span
          class="no-linked"
          v-else>
          {{ miga.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MigasDePan',
  data() {
    return {
      listaMigasDePan: [],
    };
  },
  mounted() {
    this.actualizarListaMigas();
  },
  watch: {
    $route() {
      this.actualizarListaMigas();
    },
  },
  methods: {
    routeTo(idxRuta) {
      if (this.listaMigasDePan[idxRuta].link) {
        this.$router.push({ name: this.listaMigasDePan[idxRuta].link });
      }
    },
    actualizarListaMigas() {
      this.listaMigasDePan = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style scoped>
.linked {
  text-decoration: underline;
  cursor: pointer;
}
.no-linked {
  font-style: italic;
  font-weight: bold;
  font-size: 0.9rem;
}
.lista-ul {
   list-style: none;
}
.lista-li {
  display: inline;
  padding-right: 3px;
}
</style>
