(function(e){function a(a){for(var n,i,t=a[0],s=a[1],l=a[2],d=0,u=[];d<t.length;d++)i=t[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,a=0;a<c.length;a++){for(var o=c[a],n=!0,i=1;i<o.length;i++){var t=o[i];0!==r[t]&&(n=!1)}n&&(c.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r={app:0},c=[];function t(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"34f0e3df","chunk-0206bfa0":"ccabe56a","chunk-039c07ee":"87c943e1","chunk-13a6037e":"776bfbaa","chunk-16215048":"c5dbcc87","chunk-18f95272":"e342718c","chunk-2c06842c":"9927af22","chunk-2d0c5615":"a60375bf","chunk-2d0e96ec":"4c9a408d","chunk-2d208d90":"10d6827a","chunk-2d21d0e2":"fbf2b355","chunk-2d22c123":"a14e22bb","chunk-2e80bb9a":"04a1df9c","chunk-2fdc87ee":"31337763","chunk-30d2f332":"b191337c","chunk-36769079":"7e577b62","chunk-398c63f0":"b8abeeb4","chunk-44daca35":"2723edf3","chunk-4adb6690":"1732436a","chunk-5309f94e":"e5466857","chunk-53ccb27e":"0863f028","chunk-55d286b8":"4024b456","chunk-681f37d3":"4731d603","chunk-6928a14a":"c01b2cc0","chunk-69444b4c":"0f640fa9","chunk-6e45141e":"f4459976","chunk-863a1ee8":"05603337","chunk-923527cc":"52a0d9d6","chunk-a48a3e88":"21af3382","chunk-c796899c":"2510dbb5","chunk-e8a7823a":"e7e800fe","chunk-eaa1fac2":"076431f7","chunk-f2a44bde":"4ec40c26",comple:"76468544",creditos:"37db73a0",glosario:"37f74470",intro:"610fd796",referencias:"9702d2bd",sintesis:"5524fac6",tema1:"2998b1b6",tema2:"516e09c7",tema3:"16ddff4f",tema4:"47c2de2e"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"1eb2c556","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"8b3db2e4","chunk-923527cc":"473b497b","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"52cca4c9",creditos:"da97a97d",glosario:"6e3ec874",intro:"31d6cfe0",referencias:"646c38a2",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+n,c=document.getElementsByTagName("link"),t=0;t<c.length;t++){var l=c[t],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===r))return a()}var u=document.getElementsByTagName("style");for(t=0;t<u.length;t++){l=u[t],d=l.getAttribute("data-href");if(d===n||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete i[e],m.parentNode.removeChild(m),o(c)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var c=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=c);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=t(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;c.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);var n=o("68f3"),i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},r=[],c={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},t=c,s=o("2877"),l=Object(s["a"])(t,i,r,!1,null,null,null),d=l.exports,u=o("2b0e"),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);const g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:()=>o.e("intro").then(o.bind(null,"5167"))},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>o.e("tema1").then(o.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>o.e("tema2").then(o.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>o.e("tema3").then(o.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>o.e("tema4").then(o.bind(null,"3eb5"))}]},{path:"/actividad",name:"actividad",component:()=>o.e("actividad").then(o.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>o.e("glosario").then(o.bind(null,"69a77"))},{path:"/complementario",name:"complementario",component:()=>o.e("comple").then(o.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>o.e("referencias").then(o.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>o.e("sintesis").then(o.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>o.e("creditos").then(o.bind(null,"2e81"))}],scrollBehavior(e,a){if(e.hash){const o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise(e=>{setTimeout(()=>{e(o)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var b=g,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Estructuración y socialización de la propuesta de autogestión comunitaria",descripcionCurso:"Aquí se abordan temáticas relacionadas con la autogestión comunitaria la cual incide en la manera en las poblaciones formulan y diseñan programas y proyectos enfocados a satisfacer sus intereses, necesidades; para generar procesos de desarrollo social comunitario, por lo cual es necesario conocer la oferta institucional del territorio, canales de comunicación e instrumentos de gestión comunitaria. Además, se identifican los principales instrumentos para la gestión de escenarios participativos y comunitarios según los tipos de actores sociales dentro de un contexto agroecológico.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("9e18"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("78a9")},{clases:["banner-principal-decorativo-2"],imagen:o("bb67")},{clases:["banner-principal-decorativo-3"],imagen:o("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Gestión comunitaria en el marco de la agroecología",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Normativa y niveles de aplicación",hash:"t-1-1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Fases e instrumentos de la gestión comunitaria ",hash:"t-1-2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Conceptos sobre actores sociales ",hash:"t-1-3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Tipos y características de los actores sociales ",hash:"t-1-4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Análisis del conflicto comunitario",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Técnicas de manejo y de negociación",hash:"t-2-1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Comunicación asertiva",hash:"t-2-2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Identificación de los escenarios participativos comunitarios",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Oferta institucional en el territorio",hash:"t-3-1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Canales de comunicación",hash:"t-3-2"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Conceptos, tipos de recursos y de proyectos",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:" Etapas, roles e instrumentos de seguimiento.",hash:"t-4-1"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis"},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/722103_CF08.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Amadeo, B. (2016). El estudio de la comunicación gubernamental. Austral Comunicación, 5(2), 155-181."},{referencia:"Briceño, B. M. J., & Neves, M. F. (2010). Estrategias de comunicación institucional en organizaciones agroindustriales: caso Unica. Visión Gerencial, 2, 332-347."},{referencia:"Carrasco, C., L. (2016). Presentación de la asignatura: Técnicas de negociación. Universidad Continental."},{referencia:"Corvette, B., A. B., Ramírez, V. del C. A., de Lozada, V. M., y Mejía-Barahona, J. E. (2011). Técnicas de negociación y resolución de conflictos. Pearson Educación."},{referencia:"Lapalma, A. I. (2001). El escenario de la intervención comunitaria. Revista de Psicología, 10(2), 61."},{referencia:"Losa, S., & Ernesto, J. (2013). El arte de la negociación."},{referencia:"Maldonado, C., A. M. (2014). Iniciativas actuales de consolidación de la oferta institucional para el territorio que incluya la forma en que el sector puede asumir ese rol para el Gobierno nacional. DAFP."},{referencia:"Martínez, R. (2004). Fundamentos culturales, sociales y económicos de la agroecología. Revista de Ciencias Sociales (Cr), 1(103-104), 93-102."},{referencia:"Ministerio de Agricultura y Desarrollo Rural. (2006). Resolución 187 de 2006. Por la cual se adopta el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización y se establece el Sistema de Control de Productos Agropecuarios Ecológicos.",link:"https://minvivienda.gov.co/sites/default/files/normativa/0187%20-%202006.pdf"},{referencia:"Mori, S., M. D. P. (2008). Una propuesta metodológica para la intervención comunitaria. Liberabit, 14(14), 81-90."},{referencia:"Muscolo, S. I., y Estany, M. L. (2006). Conflicto, mediación comunitaria y creatividad social. Acciones e Investigaciones Sociales, 1(Ext.), 454-460."},{referencia:"Nova, G., A. (2022). Agricultura agroecológica, seguridad y soberanía alimentaria. Revista Estudios del Desarrollo Social: Cuba y América Latina, 10(1)."},{referencia:"Palma, R., D. (2012). Cómo elaborar propuestas de investigación. Reflexiones Económicas.",link:"https://www.yumpu.com/es/document/read/33417674/como-elaborar-propuestas-de-investigacion-universidad-rafael-"}],glosario:[{termino:"Actores sociales",significado:"individuos, grupo o instituciones que con identidad propia representan los intereses y demandas de las comunidades a las que pertenecen."},{termino:"Comunicación",significado:"proceso que hace posible que el emisor y el receptor se relacionan, se conecten, intercambien información, compartan ideas, datos o significados que son comprensibles y de interés para ambos."},{termino:"Comunidad",significado:"lugar donde la interacción social y los vínculos entre actores sociales generan un espacio de integración que configura tanto la convivencia como el conflicto."},{termino:"Conflicto",significado:"una lucha por el desacuerdo, incompatibilidad aparente, confrontación de intereses, percepciones o actitudes hostiles entre dos o más partes."},{termino:"Desarrollo comunitario",significado:"capacidades referidas a máximos niveles de igualdad y libertad que produzca bienestar a un grupo poblacional a partir de la oportunidad de escoger entre distintas opciones de desarrollo."},{termino:"Gestión Comunitaria",significado:"conjunto de estrategias y acciones desarrolladas por autoridades locales orientadas a la consecución de un objetivo o para resolver problemas específicos."},{termino:"Oferta institucional del territorio",significado:"conjunto de bienes y servicios derivados de los planes, programas y proyectos de entidades p&uacute;blicas y privadas y tienen el propósito de orientar, atender e impactar en las condiciones de vida."},{termino:"Participación",significado:"labor activa de los integrantes internos y externos de la comunidad en todas las decisiones concernientes con los objetivos y las actividades."},{termino:"Proyecto",significado:"organización de los recursos (materiales, económicos, humanos) y acciones para lograr objetivos."}],complementario:[{tema:"Gestión comunitaria en el marco de la agroecología",referencia:"Avella, B., L. (2016). <em>Manual de Gestión comunitaria.</em> Confecámaras.",tipo:"Documentos",link:"https://repository.iom.int/bitstream/handle/20.500.11788/918/COL-OIM%200077.pdf?sequence=1&isAllowed=y"},{tema:"Análisis del conflicto comunitario",referencia:"Ecosistemas de recursos educativos digitales. (2021). <em>Técnicas de negociación. </em>[Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=aT1ux5A-s3w"},{tema:"Análisis del conflicto comunitario",referencia:"Ecosistemas de recursos educativos digitales. (2021). <em>Elementos de la comunicación.</em> [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=uyfkdAMQAI8"},{tema:"Análisis del conflicto comunitario",referencia:"Seguimiento académico grupo ejecución de la formación SENA. (2010). <em>Video Tips - 01 Comunicación asertiva.</em> [Video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=ssF7rayWZSQ"},{tema:"Identificación de los escenarios participativos comunitarios",referencia:"Portal Territorio de Colombia. (2022).<em> Oferta institucional del Gobierno nacional.</em> ",tipo:"Página Web",link:"https://portalterritorial.dnp.gov.co/AdmOIGN/OIGN"},{tema:"Conceptos, tipos de recursos y de proyectos",referencia:"Cohen, E., y Franco, R. (2000).<em> Evaluación de proyectos sociales. Siglo XXI.</em>",tipo:"Libro",link:"https://books.google.es/books?hl=es&lr=&id=Uz7IeGnN1mkC&oi=fnd&pg=PA6&dq=evaluacion+de+proyectos+sociales&ots=r2J7jTwlD6&sig=fyQ7kgWDaXNdKfwquffkKEJTApQ#v=onepage&q=evaluacion%20de%20proyectos%20sociales&f=false"},{tema:"Conceptos, tipos de recursos y de proyectos",referencia:"Ecosistemas de recursos educativos digitales. (2022). Formulación de proyectos. [Video] YouTube. https://www.youtube.com/watch?v=JC6-d44r7SM",tipo:"Video",link:"https://www.youtube.com/watch?v=JC6-d44r7SM"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Líder del Ecosistema",centro:"Dirección General"},{nombre:"Miguel de Jesús Paredes Maestre",cargo:"Responsable de línea de producción",centro:"Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de Desarrollo Curricular",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Diana Julieth Núñez Ortegón",cargo:"Experta Temática",centro:"Centro de Comercio y Servicio - Regional Tolima"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Diseñadora instruccional",centro:"Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander"},{nombre:"Carolina Coca Salazar",cargo:"Asesora Metodológica",centro:"Centro de Diseño y Metrología - Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Corrector de estilo",centro:"Centro de Diseño y Metrología - Distrito Capital"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Alexander Acosta",cargo:"Producción audiovisual",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Nelson Vera",cargo:"Producción audiovisual",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Carmen Martínez",cargo:"Producción audiovisual",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Jorge Leonardo Camacho",cargo:"Desarrollo Fullstack",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Carmen Martínez",cargo:"Diseño de contenidos digitales",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Fabian Cuartas",cargo:"Validación de diseño y contenido",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Gilberto Herrera",cargo:"Validación de diseño y contenido",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Carolina Coca Salazar",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Luz Karime Amaya",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"},{nombre:"Jairo Valencia Ebrat",cargo:"Validación de recursos digitales ",centro:"Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;const k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:b,store:h["a"],render:e=>e(d)}).$mount("#app")},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.2093ca21.png"},"78a9":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1-.7c075cc2.svg"},"7d72":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.574a6fc2.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},"9e18":function(e,a,o){e.exports=o.p+"img/fondo-banner-principal2.338dfbf5.png"},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},bb67:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2-.1c1d0741.svg"}});
//# sourceMappingURL=app.d7d63772.js.map