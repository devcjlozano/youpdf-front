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
            item-key="index"
            no-data-text="No hay rangos seleccionados"
            hide-default-footer
            @page-count="pageCount = $event"
            dense>
            <template v-slot:item.action="{ item }">
              <v-tooltip top>
                <template v-slot:activator=" { on }">
                  <v-icon
                    @click="abrirDialogoBorrarRango(item.idRango)"
                    small
                    v-on="on"
                  >
                    mdi-delete-outline
                  </v-icon>
                </template>
                <span> Eliminar este rango</span>
              </v-tooltip>
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
    <SnackBar
      :color="colorSnackBar"
      :snack-bar="snackBarVisible"
      :mensaje="textoMensajeRango"
      @cerrar-snackBar="cerrarSnackBar"/>
    <DialogoRangos
       :dialogo-visible="dialogoRangosVisible"
       @cerrar-dialogo-rangos="cerrarDialogoRangos"
       @borrar-rango="borrarRango"/>
  </div>
</template>
<script>
import SnackBar from './SnackBar.vue';
import DialogoRangos from './DialogoRangos.vue';

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
    SnackBar,
    DialogoRangos,
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      colorSnackBar: '',
      itemsPerPage: 6,
      desdePagina: 1,
      hastaPagina: 1,
      idRango: 0,
      idBorrar: 0,
      snackBarVisible: false,
      textoMensajeRango: '',
      dialogoRangosVisible: false,
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
        this.abrirSnackBar(esValido.descripcionError, 'primary');
      } else {
        if (esValido.warning) {
          this.abrirSnackBar(esValido.descripcionWarning, 'warningCustom');
        }
        const objectRango = {
          desde,
          hasta,
          idRango: this.idRango,
        };
        this.rangos.push(objectRango);
        this.idRango += 1;
      }
    },
    validarRango(desde, hasta) {
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
      if (this.rangos.findIndex(element => element.desde === desde
        && element.hasta === hasta) !== -1) {
        return {
          warning: true,
          descripcionWarning: `Se añade el rango seleccionado pero ten en cuenta que ya existe uno o 
                varios rangos iguales`,
        };
      }
      return {
        error: false,
        descripcionError: '',
      };
    },
    abrirSnackBar(mensaje, color) {
      this.textoMensajeRango = mensaje;
      this.colorSnackBar = color;
      this.snackBarVisible = true;
    },
    cerrarSnackBar() {
      this.snackBarVisible = false;
    },
    abrirDialogoBorrarRango(idBorrar) {
      this.idBorrar = idBorrar;
      this.dialogoRangosVisible = true;
    },
    cerrarDialogoRangos() {
      this.dialogoRangosVisible = false;
    },
    borrarRango() {
      const posRango = this.rangos.findIndex(element => element.idRango === this.idBorrar);
      if (posRango !== -1) {
        this.rangos.splice(posRango, 1);
      }
      this.cerrarDialogoRangos();
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
