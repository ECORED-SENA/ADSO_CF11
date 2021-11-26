<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Le damos la bienvenida al estudio del componente “Propuesta técnica”. Para comenzar, explore el recurso que se presenta a continuación. ¡Muchos éxitos en esta experiencia!
    
    figure.mb-5
      .video
        <iframe width="950" height="534" src="https://www.youtube.com/embed/AdjZf9JzxgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
