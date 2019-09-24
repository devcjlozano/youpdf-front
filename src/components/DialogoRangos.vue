<template>
    <v-row justify="center">
    <v-dialog
      v-model="dialogoVisible"
      persistent
      max-width="290">
      <v-card>
        <v-card-title class="headline">Eliminar Rango</v-card-title>
        <v-card-text>¿Estás seguro de eliminar este rango?</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            color="primary"
            @click="aceptar">Eliminar</v-btn>
          <v-btn
            color="primary"
            outlined
            @click="cancelar">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

export default {
  name: 'DialogoRangos',
  props: {
    dialogoVisible: {
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
    aceptar() {
      this.$emit('borrar-rango');
    },
    cancelar() {
      this.$emit('cerrar-dialogo-rangos');
    },
  },
};
</script>

<style scoped>

</style>
