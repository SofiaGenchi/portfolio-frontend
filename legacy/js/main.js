const proyectos = [
  {
    titulo: "Estudio Inmobiliario",
    descripcion: "El repositorio mc-estudio-inmobiliario es una aplicación web hecha con React, pensada para un estudio inmobiliario que ayuda a sus clientes con la compra, venta y alquiler de propiedades. La app permite explorar las propiedades disponibles, ver detalles de cada una y contactar al estudio de manera fácil y rápida.",
    imagen: './img/web-inmobiliaria.png',
    github: "https://github.com/SofiaGenchi/mc-estudio-inmobiliario",
    web: "https://www.mariainesestudioinmobiliario.com.ar/",
  },
  {
    titulo: "Magnifico de la Limpieza",
    descripcion: "Magnífico de la Limpieza es una página web creada con HTML, CSS y Bootstrap, diseñada para una empresa argentina especializada en limpieza profesional a domicilio. Permite mostrar sus servicios para hogares y empresas en CABA y GBA, destacando limpieza de alfombras, tapizados, pisos y lavado de autos. La web busca transmitir confianza y profesionalismo, con un diseño limpio, moderno y fácil de navegar.",
    imagen: './img/web-limpieza.png',
    github: "#",
    web: "https://magnificodelalimpieza.com.ar",
  },
  {
    titulo: "Adidas - Proyecto Final",
    descripcion: "Adidas Store es una tienda online creada con ReactJS, inspirada en la página oficial de Adidas. Es un proyecto final del curso de ReactJS de CoderHouse y permite navegar por productos, agregarlos al carrito y simular una compra. Utiliza React-Bootstrap para los estilos, Firebase para la base de datos, React-Router-Dom para la navegación, SASS para los estilos personalizados y SweetAlert para mostrar alertas interactivas.",
    imagen: './img/web-adidas.png',
    github: "https://github.com/SofiaGenchi/adidas",
    web: "https://adidas-zeta.vercel.app/category/camisetas",
  },
  {
    titulo: "QRCode",
    descripcion: "QRcode es una aplicación web creada con HTML, CSS y JavaScript que permite generar códigos QR personalizados. El proyecto incluye un archivo HTML principal, un archivo de estilo CSS para el diseño y un archivo JavaScript para la funcionalidad de generación de códigos QR. Es una herramienta útil para crear códigos QR de manera rápida y fácil, sin necesidad de registrarse o instalar software adicional.",
    imagen: './img/web-qrcode.png',
    github: "https://github.com/SofiaGenchi/QRcode",
    web: "https://sofiagenchi.github.io/QRcode/",
  },
  {
    titulo: "Gradient Color Generator",
    descripcion: "Gradient Color Generator es una herramienta web creada con HTML, CSS y JavaScript que permite generar degradados de colores personalizados. Los usuarios pueden seleccionar colores de una paleta, elegir la dirección del degradado y copiar el código generado para usarlo en sus proyectos. Además, cuenta con un botón para refrescar los colores de manera aleatoria, ofreciendo una forma divertida y práctica de explorar combinaciones cromáticas.",
    imagen: './img/web-color.png',
    github: "https://github.com/SofiaGenchi/Gradient-Color-Generator",
    web: "https://gradient-color-generator-seven.vercel.app/",
  },
  {
    titulo: "AI Image Generator",
    descripcion: "AI Image Generation es una aplicación web creada con HTML, CSS y JavaScript que permite generar imágenes a partir de descripciones de texto, similar a herramientas como Midjourney o DALL·E. La aplicación utiliza la API de ChatGPT para analizar los prompts y generar hasta 4 imágenes basadas en ellos. Los usuarios pueden ingresar una descripción, seleccionar la cantidad de imágenes deseadas y descargarlas fácilmente con un solo clic.",
    imagen: './img/web-imagenes.png',
    github: "https://github.com/SofiaGenchi/AI-Image-Generation",
    web: "https://ai-image-generation-rho.vercel.app/",
  },
  {
    titulo: "Calculador de propina",
    descripcion: "Tip Calculator es una aplicación web creada con HTML, CSS y JavaScript que permite calcular propinas de manera rápida y práctica. Los usuarios pueden ingresar el monto de la cuenta, establecer el porcentaje de propina y dividir el total entre varias personas. Es ideal para situaciones cotidianas como cenas en grupo o salidas con amigos, ayudando a calcular de forma justa cuánto corresponde a cada uno.",
    imagen: './img/web-propinas.png',
    github: "https://github.com/SofiaGenchi/tip-calculator",
    web: "https://sofiagenchi.github.io/tip-calculator/",
  },
  {
    titulo: "BioVida",
    descripcion: "BioVidea es una pagina web desarrollada con HTML y SASS como parte de un proyecto en CoderHouse. Fue pensada para que una dietetica pueda mostrar los servicios que ofrece y desplegar una lista con sus productos.",
    imagen: './img/web-biovida.png',
    github: "https://github.com/SofiaGenchi/BioVida-Genchi",
    web: "https://sofiagenchi.github.io/BioVida-Genchi",
  }
];


const lista = document.querySelector(".lista-portafolio");

proyectos.forEach(proyecto => {
    lista.innerHTML += `
    
        <li>
            <h4>${proyecto.titulo}</h4>
            <img src=${proyecto.imagen} alt=${proyecto.titulo}>
            <p>${proyecto.descripcion}</p>
            <div>
                <a href="${proyecto.github}" target="_blank">GitHub</a>
                <a href="${proyecto.web}" target="_blank">Web</a>
            </div>
        </li>

    `;
});