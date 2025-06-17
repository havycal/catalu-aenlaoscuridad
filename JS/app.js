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
    loadPage('home');

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
        }}

    




























})
