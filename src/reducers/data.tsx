//casetas
import casetas8x20 from '../img/productos/casetas/caseta8x20.png';
import casetas8x24 from '../img/productos/casetas/caseta 8x24.png';
import casetas8x32 from '../img/productos/casetas/caseta 8x32.png';
import casetas8x44 from '../img/productos/casetas/caseta 8x44.png';
import casetas10x48 from '../img/productos/casetas/caseta 10x48.png';
import casetas12x60 from '../img/productos/casetas/caseta 12x60.png';
import casetaVigilancia from '../img/productos/casetas/caseta-vigilancia.png';

// desague
import camaraInspeccion from '../img/productos/desague/camara-inspeccion.png';
import camionDesague from '../img/productos/desague/camion-desague.png';
import camionDestape from '../img/productos/desague/camion-destape.png';
import camionVactor from '../img/productos/desague/camion-vactor.png';

//fFuentes
import fuenteLavamanos from '../img/productos/fuentes/fuentes-lavamanos.png';
import fuenteLavamanos2 from '../img/productos/fuentes/fuentes-evento.png';


// otros
import blackElite from '../img/productos/otros/black-elite.png';
import contenedorProducto from '../img/productos/otros/contenedor-producto.png';
import fosasPortatiles from '../img/productos/otros/fosas-portatiles.png';
import luxuria from '../img/productos/otros/luxurias.png';
import portacool from '../img/productos/otros/portacool.png';
import productosBañosMixtos from '../img/productos/otros/producto-baños mixtos.png';

//Sanitarios
import capacidadesDiferentes from '../img/productos/sanitarios/capacidades-diferentes.png';
import convencionalAzul from '../img/productos/sanitarios/convencional-azul.png';
import convencionalColores from '../img/productos/sanitarios/convencional-colores.png';
import convencionalRosa from '../img/productos/sanitarios/convencional-rosa.png';
import lujoAzul from '../img/productos/sanitarios/lujo-azul.png';
import lujoRosa from '../img/productos/sanitarios/lujo-rosa.png';

// //casetas
// let casetas8x20 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta8X20.png';
// let casetas8x24 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta%208X24.png';
// let casetas8x32 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta%208X32.png';
// let casetas8x44 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta%208X44.png';
// let casetas10x48 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta%2010X48.png';
// let casetas12x60 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta%2012X60.png';
// let casetaVigilancia = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/casetas/caseta-vigilancia.png';

// // desague
// let camaraInspeccion = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/desague/camara-inspeccion.png';
// let camionDesague = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/desague/camion-desague.png';
// let camionDestape = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/desague/camion-destape.png';
// let camionVactor = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/desague/camion-vactor.png';

// //fFuentes
// let fuenteLavamanos = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/fuentes/fuentes-lavamanos.png';
// let fuenteLavamanos2 = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/fuentes/fuentes-evento.png';


// // otros
// let blackElite = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/black-elite.png';
// let contenedorProducto = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/contenedor-producto.png';
// let fosasPortatiles = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/fosas-portatiles.png';
// let luxuria = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/luxurias.png';
// let portacool = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/portacool.png';
// let productosBañosMixtos = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/otros/producto-ba%C3%B1os%20mixtos.png';

// //Sanitarios
// let capacidadesDiferentes = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/capacidades-diferentes.png';
// let convencionalAzul = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/convencional-azul.png';
// let convencionalColores = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/convencional-colores.png';
// let convencionalRosa = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/convencional-rosa.png';
// let lujoAzul = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/lujo-azul.png';
// let lujoRosa = 'http://ventasletrimex.com.mx/letrimex_v2/public/img/productos/sanitarios/lujo-rosa.png';




export const evento = [
    { id: 1, name: "Convencional Azul", tipo: "evento", categoria: "Sanitarios", images: convencionalAzul, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 2, name: "Convencional Rosa", tipo: "evento", categoria: "Sanitarios", images: convencionalRosa, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 3, name: "Lujo Azul", tipo: "evento", categoria: "Sanitarios", images: lujoAzul, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.41M <br> Ancho: 1.3M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 4, name: "Lujo Rosa", tipo: "evento", categoria: "Sanitarios", images: lujoRosa, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.41M <br> Ancho: 1.3M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 5, name: "Capacidades Diferentes", tipo: "evento", categoria: "Sanitarios", images: capacidadesDiferentes, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.50M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Espacio para Silla de Ruedas <br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 6, name: "Convencional Colores", tipo: "evento", categoria: "Sanitarios", images: convencionalColores, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 7, name: "Fuentes", tipo: "evento", categoria: "Fuentes", images: fuenteLavamanos2, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: pendiente <br> Ancho: pendiente <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - <br> - <br> - <br> - <br> - " + 
    " <br> - <br> - "},
    
    { id: 9, name: "Baños Mixtos", tipo: "evento", categoria: "Baños mixtos", images: productosBañosMixtos, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Largo: 8.53M <br> Ancho: 2.43M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. <br> " + 
    "- Muro interior en papel viníl, liner papel a media altura de migitorios y exterior en cubierta de acero. <br> " + 
    "- Piso antiderrapante. <br> - Techo interior en panel de yeso. <br> " +
    "- Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado." + 
    "<br> <br> <span style='color:#083c64'> Equipamiento: </span> <br> - Sanitario <br> - Mingitorio <br> - Extractor <br> - Espejo <br> - Dispensador de jabón <br>" + 
    " - Dispensador de toallas <br> - Dispensador de papel sanitario"},
    
    { id: 10, name: "Black Elite", tipo: "evento", categoria: "Black elite", images: blackElite, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'> Dale a tu evento un toque inolvidable con nuestra caseta Black Elite. </span> <br> <br> <span style='color:#083c64'>Medidas:</span> <br> Alto: 3.10M <br> Ancho: 2.10M <br> Largo: 6.20M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    " <br> - Climatización <br> - Lavabo con Espejo <br> - Dispensadores de jabón y toallas <br> - Sanitarios para hombre y mujer <br> - Depósito de agua incluido " },
    
    { id: 11, name: "Luxuria", tipo: "evento", categoria: "Luxuria", images: luxuria, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Caseta Luxuria VIP</span> <br> <br> <span style='color:#083c64'>Medidas:</span> <br> Ancho: 2.60M <br> Largo: 8.10M <br><br> <span style='color:#083c64'>Baño de Hombres:</span> " + 
    " <br> - 2 inodoros privados de porcelana. <br> - 3 urinarios de pared con puntos de acceso separados. <br> - 2 lavabos de China en gabinetes de roble con espejo de roble. <br> - Tragaluz teñido de doble panel.  " +
    "<br><br> <span style='color:#083c64'>Baño de Mujeres:</span>" + 
    " <br> - 4 baños privados de porcelana, con puntos de acceso separados. <br> - 2 Fregadero de China en gabinetes de roble con espejo de roble de cuerpo entero. <br> - Tragaluz teñido de doble panel.  " + 
    "<br><br> <span style='color:#083c64'>Detalles:</span>" + 
    " <br> - Acabados de lujo en roble. <br> - Dispensador de toalla y jabón. <br> - Espejos con marcos de roble. <br> - 3 lavabos de porcelana. <br> - 5 baños y 3 migitorios en total para damas y caballeros. " },
    
    { id: 12, name: "Port a Cool", tipo: "evento", categoria: "Port a cool", images: portacool, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 1.70M <br> Largo: 1.57M <br> Ancho: 81CM <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Velocidad Variable <br> - Distribuvión de aire: 10,100 CFM. <br> - Amperes totales: 11. <br> - Reserva de agua: 32 Galones. <br> - Peso total: 108kg. " + 
    " <br> - Capacidad de enfriamento: 808 m2"},
]

export const construccion = [
    
    { id: 13, name: "Mobile Vigilancia", tipo: "construccion", categoria: "Casetas", images: casetaVigilancia, tamañoImagen: "m", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> 1.50M x 1.50M <br><br> <span style='color:#083c64'>Equipamiento:</span> " + 
    "<br> (1 persona) <br> - Persianas <br> - Contactos 110v <br> - Barra " + 
    " <br><br> <span style='color:#083c64'>Chasis:</span> <br> - Estructura de acero tipo canal. <br> - Tirón fijo de acero con sistema de nivelación mecánico " + 
    " <br> - Un eje sencillo con rin. <br><br> <span style='color:#083c64'>Aisalmiento:</span> " + 
    "<br> - Aisalmiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto. " +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span> " + 
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura."},
    
    { id: 14, name: "Mobile 8x20", tipo: "construccion", categoria: "Casetas", images: casetas8x20, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (4 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario (Adicional) <br> - Lavabo (Adicional) <br> - Extractor (Adicional)" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero tipo canal. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa (modelo con baño) " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 15, name: "Mobile 8x24", tipo: "construccion", categoria: "Casetas", images: casetas8x24, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (5 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario (Adicional) <br> - Lavabo (Adicional) <br> - Extractor (Adicional)" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero tipo canal. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa (modelo con baño) " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 16, name: "Mobile 8x32", tipo: "construccion", categoria: "Casetas", images: casetas8x32, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (5 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario <br> - Lavabo <br> - Extractor" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero tipo canal. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa. " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 17, name: "Mobile 8x44", tipo: "construccion", categoria: "Casetas", images: casetas8x44, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (7 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario <br> - Lavabo <br> - Extractor <br> - Clima central (Adicional)" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero IPR. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa. " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 18, name: "Mobile 10x48", tipo: "construccion", categoria: "Casetas", images: casetas10x48, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (8 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario <br> - Lavabo <br> - Extractor <br> - Barra de café <br> - Clóset <br> - Clima central (Adicional)" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero IPR. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa. " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 19, name: "Mobile 12x60", tipo: "construccion", categoria: "Casetas", images: casetas12x60, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Equipamiento:</span> " +
    "<br> (14 personas) <br> - Aire acondicionado <br> - Persianas <br> - Contactos 110v <br> - Salida de voz y datos <br> - Escritorio <br> - Gaveta <br> - Sanitario <br> - Lavabo <br> - Extractor <br> - Clima central (Adicional)" +
    "<br><br> <span style='color:#083c64'>Chasis:</span> " +
    "<br> - Estructura de acero IPR. <br> - Tirón de acero con sistema de nivelación mecánico. <br> - Un eje sencillo con rin." + 
    "<br><br> <span style='color:#083c64'>Aislamiento:</span> " +
    "<br> - Aislamiento térmico y acústico de fibra de vidrio en paredes y techos, acorde a la norma americana que regula este producto." +
    "<br><br> <span style='color:#083c64'>Puertas y ventanas:</span>" +
    "<br> - Ventanas de aluminio natural con sistema de sujeción perimetral totalmente selladas. <br> - Puerta exterior con marco perimetral de aluminio y doble cerradura. <br> - Puerta interior de tambor con chapa. " + 
    "<br><br> <span style='color:#083c64'>Acabados:</span>" +
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. " + 
    " <br> - Muro interior en papel de vinil y muro exterior con cubierta de acero con pintura horneada. <br> - Piso en loseta vinílica. " + 
    " <br> - Techo interior en panel de yeso. <br> - Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado."},
    
    { id: 20, name: "Fosas Portátil", tipo: "construccion", categoria: "Fosas portátiles", images: fosasPortatiles, tamañoImagen: "c", 
      ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 46CM <br> Largo: 1.83M <br> Ancho: 1.22M <br> Peso vacío: 45Kg. <br><br> <span style='color:#083c64'>Especificaciones:</span> " + 
    "<br> - Nuestras fosas son ideales para oficinas y almacenes móviles según sus necesidades. " + 
    " <br> - Capacidad de almacenamiento: 250 galones - 940 Lt. <br> <br> Ideal para almacenamiento de residuos a granel puestas para dar cabida a diversas configuraciones de plomería no roscados o uniones de cemento." +
    "<br> El tiempo de instalación más rápida que los competidores, proporciona almacenamiento versátil para oficinas o remolques en los lugares de trabajo."},
    
    { id: 21, name: "Contenedor Portátil 8x20", tipo: "construccion", categoria: "Contenedores", images: contenedorProducto, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Largo:</span>" +
    "<br> -Interior 5.9 M <br> - Exterior 6.0 M" + 
    "<br><br> <span style='color:#083c64'>Ancho:</span>" +
    "<br> - Interior 2.34 M <br> - Exterior 2.50 M" + 
    "<br><br> <span style='color:#083c64'>Altura:</span>" +
    "<br> - Interior 2.40 M <br> - Exterior 2.50 M " + 
    "<br><br> <span style='color:#083c64'>Tara:</span>" +
    "<br> - 2,300 KG" + 
    "<br><br> <span style='color:#083c64'>Carga Almacenable:</span>" +
    "<br> - 26,000 KG" + 
    "<br><br> <span style='color:#083c64'>Capacidad:</span>" + 
    "<br> - 33.3 M3"},
    
    { id: 22, name: "Convencional Azul", tipo: "construccion", categoria: "Sanitarios", images: convencionalAzul, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 23, name: "Convencional Rosa", tipo: "cosntruccion", categoria: "Sanitarios", images: convencionalRosa, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 24, name: "Lujo Azul", tipo: "construccion", categoria: "Sanitarios", images: lujoAzul, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.41M <br> Ancho: 1.3M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 25, name: "Lujo Rosa", tipo: "construccion", categoria: "Sanitarios", images: lujoRosa, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.41M <br> Ancho: 1.3M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 26, name: "Capacidades Diferentes", tipo: "construccion", categoria: "Sanitarios", images: capacidadesDiferentes, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.50M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Espacio para Silla de Ruedas <br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Dispensador de Jabón <br> - Dispensador de toalla <br> - Lavamanos <br> - Espejo <br> - Sistema Flush <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 27, name: "Convencional Colores", tipo: "construccion", categoria: "Sanitarios", images: convencionalColores, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 2.31M <br> Ancho: 1.2M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Rejillas de ventilación <br> - Tubo de respiración <br> - Cerrojo: Abierto / Cerrado <br> - Espejo <br> - Depósito inodoro de captación cónico " + 
    " <br> - Mingitorio <br> - Dispensador de papel higiénico"},
    
    { id: 28, name: "Fuente Lavamanos", tipo: "construccion", categoria: "Fuentes", images: fuenteLavamanos, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 1.12 M <br> Ancho: 55 CM <br> Profundo: 77 CM "+
    " <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Capacidad: 60 L <br> - Tamaño del lavabo:<br> Ancho: 52 CM <br> Largo: 32 CM <br>" + 
    " <br> *No requiere conexión hidráulica. <br> *Libre de mantenimiento. "},
    
    { id: 30, name: "Baños Mixtos", tipo: "construccion", categoria: "Baños mixtos", images: productosBañosMixtos, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Largo: 8.53M <br> Ancho: 2.43M <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Madera estufada canadiense con herrajes de sujeción a extremos acorde a la norma americana que regula este producto. <br> " + 
    "- Muro interior en papel viníl, liner papel a media altura de migitorios y exterior en cubierta de acero. <br> " + 
    "- Piso antiderrapante. <br> - Techo interior en panel de yeso. <br> " +
    "- Recubrimiento exterior de techo en lámina de acero totalmente sellado e impermeabilizado." + 
    "<br> <br> <span style='color:#083c64'> Equipamiento: </span> <br> - Sanitario <br> - Mingitorio <br> - Extractor <br> - Espejo <br> - Dispensador de jabón <br>" + 
    " - Dispensador de toallas <br> - Dispensador de papel sanitario"},
    
    { id: 32, name: "Black Elite", tipo: "construccion", categoria: "Black elite", images: blackElite, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: pendiente <br> Ancho: pendiente <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - <br> - <br> - <br> - <br> - " + 
    " <br> - <br> - "},
    
    { id: 33, name: "Port a Cool", tipo: "construccion", categoria: "Port a cool", images: portacool, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Medidas:</span> <br> Alto: 1.70M <br> Largo: 1.57M <br> Ancho: 81CM <br><br> <span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> - Velocidad Variable <br> - Distribuvión de aire: 10,100 CFM. <br> - Amperes totales: 11. <br> - Reserva de agua: 32 Galones. <br> - Peso total: 108kg. " + 
    " <br> - Capacidad de enfriamento: 808 m2"},
]

export const servicio = [
    
    { id: 34, name: "Desagüe de fosas sépticas", tipo: "servicio", categoria: "Desagüe de fosas", images: camionDesague, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> Brindamos servicio de desagüe de Fosas Sépticas residenciales, industriales, y comerciales con camiónes de diferentes capacidades según sus necesidades."},
    
    { id: 35, name: "Destape y mantenimiento con Vactor", tipo: "servicio", categoria: "Destape y mantenimiento de drenajes", images: camionVactor, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> Contamos con servicio de desazolve, destape y mantenimiento de tuberías de drenaje obstruidas, utilizando equipo Vactor (extracción y recolección de lodos) con una capacidad de hasta 15,000 lts."},
    
    { id: 36, name: "Destape y mantenimiento con Hidrojet", tipo: "servicio", categoria: "Destape y mantenimiento de drenajes", images: camionDestape, tamañoImagen: "g", 
    ficha:"<span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> Contamos con servicio de desazolve, destape y mantenimiento de tuberías de drenaje obstruidas, utilizando equipo Hidrojet a una presión de 3,000 lbs para sondeo de tuberías de 2'' a 18'' de diámetro."},
    
    { id: 37, name: "Inspección de tubería con cámara", tipo: "servicio", categoria: "Inspección de tuberías", images: camaraInspeccion, tamañoImagen: "c", 
    ficha:"<span style='color:#083c64'>Caracteristicas:</span> " + 
    "<br> Inspección de tuberías con cámara."},
]

