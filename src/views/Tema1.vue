<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Generalidades de la propuesta técnica     
  

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0.ontop.pt-lg-4
        .bg--blue.neg--right.mb-4
          p.mb-0 Para el diseño, construcción y presentación de la propuesta técnica de servicios de <em>software,</em> se deben considerar aspectos y elementos de suma importancia que dan carácter a la misma y que otorgan, tanto al oferente como al cliente, seguridad y confianza.
        p.mb-4 Para el éxito de una propuesta técnica se deberá tener claridad en aspectos vitales como: 
        .row.justify-content-center.mb-4
          .col-md-11
            ul.lista-ul.ps-md-0
              li 
                i.fas.fa-layer-group.pe-3
                p.mb-0 Las características y necesidades del cliente.
              li 
                i.fas.fa-layer-group.pe-3
                p.mb-0 Contratación.
              li 
                i.fas.fa-layer-group.pe-3
                p.mb-0 Costos y presupuestos.
              li 
                i.fas.fa-layer-group.pe-3
                p.mb-0 Estructura lógica de la propuesta.
              li 
                i.fas.fa-layer-group.pe-3
                p.mb-0 Características del <em>software,</em> entre otras.
      
      .col-10.col-lg-6
        figure(data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500")
          img.mx-auto(src='@/assets/curso/tema1/img1.png', alt='imagen ambiental', style='width: 600px;')


    
    .row.mb-5
      .col-lg-7
        p.mb-0 En el siguiente recurso didáctico, le presentamos las generalidades que debe conocer, comprender y profundizar. Estúdielos atentamente y procure llevar registro en su libreta personal de apuntes.

    .row.justify-content-center
      .col-lg-12
          
        TabsB.color-acento-contenido
          .pb-0(titulo="Presupuesto" :icono="require('@/assets/curso/tema1/icon1.svg')")
            .row.justify-content-center(style='background-color: #f3f9ff')
              .col-md-12.py-4
                figure
                  img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='imagen ambiental', style='')
                  
          .pb-0(titulo="Conceptos" :icono="require('@/assets/curso/tema1/icon2.svg')")
            .row.justify-content-center(style='background-color: #f3f9ff')
              .col-md-12.p-4.p-lg-5
                .row
                  .col-lg-6
                      
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num1.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.pe-0
                              h5(style='color: #104C82') Contrato
                              p.mb-0 Documento legal en el que dos o más partes acuerdan cumplir condiciones, teniendo como contraprestación un fin económico.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon8.svg', alt='imagen ambiental', style='width: 64px')
                          
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num2.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Adición de contrato
                              p.mb-0 Adición que se puede hacer en tiempo y/o valor. Si es en valor SOLO se puede adicionar hasta el 50 % del valor inicial del contrato y nunca exceder este tope.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon9.svg', alt='imagen ambiental', style='width: 64px')
                          
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num3.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Activos
                              p.mb-0 Conjunto de bienes y derechos con valor monetario que son propiedad de una empresa, institución o individuo.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon10.svg', alt='imagen ambiental', style='width: 64px')
                          
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num4.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Pasivos
                              p.mb-0 Conjunto de obligaciones pendientes, tales como deudas no satisfechas.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon11.svg', alt='imagen ambiental', style='width: 64px')
                          
                
                  .col-lg-6
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num5.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') CDP o Certificado de Disponibilidad Presupuestal
                              p.mb-0 Documento que garantiza o respalda la existencia de recursos para atender un gasto específico.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon12.svg', alt='imagen ambiental', style='width: 64px')
                            
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num6.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Monetización
                              p.mb-0 Proceso por medio del cual una determinada acción es convertida en dinero. Término usado, generalmente, en redes sociales y plataformas con <em>streaming.</em>
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon13.svg', alt='imagen ambiental', style='width: 64px')
                            
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num7.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Gasto
                              p.mb-0 Consumo de un bien o servicio a cambio de una contraprestación.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon14.svg', alt='imagen ambiental', style='width: 64px')
                            
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num8.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') Licitación
                              p.mb-0  Procedimiento formal por el cual un organismo público demanda obras, servicios, bienes, entre otros, al sector privado.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon15.svg', alt='imagen ambiental', style='width: 64px')
                            
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img(style='min-width: 90px')
                        img.mx-auto(src='@/assets/curso/tema1/num9.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--shadowgrey
                        .p-4.ps-2.pe-1
                          .row
                            .col.align-self-center.pe-0
                              h5(style='color: #104C82') <em>Freelance</em>
                              p.mb-0  Trabajo o trabajador independiente.
                            .col-auto.align-self-center
                              figure
                                img.mx-auto(src='@/assets/curso/tema1/icon16.svg', alt='imagen ambiental', style='width: 64px')
                            
                
                
            
            
          .pb-0(titulo="Teoría" :icono="require('@/assets/curso/tema1/icon3.svg')")
            .row.justify-content-center(style='background-color: #f3f9ff')
              .col-md-12.py-4
                ImagenInfografica.color-primario.mb-5
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/tema1/img4.svg', alt='')
                      
                  
                  .tarjeta.color-secundario.p-3(x="28%" y="40%" numero="", style='background-color: #1565C0')
                    p.mb-0 Permite generar conexión más cercana para darse a conocer y descifrar lo que busca el cliente.
                  
                  .tarjeta.color-secundario.p-3(x="41%" y="18.5%" numero="", style='background-color: #1565C0')
                    p.mb-0 La propuesta debe realizarse teniendo en cuenta a la persona que se entrevista ya que cada funcionario tiene expectativas y necesidades diferentes de acuerdo a su cargo y rol dentro de la empresa.
                  
                  .tarjeta.color-secundario.p-3(x="60%" y="18%" numero="", style='background-color: #1565C0')
                    p.mb-0 Solicitar información sobre cómo interactúa la compañía, su modelo de negocios, procesos y procedimientos, comprendiendo necesidades del cliente y sugiriendo nuevas soluciones a problemas que aún no detectan.
                  
                  .tarjeta.color-secundario.p-3(x="72%" y="40%" numero="", style='background-color: #1565C0')
                    p.mb-0 Solicitar conocer el presupuesto que el cliente tiene destinado para ejecutar este proyecto, en algunos casos hay que amoldarse a él y cubrir necesidades de mayor prioridad y en otros casos se puede negociar ofreciendo más servicios o módulos extras, generado así más recursos.
                  
                
          .pb-0(titulo="Costos" :icono="require('@/assets/curso/tema1/icon4.svg')")
            .row.justify-content-center(style='background-color: #f3f9ff')
              .col-md-12.py-4
                .row.justify-content-center
                    
                  .col-10.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.color-primario.p-4
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img.mx-auto(src='@/assets/curso/tema1/icon5.svg', alt='', style='width: 150px')
                          
                      h5.text-center El costo
                      p.mb-4.text-center También llamado coste, es el valor económico que se cobra por realizar un producto, prestar un servicio o vender un bien, aquí se debe tener en cuenta la adquisición de insumos y los gastos que se derivan de la producción, como el pago de la mano de obra, administrativos, etc. 
                      
                  .col-10.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.color-primario.p-4
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img.mx-auto(src='@/assets/curso/tema1/icon6.svg', alt='', style='width: 150px')
                          
                      h5.text-center En este caso en particular
                      p.mb-4.text-center La estimación del costo de desarrollo de <em>software</em> es un factor sumamente importante en el análisis del proyecto informático y propuesta técnica. Hay que tener en cuenta el esfuerzo, costo y tiempo de las actividades que se realizarán en el proyecto.
                      
                  .col-10.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.color-primario.p-4
                      .row.justify-content-center.mb-3
                        .col-7
                          figure
                            img.mx-auto(src='@/assets/curso/tema1/icon7.svg', alt='', style='width: 150px')
                          
                      h5.text-center Al planear los costos, tenga en cuenta:
                      p.mb-0.text-center Tamaño del <em>software</em> que se realizará, tiempo estimado de producción. ¿Se realizará el trabajo por módulos? ¿Se necesita contratar personal de apoyo para la producción y/o soporte? ¿Cómo se dará soporte técnico? (Por cuánto tiempo, presencial o remoto). ¿Se necesita adquirir equipos tecnológicos?
                      















</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
