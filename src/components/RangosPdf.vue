<template>
<div class="rangosPdf">
  <h2> Seleccionar páginas a extraer</h2>
  <span
    class="rangosPdf__info-paginas">
    Número de páginas del pdf: <strong> {{ numeroPaginas }} </strong>
  </span>
  <div class="rangosPdf__contenedorInputs">
    <div class="rangosPdf__contenedorInputs__inputs">
      <v-text-field
        type="number"
        label="De la página"
        placeholder="Número de página"
        outlined
      ></v-text-field>
      <v-text-field
        class="rangosPdf__contenedorInputs_inputHasta"
        type="number"
        label="a la página"
        placeholder="Número de página"
        outlined
      ></v-text-field>
    </div>
    <div class="rangosPdf__contenedor__buttons">
      <div>
        <v-btn

        color="primary">
          Añadir rango
        </v-btn>
      </div>
      <div class="boton-enviar">
        <v-btn
          color="primary"
          solid>
            <v-icon
              left
              class="icon-tijeras"> mdi-content-cut </v-icon>Dividir PDF
          </v-btn>
      </div>
    </div>
  </div>
  <div class="rangosPdf__contenedorTable">
    <div>
      <span class="rangosPdf__info-paginas">  Rangos Seleccionados</span>
    </div>
    <div>
      <div>
        <v-data-table
          :headers="headers"
          :items="rangos"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          @page-count="pageCount = $event"
          dense>
        </v-data-table>
      </div>
      <div class="rangosPdf__contenedorTable__footer">
        <v-pagination
          v-model="page"
          :length="pageCount"></v-pagination>
    </div>
    </div>
  </div>
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
      page: 1,
      pageCount: 0,
      itemsPerPage: 6,
      headers: [
        {
          text: 'Desde página',
          value: 'desde',
        },
        {
          text: 'Hasta página',
          value: 'hasta',
        },
      ],
      rangos: [
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
        {
          desde: 1,
          hasta: 2,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.rangosPdf__info-paginas {
  font-size: 0.9em;
  font-style: italic;
}
.rangosPdf__contenedorInputs {
  margin-top: 20px;
  display: flex;
  flex-direction: column
}
.rangosPdf__contenedorInputs__inputs {
  display: flex;
}
.rangosPdf__contenedorInputs_inputHasta {
  margin-left: 10px;
}
.rangosPdf__contenedorTable {
  margin-top: 20px;
}
.rangosPdf__contenedorTable__footer {
  display: flex;
  justify-content: center;
}
.rangosPdf__contenedor__buttons {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.boton-enviar {
  margin-top: 10px;
  margin-left: 10px;
}
.icon-tijeras {
  font-size: 1.2em
}
@media (min-width: 488px) {
  .boton-enviar {
    margin-top: 0;
    margin-left: 10px;
  }
}
@media (max-width: 488px) {
  .rangosPdf__contenedor__buttons {

  }
}
</style>
