// ===============================
// Elementos principales
// ===============================

const boton = document.getElementById("startButton");

const hero = document.getElementById("hero");

const universe = document.getElementById("universe");

const starsContainer = document.getElementById("stars");

const loveMusic = document.getElementById("loveMusic");

const photos = document.querySelector(".photos");

// ===============================
// Control de fotos vistas
// ===============================

let fotosVistas = new Set();

const videoSection = document.getElementById("videoSection");
const loveVideo = document.getElementById("loveVideo");
const finalHeart = document.getElementById("finalHeart");

const endHeart = document.getElementById("endHeart");

const finalMessage = document.getElementById("finalMessage");

const daysTogether = document.getElementById("daysTogether");

// ===============================
// Crear estrellas
// ===============================

function crearEstrellas(){

    // Evita duplicarlas
    if(starsContainer.children.length > 0){
        return;
    }


    for(let i = 0; i < 150; i++){

        const star = document.createElement("div");

        star.classList.add("star");


        // Posición aleatoria

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";


        // Tamaño aleatorio

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";

        star.style.height = size + "px";


        // Velocidad diferente de brillo

        star.style.animationDelay = Math.random() * 3 + "s";


        starsContainer.appendChild(star);

    }

}



// ===============================
// Abrir regalo
// ===============================

boton.addEventListener("click", () => {
loveMusic.volume = 0.3;

loveMusic.play();

    // Ocultar portada

    hero.classList.add("fade-out");


    setTimeout(() => {


        hero.style.display = "none";


        // Mostrar universo

        universe.classList.remove("hidden");


        universe.classList.add("fade-in");


        // Crear estrellas

        crearEstrellas();


    },1000);


});

// ===============================
// Carta del corazón
// ===============================

const loveHeart = document.getElementById("loveHeart");

const letter = document.querySelector(".love-letter");


loveHeart.addEventListener("click",()=>{

    console.log("Corazón presionado ❤️");

    letter.classList.remove("hidden");

    setTimeout(()=>{

        letter.classList.add("show");

    },100);


    // Mostrar fotos después de la carta

    setTimeout(()=>{

        photos.classList.remove("hidden");

        photos.classList.add("show");

    },3000);


});

// ===============================
// Visor de recuerdos
// ===============================

const polaroids = document.querySelectorAll(".polaroid");

const photoViewer = document.getElementById("photoViewer");
const viewerImg = document.getElementById("viewerImg");
const viewerTitle = document.getElementById("viewerTitle");
const viewerText = document.getElementById("viewerText");
const closeViewer = document.getElementById("closeViewer");


const memories = {

    1:{

        image:"foto1.jpg",

        title:"Eres mi vida entera❤️",

        text:"No llegaste para ocupar un lugar en mi corazón; llegaste para convertirte en el corazón de mi vida. Eres el sol que ilumina mis días, la calma de mis noches y el motivo por el que cada sueño tiene sentido. Si mi vida fuera un universo, tú serías cada estrella que lo hace brillar. Porque tú no eres una parte de mi historia... eres mi vida entera. ❤️."

    },

    2:{

        image:"foto3.jpg",

        title:"Mi lugar favorito es a tu✨",

        text:"He descubierto que mi lugar favorito no está en un sitio del mundo, sino junto a ti. A tu lado cualquier momento se vuelve especial, cualquier camino se siente más bonito y cualquier día tiene un motivo para sonreír. Eres mi refugio, mi paz y ese pequeño rincón donde mi corazón siempre quiere quedarse. Porque entre todos los lugares que existen, no hay ninguno donde quiera estar más que contigo. ❤️"

    },

    3:{

        image:"foto5.jpg",

        title:" Tus abrazos, mi hogar 🌸",

        text:"No sabía que un abrazo podía sentirse como hogar hasta que encontré el tuyo. Contigo descubrí un lugar donde mi corazón puede descansar, donde las sonrisas nacen sin esfuerzo y donde los momentos simples se vuelven recuerdos eternos. Eres esa paz que no sabía que buscaba y la persona con quien quiero seguir construyendo mi historia. Porque mi hogar no es un lugar... es donde estás tú. ❤️"

    }

};


polaroids.forEach(polaroid=>{

    polaroid.addEventListener("click",()=>{

        const id = polaroid.dataset.photo;

                // Guardar foto como vista
        fotosVistas.add(id);

        viewerImg.src = memories[id].image;

        viewerTitle.textContent = memories[id].title;

        viewerText.textContent = memories[id].text;

        photoViewer.classList.remove("hidden");

    });

});


closeViewer.addEventListener("click",()=>{

    photoViewer.classList.add("hidden");


    // Verificar si ya vio las 3 fotos
    if(fotosVistas.size === 3){

        setTimeout(()=>{


            // Ocultar carta
            letter.classList.remove("show");


            // Animación de salida de fotos
photos.classList.add("fade-out");


            setTimeout(()=>{


                photos.classList.add("hidden");


                // Mostrar video
                videoSection.classList.remove("hidden");


                // Pausar música de fondo
                loveMusic.pause();


                // Reiniciar video
                loveVideo.currentTime = 0;


                // Reproducir video con su audio
                loveVideo.play();

                // Cuando termine el video mostrar corazón final

loveVideo.addEventListener("ended", () => {

    // Ir automáticamente a la página final
    window.location.href = "final.html";

});

            },800);


        },500);

    }

});


// ===============================
// Contador de amor
// ===============================

function calcularDias(){


    const inicio = new Date("2026-02-20");


    const hoy = new Date();


    const diferencia = hoy - inicio;


    const dias = Math.floor(
        diferencia / 
        (1000 * 60 * 60 * 24)
    );


    daysTogether.textContent =
    dias + " días juntos ❤️";


}

// ===============================
// Corazón final
// ===============================

endHeart.addEventListener("click", () => {

    // Ocultar corazón
    finalHeart.classList.add("hidden");

    // Mostrar pantalla final
    finalMessage.classList.remove("hidden");
    finalMessage.classList.add("fade-in");

    calcularDias();
    crearPetalosFinales();

});