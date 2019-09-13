<template>
    <v-card
      :width="width"
      :height="height"
      outlined
     >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">{{ herramienta.titulo }}</v-list-item-title>
          <v-list-item-subtitle class="card__subtitle">
            <span>
              {{ herramienta.subtitulo }}
            </span>
          </v-list-item-subtitle>
       </v-list-item-content>
       <v-list-item-avatar
          tile
          size="80">
          <v-img
           :src="herramienta.rutaIcon"
           width="20px"
           aspect-ratio="1.5"
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
        </v-list-item-avatar>
      </v-list-item>
      <v-card-text
        class="card__text">
        <span>{{ herramienta.texto }}</span>
      </v-card-text>
    </v-card>
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
      width: '250px',
      height: '210px',
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
.card__subtitle {
  font-weight: 700;
}
.card__text{
  padding: 0 16px;
}
.card-tool {
  display: flex;
}
.text-card-principal {
   text-align: center;
}
.text-card-principal__texto {
  font-size: 1.3rem;
}
</style>
