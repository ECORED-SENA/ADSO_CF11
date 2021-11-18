export default {
  global: {
    componenteFormativo: 'Propuesta técnica',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará en capacidad de establecer una propuesta técnica de servicios de <em>software</em> para empresas y organizaciones, adoptando para ello, conceptos, estructura, términos de referencia, presentación, normatividad, costos, validación, entre otros elementos fundamentales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de la propuesta técnica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La propuesta técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Términos de Referencia (TdR)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elaboración de la propuesta técnica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Validación de la propuesta técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Aspectos de la contratación por licitación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normatividad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Acuerdos',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
        'American Psychological Association (2020). Normas APA: Cómo presentar trabajos escritos. NORMASAPA.',
      link: 'https://normasapa.in/',
    },
    {
      referencia:
        'Castro, E. (17 de julio de 2020). ¿Cómo presentar una propuesta de proyecto de <em>software</em>? <em>Anton.agency.</em>',
      link:
        'https://anton.agency/como-presentar-una-propuesta-proyecto-software/',
    },
    {
      referencia:
        'Colombia Compra Eficiente. (2020, 20 noviembre). Acuerdos Marco. DNP.',
      link:
        'https://colombiacompra.gov.co/ciudadanos/preguntas-frecuentes/acuerdos-marco',
    },
    {
      referencia: 'DeConceptos (2021). Conceptos. DECONCEPTOS.',
      link: 'https://deconceptos.com/?s=contrato',
    },
    {
      referencia: 'Lozano, A. (2019). Teoría de los presupuestos. Gestiopolis.',
      link: 'https://www.gestiopolis.com/teoria-de-los-presupuestos',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo (2013). Contratación Pública. APLICACIONES-MCIT.',
      link: 'http://www.aplicaciones-mcit.gov.co/cincopasos/c2.html',
    },
  ],
  glosario: [
    {
      termino: 'Cotización',
      significado:
        'Es el hecho de cotizar y significa establecer un precio, estimarlo o pagar una cuota. Determina el valor real de un bien, de un servicio.',
    },
    {
      termino: '<em>Freelance</em>',
      significado:
        'Es una persona que ofrece servicios profesionales o productos a diferentes clientes de manera independiente, es decir, por su propia cuenta.',
    },
    {
      termino: 'Licitación',
      significado:
        'Es una fase del procedimiento de contratación del sector público para elegir a las empresas privadas. La licitación es la fase de publicidad, donde la administración pública se encarga de publicitar el contrato que va a ofertar.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'Partes interesadas, desempeñan un papel clave en la elicitación, especificación y validación de los requerimientos de <em>software.</em>',
    },
    {
      termino: 'TdR (Términos de Referencia)',
      significado:
        'documento que elabora una empresa que necesita contratar a otras empresas para que le proporcionen determinados servicios para mejorar sus sistemas de mercadeo, de producción, de organización, sus finanzas o bien su administración en general.',
    },
  ],
  complementario: [
    {
      texto:
        'Starfish Host. (2020). Cómo hacer una propuesta de <em>Software</em> - ¡Presenta una propuesta de <em>software</em> exitosa! [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6zI4ZcRS8yg',
    },
    {
      texto:
        'Ministerio de Comercio, Industria y Turismo. (2013). Contratación Pública.',
      tipo: 'Artículo',
      link: ['http://www.aplicaciones-mcit.gov.co/cincopasos/c2.html'],
      //link: ['https://www.google.com/', 'https://www.google.com/'],
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Zulema León',
        cargo: 'Instructora',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Carlos Hernán Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Luis Arévalo Mantilla'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
