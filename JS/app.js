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
               
    

const bibliotecaContent = "<p>En construcción</p>";
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

mainContent.innerHTML = content;

        if (page === 'rutas') {   // Verifica si la página actual es 'rutas'
        setupRutasLogic();       // Si es así, inicializa la lógica específica para la página de rutas
        }
    }

    function setupRutasLogic() {   // Define la función que configura la lógica de interacción para la sección "rutas"

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
    }
loadPage('inicio');
   
 
})
