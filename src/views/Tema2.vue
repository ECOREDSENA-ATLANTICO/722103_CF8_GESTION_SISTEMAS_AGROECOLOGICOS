<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Análisis del conflicto comunitario

    .row.justify-content-center.d-flex.align-items-center.fnd-8.mb-5
      .col-lg-12.col-sm-12.mt-5
        p La comunidad es el lugar donde la interacción social y los vínculos entre actores sociales generan un espacio de integración que configura tanto la convivencia como el conflicto. De esta manera, las relaciones sociales deben asegurar la convivencia, porque de eso depende el avance de las sociedades modernas, no obstante, esto no es así y hay momentos en que las relaciones sociales rebasan la capacidad de entendimiento y se genera el conflicto.  

    .row.justify-content-center.d-flex.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png', alt='Análisis del conflicto comunitario')

      .col-lg-8
        p.mb-3 Aunque el conflicto se genere por las relaciones humanas, este termina siendo inherente, debido a que la interacción social que genera la relación entre seres humanos diversos y con diferencias lleva a que el conflicto se dé de mayor o menor gravedad. 
        p.mb-3 Sin embargo, aunque en todo grupo social hay establecidos códigos para la convivencia, estos no se encuentran exentos del conflicto, debido a que en las comunidades también hay jerarquías, intereses y demandas de los diversos actores que están en constante relación. Como lo indican Muscolo y Estany (2006), el conflicto siempre se puede dar en las relaciones sociales diarias ya sean espontáneas o permanentes; es decir es inevitable, pero a su vez constructivo a pesar de que normalmente es indeseado, no es bien recibido. En la siguiente gráfica se puede conocer los diferentes tipos de conflictos que hay: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        figure
          img(src='@/assets/curso/temas/tema2/img-3.svg', alt='Análisis del conflicto comunitario')      
                





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
