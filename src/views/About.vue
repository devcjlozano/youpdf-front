<template>
  <div class="about">
    <div class="mensaje-principal">
       <h1>Sobre You pdf</h1>
       <div class="mensaje-principal__texto">
        <p>Breve resumen sobre yoy pdf y sobre mí</p>
      </div>
    </div>
    <MigasDePan/>
    <div class="section__contenido">
      <div class="resumen">
        <div>
          <v-img
           class="img"
           src="../assets/img/avatarCJ.png"
           aspect-ratio="1"
          />
        </div>
        <div>
          <p> Mi nombre es <strong> Carlos Javier </strong>.
              Este pequeño <strong> side proyect </strong> llamado <strong> You Pdf </strong>,
              está creado con el framework javascript
            <a
              href="https://vuejs.org/"
              target="__blank">Vue </a>
              y el framwork de diseño
            <a
              href="https://vuetifyjs.com/"
              target="__blank">Vuetify</a>.
          </p>
          <p> Si quieres ver más side proyects que he compartido, visita mi gitHub
            <a
                href="https://github.com/devcjlozano"
                target="__blank">devcjlozano</a>.</p>
        </div>
      </div>
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
<style scoped>
 .resumen {
   display: flex;
 }
 .img {
   width: 200px;
 }
 @media (min-width: 768px) {
  .img {
    width: 400px;
  }
}
</style>
