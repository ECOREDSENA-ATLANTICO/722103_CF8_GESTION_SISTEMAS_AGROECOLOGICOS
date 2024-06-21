export default {
  global: {
    componenteFormativo:
      'Estructuración y socialización de la propuesta de autogestión comunitaria',
    descripcionCurso:
      'Aquí se abordan temáticas relacionadas con la autogestión comunitaria la cual incide en la manera en las poblaciones formulan y diseñan programas y proyectos enfocados a satisfacer sus intereses, necesidades; para generar procesos de desarrollo social comunitario, por lo cual es necesario conocer la oferta institucional del territorio, canales de comunicación e instrumentos de gestión comunitaria. Además, se identifican los principales instrumentos para la gestión de escenarios participativos y comunitarios según los tipos de actores sociales dentro de un contexto agroecológico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal2.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión comunitaria en el marco de la agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normativa y niveles de aplicación',
            hash: 't-1-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fases e instrumentos de la gestión comunitaria ',
            hash: 't-1-2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Conceptos sobre actores sociales ',
            hash: 't-1-3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Tipos y características de los actores sociales ',
            hash: 't-1-4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis del conflicto comunitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas de manejo y de negociación',
            hash: 't-2-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Comunicación asertiva',
            hash: 't-2-2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Identificación de los escenarios participativos comunitarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Oferta institucional en el territorio',
            hash: 't-3-1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Canales de comunicación',
            hash: 't-3-2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conceptos, tipos de recursos y de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: ' Etapas, roles e instrumentos de seguimiento.',
            hash: 't-4-1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF08.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amadeo, B. (2016). El estudio de la comunicación gubernamental. Austral Comunicación, 5(2), 155-181.',
    },
    {
      referencia:
        'Briceño, B. M. J., & Neves, M. F. (2010). Estrategias de comunicación institucional en organizaciones agroindustriales: caso Unica. Visión Gerencial, 2, 332-347.',
    },
    {
      referencia:
        'Carrasco, C., L. (2016). Presentación de la asignatura: Técnicas de negociación. Universidad Continental.',
    },
    {
      referencia:
        'Corvette, B., A. B., Ramírez, V. del C. A., de Lozada, V. M., y Mejía-Barahona, J. E. (2011). Técnicas de negociación y resolución de conflictos. Pearson Educación.',
    },
    {
      referencia:
        'Lapalma, A. I. (2001). El escenario de la intervención comunitaria. Revista de Psicología, 10(2), 61.',
    },
    {
      referencia: 'Losa, S., & Ernesto, J. (2013). El arte de la negociación.',
    },
    {
      referencia:
        'Maldonado, C., A. M. (2014). Iniciativas actuales de consolidación de la oferta institucional para el territorio que incluya la forma en que el sector puede asumir ese rol para el Gobierno nacional. DAFP.',
    },
    {
      referencia:
        'Martínez, R. (2004). Fundamentos culturales, sociales y económicos de la agroecología. Revista de Ciencias Sociales (Cr), 1(103-104), 93-102.',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2006). Resolución 187 de 2006. Por la cual se adopta el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización y se establece el Sistema de Control de Productos Agropecuarios Ecológicos.',
      link:
        'https://minvivienda.gov.co/sites/default/files/normativa/0187%20-%202006.pdf',
    },
    {
      referencia:
        'Mori, S., M. D. P. (2008). Una propuesta metodológica para la intervención comunitaria. Liberabit, 14(14), 81-90.',
    },
    {
      referencia:
        'Muscolo, S. I., y Estany, M. L. (2006). Conflicto, mediación comunitaria y creatividad social. Acciones e Investigaciones Sociales, 1(Ext.), 454-460.',
    },
    {
      referencia:
        'Nova, G., A. (2022). Agricultura agroecológica, seguridad y soberanía alimentaria. Revista Estudios del Desarrollo Social: Cuba y América Latina, 10(1).',
    },
    {
      referencia:
        'Palma, R., D. (2012). Cómo elaborar propuestas de investigación. Reflexiones Económicas.',
      link:
        'https://www.yumpu.com/es/document/read/33417674/como-elaborar-propuestas-de-investigacion-universidad-rafael-',
    },
  ],
  glosario: [
    {
      termino: 'Actores sociales',
      significado:
        'individuos, grupo o instituciones que con identidad propia representan los intereses y demandas de las comunidades a las que pertenecen.',
    },
    {
      termino: 'Comunicación',
      significado:
        'proceso que hace posible que el emisor y el receptor se relacionan, se conecten, intercambien información, compartan ideas, datos o significados que son comprensibles y de interés para ambos.',
    },
    {
      termino: 'Comunidad',
      significado:
        'lugar donde la interacción social y los vínculos entre actores sociales generan un espacio de integración que configura tanto la convivencia como el conflicto.',
    },
    {
      termino: 'Conflicto',
      significado:
        'una lucha por el desacuerdo, incompatibilidad aparente, confrontación de intereses, percepciones o actitudes hostiles entre dos o más partes.',
    },
    {
      termino: 'Desarrollo comunitario',
      significado:
        'capacidades referidas a máximos niveles de igualdad y libertad que produzca bienestar a un grupo poblacional a partir de la oportunidad de escoger entre distintas opciones de desarrollo.',
    },
    {
      termino: 'Gestión Comunitaria',
      significado:
        'conjunto de estrategias y acciones desarrolladas por autoridades locales orientadas a la consecución de un objetivo o para resolver problemas específicos.',
    },
    {
      termino: 'Oferta institucional del territorio',
      significado:
        'conjunto de bienes y servicios derivados de los planes, programas y proyectos de entidades p&uacute;blicas y privadas y tienen el propósito de orientar, atender e impactar en las condiciones de vida.',
    },
    {
      termino: 'Participación',
      significado:
        'labor activa de los integrantes internos y externos de la comunidad en todas las decisiones concernientes con los objetivos y las actividades.',
    },
    {
      termino: 'Proyecto',
      significado:
        'organización de los recursos (materiales, económicos, humanos) y acciones para lograr objetivos.',
    },
  ],
  complementario: [
    {
      tema: 'Gestión comunitaria en el marco de la agroecología',
      referencia:
        'Avella, B., L. (2016). <em>Manual de Gestión comunitaria.</em> Confecámaras.',
      tipo: 'Documentos',
      link:
        'https://repository.iom.int/bitstream/handle/20.500.11788/918/COL-OIM%200077.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Análisis del conflicto comunitario',
      referencia:
        'Ecosistemas de recursos educativos digitales. (2021). <em>Técnicas de negociación. </em>[Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aT1ux5A-s3w',
    },
    {
      tema: 'Análisis del conflicto comunitario',
      referencia:
        'Ecosistemas de recursos educativos digitales. (2021). <em>Elementos de la comunicación.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uyfkdAMQAI8',
    },
    {
      tema: 'Análisis del conflicto comunitario',
      referencia:
        'Seguimiento académico grupo ejecución de la formación SENA. (2010). <em>Video Tips - 01 Comunicación asertiva.</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ssF7rayWZSQ',
    },
    {
      tema: 'Identificación de los escenarios participativos comunitarios',
      referencia:
        'Portal Territorio de Colombia. (2022).<em> Oferta institucional del Gobierno nacional.</em> ',
      tipo: 'Página Web',
      link: 'https://portalterritorial.dnp.gov.co/AdmOIGN/OIGN',
    },
    {
      tema: 'Conceptos, tipos de recursos y de proyectos',
      referencia:
        'Cohen, E., y Franco, R. (2000).<em> Evaluación de proyectos sociales. Siglo XXI.</em>',
      tipo: 'Libro',
      link:
        'https://books.google.es/books?hl=es&lr=&id=Uz7IeGnN1mkC&oi=fnd&pg=PA6&dq=evaluacion+de+proyectos+sociales&ots=r2J7jTwlD6&sig=fyQ7kgWDaXNdKfwquffkKEJTApQ#v=onepage&q=evaluacion%20de%20proyectos%20sociales&f=false',
    },
    {
      tema: 'Conceptos, tipos de recursos y de proyectos',
      referencia:
        'Ecosistemas de recursos educativos digitales. (2022). Formulación de proyectos. [Video] YouTube. https://www.youtube.com/watch?v=JC6-d44r7SM',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JC6-d44r7SM',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martínez',
          cargo: 'Diseño de contenidos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Valencia Ebrat',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
