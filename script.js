//Elements
const thingText = document.getElementById("thingText");
const counter = document.getElementById("counter");
const counterTotal = document.getElementById("counterTotal");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");

const things = [
  {
    title: "La costumbre que tienes de cantar un pedazo de una canción así de la nada.",
    story: "Lo haces casi a diario y eso me encanta, pero recuerdo mucho cuando respondiste a una llamada cantando 'Me enamoré y creo que me fui de paso'."
  },
  {
    title: "La cicatriz que tienes entre tu ojo y tu ceja izquierda.",
    story: "De cierta forma me encanta ver esa cicatriz, me recuerda lo valiente, fuerte, decidido y aventurero que eres." 
  },
  {
    title: "Tus ojos.",
    story: "Aunque dices que tus ojos son pequeños, yo creo que son perfectos y me encanta verlos cada que puedo." 
  },
  {
    title: "Tus cejas.",
    story: "Esas cejas negras y tupidas que tienes me encantan, y mucho más cuando te me quedas viendo y las mueves." 
  },
  {
    title: "Tus labios.",
    story: "Que te puedo decir, esos labios son perfectos para besar y no sabes las ganas que tengo de hacerlo cada que te veo." 
  },
  {
    title: "Tus manos",
    story: "La primera vez que tomaste mi mano en McDonald's me di cuenta que no queria soltarlas nunca más."
  },
  {
    title: "Tus brazos.",
    story: "En cada abrazo me siento segura, protegida y amada. Tus brazos son mi safe place." 
  },
  {
    title: "Cuando dices 'soy el susurrador'.",
    story: "No puedo creer que antes me daba miedo cada vez que lo decias, ahora solo espero el momento para escucharlo." 
  },
  {
    title: "Cuando gritas de la nada.",
    story: "Puede ser por emoción, por sorpresa o por miedo, pero esos gritos me hacen el día." 
  },
  {
    title: "Cuando manejas.",
    story: "Podría pasar horas viendote manejar, me encanta como te concentras y lo mucho que disfrutas hacerlo." 
  },
  {
    title: "Tus ocurrencias.",
    story: "En serio que nunca sé que esperar de ti, pero amo cada una de tus ocurrencias. Aun si es una situación seria, sé que vas a salir con algo y me harás reir." 
  },
  {
    title: "Cuando me ayudarte a cortar el listón para el pastel.",
    story: "Ese día estaba tan estresada y apurada por terminar el pastel, sabía que ya era tarde para irnos, pero con tu ayuda pude tranquilizarme y terminarlo justo a tiempo." 
  },
  {
    title: "Cuando lavaste los trastes (aunque no te guste lavarlos) en mi lugar porque sabías que se nos haría tarde para irnos",
    story: "Ese día fue muy especial en muchas formas, pero al recordar ese momento, me siento tan agradecida de tener a alguien como tú a mi lado." 
  },
  {
    title: "Cuando me llevaste a los Go Karts.",
    story: "Ese día fue uno de los mejores días de mis vacaciones, deseaba tanto ir a ese lugar. Me pude dar cuenta la atención y el cariño que me tienes al planear ese día para mí." 
  },
  {
    title: "Tu atención a los detalles.",
    story: "Me sorprende como recuerdas detalles tan específicos de cosas que te he contado, eso me hace sentir muy especial." 
  },
  {
    title: "Cuando ordenas por mí en un restaurante.",
    story: "Me encanta que tienes ese detalle de pensar en lo que me gustaría comer." 
  },
  {
    title: "Cuando me prestas tu abrigo porque yo olvidé el mío.",
    story: "Siempre estás dispuesto a darme tu abrigo si lo necesito o estás prevenido por si hace frío." 
  },
  {
    title: "Cuando me llamas sin avisar.",
    story: "" 
  },
  {
    title: "Cuando me mandas besitos por llamada.",
    story: "" 
  },
  {
    title: "Cuando nos dimos el primer beso virtual.",
    story: "" 
  },
  {
    title: "Cuando nos besamos por primera vez en el parque.",
    story: "" 
  },
  {
    title: "Cuando cantas en el coche.",
    story: "" 
  },
  {
    title: "El karaoke en el coche.",
    story: "" 
  },
  {
    title: "Cuando haces lo posible por ir a visitarme.",
    story: "" 
  },
  {
    title: "Tu disposición para hacer cualquier plan.",
    story: "" 
  },
  {
    title: "Tu amabilidad.",
    story: "" 
  },
  {
    title: "Lo respetuoso que eres.",
    story: "" 
  },
  {
    title: "Tu caballerosidad.",
    story: "" 
  },
  {
    title: "Poder jugar videojuegos juntos.",
    story: "" 
  },
  {
    title: "Tu risa.",
    story: "" 
  },
  {
    title: "Tu valentía.",
    story: "" 
  },
  {
    title: "Tu inteligencia emocional.",
    story: "" 
  },
  {
    title: "Tu espiritualidad.",
    story: "" 
  },
  {
    title: "El movimiento involuntario de tu ceja izquierda.",
    story: "" 
  },
  {
    title: "Tu bigote.",
    story: "" 
  },
  {
    title: "Tus besos.",
    story: "" 
  },
  {
    title: "Tus abrazos.",
    story: "" 
  },
  {
    title: "Lo trabajador que eres.",
    story: "" 
  },
  {
    title: "Tus stickers de WhatsApp.",
    story: "" 
  },
  {
    title: "Como te llevas con mi familia.",
    story: "" 
  },
  {
    title: "Tu curiosidad.",
    story: "" 
  },
  {
    title: "Tu costumbre de buscar todo en Google y no quedarte con la duda.",
    story: "" 
  },
  {
    title: "Lo segura que me siento a tu lado.",
    story: "" 
  },
  {
    title: "Lo feliz que me haces.",
    story: "" 
  },
  {
    title: "Que tú te acercaste primero.",
    story: "" 
  },
  {
    title: "Cuando me dijiste “te amo mi amor” y luego fingiste no haberlo dicho para que yo no me asustara.",
    story: "" 
  },
  {
    title: "Siempre aceptas hacer todo lo que se me ocurre.",
    story: "" 
  },
  {
    title: "Que podemos ir juntos en la iglesia.",
    story: "" 
  },
  {
    title: "La vez que aceptaste hacer huevos estrellados por mi.",
    story: "" 
  },
  {
    title: "El día que me ayudaste a tejer la silla.",
    story: "" 
  },
  {
    title: "El contacto físico.",
    story: "" 
  },
  {
    title: "Tu paciencia.",
    story: "" 
  },
]

//Estado
let currentIndex = 0;

//funciones

function showThing(index) {
  thingText.textContent = `${things[index].title}`;
  counter.textContent = `Cosa ${index + 1} de ${things.length}`;
  counterTotal.textContent = `${things.length}`;
  updateButtons();
}

showThing(currentIndex);

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === things.length - 1;
}

prevBtn.addEventListener("click", () => {
 if (currentIndex > 0) {
  currentIndex--;
  showThing(currentIndex);
 }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < things.length - 1) {
    currentIndex++;
    showThing(currentIndex);
  } else {
    thingText.textContent = "Eso es todo, pero mi amor por ti nunca terminará.";
    counter.textContent = "";
    nextBtn.disabled = true;
    openModalBtn.disabled = true;
  }
});

openModalBtn.addEventListener("click", () => {
  modalText.textContent = things[currentIndex].story;
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modalOverlay.addEventListener("click", () => {
  modal.classList.add("hidden");
})
