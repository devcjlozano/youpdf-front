<template>
<div class="inputPdf">
  <div
    class="inputPdf__contenedor-input">
    <v-file-input
      class="inputPdf__contenedor-input__input"
      v-model="files"
      @change="changeInputPdf"
      accept=".pdf"
      color="primary"
      counter
      label="Selección de pdf"
      placeholder="Haz click aquí para seleccionar tu archivo pdf"
      prepend-icon="mdi-paperclip"
      outlined
      :show-size="1000"
    >
      <template v-slot:selection="{ index, text }">
        <v-chip
          v-if="index < 2"
          color="primary"
          dark
          label
          small
        >
          {{ text }}
        </v-chip>

      </template>
    </v-file-input>
    <SnackBar
      color="primary"
      :snack-bar="snackBarVisible"
      mensaje="Upss, parece que el archivo no es un PDF o está dañado"
      @cerrar-snackBar="cerrarSnackBar"/>
  </div>
</div>
</template>
<script>
// eslint-disable-next-line import/extensions
import SnackBar from './SnackBar.vue';

export default {
  name: 'InputPdf',
  components: {
    SnackBar,
  },
  data() {
    return {
      files: null,
      fileDocument: '',
      numPages: 0,
      snackBarVisible: false,
    };
  },
  methods: {
    async changeInputPdf(file) {
      if (this.files !== null && this.files !== undefined) {
        if (file.type === 'application/pdf') {
          const nombrePdf = file.name.slice(0, file.name.length - 4);
          this.$emit('archivo-seleccionado', this.files, this.numPages, nombrePdf);
        } else if (this.files.length === undefined) {
          this.snackBarVisible = true;
          this.files = null;
        }
      } else {
        this.$emit('archivo-seleccionado', '');
      }
    },
    cerrarSnackBar() {
      this.snackBarVisible = false;
    },
  },
};
</script>

<style scoped>
.inputPdf{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

@media (min-width: 768px) {
  .inputPdf__contenedor-input {
    width: 80%;
  }
}
@media (min-width: 992px) {
  .inputPdf__contenedor-input {
    width: 60%;
  }
}
</style>
