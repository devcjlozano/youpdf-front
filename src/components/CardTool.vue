<template>
<div v-if="herramienta!== {}">
    <v-card
      class="mx-auto"
      :flat="flat"
      :loading="loading"
      :outlined="outlined"
      :elevation="elevation"
      :raised="raised">
      <v-img
        :src="herramienta.rutaIcon"
        aspect-ratio="1"
      >
        <template v-slot:placeholder>
          <v-layout
            fill-height
            align-center
            justify-center
            ma-0
          >
            <v-progress-circular indeterminate></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
        <v-card-text>
          <div class="text-card-principal">
            <span class="text-card-principal__texto">
              {{ herramienta.texto }}
            </span>
          </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>

export default {
  name: 'CardTool',
  props: {
    herramienta: {
      type: Object,
      default: () => {
      },
    },
  },
  components: {
  },
  data() {
    return {
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
    };
  },
  methods: {
    obtenerRutaImagen() {
      return '..assets/icons/scissors.png';
    },
  },
};
</script>

<style scoped>
.text-card-principal {
   text-align: center;
}
.text-card-principal__texto {
  font-size: 1.3rem;
}
</style>
