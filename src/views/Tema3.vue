<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Identificación de los escenarios participativos comunitarios

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.cent(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.fnd-4
        p.text-white.pt-5 La transformación social requiere que los actores generen espacios comunitarios para la participación, en esa medida, identificar escenarios participativos conlleva a que la acción social se fortalezca a través de la democratización y el trabajo en equipo dentro de la comunidad, mediados por la transformación social desde la gestión endógena de los líderes comunitarios y no desde la gestión parlamentario o gubernamental. 
        br
        br
        p.mb-0.text-white.pb-5 Más aún, los escenarios participativos comunitarios son propuestas desestructurantes que promueven las posibilidades e identifican las limitaciones en dichos procesos de contención político-social.

    .row.justify-content-center.align-items-center
      .col-lg-11.bgr

        .bloque-texto-g.b-t-g.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bl-t_img.d-none.d-lg-flex(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-2.svg')})`}"
          )
          .bloque-texto-g__texto.bl-t_texto.p-4
            p.mb-0 Identificar escenarios permite conocer las percepciones sobre las decisiones futuras que se toman en el presente. La ordenación de las decisiones desde el reconocimiento de escenarios que permitan la participación comunitaria contribuye a explorar elementos posibles, probables y deseados en la gestión comunitaria.  


    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema2/img-21.svg', alt='')
      .list2__txt
        h3.mb-0 Tipos y características de escenarios comunitarios 


    .row.justify-content-center.d-flex.align-items-center.mb-5
      .col-lg-7
        p.mb-3 Los escenarios comunitarios forman parte de la intervención que se puede llevar a cabo dentro de las organizaciones sociales y comprenden la diversidad de aspectos que los constituyen como las necesidades sociales, el reconocimiento de las relaciones que estructuran la interacción social y la diversidad de actores que componen la comunidad. 
        .cajon.color-acento-contenido.fnd-5.p-4.mb-4
          p En esa medida, están mediados por los procesos participativos que se estructuran a través de la manifestación social, política, cultural, comunitaria y ciudadana dentro de un contexto determinado por un espacio histórico, económico, social que ejerce influencia y que no es posible modificarlo (Lapalma, 2001). 
          p Además, tienen como características la estructuración de los territorios y el espacio social en el que se establecen, de ahí que, hablar de escenario comunitario es entender que la conformación de esta deriva de situaciones dialógicas entre el territorio y el contexto social determinado por la construcción y desarrollo de propuestas para la intervención. Los tipos de escenarios comunitarios entonces surgen de la gestión endógena de las comunidades para su desarrollo y el cambio social al margen de la organización gubernamental. 

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img-4.png', alt='Análisis del conflicto comunitario')



    .row.justify-content-center.d-flex.align-items-center.mb-5(data-aos='fade-right')

      .titulo-sexto.color-acento-contenido.mb-4.ms-4
        h5 Figura 6. 
        span Escenarios comunitarios

      figure
        img(src='@/assets/curso/temas/tema3/img-5.svg', alt='Actores sociales')
          

    Separador

    #t-3-1.titulo-segundo.color-acento-contenido
      h2 3.1 Oferta institucional en el territorio   

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img-6.png', alt='Oferta institucional en el territorio ')
      .col-lg-7
        p Esta oferta se consolida como el conjunto de bienes y servicios derivados de los planes, programas y proyectos de entidades públicas y privadas que se encuentran en todo el territorio y tienen el propósito de orientar, atender e impactar en las condiciones de vida de los colombianos. La oferta institucional hace parte de los planes de ordenamiento territorial de cada uno de los departamentos y municipios, busca promover estrategias para el acceso, oportunidad y pertinencia para los pobladores (Copello, 2014). 
        p El Gobierno nacional por medio del Departamento Nacional de Planeación (DPN), tiene un manual en el cual, se describen todos los planes, proyectos sectoriales y programas, además de los servicios de asistencia técnica y asesorías para departamentos y municipios en los que las instituciones nacionales manejan asuntos territoriales. 

    .row.justify-content-center.align-items-center
      .col-lg-10        
        .tarjeta.color-primario.p-3.mb-5.fnd-d
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/tema3/img-7.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-white La estructura estatal y la información para cada entidad pública está contenida en el manual del Departamento Nacional de Planeación y en el portal web del Gobierno nacional que compila la mayoría de la información de interés para las entidades territoriales y sus autoridades; actualmente se puede consultar la oferta institucional del gobierno nacional en el Portal Territorial 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://portalterritorial.dnp.gov.co/AdmOIGN/OIGN ')" target="_blank")
                    span Abrir
                    i.fas.fa-link              


    .row.justify-content-center.align-items-center
      .col-lg-11
        .bloque-texto-g.b-t-g.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bl-t_img2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1-.svg')})`}"
          )
          .bloque-texto-g__texto.bl-t_texto2.p-4
            p.mb-0 Entonces, la oferta institucional del territorio está mediada tanto por la actuación del Estado como por la operación de instituciones privadas que velan por el desarrollo social y la gestión territorial. En ese sentido, la oferta institucional del territorio es variada e integra a la Presidencia de la República, ministerios, alcaldías, gobernaciones y demás instituciones públicas del Estado y entidades territoriales.  
    
    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
        h5 Figura 7. 
        span Entidades y funciones 

      .col-md-6.col-lg.mb-5.mb-lg-0.fnd-10-.mx-3

            .p-4
              p Según lo expone Copello (2014), las entidades territoriales se ajustan a la estructura de administración pública definidas por la ley colombiana, son: 

      .col-md-6.col-lg.mb-5.mb-lg-0.fnd-11-.mx-3
          .text_center
            figure
              img.img-362(src='@/assets/curso/temas/tema3/img-10.svg' )

            .text-white.p-4
              p Los departamentos donde el <b>gobernador</b> es quien dirige las entidades territoriales y locales, entre las que se destacan la Asamblea Departamental y la Contraloría Departamental. 
      
      .col-md-6.col-lg.mb-5.mb-lg-0.fnd-11-.mx-3
          .text_center
            figure
              img.img-362(src='@/assets/curso/temas/tema3/img-11.svg')          
          .text-white.p-4
            p Local, aquí la alcaldía en cabeza del <b>alcalde municipal</b> tiene adscrito el Concejo Municipal, la Personería y la Contraloría (municipios de determinado tamaño).            


    .row.justify-content-center.d-flex.align-items-center.mb-5
      .col-lg-7
        .cajon.color-acento-contenido.fnd-5.p-4.mb-4
          p A partir de esta estructura básica, los departamentos, distritos y municipios tienen autonomía para determinar su estructura administrativa, limitada por la disponibilidad de recursos fiscales.

        p.mb-3 La gestión pública de las entidades territoriales busca el mejoramiento de las condiciones de vida de la población, y velar por los derechos y la reducción de la pobreza. De igual forma, según lo expone la Constitución Política de Colombia de 1991, en el artículo 287, “las entidades territoriales disfrutan de autonomía para la gestión de sus intereses y dentro de los límites de la Constitución y la Ley”; por tanto, tienen personería jurídica y se ajustan al derecho público. 
        p.mb-3 Por su parte para la Procuraduría General de la Nación (2011) y el Instituto de Estudios del Ministerio Público (2011), las entidades territoriales se rigen por derechos que son enfocados al campo político, administrativo y fiscal, los cuales se gobiernan por autoridades propias (político), ejercen las competencias que les correspondan (administrativo), participan en rentas nacionales y establecen tributos necesarios para el cumplimiento de sus funciones (fiscal). 

      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema3/img-12.svg', alt='Análisis del conflicto comunitario')


    .row.justify-content-center.align-items-center
      .col-lg-10

        .bloque-texto-g.b-t-g3.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.bl-t_img3(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-13.svg')})`}"
          )
          .bloque-texto-g__texto.bl-t_texto3.py-4
            p.mb-3 Las funciones de las entidades territoriales se establecen a través de los planes de ordenamiento territorial, sin embargo, estas deben encargarse de formular planes y proyectos de acción, operación e inversión basados en parámetros que aseguren la mayor eficiencia y eficacia. 
            p.mb-0 Así mismo, la planeación financiera que deben establecer las entidades se debe ajustar a los presupuestos públicos y así elaborar la programación financiera que sustente la viabilidad de los presupuestos y planes de desarrollo.

    Separador


    #t-3-2.titulo-segundo.color-acento-contenido
      h2 3.2 Canales de comunicación 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 La comunicación en las entidades territoriales debe permitir el acceso a los planes, proyectos y estrategias de desarrollo comunitario que afianzan y consolidan las funciones institucionales y el acceso de los ciudadanos. 
        br
        br
        p.mb-0 De esta manera, los canales de comunicación institucional y gubernamental se estructuran de manera que, el acceso a la información consolide el intercambio de información e ideas pertinentes para que se fomente un canal de comunicación directo y de pertinencia para la comunidad. De aquí que para Amadeo (2016) “la comunicación gubernamental obedece a una política pública, que implica el ejercicio de establecer y precisar la agenda de la gestión de instituciones, actitudes y procesos.

    p.mb-3 Kunsch (2003, citado por Briceño y Neves, 2010) sustenta que la comunicación institucional funciona para fortalecer la imagen e identidad corporativa, porque permite dar a conocer la entidad fuera del área de cobertura interna que posee. 

    p.mb-5 Entonces, es así como el reconocimiento de marca frente a la comunidad y demás entidades hace que la comunicación sea medida como eficiente; y siguiendo a Kunsch (2003), los instrumentos utilizados por la comunicación institucional como la asesoría de prensa, la edición multimedia, entre otros se describen en la siguiente información: 
  
    .row.justify-content-center.align-items-center.mb-5
      .tarjeta.p-4.mb-5.fnd-1-1
          SlyderA(tipo="b")
            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Comunicación institucional
                p Los instrumentos utilizados por la comunicación institucional son la asesoría de prensa, la edición multimedia, el periodismo empresarial, las relaciones públicas, la imagen corporativa, la propaganda institucional y el marketing social y cultural. A continuación, su descripción:
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-15.svg', alt='Comunicación institucional')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Relaciones públicas
                p Persigue fortalecer o modificar el nivel de entendimiento y aceptación del público a partir de la interacción. Se centra en la construcción de credibilidad y posicionamiento.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-16.svg', alt='Relaciones públicas')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Periodismo empresarial
                p Es una especialización dentro del sistema periodístico que busca difundir temas importantes de la organización. Las herramientas más utilizadas son los boletines y revistas, entre otros.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-17.svg', alt='Periodismo empresarial')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Asesoría de prensa
                p Consiste en la gestión de medios impresos y electrónicos. Abarca la producción interna de materias y notas periodísticas publicadas en medios de prensa externos.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-18.svg', alt='Asesoría de prensa')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Edición de multimedia
                p Facilita una comunicación ágil con el público objetivo mediante el tratamiento técnico-profesional de libros, revistas, manuales, websites, etc.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-19.svg', alt='Edición de multimedia')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Imagen corporación
                p Es la representación mental de la organización en la colectividad. La construcción de un conjunto de atributos.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-20.svg', alt='Imagen corporación')

            .row
              .col-md-5.mb-4.mb-md-0.py-5.ps-5
                .h5.mb-2 Propaganda institucional
                p Busca divulgar los logros de la organización, transmitir su personalidad y fijar los conceptos constructivos de su labor.
              .col-md-7
                figure.px-2
                  img(src='@/assets/curso/temas/tema3/img-21.svg', alt='Propaganda institucional')



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-3 Por su parte, para los canales de comunicación externa sus clientes o público objetivo son la Presidencia de la República, entes gubernamentales, medios de comunicación, gremios y empresarios, ONG, socios estratégicos ciudadanía y público en general, siendo los principales canales de comunicación empleados, la página web, correo electrónico, redes sociales (Facebook, Twitter, Instagram, YouTube), transmisión radial (SENA al aire) y televisiva, por medio de los cuales se difunde productos como boletines de prensa, comunicados a la opinión pública, mensajes virtuales, publicaciones, etc. 
        p.mb-3 Para el caso específico del Servicio Nacional de Aprendizaje (SENA), según el Manual de comunicación interna y externa código, existen canales de comunicación interna donde se divulga productos como magazín Venga le cuento, newsletter o boletín, flash informativo, boletín virtual NotiSENA, videos, afiches, banner, pódcast, etc., a través de canales como intranet, pantallas, carteleras físicas, tótem, correo institucional, grupos de WhatsApp. Estos se presentan en la siguiente infografía: 

      .col-lg-6
        figure.px-2
          img(src='@/assets/curso/temas/tema3/img-22.svg', alt='Propaganda institucional')



    .row.justify-content-start.align-items-center.mb-5(data-aos="fade")
      .col-auto
        .tarjeta.color-primario.text-center.py-2.px-4.tjr.mb-3
          h3.mb-0 Canales de comunicación interna
      ImagenInfografica.color-primario.mb-5.img-1.img-3
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/img-23.svg', alt='Texto que describa la imagen')
            

        .tarjeta.color-secundario.fnd-1-.p-3(x="11.8%" y="11.8%" numero="+")
          p Tiene como objetivo  aprovechar el uso del  escritorio de los equipos de  cómputo como medio de  divulgación que aporta al  proceso de comunicación  interna de la entidad.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="10.7%" y="43.6%" numero="+")
          p Monitores ubicados en  sitios estratégicos de  las direcciones  regionales y centros de  formación.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="16.2%" y="92.6%" numero="+")
          p El correo facilita el envío y  recepción de información  entre los funcionarios de  la entidad, garantizando  una comunicación ágil,  veraz y eficaz.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="42.4%" y="86.5%" numero="+")
          p Estructuras ubicadas en  las paredes de las  instalaciones del SENA  por donde circula mayor  afluencia de público.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="62.1%" y="19.3%" numero="+")
          p Herramienta que puede ser  utilizada siempre y cuando  se concierte con los  miembros de los diferentes  grupos de trabajo el envío  de mensajes de carácter  institucional a través de  esta aplicación.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="84.8%" y="73.8%" numero="+")
          p La nube, es el eje de la  comunicación interna en el  SENA; se actualiza de forma  permanente y contiene  información institucional de  interés y con cobertura  nacional.
           

    .row.justify-content-start.align-items-center.mb-5(data-aos="fade")
      .col-auto
        .tarjeta.color-primario.text-center.py-2.px-4.tjr.mb-3
          h3.mb-0 Canales de comunicación externa
      ImagenInfografica.color-primario.mb-5.img-1.img-3
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema3/img-24-.svg', alt='Texto que describa la imagen')
            

        .tarjeta.color-secundario.fnd-1-.p-3(x="28.5%" y="37.9%" numero="+")
          .h5.mb-2 Correo
          p Comunicación por  correo.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="6.9%" y="46.8%" numero="+")
          .h5.mb-2 Clientes o público objetivo
          p.mb-0 - Presidencia de la República
          p.mb-0 - Entes gubernamentales.
          p.mb-0 - Empresarios y gremios.
          p.mb-0 - Medios de comunicación.
          p.mb-0 - Socios estratégicos.
          p.mb-0 - Sector trabajo y educación.
          p.mb-0 - Organizaciones No Gubernamentales (ONG).
          p.mb-0 - Opinión pública en general.
 
        .tarjeta.color-secundario.fnd-1-.p-3(x="21.7%" y="88.5%" numero="+")
          .h5.mb-2 Radial
          p Transmision radial  SENA al Aire Radio. 
        .tarjeta.color-secundario.fnd-1-.p-3(x="74.9%" y="56.6%" numero="+")
          .h5.mb-2 Redes sociales
          p Facebook, Twitter,  Instagram, YouTube. 
        .tarjeta.color-secundario.fnd-1-.p-3(x="61.4%" y="66.1%" numero="+")
          .h5.mb-2 Página web
          p Servicio Nacional de  Aprendizaje - SENA.

    .row.justify-content-center.mb-5(data-aos='fade-right')

      .titulo-sexto.color-acento-contenido.mb-4.ms-4
        h5 Figura 8. 
        span Socialización y restricciones

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema3/img-25.svg', alt='Análisis del conflicto comunitario')
      .col-lg-6
        p.mb-3 La socialización hace parte de las principales características que los actores sociales llevan a cabo para compartir ideas, pensamientos y necesidades de sus comunidades, cuando hay una restricción en la socialización la gestión social entra declive porque <b>surge el conflicto social y se pierde el rumbo de la comunidad interesada por el desarrollo y cambio endógeno. </b>
        .cajon.color-acento-contenido.fnd-5.p-4.mb-4
          p La restricción para la socialización se da con base en la limitación que tienen las comunidades para la gestión de la información de interés, específicamente de contenidos de orden político, económico y social. Es decir, cuando la información no circula dentro de la comunidad es posible que se restrinja la socialización porque el desconocimiento hace que la interacción y la gestión social entren en un proceso de retroceso que imposibilita la participación ciudadana y el aprendizaje colectivo. 







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
