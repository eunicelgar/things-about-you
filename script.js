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
    title: "Tus manos.",
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
    story: "Definitivamente ver tu nombre en mis notificaciones me alegra totalmente el día. Recibir tu llamadas y mensajes siempre será la mejor parte de mi día." 
  },
  {
    title: "Cuando me mandas besitos por llamada.",
    story: "Todos esos besitos que me mandas por llamada me hacen sentir mucho más cerca de ti." 
  },
  {
    title: "Cuando nos dimos el primer beso virtual.",
    story: "Ese día fue una mezcla entre nervios, emoción y felicidad, ese momento vivirá siempre en mi corazón." 
  },
  {
    title: "Cuando nos besamos por primera vez en el parque.",
    story: "Ese beso fue el inicio de una historia hermosa. No esperaba que fuera justo en ese momento, pero fue perfecto tal cual fue." 
  },
  {
    title: "Cuando cantas en el coche.",
    story: "Te sabes tantas canciones y eso me encanta, me divierte mucho escucharte y en una que otra poder unirme a ti." 
  },
  {
    title: "El karaoke en el coche.",
    story: "El primer día que hicimos karaoke en el coche fue muy divertido, estaba muy nerviosa porque no sabía cantar, pero fue una experiencia muy bonita." 
  },
  {
    title: "Cuando haces lo posible por ir a visitarme.",
    story: "Sé que vives lejos y muchas veces es complicado para ti, pero agradezco cada una de las veces que haz ido a visitarme." 
  },
  {
    title: "Tu disposición para hacer cualquier plan.",
    story: "No importa que tan extraño o de úiltimo momento sea el planl, siempre estás dispuesto a hacerlo conmigo y por mi." 
  },
  {
    title: "Tu amabilidad.",
    story: "Desde antes de conocerte me di cuenta de lo amable que eres siempre. Definitivamente es una de las cosas que más admiro y me gusta de ti." 
  },
  {
    title: "Lo respetuoso que eres.",
    story: "Siempre me tratas con respeto, incluso cuando no estás de acuerdo conmigo. Eso me hace sentir muy valorada." 
  },
  {
    title: "Tu caballerosidad.",
    story: "Hoy en día es difícil encontrar a alguien tan caballeroso como tú. Cada uno de tus detalles me hace sentir amada." 
  },
  {
    title: "Poder jugar videojuegos juntos.",
    story: "No esperaba encontrar a un compañero de juego en ti, pero Dios me sorprendió con eso. Me encanta poder compartir esos pasatiempos contigo." 
  },
  {
    title: "Tu risa.",
    story: "Amo esa risa tan contagiosa que tienes." 
  },
  {
    title: "Tu valentía.",
    story: "Realmente eres un hombre valiente, admiro mucho eso de ti." 
  },
  {
    title: "Tu inteligencia emocional.",
    story: "Tienes una gran capacidad para entender y manejar tus emociones, piensas todo tan detenida y maduramente. He aprendido mucho de ti." 
  },
  {
    title: "Tu espiritualidad.",
    story: "Esto definitivamente es algo que le había pedido tanto a Dios en una pareja y en ti lo encontré. Disfruto mucho poder compartir contigo aspectos espirituales y juntos poder crecer en esa área." 
  },
  {
    title: "El movimiento involuntario de tu ceja izquierda.",
    story: "Seré breve, AMO ese movimiento." 
  },
  {
    title: "Tu bigote.",
    story: "A veces pica, pero eso no quiere decir que no me guste. Es algo tan distintivo de ti que extraño verlo cuando te lo quitas." 
  },
  {
    title: "Tus besos.",
    story: "Tus besos... tus besos son lo mejor del mundo." 
  },
  {
    title: "Tus abrazos.",
    story: "Esos abrazos tuyos me hacen sentir en casa, es una paz y traquilidad que no puedo explicar en palabras." 
  },
  {
    title: "Lo trabajador que eres.",
    story: "Estoy tan orgullosa de ti por tanto esfuerzo y empeño que le pones a todo lo que haces. Admiro toda esa entrega y ganas de le pones a lo que haces, sea lo que sea." 
  },
  {
    title: "Tus stickers de WhatsApp.",
    story: "Las conversaciones contigo son mucho más divertidas gracias a tus stickers." 
  },
  {
    title: "Como te llevas con mi familia.",
    story: "Me hace muy faliz saber que te llevas tan bien con ellos, desde mis padres hasta mis sobrinos. Veo que interacturas con ellos de una forma tan natural que me hace amarte cada día más." 
  },
  {
    title: "Tu curiosidad.",
    story: "La curiosidad que hay en ti por aprender de todo me encanta." 
  },
  {
    title: "Tu costumbre de buscar todo en Google y no quedarte con la duda.",
    story: "Soy una persona que siempre hace eso, y me encanta que tú también lo hagas." 
  },
  {
    title: "Lo segura que me siento a tu lado.",
    story: "Que te puedo decir, eres mi lugar seguro." 
  },
  {
    title: "Lo feliz que me haces.",
    story: "He sido tan feliz a tu lado, no lo puedo negar." 
  },
  {
    title: "Que tú te acercaste primero.",
    story: "Te vi y dije 'lo veo y lo quiero', pero nunca me animé a acercarme. Agradezco que tu te hayas acercado primero." 
  },
  {
    title: "Cuando me dijiste 'te amo, mi amor' y luego fingiste no haberlo dicho para que yo no me asustara.",
    story: "Nunca olvidaré ese momento, espero que vengan muchos más entre nosotros." 
  },
  {
    title: "Siempre aceptas hacer todo lo que se me ocurre.",
    story: "Eres tan comprensivo y siempre estás dispuesto, nunca cambies." 
  },
  {
    title: "Que podemos ir juntos en la iglesia.",
    story: "Otra cosa que le había pedido a Dios y que en ti encontré. Me encanta poder compartir mi fe contigo." 
  },
  {
    title: "La vez que aceptaste hacer huevos estrellados por mi.",
    story: "Tu primera vez en mi casa y sin pensarlo lo aceptaste. Te quedaron deliciosos. Hagamoslo ptra vez." 
  },
  {
    title: "El día que me ayudaste a tejer la silla.",
    story: "A esto me refiero cuando digo que aceptas hacer todo lo que se me ocurre. Fue un buen día." 
  },
  {
    title: "El contacto físico.",
    story: "Estará demás mencionar esto? Desde tomarnos de la mano, abrazarnos, besarnos o simplemente rozarnos, me encanta cada forma de contacto físico contigo." 
  },
  {
    title: "Tu paciencia.",
    story: "Gracias por ser tan paciente conmigo, TE AMO." 
  },
  {
    title: "Seguramente me faltan muchas cosas por decirte,",
    story: "pero mi amor por ti nunca terminará." 
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
