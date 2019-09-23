<template>
    <v-snackbar
      v-model="snackBar"
      multi-line
      :color="color"
      top
      bottom
      >
        {{ mensaje }}
        <v-btn
          text
          @click="cerrarSnackBar"
        >
        Cerrar
      </v-btn>
    </v-snackbar>
</template>
<script>

export default {
  name: 'SnackBar',
  props: {
    snackBar: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    mensaje: {
      type: String,
      default: '',
    },
  },
  components: {
  },
  data() {
    return {};
  },
  methods: {
    cerrarSnackBar() {
      this.$emit('cerrar-snackBar');
    },
  },
};
</script>

<style scoped>

</style>
