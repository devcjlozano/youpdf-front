<template>
<div class="rangosPdf">
  <h1> Seleccionar páginas a extraer</h1>
  <h3 v-text="existePdf ? 'hay pdf': 'no hay pdf'"> </h3>
  <span
    class="rangosPdf__info-paginas">
    Número de páginas del pdf: {{ numeroPaginas }}
  </span>
</div>
</template>
<script>

export default {
  name: 'RangosPdf',
  props: {
    numeroPaginas: {
      type: Number,
      default: 0,
    },
    existePdf: {
      type: Boolean,
      default: false,
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
  .rango__pdf-info-paginas {
  font-size: 0.9em;
  font-weight: 500;
}
</style>
