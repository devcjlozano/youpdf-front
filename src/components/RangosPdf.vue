<template>
<div class="rangosPdf">
  <h2> Seleccionar páginas a extraer</h2>
  <span
    class="rangosPdf__info-paginas">
    Número de páginas del pdf: <strong> {{ numeroPaginas }} </strong>
  </span>
  <div class="rangosPdf__contenedorInputs">
    <v-snackbar
      v-model="snackBar"
      multi-line
      color="error"
      top
      bottom
      >
        {{ textoErrorRango }}
        <v-btn
          text
          @click="snackBar = false"
        >
        Cerrar
      </v-btn>

    </v-snackbar>
    <div class="rangosPdf__contenedorInputs__inputs">
      <v-text-field
        :max="numeroPaginas"
        :min="1"
        v-model="desdePagina"
        type="number"
        label="De la página"
        placeholder="Número de página"
        outlined
      ></v-text-field>
      <v-text-field
        :min="1"
        :max="numeroPaginas"
        v-model="hastaPagina"
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
          @click="anadirRango"
          solid
          color="primary">
          Añadir rango
        </v-btn>
      </div>
      <div class="boton-enviar">
        <v-btn
          color="primary"
          :disabled="rangos.length < 1"
          solid>
            <v-icon
              left
              class="icon-tijeras"> mdi-content-cut </v-icon>Dividir PDF
          </v-btn>
      </div>
    </div>
  </div>
  <div class="rangosPdf__contenedorTable">
    <div style="margin-bottom:10px">
      <span class="rangosPdf__info-rangos">  Rangos Seleccionados</span>
    </div>
    <div>
      <div>
        <v-data-table
          :headers="headers"
          :items="rangos"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          no-data-text="No hay rangos seleccionados"
          hide-default-footer
          @page-count="pageCount = $event"
          dense>
          <template v-slot:item.action="{ item }">
            <v-icon
        small
      >
        mdi-delete-outline
      </v-icon>
          </template>
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
      desdePagina: 1,
      hastaPagina: 1,
      snackBar: false,
      textoErrorRango: '',
      headers: [
        {
          text: 'Desde página',
          value: 'desde',
        },
        {
          text: 'Hasta página',
          value: 'hasta',
        },
        {
          text: 'Acciones',
          value: 'action',
        },
      ],
      rangos: [],
    };
  },
  methods: {
    anadirRango() {
      let desde = parseInt(this.desdePagina, 10);
      let hasta = parseInt(this.hastaPagina, 10);
      if (hasta < desde) {
        const hastaAux = hasta;
        hasta = desde;
        desde = hastaAux;
      }
      const esValido = this.validarRango(desde, hasta);
      if (esValido.error) {
        this.textoErrorRango = esValido.descripcionError;
        this.snackBar = true;
      } else {
        const objectRango = {
          desde,
          hasta,
        };
        this.rangos.push(objectRango);
      }
    },
    validarRango(hasta, desde) {
      if (hasta < 1 || desde < 1) {
        return {
          error: true,
          descripcionError: 'No se pueden seleccionar páginas inferiores a 1',
        };
      }
      if (hasta > this.numeroPaginas || desde > this.numeroPaginas) {
        return {
          error: true,
          descripcionError: 'No se puede seleccionar un rango que sobrepase el número de páginas del pdf',
        };
      }
      return {
        error: false,
        descripcionError: '',
      };
    },
  },
};
</script>

<style scoped>
.rangosPdf__info-paginas,
.rangosPdf__info-rangos {
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
</style>
