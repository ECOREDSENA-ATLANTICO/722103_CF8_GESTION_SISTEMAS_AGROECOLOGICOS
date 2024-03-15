<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Análisis del conflicto comunitario

    .row.justify-content-center.d-flex.align-items-text-center

      .col-lg-11.col-sm-12.fnd-8-.p-5
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
        ImagenInfografica.mb-5.color-primario.img-1
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-3.svg', alt='Análisis del conflicto comunitario')

          .tarjeta.color-secundario.fnd-1-.p-3(x="19.7%" y="20.3%" numero="+")
            p Existe un sistema que causa cierta opresión sobre la forma en que se relacionan las personas.

          .tarjeta.color-secundario.fnd-1-.p-3(x="12.9%" y="38.6%" numero="+")
            p Cuando existe una incompatibilidad o diferencia en la forma de creer o actuar de las personas.

          .tarjeta.color-secundario.fnd-1-.p-3(x="12.9%" y="60.3%" numero="+")
            p Resultado del retenimiento de emociones negativas o percepciones incorrectas, a causa de una mala comunicación entre las personas.

          .tarjeta.color-secundario.fnd-1-.p-3(x="21.7%" y="82.7%" numero="+")
            p Existe una falta de información que impide a las personas la toma de decisiones de forma correcta, o el simple hecho de estar mal informadas con respecto a un tema.

          .tarjeta.color-secundario.fnd-1-.p-3(x="80.9%" y="21.5%" numero="+")
            p Locales: surgen en pueblos, ciudades y demás territorios. Globales: afectan todo el planeta. Regionales: aparecen en varias regiones, provincias y países.

          .tarjeta.color-secundario.fnd-1-.p-3(x="87.5%" y="38.1%" numero="+")
            p Cuando en una relación (laboral o personal) una de las personas considera o ponen más empeño en la satisfacción de sus necesidades.

          .tarjeta.color-secundario.fnd-1-.p-3(x="87.7%" y="58.9%" numero="+")
            p En el ambiente laboral una persona vive divergencias frente a sus jefes o entorno en general. Se afecta de manera negativa cualquier miembro de la institución.

          .tarjeta.color-secundario.fnd-1-.p-3(x="80.2%" y="82.8%" numero="+")
            p Enfrentamiento armado de dos o más por diferentes creencias.


      .col-lg-11
        .row.justify-content-center.d-flex.align-items-center.fnd-1-1
          .col-lg-8.px-5.py-3
            p.mb-3 Las relaciones comunitarias se ven reflejadas en el espacio público, a través de la capacidad que tienen los actores de gestionar sus relaciones por encima de los intereses individuales, cuando esto no puede ser superado aparece el conflicto comunitario, el cual, afecta porque genera presiones negativas y violencia como agresiones verbales o físicas, ofensas, daño en propiedad ajena (Central de Justicia Cívica, s. f.); hasta llegar a delitos más graves como lesiones u homicidio dentro de la comunidad y sus actores. 
            p.mb-3 En ese sentido, el conflicto comunitario requiere que los actores sociales establezcan parámetros para no tener desavenencias y todas las reglas estén claras, haya comunicación efectiva y directamente de los interesados dentro de la comunidad para que se pueda hacer una verdadera gestión social y comunitaria. 
         
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema2/img-4.svg', alt='relaciones comunitarias')
              

    .row.justify-content-center.align-items-center.mb-5              
      .col-lg-11
        .fond
          .fnd-3-
          .row.justify-content-center.d-flex.align-items-end.ptt-3
            .col-lg-5
              figure
                img(src='@/assets/curso/temas/tema2/img-5-.svg', alt='Central de Justicia Cívica')             
            .col-lg-7
              p.tt-m.mb-xxl-5 Según la Central de Justicia Cívica (s. f.), comúnmente los conflictos comunitarios se originan por la cercanía física que se da con las personas que habitan en la comunidad sin ningún grado de consanguinidad ni amistad, siendo importante resaltar que no siempre la relación es polémica, sino que también se puede dar una relación sin problemas.         
          

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A la hora de analizar los conflictos, se pueden emplear diversas herramientas como el árbol de conflictos, cebolla del conflicto, mapeo de actores, los que permiten establecer el perfil básico del conflicto mediante una visión general y detallada de los factores clave, elementos constructivos, intensidad, duración, motivaciones, intereses, relación de poder, causas, efectos y necesidades de los conflictos.     
                  
                

    Separador

    #t-2-1.titulo-segundo.color-acento-contenido
      h2 2.1	Técnicas de manejo y de negociación

    .cajon.color-secundario.p-4.fnd-1.izq.mb-5
        .row.justify-content-center.d-flex.align-items-center
          p Existen diversos mecanismos para resolver los conflictos como, por ejemplo, la negociación y la conciliación, pero es necesario primero definir y tener claro cuál es el conflicto, el medio, la alternativa y la resolución. 


    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-7.png' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h5 Conflicto
              p Proceso que se inicia cuando una parte percibe que otra la ha afectado de manera negativa o que está a punto de afectar de manera negativa, alguno de sus intereses.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-8.png' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h5 Resolución
              p Solución que encontramos para un problema, una dificultad o una disyuntiva     

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-9.png' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h5 Alternativa
              p Circunstancia por la cual una persona, o grupo, tienen dos o más posibilidades de actuar para lograr un objetivo.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-10.png' alt='AvatarTop')
          .tarjeta.color-primario
            .text-white.p-4
              h5 Medio
              p Recurso que las personas utilizan para lograr alcanzar un objetivo que se sustenta en una necesidad que deseamos satisfacer.


    .row.justify-content-center.align-items-center.mb-5              
      .col-lg-11       
        .crd_01
          .crd_01__icon
            img(src="@/assets/curso/temas/tema2/img-11.svg", alt="alt").class          
          .crd_01__txt
            p La negociación es una actividad a la que se encuentran los seres humanos expuestos cotidianamente, toda interacción social se fundamenta en una negociación tanto consciente como inconsciente, a través del análisis de la información y se actúa a través del poder de la influencia personal para afectar el comportamiento de los otros (Corvette et al., 2011). 
            p Así mismo, en la negociación se aplica el conocimiento y la información para construir transacciones sociales y formales sin necesidad de usar la intimidación, se trabaja bajo la estrategia de interactuar con la finalidad de alcanzar el acuerdo o el resultado que se desea.      

    .row.justify-content-center.align-items-center.mb-5              

      .col-lg-6
        figure
          img(src='@/assets/curso/temas/tema2/img-12.svg', alt='La negociación')
      
      .col-lg-6
        .row.justify-content-center.align-items-center.mb-2.fnd-1-2.p-3
          .col-lg-2
            figure
              img.img-44(src='@/assets/curso/temas/tema2/img-13.svg', alt='01')
          .col-lg-10 La negociación traspasa cualquier disciplina y es inherente del ser humano porque es necesaria en cualquier ámbito sociocultural.
        .row.justify-content-center.align-items-center.mb-2.fnd-1-2.p-3
          .col-lg-2
            figure
              img.img-44(src='@/assets/curso/temas/tema2/img-14.svg', alt='02')
          .col-lg-10 Debe haber un intercambio de beneficio mutuo en el cual no se instrumentaliza, sino que aporta a la resolución de conflictos dentro de las comunidades, en donde todos ganan.
        .row.justify-content-center.align-items-center.mb-2.fnd-1-2.p-3
          .col-lg-2
            figure
              img.img-44(src='@/assets/curso/temas/tema2/img-15.svg', alt='03')
          .col-lg-10 Se convierte en una estrategia y tiene un fundamento práctico para hacer desaparecer las diferencias producidas por los intereses individuales y colectivos.
        .row.justify-content-center.align-items-center.mb-2.fnd-1-2.p-3
          .col-lg-2
            figure
              img.img-44(src='@/assets/curso/temas/tema2/img-16.svg', alt='04')
          .col-lg-10 La negociación traspasa cualquier disciplina y es inherente del ser humano porque es necesaria en cualquier ámbito sociocultural.          



    .row.justify-content-center.d-flex.align-items-center.mb-5
      .col-lg-7
        p.mb-3 Tiene elementos que permiten su desarrollo, como el interés por negociar, la voluntad de los grupos afectados, una relación social que permite que se establezcan lazos de comunicación y se debe tomar en cuenta el poder que tiene cada grupo en discusión. De esta manera, la negociación tiene una finalidad que permite que se llegue a un acuerdo generalizado dentro de los beneficios de cada negociante. 
        .cajon.color-acento-contenido.fnd-5.p-4.mb-4
          p Como lo indican Losa y Ernesto (2013), existen diferentes técnicas de negociación las cuales se pueden clasificar en función de los elementos que intervienen como por ejemplo el tiempo, el factor desencadenante o la actitud de las partes. 
  
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema2/img-17.png', alt='Análisis del conflicto comunitario')

    .row.justify-content-center.d-flex.align-items-center.mb-5
      .col-lg-10.justify-content-center
        .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-4
          h5 Figura 5. 
          span Técnicas de negociación

        figure
          img(src='@/assets/curso/temas/tema2/img-18.svg', alt='Actores sociales')
        figcaption Elaboración propia (2022).


    Separador

    #t-2-2.titulo-segundo.color-acento-contenido
      h2 2.2	Comunicación asertiva

    p La comunicación es uno de los principios básicos para la interacción social y la convivencia. No obstante, dentro de los diferentes tipos de comunicación se encuentra <b>la asertiva</b>, que se enfoca en generar como principio una apropiada respuesta en el receptor. De ahí que, requiere de capacidades de expresión verbal, de entendimiento y conocimiento sociocultural para poder ser interlocutor asertivo dentro de un contexto determinado. 
    p.mb-5 En esa medida, la comunicación requiere establecer relaciones de <b>entendimiento y empatía</b> entre emisor y receptor. En otras palabras, la comunicación asertiva permite el vivir en sociedad y fortalece los lazos de convivencia basados en el respeto por el otro.



    .row.justify-content-center.align-items-center.mb-5              
      .col-lg-11
        .fond
          .fnd-3--
          .row.justify-content-center.d-flex.align-items-center.ptt-3
            .col-lg-4
              figure
                img.img-386(src='@/assets/curso/temas/tema2/img-19-.svg', alt='Central de Justicia Cívica')             
            .col-lg-8
              p.tt-m.mb-xxl-5 Para tener como principio en las relaciones humanas la comunicación asertiva, es necesario que el <b>emisor sea claro con lo que quiere lograr de su interlocutor a través de mensajes directos y breves que permiten el mejor entendimiento y no se pierden en el discurso, lo cual, permite que la comunicación sea directa y de claro entendimiento. </b>           

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-20.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-3 Así mismo, el emisor debe hablar con respeto, dentro de la comunicación y expresión oral, entendiendo las diferencias y desconocimientos de su interlocutor. 
        p.mb-0 La comunicación asertiva no es un rasgo de la personalidad de todo ser humano, sin embargo, sí puede ser generado a partir de conductas que se potencializan a partir de gestionar habilidades para aprender a comunicarse de manera asertiva y tener un impacto positivo dentro de las relaciones sociales y humanas. De este modo es importante para cualquier contexto de participación social y contribuye a la convivencia, además, fortalece las relaciones. interpersonales. 


    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema2/img-21.svg', alt='')
      .list2__txt
        h3.mb-0 Tipos y técnicas de comunicación asertiva

    p.mb-3 La comunicación asertiva se sitúa como eje principal para mejorar la convivencia en las sociedades actuales. Esta, propende por el respeto y la interacción social clara y concisa que se desarrolla en el intercambio de información. De este modo es utilizada como una herramienta que permite estrechar lazos de entendimiento y evitar el conflicto social, y en ese sentido tiene impacto en las<b> relaciones emocionales, laborales y profesionales</b>.
    p.mb-5 Dentro de los tipos de comunicación asertiva se destaca la comunicación verbal, no verbal y paraverbal. En el lenguaje verbal toma herramientas sentiemocionales en primera persona para generar opiniones y respuesta a sentimientos, opiniones y expresar ideas. 


    .row
      .col-lg-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.img-min-33
            img.img-338(src='@/assets/curso/temas/tema2/img-22.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.fnd-3
            .py-2
              p En la comunicación no verbal influye en la manera en que se emite y recibe la información, dentro de esta se destaca el contacto visual, la postura corporal y proxemia con que se da el mensaje. En la comunicación paraverbal se expone la manera y el volumen del tono de voz, los silencios, el ritmo de la conversación y la seguridad con que se da el mensaje. 
              p Así mismo, como la comunicación asertiva es una habilidad actitudinal, esta, puede ser potencializada, para esto existen técnicas para mejorarla, entre las que se destacan el disco rayado, el bando de niebla, acuerdo, pregunta y aplazamiento asertivo. A continuación, se conoce cada técnica. 

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          .row.justify-content-center.align-items-center(numero="1" titulo="Disco rayado") 
            .col-md-6.mb-4.mb-md-0
              p.text-small Consiste en repetir una afirmación varias veces sin modificar el tono, ritmo y volumen, y sin intención de entrar en ninguna confrontación.
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-23.svg', alt='Disco rayado')
          
          .row.justify-content-center.align-items-center(numero="2" titulo="Banco de niebla") 
            .col-md-6.mb-4.mb-md-0
              p.text-small Consiste en dar la razón, pero no permitiendo continuar con el enfrentamiento o discusión. 
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-24.svg', alt='Banco de niebla')
          
          .row.justify-content-center.align-items-center(numero="3" titulo="Técnica para el cambio") 
            .col-md-6.mb-4.mb-md-0
              p.text-small Busca brindar una visión global de la discusión relativizándola para reducir el nivel de agresividad y/o frustración. 
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-25.svg', alt='Técnica para el cambio')
          
          .row.justify-content-center.align-items-center(numero="4" titulo="Acuerdo asertivo") 
            .col-md-6.mb-4.mb-md-0
              p.text-small Consiste en intenta llegar a un acuerdo que ratifique lo que se pueda considerar como error, pero dando como fundamento que, en general, no es lo habitual. 
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-26.svg', alt='Acuerdo asertivo')

      .col-lg-6.justify-content-center
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/tema2/img-27.svg', alt='comunicación no verbal')
                 

    .row.mb-5
      .col-lg-6.justify-content-center
        figure(data-aos='fade-right')
          img(src='@/assets/curso/temas/tema2/img-28.svg', alt='comunicación no verbal')    
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          .row.justify-content-center.align-items-center(numero="5" titulo="Pregunta asertiva") 
            .col-md-6.mb-4.mb-md-0
              p.text-small Trata de contestar al receptor con una pregunta que pone en positivo lo que se está discutiendo, la oportunidad de afrontar en el mismo sentido la crítica o dificultad que se haya planteado.
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-29.svg', alt='Texto')



          .row.justify-content-center.align-items-center(numero="6" titulo="Aplazamiento asertivo")
            .col-md-6.mb-4.mb-md-0
              p.text-small Esta técnica se usa cuando no se es capaces en ese momento de dar una solución o respuesta adecuada a la reclamación que nos hace el interlocutor.
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-30.svg', alt='Aplazamiento asertivo')
          
          
          .row.justify-content-center.align-items-center(numero="7" titulo="Técnica de ignorar")
            .col-md-6.mb-4.mb-md-0
              p.text-small Se suele usar cuando el interlocutor se muestra muy enfadado o alterado y es difícil mantener una conversación constructiva.
            .col-md-6
              figure
                img.img-170(src='@/assets/curso/temas/tema2/img-31.svg', alt='Aplazamiento asertivo')
    

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
