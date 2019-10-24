<template>
<div class="unir-pdf">
  <DialogoLoad
      texto-cargando='Preparando tu pdf, un momento por favor'
      :dialogo-visible="loadingUnir"/>
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
        <draggable
           v-model="filesSeleccionados"
           v-bind="dragOptions"
           @start="dragfuncionStart"
           @end="dragfuncionEnd">
          <transition-group
            :name="!drag ? 'flip-list' : null"
            class="transition-wrapper"
            type="transition">
              <div
                v-for="(file, index) in filesSeleccionados"
                :key="index"
                class="visores__visor">
                <VisorPdf
                  :src="file.fileBase64"/>
              </div>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div class="boton-unir">
      <v-btn
       v-if="filesSeleccionados.length > 0"
       :disabled="filesSeleccionados.length < 2"
       @click="unirPdf"
       color="primary">
         Unir Pdf
       </v-btn>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import MigasDePan from '@/components/MigasDePan.vue';
import InputPdf from '@/components/InputPdf.vue';
import toBase64 from '@/utils/general';
import VisorPdf from '@/components/VisorPdf.vue';
import DialogoLoad from '@/components/DialogoLoad.vue';
import api from '@/api/index';

export default {
  name: 'UnirPdf',
  components: {
    MigasDePan,
    InputPdf,
    VisorPdf,
    DialogoLoad,
    Draggable,
  },
  data() {
    return {
      filesSeleccionados: [],
      filesOrdenados: [],
      filesBase64: [],
      loadingUnir: false,
      drag: false,
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      };
    },
  },
  methods: {
    async archivosSeleccionados(files) {
      if (files !== '') {
        const promesasFiles = [];
        // this.filesSeleccionados.push(...files);
        files.forEach((file) => {
          promesasFiles.push(toBase64(file));
        });
        const results = await Promise.all(promesasFiles);
        results.forEach((fileBase64, index) => {
          const fileObject = {
            file: files[index],
            fileBase64,
          };
          this.filesSeleccionados.push(fileObject);
        });
        // this.filesBase64.push(...results);
      }
    },
    unirPdf() {
      this.loadingUnir = true;
      const formData = new FormData();
      for (let i = 0; i < this.filesSeleccionados.length; i += 1) {
        formData.append('files', this.filesSeleccionados[i].file);
      }
      api.unirPdf(formData).then((data) => {
        this.prepararDescargaPdf(data.data).then((urlDescarga) => {
          this.descargarPdf(urlDescarga);
          this.loadingUnir = false;
        });
      });
    },
    prepararDescargaPdf(pdfData) {
      return new Promise((resolve) => {
        const blob = new Blob([pdfData], { type: 'data:application/pdf' });
        const url = window.URL || window.webkitURL;
        const downloadUrl = url.createObjectURL(blob);
        resolve(downloadUrl);
      });
    },
    descargarPdf(urlDescarga) {
      const a = document.createElement('a');
      a.download = 'unido.pdf';
      document.body.appendChild(a);
      a.href = urlDescarga;
      a.click();
      document.body.removeChild(a);
    },
    dragfuncionStart() {
      this.drag = true;
    },
    dragfuncionEnd() {
      this.drag = false;
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
  cursor: move;
}
.titulo-visor {
  text-align: center;
  margin-bottom: 20px;
}
.boton-unir {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.transition-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.flip-list-move {
  transition: 0.5s;
}
.no-move {
  transition: 0s;
}
</style>
