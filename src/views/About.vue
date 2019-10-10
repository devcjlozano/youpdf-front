<template>
  <div class="about">
    <div class="mensaje-principal">
       <h1>Sobre nosotrosF</h1>
       <div class="mensaje-principal__texto">
        <p>pagina sobre nosotros</p>
      </div>
    </div>
    <MigasDePan/>
    <div class="section__contenido">
      <h1>YouPdf es una app web desarrollada por Carlos J </h1>
    </div>
  </div>
</template>

<script>
import MigasDePan from '@/components/MigasDePan.vue';
// @ is an alias to /src

export default {
  name: 'About',
  components: {
    MigasDePan,
  },
};
</script>
