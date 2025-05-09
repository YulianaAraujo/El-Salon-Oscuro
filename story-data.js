const storyData = {
    title: "El Salón Oscuro",
    startPassage: "Menú de inicio",
    passages: {
        "Menú de inicio": {
            text: "<h2 class='intro-text'>Una sombra se cierne sobre la facultad...</h2><p class='intro-subtext'> Dicen que hay puertas que nunca debieron abrirse...</p>",
    choices: [

                { text: "Atrévete a entrar", passage: "Noticia" }
            ]
        },
        "Noticia": {
            text: "Vas caminando en la calle y cuando estás a punto de entrar a la facultad ves una página de un periódico.",
            choices: [
                { text: "<img src='imagenes/Periodico.png' alt='Recoger periódico' style='height: 80px;'>",
            passage: "periódico" }
            ]
        },
        "periódico": {
            text: "Cuando lo recoges aparece una noticia en primera plana sobre un exorcismo ocurrido en el Minuto de Dios. La víctima, <b>la hija del director</b> de la universidad, <b>murió</b> durante el ritual mientras intentaban expulsar el supuesto <span class='blood'>\"demonio\"</span> que la poseía.",
            image: "https://i.postimg.cc/NjBw0PXG/Whats-App-Image-2025-04-04-at-17-55-45.jpg",
            imageAlt: "Periódico",
            choices: [
                { text: "Te parece tenebroso, y te quedas un poco impactado pero no puedes llegar tarde a tu clase, así que botas el periódico y sigues caminando", passage: "Continuar con la historia" }
            ]
        },
        "Continuar con la historia": {
            text: "Mientras caminas recibes una llamada de tu amigo Edward, le contestas:<br><br>\"Comienza en la pantalla de una video llamada. Una pantalla dividida mostrando a Gabriel en el pasillo de la universidad y a Edward en la cafetería.\"",
            image: "https://i.postimg.cc/d0gKW7Pm/image-2.jpg",
            imageAlt: "Videollamada",
            text2: "<br><br><b>EDWARD:</b> ¿Ya estás en el salón? Ya casi llego.<br><br><b>GABRIEL:</b> Sí, estoy en la cafetería comprándome un café. ¿Vienes aquí o me esperas en el salón?<br><br><b>EDWARD:</b> Nah, man. Ya casi llego al salón, mejor te espero allí.<br><br>Gabriel llega al pasillo frente al salón. Un marcador rueda desde el interior hacia afuera.<br><br><b>GABRIEL:</b> Acaba de pasar algo muy raro. Mira, ese marcador vino de adentro, pero el salón está todo <span class='flicker'>oscuro.</span><br><br><b>EDWARD:</b> ¿Por qué no entras?<b>¿No tienes huevos?</b>",
            choices: [
                { text: "Entrar al salón", passage: "Entrar al salón" },
                { text: "Ignorar el marcador", passage: "Ignorar el marcador" }
            ]
        },
        "Entrar al salón": {
            text: "<b>GABRIEL:</b> Ya fue, quiero ver lo que está dentro.<br><br>Gabriel abre la puerta y enciende la luz. Descubre manchas extrañas en las paredes que parecen siluetas humanas.",
            image: "https://i.postimg.cc/d0v7sms3/Whats-App-Image-2025-04-11-at-17-32-31.jpg",
            imageAlt: "Manchas en la pared",
            text2: "<br><br><b>GABRIEL:</b> ¡Ves!, no hay nadie.<br>Gabriel escucha un <span class='pulse'>llanto suave</span> desde un rincón.<br><br><b>GABRIEL:</b> Oye... ¿escuchas eso? Es... llanto, está viniendo de adentro... ¿qué está pasando?<br><br><b>EDWARD:</b> ¿Qué? ¿llanto? ¿De qué hablas? No puedes estar escuchando eso, bro, ¿estás seguro?",
            choices: [
                { text: "Investigar el origen del llanto", passage: "Investigar el origen del llanto" },
                { text: "Salir inmediatamente del salón", passage: "Salir inmediatamente del salón" }
            ]
        },
        "Ignorar el marcador": {
            text: "Gabriel retrocede de la puerta y se aleja.<br><br><b>GABRIEL:</b> Mejor esperemos a que llegue algún profesor. <p><span class='shake'>Esto no me da buena espina.</span></p><br><br><b>EDWARD:</b> Como quieras, cobarde. Voy para allá entonces.<br><br><i>Final alternativo 1</i>",
            choices: [
                { text: "Volver atrás", passage: "Continuar con la historia" }
            ]
        },
        "Investigar el origen del llanto": {
            text: "El llanto cesa. En la esquina aparece la figura fantasmal de una mujer de blanco.",
            image: "https://caracol.com.co/resizer/v2/B7YACMXVAZEA7ENDGE4CMGUVDI.jpg?auth=8f4bd578370e8296dea9b3db95030d7500cc069ddbe418d7f6083cef79665c06&width=650&height=488&quality=70&smart=true",
            imageAlt: "Mujer fantasma",
            text2: "<br><br><b>GABRIEL:</b> ¡Mira! Ahí, en la esquina... <span class='shake'>hay una mujer.</span><br><br><b>EDWARD:</b> <span class='shake'>¿Qué? ¡Sal de ahí! ¡SAL DE AHÍ AHORA!</span>",
            choices: [
                { text: "Intentar hablar con la figura", passage: "Intentar hablar con la figura" },
                { text: "Correr hacia la puerta", passage: "Correr hacia la puerta" }
            ]
        },
        "Salir inmediatamente del salón": {
            text: "<b>GABRIEL:</b> No sé qué demonios es eso, pero no me quedaré a averiguarlo.<br><br><b>EDWARD:</b> ¡Bien hecho! Ven a la cafetería, rápido.<br><br>Gabriel corre hacia la puerta y sale del salón a toda prisa.",
            image: "https://i.postimg.cc/g0Gd7gsz/Whats-App-Image-2025-04-11-at-17-17-50.jpg",
            imageAlt: "Hombre corriendo",
            text2: "<br><br><i>Final alternativo 2</i>",
            choices: [
                { text: "Volver atrás", passage: "Entrar al salón" }
            ]
        },
        "Intentar hablar con la figura": {
            text: "La mujer levanta su mano y da un <span class='blur'>grito desgarrador.</span> La figura corre hacia Gabriel mientras pueden escucharse los gritos de Edward a través del teléfono.",
            image: "https://img.freepik.com/fotos-premium/mujer-fantasma-aterrador-gritando-traves-vidrio-sucio-sobre-fondo-oscuro_120795-1154.jpg?w=1060",
            imageAlt: "Mujer fantasma grito",
            choices: [
                { text: "Correr directamente hacia la puerta", passage: "Correr directamente hacia la puerta" },
                { text: "Intentar esquivar corriendo por el lado", passage: "Intentar esquivar corriendo por el lado" }
            ]
        },
        "Correr hacia la puerta": {
            text: "Gabriel intenta hablar con la aparición. <span class='color-cycle'>La figura emite un grito y se lanza hacia él.</span><br><br><b>GABRIEL:</b> ¿Quién eres? ¿Qué quieres?<br><br><span class='blood'>La figura ataca a Gabriel.</span>",
            image: "https://img.freepik.com/fotos-premium/mujer-fantasma-aterrador-gritando-traves-vidrio-sucio-sobre-fondo-oscuro_120795-1158.jpg",
            imageAlt: "Mujer fantasma gritando",
            text2: "<br><br><i>Final fatal 1</i>",
            choices: [
                { text: "Volver atrás", passage: "Investigar el origen del llanto" }
            ]
        },
        "Intentar esquivar corriendo por el lado": {
            text: "Gabriel intenta esquivar a la figura. <span class='ghost'>La mujer se mueve a velocidad imposible y lo intercepta</span> y Gabriel solo da un <span class='blood'>último grito antes de morir.</span>",
            image: "https://i.gifer.com/RIJS.gif",
            imageAlt: "Mujer fantasma acercándose",
            text2: "<br><br><i>Final fatal 2</i>",
            choices: [
                { text: "Volver atrás", passage: "Intentar hablar con la figura" }
            ]
        },
        "Correr directamente hacia la puerta": {
            text: "Gabriel corre hacia la puerta y la cierra de golpe. Se apoya contra la pared, <span class='pulse'>respirando agitadamente.</span>",
            image: "https://media.tenor.com/fRQQOIiLhyEAAAAM/agitado-backdoor.gif",
            imageAlt: "Hombre agitado",
            text2: "<br><br><b>EDWARD:</b> ¡Gabriel, ¿estás bien?!<br><br><b>GABRIEL:</b> Estoy bien… pero… no sé qué fue eso.<br><br>Gabriel mira por la ventanilla de la puerta. Comienza a caminar hacia la cafetería.",
            image2: "https://i.postimg.cc/Y24Swy68/Whats-App-Image-2025-04-11-at-17-26-04.jpg", 
            image2Alt: "Hombre caminando despacio",
            text3: "<br><br><b>EDWARD:</b> Oye, en serio, <span class='highlight'>¿qué mierda fue eso?</span><br><br><b>GABRIEL:</b> No sé… pero no quiero volver a entrar ahí.",
            choices: [
                { text: "Ir directamente a la cafetería", passage: "Ir directamente a la cafetería" },
                { text: "Buscar a un profesor o guardia", passage: "Buscar a un profesor o guardia" }
            ]
        },
        "Buscar a un profesor o guardia": {
            text: "Gabriel busca ayuda.<br><br><b>GABRIEL:</b> Tengo que encontrar a alguien que... (interrumpido)<br><br>Al doblar en un pasillo, se encuentra nuevamente con la mujer de blanco.",
            image: "https://us.123rf.com/450wm/champlifezy/champlifezy1906/champlifezy190600015/125824540-mujer-fantasma-escena-de-terror-pel%C3%ADcula-de-muerte-con-maquillaje-de-halloween-sosteniendo-una-pared.jpg",
            imageAlt: "Mujer fantasma esquina",
            text2: "<br><br><i>Final fatal 3</i>",
            choices: [
                { text: "Volver atrás", passage: "Correr directamente hacia la puerta" }
            ]
        },
        "Ir directamente a la cafetería": {
            text: "Gabriel llega a la cafetería donde Edward lo espera. Se miran con incredulidad y alivio.<br><br><b>EDWARD:</b> ¿Estás bien? ¿Qué demonios pasó ahí dentro?<br><br><b>GABRIEL:</b> No lo sé, pero nunca había sentido tanto miedo.<br><br><i>Final:<br>Gabriel sobrevive, pero queda marcado por la experiencia</i>",
            image: "https://media.tenor.com/nSaixuI-L10AAAAM/fantasma-ghost.gif",
            imageAlt: "Fantasma",
            choices: [
                { text: "Comenzar nuevamente la experiencia", passage: "Noticia" },
                { text: "Ver epílogo opcional", passage: "Epílogo opcional" }
            ]
        },
        "Epílogo opcional": {
            text: "Gabriel y Edward hablan con otros estudiantes. Descubre la historia de la hija no exorcizada del director.",
            image: "https://img.freepik.com/foto-gratis/colegas-leyendo-usando-computadora-portatil-sesion-estudio_23-2149285397.jpg?semt=ais_hybrid&w=740",
            imageAlt: "Estudiantes",
            text2: "<br><br><b>ESTUDIANTE:</b> \"Dicen que la chica de blanco aparece cuando alguien entra solo al salón...\"<br><br>Gabriel tiene una mirada de terror al recordar lo ocurrido.",
            choices: [
                { text: "Comenzar nuevamente la experiencia", passage: "Noticia" }
            ]
        }
    }
};