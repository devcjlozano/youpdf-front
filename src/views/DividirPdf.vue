<template>
  <div class="dividirPdf">
    <div
      class="dividirPdf__contenedor-input">
      <v-file-input
        class="dividirPdf__contenedor-input__input"
        v-model="files"
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

export default {
  name: 'DividirPdf',
  components: {
  },
  data() {
    return {
      files: [],
    };
  },
};
</script>
<style scoped>
.dividirPdf,
.dividirPdf__contenedor-input {
  display: flex;
  justify-content: center;
}
.dividirPdf__contenedor-input {
  width: 100%;
}
@media (min-width: 768px) {
  .dividirPdf__contenedor-input {
    width: 80%;
  }
}
@media (min-width: 992px) {
  .dividirPdf__contenedor-input {
    width: 60%;
  }
}
</style>
