<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En este componente se consolida el material de estudio para que el aprendiz pueda identificar lo referente a la gestión comunitaria (fases e instrumentos), realice un análisis de los actores sociales y los conflictos comunitarios que se pueden presentar, además de las técnicas de manejo y mecanismos para resolverlos, teniendo en cuenta la toma de decisiones, comunicación asertiva y la negociación.
    p También, hace referencia a las ofertas institucionales que ofrece Colombia para generar procesos de desarrollo y transformación mediante espacios y escenarios comunitarios que permiten identificar la gestión participativa y comunitaria en concordancia con los tipos de actores sociales dentro de un contexto agroecológico, en el cual la intervención social es fundamental, así como el diseño y formulación de proyectos sociales encaminados a fortalecer los territorios en el que se desarrollan este tipo de propuestas.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá apreciar en el siguiente mapa conceptual.


    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis-.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
