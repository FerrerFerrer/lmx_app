//construccion
import bann_contenedores from '../img/productos/construccion/bann-contenedores.png';
import bann_fosa_portatil from '../img/productos/construccion/bann-fosa-portatil.png';
import banner_baños_conts from '../img/productos/construccion/banner-baños-conts.png';
import bann_casetas from '../img/productos/construccion/banner-casetas.png';
import banner_fuentes_lavamanos from '../img/productos/construccion/banner-fuentes-lavaman.png';
import banner_mixtos from '../img/productos/construccion/banner-mixtos.png';
import banner_porta from '../img/productos/construccion/banner-porta.png';
import banner_construccion from '../img/productos/construccion/banner-construccion.png';

// evento
import eventos_categ from '../img/productos/eventos/eventos-categ.png';
import baños_mixtos_categ from '../img/productos/eventos/baños-mixtos-categ.png';
import black_categ from '../img/productos/eventos/black-categ.png';
import fuentes from '../img/productos/eventos/fuentes.png';
import luxuria from '../img/productos/eventos/luxuria.png';
import sanitarios_categ from '../img/productos/eventos/sanitarios-categ.png';

//servicio
import desague_roduct from '../img/productos/servicios/desague-product.png';
import destape_product from '../img/productos/servicios/destape-product.png';
import inspeccion_product from '../img/productos/servicios/inspeccion-product.png';
import servicios_product from '../img/productos/servicios/servicios-product.png';

export const titulo = [
    { id: 1, name: "titulo_evento" , imagen: eventos_categ},
    { id: 2, name: "titulo_construccion" , imagen: banner_construccion},
    { id: 3, name: "titulo_servicio", imagen: servicios_product }
]


export const evento = [
    { id: 1, name: "Sanitarios" , imagen: sanitarios_categ, tipo:"evento", categoria:"Sanitarios"},
    { id: 2, name: "Fuentes", imagen: fuentes, tipo:"evento", categoria:"Fuentes" },
    { id: 3, name: "Baños mixtos", imagen: baños_mixtos_categ, tipo:"evento", categoria:"Baños mixtos" },
    { id: 4, name: "Luxuria", imagen: luxuria, tipo:"evento", categoria:"Luxuria" },
    { id: 5, name: "Black Elite", imagen: black_categ, tipo:"evento", categoria:"Black elite" }
]

export const construccion = [
    { id: 1, name: "Sanitarios", imagen: banner_baños_conts, tipo:"construccion", categoria:"Sanitarios" },
    { id: 2, name: "Fuentes", imagen: banner_fuentes_lavamanos, tipo:"construccion", categoria:"Fuentes" },
    { id: 3, name: "Baños mixtos", imagen: banner_mixtos, tipo:"construccion", categoria:"Baños mixtos" },
    { id: 4, name: "Casetas", imagen: bann_casetas, tipo:"construccion", categoria:"Casetas" },
    { id: 5, name: "Contenedores", imagen: bann_contenedores, tipo:"construccion", categoria:"Contenedores" },
    { id: 6, name: "Port a cool", imagen: banner_porta, tipo:"construccion", categoria:"Port a cool" },
    { id: 7, name: "Fosa Portátil", imagen: bann_fosa_portatil, tipo:"construccion", categoria:"Fosas portatiles" }
]

export const servicio = [
    { id: 1, name: "Desague de fosas sépticas", imagen: desague_roduct, tipo:"servicio", categoria:"Desague de fosas" },
    { id: 2, name: "Destape y mantenimiento de drenajes", imagen: destape_product, tipo:"servicio", categoria:"Destape y mantenimiento de drenajes" },
    { id: 3, name: "Inspección de tubería con cámara", imagen: inspeccion_product, tipo:"servicio", categoria:"Inspeccion de tuberias" }
]
