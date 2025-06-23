 document.addEventListener('DOMContentLoaded',function(){
    const mainContent = document.getElementById('main-content');
    const buttons = document.querySelectorAll('nav button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const page = button.getAttribute('data-page');
            loadPage(page);
        });
    });

    //CARGA INICIAL
    
    const  inicioContent = ` 
            <div class="pergamino">  
                <h2 class="h">Relatos de Terror, Secretos del Alma <br> y <br> Misterios de Cataluña</h2>
                <div class="contenido">
                    <p>Bienvenido a Catuluña en la oscuridad, un espacio dedicado a explorar el lado oculto de nuestra tierra. <br><br>
                    Aquí encontrarás tres empresas especializadas en rutas paranormales por Cataluña, listas para llevarte a escenarios reales de miedo,
                    leyendas y fenómenos inexplicables.
                    <br><br>Adéntrate también en nuestra pequeña biblioteca, una colección exclusiva de libros y relatos de terror escritos por autores catalanes.
                    Cada historia es un eco del alma, un secreto enterrado en el tiempo, un susurro que cobra vida al caer la noche. <br><br>
                    </p>
                </div>
                <div class="libro666"><img src="./assets/Cataluña en la Oscuridad Antigua.PNG" alt="" class="imagendelibro"></div>   
            </div>`
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const rutasContent = 
                      ` <h2 class="h">Encuentra el camino hacia el Terror.......</h2>
                    <span class="galeria">
                        <div class="contenedor">
                            <img src="./assets/botplane.png" alt=""  class="botonimg"></div>
                        <div class="contenedor">
                            <img src="./assets/botocatain.jpg" alt="silueta de un búo en una rama y la luna, logo de la pagina de catalunya insólita,"
                                    class="botonimg"></div>
                        <div class="contenedor">
                            <img src="./assets/botrutmis.png" alt=""  class="botonimg">
                            </div>
                    </span>
                    
                    <section id="catalunya" class="Catalunyainsolita">
                        
                        <h3 class="hhh">Explora los rincones más extraños y poco conocidos de Cataluña</h3>
                        <br>
                    <a href="https://www.catalunyainsolita.com/" target="_blank" class="pamigas">   CATALUNYA INSOLITA</a>

                        <p class="parrafos">
                        Te invita a descubrir lugares mágicos,leyendas olvidadas y enclaves con historias que desafian la lógica.
                        <br>
                        Esta página está repleta de rutas sorprendentes, monumentos ocultos y misterios locales que transformarán tu forma de ver el territorio catalán.
                        <br>
                        Perfecta para  viajeros diferentes y buscadores de lo inexplicable.
                        </p>
                        <img src="./assets/imgcata.png" alt="" class="cainsolita" href="https://www.catalunyainsolita.com/barcelona-gotica/" target="_blank">
                        <img src="./assets/imgcata1.png" alt="" class="cainsolita">
                        <img src="./assets/imgcata2.png" alt="" class="cainsolita">
                        <img src="./assets/imgcata3.png" alt="" class="cainsolita">
                        <h6>imagenes utilizadas de la misma pagina</h6> 
                    </section>
                    
                    <section id="rutas" class="Catalunyainsolita">
                        
                        <h3 class="hhh">Vive experiencias de terror reales en escenarios auténticos</h3>
                        <br>
                        <a href="https://rutasmisteriosas.es/" target="_blank" class="pamigas"> RUTAS MISTERIOSAS</a>
                        <p class="parrafos">
                        Es una de las principales empresas dedicadas a recorrido guiados por escenarios con actividad inexplicable:
                        <br>
                        fantasmas, asesinatos sin resolver, presencias y edificios malditos.
                        <br>
                        Si quieres sentir escalofrios caminando por las calles antiguas de noche o entar en casas con historia oscura, esta es tu mejor opción. 
                        </p>
                        <img src="./assets/imgruta1.png" alt="" class="rutasmis">
                        <img src="./assets/imgruta2.png" alt="" class="rutasmis">
                        <img src="./assets/imgruta3.png" alt="" class="rutasmis">
                        <h6>imagenes utilizadas de la misma pagina</h6> 
                    </section>
                    
                    <section  id="planeta" class="Catalunyainsolita">
                        
                        <h3 class="hhh">Una ventana a los relatos del alma y de los relatos que van mas alla del misterio local</h3>
                        <br>
                        <a href="https://planetainsolito.es/" target="_blank" class="pamigas">PLANETA INSOLITO</a>

                <p class="parrafos">
                    Ofrece visitas guiadas, conferencias y contenido sobre misterios hitóricos,ciencia desconocida,
                    y fenómenos paranormales tanto en Cataluñacomo en el mundo.
                    <br>
                    Su estilo divulgativo y su enfoque serio lo convierten en un referente para quienes buscan comprender lo oculto con una mirada documentada.
                </p>
                        <img src="./assets/imgplaneta.png" alt="" class="cainsolita">
                        <img src="./assets/imgplaneta1.png" alt="" class="cainsolita">
                        <img src="./assets/imgplaneta2.png" alt="" class="cainsolita">
                        <img src="./assets/imgplaneta3.png" alt="" class="cainsolita">
                        <img src="./assets/imgplaneta4.png" alt="" class="cainsolita">
                        <h6>imagenes utilizadas de la misma pagina</h6> 
                </section>`

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////          

const bibliotecaContent = ` <section class="contenedor-libreria">
      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/1.jpg" alt="">
        </div>
        <h4 class="hfour"> 100 escapades misterioses per Catalunya <br> Jordi Desvilar</h4>
            <p>Un recorrido fascinante por 100 lugares en Cataluña poco conocidos, envueltos en misterio, leyendas e historias
                sorprendentes. Desde rincones naturales hasta monumentos olvidados, Desvilar nos invita a descubrir sitios mágicos
                que esconden secretos, fenómenos inexplicables y relatos que han pasado desapercibidos en la historia oficial catalana.
            </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/2.jpg" alt="">
        </div>
          <h4 class="hfour">Aenigma Monserratus <br> Raúl Sacrest Castro</h4>
              <p>Este libro se sumerge en el enigma espiritual y energético de la montaña de Montserrat, considerada un punto neurálgico
                mágico-religioso. El autor explora su simbolismo, los fenómenos paranormales, la conexión telúrica, y su papel como centro
                de fe, peregrinación y leyenda. Una visión holística de uno de los lugares más enigmáticos de Cataluña.
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/3.jpg" alt="">
        </div>
          <h4 class="hfour"> Vivencias de un contactado <br> Luis José Grifol</h4>
              <p>Testimonio personal de uno de los contactados más conocidos de España. Grifol relata sus experiencias de contacto con
                inteligencias extraterrestres, centradas principalmente en Montserrat, donde afirma haber tenido avistamientos regulares
                desde los años 70. El libro combina relatos místicos, mensajes cósmicos y reflexiones espirituales sobre la humanidad y
                el universo.
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/4.jpg" alt="">
        </div>
          <h4 class="hfour"> Bruixes <br> Mercè Foradada</h4>
              <p> Dos voces femeninas en distintas épocas —una en la posguerra española y otra en el siglo XVII— narran su experiencia
                de persecución por haber desafiado las normas sociales de su tiempo. El libro aborda la figura de la "bruja" como
                símbolo de mujeres libres, condenadas por su diferencia. Una historia de sororidad, represión y resiliencia femenina.
              </p>
      </article>
    
      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/5.jpg" alt="">
        </div>
          <h4 class="hfour">Cataluña de leyenda <br> César Alcalá</h4>
              <p> Colección de relatos legendarios de todo el territorio catalán. Criaturas fantásticas, almas errantes, enigmas
                históricos y pueblos encantados dan forma a esta guía de lo mágico en Cataluña. Ideal para amantes de las tradiciones 
                orales y del folclore, este libro rescata mitos transmitidos durante siglos que aún perviven en la cultura popular.
              </p>
      </article>

      <article class="libross">
      <div class="imgtapalibro">
        <img src="./assets/libreria/6.jpg" alt="">
      </div>
        <h4 class="hfour">Montserrat, montaña mágica <br> Miguel G. Arcil</h4>
              <p> Una de las obras más emblemáticas sobre Montserrat y sus misterios. Arcil recopila décadas de leyendas: avistamientos
                OVNI, presencia nazi en busca del Santo Grial, energías especiales, símbolos ocultos y fenómenos inexplicables. 
                Esta edición revisada incorpora nuevos casos y teorías que refuerzan la visión de Montserrat como un enclave mágico 
                único.
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/7.png" alt="">
        </div>
          <h4 class="hfour">Cataluña, guía del terror <br> Miguel G. Arcil</h4>
              <p>Una ruta por los rincones más espeluznantes de Cataluña. Desde hospitales abandonados y pueblos fantasma hasta 
                apariciones sobrenaturales, el autor nos presenta una geografía del miedo, perfecta para quienes buscan historias de
                terror en lugares reales. Cada lugar incluye contexto histórico y testimonios que amplifican el misterio.
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/8.jpg" alt="">
        </div>
          <h4 class="hfour">El cielo bajo los pies <br> Elsa Plaza</h4>
              <p>Novela histórica basada en el caso real de Enriqueta Martí, “la vampira del Raval”, en la Barcelona de principios del
                siglo XX. A través de una protagonista ficticia, se revela una ciudad sombría marcada por la miseria, la trata de menores
                y la corrupción policial. Plaza reconstruye con rigor el ambiente del Raval y sugiere una lectura crítica sobre los verdaderos
                monstruos sociales.
              </p>
      </article>
     
      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/9.jpg" alt="">
        </div>
          <h4 class="hfour">  El laberinto de los espíritus <br> Carlos Ruiz Zafón</h4>
              <p> El laberinto de los espíritus es la novela que cierra la célebre tetralogía de El Cementerio de los Libros Olvidados. Ambientada en una Barcelona oscura 
                y turbulenta de la posguerra, la historia está protagonizada por Alicia Gris, una mujer misteriosa y atormentada, convertida en investigadora por encargo 
                del régimen franquista.
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/10.jpg" alt="">
        </div>
          <h4 class="hfour"> El misterio de la calle Poniente <br> Fernando Gómez</h4>
         
              <p>Novela negra histórica inspirada en hechos reales de Barcelona en febrero de 1912: la desaparición de una niña de tres años destapa una red de
                asesinatos infantiles relacionados con Enriqueta Martí, la “vampira del Raval”. Se ambienta en un contexto marcado por la miseria social, la Semana
                Trágica y la corrupción policial, mezclando investigación criminal con un retrato oscuro de la sociedad de la época
              </p>
      </article>

      <article class="libross">
        <div class="imgtapalibro">
          <img src="./assets/libreria/11.png" alt="">
        </div>
          <h4 class="hfour">Girona, tierra de mitos y leyendas <br> Joan de Déu Prats</h4>
              <p>Recopilación de 58 relatos fantásticos y míticos del territorio de Girona. El autor combina documentación histórica con leyendas sobre íberos,
                romanos, fantasmas, hadas, dracs y tesoros ocultos. Historias sobre menhires, dòlmens, bosques mágicos, sirenas y otros seres, en una obra amena
                y ricamente documentada que rescata la tradición oral y el folclore local 
              </p>
      </article>
      <article class="libross">

          <div class="imgtapalibro">
            <img src="./assets/libreria/12.jpg" alt="">
          </div>
            <h4 class="hfour">Guía de la Catalunya misteriosa, mágica y paranormal <br> Josep M. Armengou</h4>
              <p>Guía ilustrada que recorre los rincones más enigmáticos de Cataluña: fenómenos paranormales, mitos ancestrales, energías ocultas y leyendas populares. 
                La estructura práctica permite realizar itinerarios temáticos y descubrir lo oculto tras edificios, parajes y pueblos llenos de historias olvidadas o 
                desconocidas .
              </p>
      </article>
        
      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/13.jpg" alt="">
          </div>
            <h4 class="hfour"> Guía de la Catalunya paranormal y mágica <br> Miguel G. Aracil</h4>
              <p>Compilación de fenómenos paranormales que van desde bosques encantados, psicofonías, vampirismo y brujería hasta avistamientos OVNI. A través de 
                anécdotas, testimonios y exploraciones sobre el terreno, Aracil nos introduce en una Cataluña alternativa, donde lo extraordinario convive con lo cotidiano
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/14.jpeg" alt="">
          </div>
            <h4 class="hfour"> Guía de seres fantásticos de los Países Catalanes <br> Miguel G. Aracil</h4>
              <p>Obra de unas 120 páginas que documenta los seres de la mitología catalana (Cataluña, Valencia y Baleares), incluyendo duendes, hadas, vampiros, ogros, 
                genios y más. Se presenta como una enciclopedia accesible que explica características, localización geográfica y trasfondo cultural de estas criaturas mágicas 
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/15.jpg" alt="">
          </div>
            <h4 class="hfour">Guía fantástica de Catalunya <br> Josep Guijarro</h4>
                <p> Guía que mezcla historia, misterio y tradición: ovnis, templarios, cátaros, masonería, fantasmas, casas encantadas, lugares malditos y enigmas medievales. 
                  Desde el Santo Grial hasta dólmens prehistóricos, Guijarro rescata relatos que oscilan entre lo mítico y lo investigado, invitando a descubrir una Cataluña 
                  fantástica e insólita .
                </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/16.jpg" alt="">
          </div>
            <h4 class="hfour"> Hadas, gnomos, sílfides y ondinas <br> Miguel G. Aracil</h4>
              <p> Estudio riguroso y desplegado de las criaturas del mundo elemental: hadas, gnomos, silfos, ondinas, duendes, elfos, salamandras y otros seres mágicos. 
                Describe sus características, misiones, modos de vida y por qué algunas especies han desaparecido. Incluye su presencia en España y Europa, con fotografías 
                y leyendas tradicionales.
              </p>
      </article>
     
      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/17.jpg" alt="">
          </div>
            <h4 class="hfour"> La mala dona <br> Marc Pastor</h4>
              <p> Ambientada en la Barcelona de principios del siglo XX, esta novela negra se centra en una serie de desapariciones de niños, hijos de prostitutas, que no 
                se atreven a denunciar. La noticia de un supuesto “monstruo” o vampiro que acecha en los barrios bajos se extiende rápidamente. El inspector Moisès Corvo, 
                amante de la bebida y los burdeles, y su compañero Juan Malsano, se encargan del caso cuando aparece un cadáver cerca del Liceo. Madres aterradas, 
                atmósfera opresiva y lo sobrenatural se combinan en una investigación cada vez más oscura
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/18.jpg" alt="">
          </div>
            <h4 class="hfour"> Les històries naturals <br> Joan Perucho</h4>
              <p>Novela fantástica ambientada durante la Primera Guerra Carlista (1833‑1840) en Barcelona. El científico naturalista Antoni de Montpalau inicia un viaje 
                iniciático al descubrir a Onofre de Dip, un caballero medieval convertido en vampiro. Combina novela histórica, gótica y fantástica, explorando el choque 
                entre racionalismo ilustrado y lo sobrenatural
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/19.jpg" alt="">
          </div>
            <h4 class="hfour"> Les bruixes de Llers <br> Carles Fages de Climent</h4>
              <p>Poemario publicado en 1924, con ilustraciones de Salvador Dalí y prólogo de Ventura Gassol. A través de versos y baladas ambientados en el Empordà, 
                evoca mitos y leyendas sobre las brujas de Llers: hermanas míticas, pastorcillas, fuerza de los vientos mágicos, con un lenguaje lleno de color y misterio
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/20.jpg" alt="">
          </div>
            <h4 class="hfour"> Leyendas del planeta Thámyris <br> Joan Manuel Gisbert</h4>
              <p> Antología de leyendas fantásticas procedentes de Thámyris, un planeta descubierto por un astrónomo. El narrador recibe cartas que relatan relatos 
                mitológicos: la Pirámide de la Noche Eterna, el origen de Mileterris, el continente insular, el Devorador de Sueños, Centilia o el Universo Inmóvil. 
                Un mundo lejanamente parecido a la Tierra, donde luz y tinieblas combaten
              </p>
      </article>
    
    <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/21.jpg" alt="">
          </div>
            <h4 class="hfour">Los diarios de Enriqueta Martí <br> Antonio Gracia José (Pierrot)</h4>
                <p> Se presenta como un diario ficticio de Enriqueta Martí, la conocida “vampira de Barcelona” detenida el 10 de marzo de 1912. Acusada de prostituir y 
                  asesinar niños para extraer su sangre y grasa y fabricar pócimas, su historia sacudió la ciudad. Aunque contiene hechos reales extraídos de periódicos 
                  de ya en 1911/12, el diario dramatiza su vida y actos
                </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/22.jpg" alt="">
          </div>
            <h4 class="hfour"> Misteris de Catalunya per passar por <br> Sylvia Lagarda‑Mata</h4>
              <p> Guía de terror e intriga dirigida a un público infantil/juvenil. Recoge 29 historias misteriosas, basadas en sucesos reales (o casi), acontecidos en 
                distintas localidades de Catalunya a lo largo de los siglos. Cuentos escalofriantes ideales para introducir a los jóvenes en el folclore y las leyendas de 
                la región
              </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/23.jpg" alt="">
          </div>
            <h4 class="hfour"> Vampiros en Barcelona <br> Varios autores</h4>
                <p> Antología compuesta por nueve relatos de vampiros ambientados en Barcelona. Cada autor explora diferentes rincones ocultos de la ciudad y sus criaturas 
                  nocturnas. Misterio, lugares poco conocidos y ambiente gótico confluyen en estas historias que prometen sorprender al lector 
                </p>
      </article>

      <article class="libross">
          <div class="imgtapalibro">
            <img src="./assets/libreria/24.jpg" alt="">
          </div>
            <h4 class="hfour">Veus de mort als Encants Vells <br>Sylvia Lagarda‑Mata</h4>
              <p> Thriller histórico ambientado en la Barcelona de 1840. El famoso detective Auguste Dupin se enfrenta al caso de un asesino en serie que mata por libros 
                antiguos. La novela mezcla asesinatos, librerías, ambiente negro y las primeras “crónicas mediáticas” de la ciudad. Premio Santa Eulàlia de novela de 
                Barcelona 2024 
              </p>
      </article>
      </section>`

const interroganteContent = "<p>Secreto...</p>";

function loadPage(page){
    let content = '';
    switch(page){
        case 'inicio': content = inicioContent;
        break;
        case 'rutas': content = rutasContent;
        break;
        case 'biblioteca': content = bibliotecaContent;
        break;
        case 'interrogante': content = interroganteContent;
        break;
        default: content = inicioContent;
    }
//////////////////////funciones para los apartados del main////////////////////////////
       mainContent.innerHTML = content;

    if (page === 'rutas') {
        paginaRutas();
    }

    if (page === 'biblioteca') {
         paginaBiblioteca(); 

    }

    if(page === tienda){
        paginaTienda();
    }

    }

    function paginaRutas() {   // Define la función que configura la lógica de interacción para la sección "rutas"

        const sectionIds = ['planeta', 'catalunya', 'rutas']; //Creo un array con los IDs de las secciones que se van a mostrar y ocultar dinámicamente.

        const botones = document.querySelectorAll('.botonimg');//seleccionamos todos los botones por su clase

        const secciones = document.querySelectorAll('.Catalunyainsolita');//seleccionamos todas las secciones por su clase

        secciones.forEach(section => section.style.display = 'none');//ocultamos todas las secciones seleccionadas inicialmente, para que luego solo se muestre la deseada al hacer clic en un botón.

        botones.forEach((btn, index) => {                  //interacciona con las img que funcionan como botones

        btn.setAttribute('data-target', sectionIds[index]);// Asigna un atributo 'data-target' con el ID correspondiente de la sección

        btn.addEventListener('click', () => {               // Añade un evento click al botón

            secciones.forEach(section => section.style.display = 'none'); // Oculta todas las secciones al hacer clic

            const targetId = btn.getAttribute('data-target');// Obtiene el ID de la sección objetivo desde el atributo del botón

            const target = document.getElementById(targetId);// Busca en el DOM la sección con ese ID

            if (target) {                                    // Si la sección existe, la muestra y hace scroll hacia ella

            target.style.display = 'block';                 // Muestra la sección

         
            }
        });
        });
    };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function  paginaBiblioteca() {
  const imagenes = document.querySelectorAll('.imgtapalibro img');
  const parrafos = document.querySelectorAll('.libross p');

  // Oculta todos los párrafos al inicio
  parrafos.forEach(p => {
    p.style.display = 'none';
  });

  // Asigna un evento a cada imagen
  imagenes.forEach(img => {
    img.addEventListener('click', () => {
      parrafos.forEach(p => p.style.display = 'none'); // Oculta todos
      const seccion = img.closest('.libross');
      const parrafo = seccion.querySelector('p');
      if (parrafo) {
        parrafo.style.display = 'block';
      }
    });
  });
}

loadPage('inicio');
   
 
})


