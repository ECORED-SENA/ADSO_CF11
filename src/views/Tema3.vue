<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Validación de la propuesta técnica
    

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0.ontop.pt-lg-4
        
        .bg--blue.neg--right.mb-4(style='background-color: #F3F9FF;')
          p.mb-0 La comprobación y análisis de la propuesta de servicio de software estará mediada y determinada por aspectos relativos a la normatividad, a la contratación y/o licitación, a las garantías de efectividad de la propuesta misma, entre otros.
          
        p.mb-4 A continuación, le presentamos los elementos más relevantes que afectan directamente el proceso de validación de una propuesta técnica:
        
      .col-10.col-lg-6
        figure(data-aos="fade-left")
          img.mx-auto(src='@/assets/curso/tema3/img1.png', alt='imagen ambiental', style='width: 600px;')
    


    .row.justify-content-center.mb-5
      .col-lg-12.mb-4
        .fondo--slider
          SlyderE(indicadores="centro")
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.align-self-center
                h5 Contratación
                p.mb-0 Se realiza después que el cliente haya aceptado una de las propuestas técnicas presentadas, o que al ofertante le hayan adjudicado una licitación; para legalizar este trámite es necesario cerrar el acuerdo por medio de un contrato escrito, en el cual estén estipulado todos los términos y condiciones que se acordaron en la propuesta técnica o en el pliego de condiciones. 
                
              .col-10.col-md-6
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img2.svg', alt='imagen ambiental', style='width: 500px;')
                  
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.align-self-center
                h5 Fundamentos
                p.mb-0 El fin de los principios o fundamentos, en contratación, es garantizar a los ciudadanos un proceso público transparente y con igualdad, al que pueden acceder todas las personas o empresas que cumplan con los requisitos establecidos en un pliego de condiciones publicado por las entidades estatales, que pueden ser SENA, DIAN, Fuerzas militares, ICBF, DANE, Universidades, alcaldías, gobernaciones etc.
                
              .col-10.col-md-6
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img3.svg', alt='imagen ambiental', style='width: 500px;')
                  
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.align-self-center
                h5 Contratación privada
                p.mb-0 Se trata del acuerdo al que llegan dos partes que pueden ser personas naturales o jurídicas para que se haga un producto,  una labor o se deje de hacer algo, en este documento se pactan términos, acuerdos, multas y la forma de remuneración económica.
                
              .col-10.col-md-6
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img4.svg', alt='imagen ambiental', style='width: 500px;')
                  
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.align-self-center
                h5 Contratación pública o estatal
                p.mb-0 Según artículo 3 de la Ley 80 de 1993, la contratación estatal tiene como fin, “la continua y eficiente prestación de los servicios públicos y la efectividad de los derechos e intereses de los administrados que colaboran con ellas, en la consecución de dichos fines”; el estado contrata particulares para el cumplimiento de sus fines.
                
              .col-10.col-md-6
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img5.svg', alt='imagen ambiental', style='width: 500px;')
                  
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-0.align-self-center
                h5 La licitación
                p.mb-0 Método por el cual una entidad del estado otorga un servicio u obra a una empresa o persona que ofrece las mejores condiciones. La licitación <em>es privada,</em> cuando sólo pueden participar las empresas a las cuales se hayan enviado invitaciones. <em>Es pública,</em> cuando se abre a todos los participantes, cualquier persona puede participar en el proceso.
                
              .col-10.col-md-6
                figure
                  img.mx-auto(src='@/assets/curso/tema3/img6.svg', alt='imagen ambiental', style='width: 500px;')
                  
            
            
            









    #t_3_1.titulo-segundo.color-acento-contenido
      .h2 3.1 Aspectos de la contratación por licitación
    







    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 3.2 Normatividad














    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 3.3 Acuerdos

</template>

<script>
export default {
  name: 'Tema3',
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
