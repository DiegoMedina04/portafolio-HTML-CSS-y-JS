 document.getElementById('descargarPdf').addEventListener('click', function () {
    var rutaPdf = './CV_DIEGO_PRADA.pdf';
    
    var enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = rutaPdf;
    enlaceTemporal.target = '_blank';

    var clicEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    enlaceTemporal.dispatchEvent(clicEvent);
});