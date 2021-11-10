<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 La propuesta técnica
    
    #t_2_1.titulo-segundo
      .h2 2.1 Estructura
    
    #t_2_2.titulo-segundo
      .h2 2.2 Términos de referencia (TdR)

    #t_2_3.titulo-segundo
      .h2 2.3 Elaboración de la propuesta técnica

    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
