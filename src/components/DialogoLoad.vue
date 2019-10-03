<template>
    <v-dialog
        persistent
        width="290"
        v-model="dialogoVisible">
        <v-card
          color="primary"
          dark>
          <v-card-text
            class="card-visor-text">
            {{ textoCargando }}
            <v-progress-linear
              color="white"
              indeterminate
              size="64">
            </v-progress-linear>
          </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>

export default {
  name: 'DialogoLoad',
  props: {
    dialogoVisible: {
      type: Boolean,
      default: false,
    },
    textoCargando: {
      type: String,
      default: '',
    },
  },
  components: {
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.v-dialog > .v-card > .v-card__text {
  padding: 12px;
}
</style>
