/*  document.addEventListener('DOMContentLoaded',function(){
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
                    ¿Estás listo para adentarte en la oscuridad....?   </p>
                </div>   
            </div>`
    
    const rutasContent = "<p>Próximamente</p>";
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
        
        mainContent.innerHTML = content
        
        
    }
    loadPage('inicio');
   
 
})*/
