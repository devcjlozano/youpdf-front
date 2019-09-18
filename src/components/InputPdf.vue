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

        <span
          v-else-if="index === 2"
          class="overline grey--text text--darken-3 mx-2"
        >
        +{{ files.length - 2 }} File(s)
      </span>
      </template>
    </v-file-input>
  </div>
</div>
</template>
<script>
// eslint-disable-next-line import/extensions

export default {
  name: 'InputPdf',
  data() {
    return {
      files: null,
      fileDocument: '',
      numPages: 0,
    };
  },
  methods: {
    async changeInputPdf(file) {
      if (file !== null) {
        this.$emit('archivo-seleccionado', this.files, this.numPages);
      } else {
        this.$emit('archivo-seleccionado', '');
      }
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
