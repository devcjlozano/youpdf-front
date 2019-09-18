<template>
<div class="rangosPdf">
  <h1> Aquí irán los rangos, bieeeeen</h1>
  <h3 v-text="existePdf ? 'hay pdf': 'no hay pdf'"> </h3>
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
</style>
