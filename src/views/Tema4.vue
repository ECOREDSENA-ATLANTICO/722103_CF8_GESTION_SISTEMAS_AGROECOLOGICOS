<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 4
      h1 Conceptos, tipos de recursos y de proyectos

    .row.justify-content-center.align-items-center
      .col-lg-11
        .bloque-texto-g.b-t-g.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img.bl-t_img2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1-.svg')})`}"
          )
          .bloque-texto-g__texto.bl-t_texto2.py-4
            p.mb-0 Para llevar a cabo un proyecto, y para que este pueda ser ejecutado a cabalidad, teniendo en cuenta las condiciones para su ejecución, es indispensable identificar los recursos que son necesarios para su desarrollo. Así, la identificación de recursos va más allá de lo económico, pues también integra los materiales y equipos necesarios, el talento humano, un equipo que tenga conocimiento y experiencia para llevar a cabo la ejecución de la propuesta. 


    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-lg-6.mb-3
        figure
          img(src='@/assets/curso/temas/tema4/img-2.svg', alt='Conceptos, tipos de recursos y de proyectos')
      .col-lg-6
        p.mb-3 Con el desarrollo de las sociedades se han generado diferentes tipos de proyectos, según la incidencia que pueda tener dentro de lo socioeconómico y cultural. Estos proceden de diferentes organizaciones y tienen diferentes objetivos según lo establecido por el tipo de instituciones que lo formulan; si son gubernamentales, privadas o comunitarias. 
        p.mb-3 De este modo, para pensar que en la gestión de proyectos es necesario tener en cuenta el alcance, el tiempo de ejecución, la integración que pueda tener comunidad-organización, los costes que giran entre recursos financieros, humanos y físicos. A la par, la gestión de proyectos, se les suma la calidad en la incidencia, la comunicación y la participación ciudadana. 

        .cajon.color-acento-contenido.fnd-5.p-4.mb-4
          p Por tal razón, es necesario identificar el tipo de proyecto y así a qué objetivo tiende su intención, pues según sea este cambia la planeación y fuentes de financiación. Es así como el tipo de proyecto incide no solo en su formulación, sino también en la toma de decisiones y el desarrollo de este.      

    .row.justify-content-start.align-items-center.mb-5(data-aos="fade")
      .col-auto
        .tarjeta.color-primario.text-center.py-2.px-4.tjr
          h3.mb-0 Tipos de proyectos

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Según la procedencia del capital")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-3.png', alt='Según la procedencia del capital')        
          .col-md-6.mb-4.mb-md-0
            p <b>Proyectos públicos:</b> se financian en su totalidad con fondos  públicos o que provengan de instituciones  gubernamentales.
            p <b>Proyectos privados:</b> sus aportes provienen únicamente de  la iniciativa privada o de empresas con capital particular.
            p <b>Proyectos mixtos:</b> combinan las dos formas de financiación  (pública y privada).

        
      .py-3.py-md-4(titulo="Según el grado de experimentación")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-4.png', alt='Según el grado de experimentación')        
          .col-md-6.mb-4.mb-md-0
            p <b>Proyectos experimentales:</b> son los que exploran áreas o  campos en los que hasta el momento nadie ha realizado  aportes o cuya consecución supone una apuesta por algo  inédito o novedoso.
            p <b>Proyectos normalizados:</b> tienen una serie de normas o  parámetros que van marcando las fases de ejecución y  monitorización.


        
      .py-3.py-md-4(titulo="Según la orientación")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-5.png', alt='Según la orientación')        
          .col-md-6.mb-4.mb-md-0
            p <b>Proyectos productivos:</b> promueven la producción de  bienes, servicios o productos con un determinado objetivo.
            p <b>Proyectos educativos:</b> se focalizan en el área de la  educación, cualquiera que sea el nivel de enseñanza.
            p <b>Proyectos sociales y comunitarios:</b> apuntan a la mejora de  la calidad de vida de una región, país o localidad.
            p <b>Proyectos de investigación:</b> indagan y analizan áreas o  campos específicos.

      
      .py-3.py-md-4(titulo="Según el área de influencia")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-6.png', alt='Según el área de influencia')        
          .col-md-6.mb-4.mb-md-0
            p <b>Proyectos internacionales:</b> superan las fronteras nacionales.
            p <b>Proyectos nacionales:</b> se implementan a lo largo y ancho de  un territorio o país.
            p <b>Proyectos locales:</b> su alcance se limita a ciertas  comunidades, localidades o pueblos.
            p <b>Proyectos regionales:</b> su nivel de incidencia es mayor que  la de un proyecto local, pero a la vez menor que la de uno  nacional.

      
      .py-3.py-md-4(titulo="Según el sector")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-7.png', alt='Según el sector')        
          .col-md-6.mb-4.mb-md-0
            p <b>Proyectos de construcción:</b> obras de tipo civil o arquitectónico. (edificios, puentes, vías ferroviarias, presas, carreteras)  
            p <b>Proyectos de energía:</b> Aprovechamiento y el uso de la energía o en el hallazgo de nuevas formas de producirla.  
            p <b>Proyectos de minería:</b> extracción de minerales, productos o materias primas que se hallan en la naturaleza.  
            p <b>Proyectos de medioambiente:</b> orientados a la preservación de los recursos naturales y el equilibrio del planeta.   
            p <b>Proyectos industriales:</b> Impulsan la industria en cualquiera de sus sectores.   
            p <b>Proyectos de bienes servicios:</b> proporcionan productos y bienes inmateriales.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-10.mb-5

        .titulo-sexto.color-acento-contenido.mb-4.ms-4
          h5 Figura 9. 
          span Tipos de recursos

        figure
          img(src='@/assets/curso/temas/tema4/img-8-.svg', alt='Tipos de recursos')

      .col-lg-10.mb-5

        .titulo-sexto.color-acento-contenido.mb-4.ms-4
          h5 Figura 10. 
          span Cronograma y responsables para toma de decisiones 

        figure
          img(src='@/assets/curso/temas/tema4/img-9.svg', alt='Cronograma y responsables para toma de decisiones')


    .cajon.color-secundario.p-4.fnd-1.izq.mb-5
        .row.justify-content-center.d-flex.align-items-center
          p La toma de decisiones dentro de los proyectos de autogestión comunitaria es una de las actividades de mayor importancia, pues se enfoca en tener en cuenta el tratamiento de la información recolectada a través del desarrollo de cada actividad. 
          p El cronograma de actividades permite medir el grado de ejecución, y contribuye a que los líderes del proyecto analicen las problemáticas y situaciones que se presentan de manera imprevista y gestionen la toma de decisiones de manera individual y grupal.




    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img-10.png', alt='Cronograma y responsables para toma de decisiones')
      .col-lg-8
        p La toma de decisiones es un factor de alto grado de responsabilidad, además, para ello es necesario tener un conocimiento general del proyecto, de los objetivos y las actividades ejecutadas para que las decisiones no afecten las metas del desarrollo del proyecto ni a los participantes de este. 
        p Entonces, los responsables en la toma de decisiones tienen la destreza para poder analizar la información proporcionada desde la planeación, organización, dirección, control y ejecución del proyecto para considerar de manera consciente las decisiones que propendan por el bienestar asociado a las diferentes situaciones que se presentan a lo largo del cronograma establecido. La manera ética en que se tomen decisiones se verá reflejada en el impacto generado en las comunidades. 
          

    Separador

    #t-4-1.titulo-segundo.color-acento-contenido
      h2 4.1 Etapas, roles e instrumentos de seguimiento

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img.cent(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-11.png')})`}"
      )
      .bloque-texto-g__texto.p-4.fnd-4.fnd-4-1
        p.pt-5 El diseño de proyecto lleva a que estén divididos en diferentes etapas que van desde el análisis de la situación actual, pasando por la evaluación de enfoques y visión de cambios esperados, hasta llegar a diseñar las estrategias y organización del proyecto. 
        br
        br
        p.pt-5 Todo ello genera roles que pueden tener un seguimiento bajo metodologías, técnicas e instrumentos que permiten la medición del cumplimiento de actividades, así como también la toma de decisiones en el diseño y formulación del proyecto para concretar su ejecución.


    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2. 
      span Etapas, roles e instrumentos


    .tabla.color-acento-contenido.mb-5

      table
        tbody
          tr.tabla-b__header
            td.text-bold
              h5 Etapas
            td.text-bold
              h5 Roles
            td.text-bold
              h5 Instrumentos
          tr
            td
              p.text-bold Análisis de la situación actual.
              p ¿Dónde está? ¿Cuáles son los problemas y potenciales?
            td
              p ●  Analista de actores involucrados.
              p ●  Analista de problemas Analista de potencialidades
              
            td
              p ●  Matriz de análisis de actores involucrados.
              p ●  árbol de problemas Diagrama espina de pescado Análisis DOFA.
          tr
            td
              p.text-bold Evaluación ante enfoques alternativos
              p ¿Qué enfoques alternativos existen?
              p ¿Cómo se debe evaluar?
              p ¿Qué enfoque elegir?
              
            td
              p ●  Análisis de enfoques alternativos.
              
            td
              p ●  Matriz de decisión.
              p ●  Análisis de utilidad.
              p ●  Análisis de costo - beneficio Análisis FODA.
              p ●  Enfoque de criterios múltiples.
              
          tr
            td
              p.text-bold Visión del cambio esperado
              p ¿A dónde se quiere ir?
              p ¿Qué resultados se espera lograr?
              
            td
              p ●  Análisis de los resultados esperados.
              p ●  Impactos.
              p ●  Elaboración de la cadena de resultados.
              
            td
              p ●  árbol de resultados lluvia de ideas.
              p ●  Crear una visión.
              p ●  Cadena o marco de resultado.
          tr
            td
              p.text-bold Diseño de la estrategia del proyecto
              p ¿Qué resultados se esperan?
              p ¿Cómo se pueden lograr y comprobar?
              p ¿Qué factores influyen ?
            td
              p ●  Diseño de marco lógico.
              p ●  Jerarquía de resultados Indicadores y fuentes de información.
              p ●  Análisis de los riesgos y de los supuestos.
              
            td
              p ●  Marco lógico.
              p ●  Evaluación del riesgo.
              p ●  Indicadores estándar.
              p ●  Estudio de viabilidad.
              
          tr
            td
              p.text-bold Diseñar la organización del proyecto
              p ¿Cuáles son las responsabilidades?
              p ¿Qué recursos se requieren?
              p ¿Cómo se hará la evaluación?
            td
              p ●  Definición de la instalación organizativa.
              p ●  Asignación de medios.
              p ●  Diseño de un sistema de monitoreo y evaluación.
              p ●  Elaboración de la cadena de resultados.
            td
              p ●  Organigrama Documento del proyecto Toma de decisiones
              

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
