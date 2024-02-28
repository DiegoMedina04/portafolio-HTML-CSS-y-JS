
async function mostrarMensaje(mensajes) {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    const result = await Swal.fire({
        title: mensajeAleatorio,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ver portafolio"
    });

    return result.isConfirmed;
}

async function mostrarAlerta() {
    const resultadoInicial = await Swal.fire({
        title: "Portafolio",
        text: "¡Hola! ¿Cómo estás? ¿Quieres ver mi portafolio?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ver portafolio"
    });

    if (!resultadoInicial.isConfirmed) {
        let opcion = false;
        while (!opcion) {
            const mensajes = [
                '¡Oh no! ¿Realmente quieres perderte esto?',
                '¡Vamos, dale una oportunidad!',
                '¿Seguro que quieres decir que no?',
                '¡Estás a solo un clic de la diversión!',
                '¡Piénsalo de nuevo! Esto podría sorprenderte.',
                '¿De verdad quieres perder la oportunidad de ver mi trabajo?',
                '¡No te preocupes, no te morderé! Haz clic para descubrir más.',
                '¿En serio? ¿No quieres echarle un vistazo?',
                '¡Tu curiosidad te lo agradecerá!',
                '¡Haz clic y descubre algo increíble!',
                '¡No seas falso!',
            ];

            opcion = await mostrarMensaje(mensajes);
        }
    }
}

mostrarAlerta();
