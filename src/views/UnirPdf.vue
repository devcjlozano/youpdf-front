<template>
<div class="unir-pdf">
  <div class="mensaje-principal">
    <h1>Unir Pdf</h1>
    <div class="mensaje-principal__texto">
      <p>Une los pdf que selecciones. El orden será el mismo según los vayas cargando  </p>
    </div>
  </div>
  <div>
      <MigasDePan/>
  </div>
  <div class="section__contenido">
    <InputPdf
      @archivos-seleccionados="archivosSeleccionados"
      :multiple="true"/>
    <h3
      class="titulo-visor"
      v-if="filesBase64.length > 0"
      >Pdf cargados para unir</h3>
    <div class="visores">
      <div
         v-for="(fileBase64, index) in filesBase64"
         :key="index"
        class="visores__visor">
      <VisorPdf
         :src="fileBase64"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import MigasDePan from '@/components/MigasDePan.vue';
import InputPdf from '@/components/InputPdf.vue';
import toBase64 from '@/utils/general';
import VisorPdf from '@/components/VisorPdf.vue';

export default {
  name: 'UnirPdf',
  components: {
    MigasDePan,
    InputPdf,
    VisorPdf,
  },
  data() {
    return {
      filesSeleccionados: [],
      filesBase64: [],
    };
  },
  methods: {
    async archivosSeleccionados(files) {
      const promesasFiles = [];
      this.filesSeleccionados = files;
      this.filesSeleccionados.forEach((file) => {
        promesasFiles.push(toBase64(file));
      });
      const results = await Promise.all(promesasFiles);
      this.filesBase64.push(...results);
    },
  },
};
</script>
<style scoped>
.visores {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.visores__visor {
  width: 150px;
  height: 210px;
  padding: 6px;
}
.titulo-visor {
  text-align: center;
  margin-bottom: 20px;
}
</style>
